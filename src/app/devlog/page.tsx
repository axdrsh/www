import Link from "next/link";

interface DevlogEntry {
  slug: string;
  title: string;
  date: string;
  type: "post" | "reflection";
  description: string;
}

const devlogEntries: DevlogEntry[] = [
  {
    slug: "reverse-pomodoro",
    title: "reverse pomodoro",
    date: "july 10, 2025",
    type: "post",
    description: "a new productivity technique i've been experimenting with.",
  },
];

export default function Devlog() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Link href="/" className="underline hover:opacity-70">
          ← back
        </Link>
        <h1 className="text-xl">devlog.</h1>
        <p className="max-w-xl opacity-80">
          posts, thoughts, and learning reflections. mostly about building
          stuff.
        </p>
      </div>

      <div className="space-y-6">
        {devlogEntries.map((entry) => (
          <article key={entry.slug} className="space-y-2">
            <div className="space-y-1">
              <h2>
                <Link
                  href={
                    entry.type === "post"
                      ? `/blog/${entry.slug}`
                      : `/devlog/${entry.slug}`
                  }
                  className="underline hover:opacity-70"
                >
                  {entry.title}
                </Link>
              </h2>
              <div className="flex items-center gap-2 text-sm opacity-70">
                <time>{entry.date}</time>
                <span>•</span>
                <span>{entry.type}</span>
              </div>
            </div>
            <p className="text-sm opacity-80">{entry.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
