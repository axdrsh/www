import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Page() {
  return (
    <main className="max-w-xl mx-auto px-4 py-12 space-y-4 font-mono">
      <Image
        src="/nagi.jpeg"
        alt="Profile picture"
        width={64}
        height={64}
        className="rounded-sm"
        priority
      />

      <h1 className="text-xl">adarsh.</h1>

      <p>
        hi, i'm a 1st year college student. i like building stuff and my
        interests mainly revolve around backend development, ai/machine learning, open source, robotics and defense tech.
        <br />
        <a
          href="https://x.com/axdrsh"
          className="underline hover:text-gray-300 inline-flex items-center"
        >
          x
          <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>{" "}
        <a
          href="https://github.com/axdrsh"
          className="underline hover:text-gray-300 inline-flex items-center"
        >
          github
          <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>{" "}
        <a
          href="/blog"
          className="underline hover:text-gray-300 inline-flex items-center"
        >
          blog
          <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>
      </p>
    </main>
  );
}
