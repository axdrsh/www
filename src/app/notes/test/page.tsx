import Link from "next/link";

export default function Productivity() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Link href="/notes" className="underline hover:opacity-70">
          ← back to notes
        </Link>
        <h1 className="text-xl">test</h1>
        <time className="text-sm opacity-70">january 2025</time>
      </div>

      <article className="space-y-4 leading-relaxed">
        <p>this is a test note.</p>
      </article>
    </div>
  );
}
