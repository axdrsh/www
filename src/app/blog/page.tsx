import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "my-first-blog",
    title: "my first blog",
    date: "2024-01-20",
    description: "hello world, this is my first blog post"
  }
];

export default function Blog() {
  return (
    <main className="max-w-xl mx-auto px-4 py-12 space-y-8 font-mono">
      <div className="space-y-4">
        <Link href="/" className="underline hover:text-gray-300">
          ← back
        </Link>
        <h1 className="text-xl">blog.</h1>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="space-y-2">
            <div className="flex flex-col gap-1">
              <Link 
                href={`/blog/${post.slug}`}
                className="underline hover:text-gray-300"
              >
                {post.title}
              </Link>
              <time className="text-sm opacity-70">{post.date}</time>
            </div>
            <p className="text-sm opacity-80">
              {post.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
} 