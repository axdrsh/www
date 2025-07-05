import Link from "next/link";

export default function BlogPost() {
  return (
    <main className="max-w-xl mx-auto px-4 py-12 space-y-6 font-mono">
      <div className="space-y-4">
        <Link href="/blog" className="underline hover:text-gray-300">
          ← back to blog
        </Link>
        <div className="space-y-2">
          <h1 className="text-xl">my first blog</h1>
          <time className="text-sm opacity-70">january 20, 2024</time>
        </div>
      </div>

      <article className="space-y-4 text-sm leading-relaxed">
        <p>
          hello world, this is my first blog post.
        </p>

        <p>
          i'm still figuring out what i want to write about here. probably 
          a mix of technical stuff, thoughts on projects i'm working on, 
          and random observations.
        </p>

        <p>
          for now, this is just a test to make sure everything works.
        </p>

        <p>
          more to come soon.
        </p>
      </article>
    </main>
  );
} 