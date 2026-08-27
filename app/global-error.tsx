'use client';

import { useEffect } from 'react';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ascii = `
  ██╗  ██╗ █████╗ ██╗  ████████╗
  ██║  ██║██╔══██╗██║  ╚══██╔══╝
  ███████║███████║██║     ██║
  ██╔══██║██╔══██║██║     ██║
  ██║  ██║██║  ██║███████╗██║
  ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝
`.trim();

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 font-mono antialiased">
        <main className="flex min-h-screen items-center justify-center px-4">
          <div className="flex w-full max-w-2xl flex-col items-center text-center">
            <pre className="overflow-x-auto text-[10px] leading-tight text-amber-400 sm:text-sm md:text-base">
              {ascii}
            </pre>

            <p className="mt-6 text-xs tracking-[0.35em] text-zinc-500">CRITICAL STOP</p>
            <p className="mt-3 max-w-md text-sm text-zinc-400">
              {'> '}root layout failed. the process cannot continue until you retry.
            </p>

            {error.digest ? (
              <p className="mt-4 text-xs text-zinc-600">digest: {error.digest}</p>
            ) : null}

            <button
              type="button"
              onClick={reset}
              className="mt-8 inline-flex items-center justify-center rounded border border-amber-500/60 bg-amber-600/20 px-5 py-2 text-sm text-amber-200 hover:bg-amber-600 hover:text-black"
            >
              [ retry ]
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
