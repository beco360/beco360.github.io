import { useChat } from '@ai-sdk/react';
import type { UIMessage } from 'ai';
import { DefaultChatTransport } from 'ai';
import { useEffect, useRef, useState } from 'react';

const SUGGESTED = [
  '¿Qué es el diagnóstico?',
  '¿Cuánto cuesta trabajar con Beco?',
  '¿Cómo funciona el modelo?',
];

const WELCOME: UIMessage = {
  id: 'welcome',
  role: 'assistant',
  parts: [
    {
      type: 'text',
      text: '¡Hola! Soy el asistente de Beco 360. ¿En qué te puedo ayudar? Puedo contarte cómo funciona el diagnóstico, los precios, o cómo trabajamos contigo.',
    },
  ],
};

function getMessageText(msg: UIMessage): string {
  return msg.parts
    .filter((p) => p.type === 'text')
    .map((p) => (p as { type: 'text'; text: string }).text)
    .join('');
}

const CAL_URL = 'https://cal.com/beco360/llamada-inicial';

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const boldRegex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null = boldRegex.exec(text);
  while (match !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    nodes.push(<strong key={match.index}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
    match = boldRegex.exec(text);
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function renderMessageContent(text: string) {
  const parts = text.split(CAL_URL);
  return (
    <>
      {renderInline(parts[0])}
      {parts.length > 1 && (
        <button
          type="button"
          data-cal-link="beco360/llamada-inicial"
          data-cal-config='{"layout":"month_view"}'
          className="mt-2 block w-full rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-150 active:scale-[0.97]"
          style={{ background: 'var(--color-copper)', color: 'var(--color-surface)' }}
        >
          Agendar llamada gratis →
        </button>
      )}
      {parts.length > 1 && renderInline(parts[1])}
    </>
  );
}

export default function ChatPanel({ onClose }: { onClose: () => void }) {
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
    messages: [WELCOME],
  });

  const isLoading = status === 'streaming' || status === 'submitted';

  const handleSend = () => {
    const text = input.trim();
    if (!text || isLoading) return;
    setInput('');
    sendMessage({ text });
  };

  // Scroll to bottom on new message.
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — re-run on every messages change, including streamed token updates, not just when the count changes.
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus the input when the panel mounts (it only mounts when opened)
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Focus trap + Escape to close (mirrors the Nav drawer pattern)
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const selector =
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panel) return;
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(selector));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    panel.addEventListener('keydown', onKeyDown);
    return () => panel.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
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
        style={{
          borderBottom: '1px solid var(--color-surface-3)',
          background: 'var(--color-surface-2)',
        }}
      >
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold shrink-0"
          style={{ background: 'var(--color-copper)', color: 'var(--color-surface)' }}
          aria-hidden="true"
        >
          B
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text-1)' }}>
            Beco 360
          </p>
          <p className="text-xs" style={{ color: 'var(--color-text-2)' }}>
            Responde en segundos
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: 'var(--color-status-active)' }}
            aria-hidden="true"
          />
          <span className="text-xs" style={{ color: 'var(--color-text-2)' }}>
            En línea
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar chat"
          className="ml-1 flex h-7 w-7 items-center justify-center rounded-md transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1"
          style={{ color: 'var(--color-text-2)' }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Messages — live region so screen readers hear streamed replies */}
      <div
        role="log"
        aria-live="polite"
        aria-atomic="false"
        aria-label="Conversación"
        className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
      >
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
              style={
                m.role === 'user'
                  ? { background: 'var(--color-copper)', color: 'var(--color-surface)' }
                  : {
                      background: 'var(--color-surface-2)',
                      color: 'var(--color-text-2)',
                      border: '1px solid var(--color-surface-3)',
                    }
              }
            >
              {m.role === 'assistant' ? renderMessageContent(getMessageText(m)) : getMessageText(m)}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div
              className="flex items-center gap-1 rounded-2xl px-4 py-3"
              style={{
                background: 'var(--color-surface-2)',
                border: '1px solid var(--color-surface-3)',
              }}
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
                sendMessage({ text: q });
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
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center gap-2 px-3 py-3 shrink-0"
        style={{
          borderTop: '1px solid var(--color-surface-3)',
          background: 'var(--color-surface-2)',
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          aria-label="Escribe tu pregunta"
          placeholder="Escribí tu pregunta..."
          disabled={isLoading}
          className="flex-1 rounded-xl px-4 py-2.5 text-sm outline-none transition-colors duration-150"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-surface-3)',
            color: 'var(--color-text-1)',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'var(--color-copper)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--color-surface-3)';
          }}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          aria-label="Enviar mensaje"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-150 disabled:opacity-40"
          style={{ background: 'var(--color-copper)', color: 'var(--color-surface)' }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>

      <style>{`
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
    </div>
  );
}
