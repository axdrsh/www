import Link from "next/link";

export default function Notes() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Link href="/" className="underline hover:opacity-70">
          ← back
        </Link>
        <h1 className="text-xl">notes.</h1>
        <p className="max-w-xl opacity-80">
          quick thoughts and technical notes. mostly for myself.
        </p>
      </div>

      <div className="space-y-4">
        <section className="space-y-2">
          <h2 className="text-lg">notes</h2>
          <div className="space-y-2">
            <div>
              <h3>
                <Link href="/notes/test" className="underline hover:opacity-70">
                  test note
                </Link>
              </h3>
              <p className="text-sm opacity-70">just a test note.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
