import Link from 'next/link';

const ascii = `
  ██╗  ██╗ ██████╗ ██╗  ██╗
  ██║  ██║██╔═══██╗██║  ██║
  ███████║██║   ██║███████║
  ╚════██║██║   ██║╚════██║
       ██║╚██████╔╝     ██║
       ╚═╝ ╚═════╝      ╚═╝
`.trim();

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="flex w-full max-w-2xl flex-col items-center text-center">
        <pre className="overflow-x-auto font-mono text-[10px] leading-tight text-indigo-400 sm:text-sm md:text-base">
          {ascii}
        </pre>

        <p className="mt-6 font-mono text-xs tracking-[0.35em] text-zinc-500">PAGE NOT FOUND</p>
        <p className="mt-3 max-w-md font-mono text-sm text-zinc-400">
          {'> '}the route you requested does not exist in this inventory.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded border border-indigo-500/60 bg-indigo-600/20 px-5 py-2 font-mono text-sm text-indigo-200 hover:bg-indigo-600 hover:text-white"
        >
          [ cd / ]
        </Link>
      </div>
    </main>
  );
}
