import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';

// The heavy panel (React + @ai-sdk/react + ai) loads only when the chat is first
// opened, keeping it out of the initial bundle that hydrates on every page.
const ChatPanel = lazy(() => import('./ChatPanel'));

function ChatLoading() {
  return (
    <div
      className="chat-panel fixed bottom-24 right-6 z-50 flex items-center justify-center rounded-2xl shadow-2xl"
      style={{
        width: 'min(380px, calc(100vw - 3rem))',
        height: 'min(520px, calc(100vh - 8rem))',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-surface-3)',
      }}
      aria-hidden="true"
    >
      <span style={{ color: 'var(--color-text-3)', fontSize: '0.875rem' }}>Cargando…</span>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const fabRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  const handleClose = useCallback(() => setOpen(false), []);

  // Return focus to the launcher when the panel closes
  useEffect(() => {
    if (wasOpen.current && !open) fabRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  return (
    <>
      {/* Floating button */}
      <button
        ref={fabRef}
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
        <span
          className="transition-all duration-200"
          style={{ display: open ? 'block' : 'none' }}
          aria-hidden="true"
        >
          {/* X icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      </button>

      {/* Chat panel — lazy, mounts only when opened */}
      {open && (
        <Suspense fallback={<ChatLoading />}>
          <ChatPanel onClose={handleClose} />
        </Suspense>
      )}

      <style>{`
        .chat-fab:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 24px color-mix(in srgb, var(--color-copper) 40%, transparent);
        }
        .chat-fab:active {
          transform: scale(0.96);
        }
      `}</style>
    </>
  );
}
