import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { useEffect, useRef, useState } from 'react'
import type { UIMessage } from 'ai'

const SUGGESTED = [
  '¿Cuánto cuesta una feature?',
  '¿Esto que necesito es una feature?',
  '¿Cuánto tiempo tarda la entrega?',
]

const WELCOME: UIMessage = {
  id: 'welcome',
  role: 'assistant',
  parts: [
    {
      type: 'text',
      text: '¡Hola! Soy el asistente de Beco 360. ¿En qué te puedo ayudar? Puedo responder sobre precios, qué es una feature, o cómo funciona el servicio.',
    },
  ],
}

function getMessageText(msg: UIMessage): string {
  return msg.parts
    .filter((p) => p.type === 'text')
    .map((p) => (p as { type: 'text'; text: string }).text)
    .join('')
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
    messages: [WELCOME],
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  const handleSend = () => {
    const text = input.trim()
    if (!text || isLoading) return
    setInput('')
    sendMessage({ text })
  }

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar chat' : 'Abrir chat de Beco'}
        aria-expanded={open}
        className="chat-fab fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{ background: 'var(--color-copper)' }}
      >
        <span
          className="transition-all duration-200"
          style={{ display: open ? 'none' : 'block' }}
          aria-hidden="true"
        >
          {/* Chat bubble icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </span>
        <span
          className="transition-all duration-200"
          style={{ display: open ? 'block' : 'none' }}
          aria-hidden="true"
        >
          {/* X icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </span>
      </button>

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat con Beco 360"
          className="chat-panel fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden rounded-2xl shadow-2xl"
          style={{
            width: 'min(380px, calc(100vw - 3rem))',
            height: 'min(520px, calc(100vh - 8rem))',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-surface-3)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 shrink-0"
            style={{ borderBottom: '1px solid var(--color-surface-3)', background: 'var(--color-surface-2)' }}
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold shrink-0"
              style={{ background: 'var(--color-copper)', color: 'var(--color-surface)' }}
            >
              B
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text-1)' }}>Beco 360</p>
              <p className="text-xs" style={{ color: 'var(--color-text-3)' }}>Responde en segundos</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: 'var(--color-status-active)' }} aria-hidden="true" />
              <span className="text-xs" style={{ color: 'var(--color-text-3)' }}>En línea</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                  style={
                    m.role === 'user'
                      ? { background: 'var(--color-copper)', color: 'var(--color-surface)' }
                      : { background: 'var(--color-surface-2)', color: 'var(--color-text-2)', border: '1px solid var(--color-surface-3)' }
                  }
                >
                  {getMessageText(m)}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div
                  className="flex items-center gap-1 rounded-2xl px-4 py-3"
                  style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-surface-3)' }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="typing-dot h-1.5 w-1.5 rounded-full"
                      style={{ background: 'var(--color-text-3)', animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Suggested questions — only on welcome state */}
          {messages.length === 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2 shrink-0">
              {SUGGESTED.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => {
                    sendMessage({ text: q })
                  }}
                  className="rounded-full border px-3 py-1 text-xs transition-colors duration-150"
                  style={{
                    borderColor: 'var(--color-surface-3)',
                    color: 'var(--color-text-2)',
                    background: 'transparent',
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend() }}
            className="flex items-center gap-2 px-3 py-3 shrink-0"
            style={{ borderTop: '1px solid var(--color-surface-3)', background: 'var(--color-surface-2)' }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }}
              placeholder="Escribí tu pregunta..."
              disabled={isLoading}
              className="flex-1 rounded-xl px-4 py-2.5 text-sm outline-none transition-colors duration-150"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-surface-3)',
                color: 'var(--color-text-1)',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--color-copper)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--color-surface-3)'
              }}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Enviar mensaje"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-150 disabled:opacity-40"
              style={{ background: 'var(--color-copper)', color: 'var(--color-surface)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      )}

      <style>{`
        .chat-fab:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 24px color-mix(in srgb, var(--color-copper) 40%, transparent);
        }
        .chat-fab:active {
          transform: scale(0.96);
        }
        .typing-dot {
          animation: typing-bounce 1s ease-in-out infinite;
        }
        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .typing-dot { animation: none; opacity: 0.6; }
        }
      `}</style>
    </>
  )
}
