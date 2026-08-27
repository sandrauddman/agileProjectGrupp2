'use client';

import { useEffect } from 'react';
import Link from 'next/link';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ascii = `
  ███████╗██████╗ ██████╗
  ██╔════╝██╔══██╗██╔══██╗
  █████╗  ██████╔╝██████╔╝
  ██╔══╝  ██╔══██╗██╔══██╗
  ███████╗██║  ██║██║  ██║
  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
`.trim();

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="flex w-full max-w-2xl flex-col items-center text-center">
        <pre className="overflow-x-auto font-mono text-[10px] leading-tight text-rose-400 sm:text-sm md:text-base">
          {ascii}
        </pre>

        <p className="mt-6 font-mono text-xs tracking-[0.35em] text-zinc-500">UNEXPECTED FAULT</p>
        <p className="mt-3 max-w-md font-mono text-sm text-zinc-400">
          {'> '}inventory crashed while loading this page. retry or abort.
        </p>

        {error.digest ? (
          <p className="mt-4 font-mono text-xs text-zinc-600">digest: {error.digest}</p>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded border border-rose-500/60 bg-rose-600/20 px-5 py-2 font-mono text-sm text-rose-200 hover:bg-rose-600 hover:text-white"
          >
            [ retry ]
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded border border-zinc-600 px-5 py-2 font-mono text-sm text-zinc-300 hover:border-zinc-400 hover:text-white"
          >
            [ cd / ]
          </Link>
        </div>
      </div>
    </main>
  );
}
