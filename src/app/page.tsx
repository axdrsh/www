import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div id="top" className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-xl">adarsh.</h1>

        <div className="space-y-2 max-w-xl">
          <p>2nd year undergrad. i like to build.</p>

          <p>
            generalist. interested in backend, systems, ml engineering and infra. i mainly work at the intersection of software and ml.
          </p>

          <p>this is my corner of the internet.</p>

          <p>i'm also like minimalism, cinema and hiphop.</p>

          <p>
            check out my{" "}
            <Link href="/devlog" className="underline">
              devlog
            </Link>{" "}
            {"for my thoughts, notes or ideas. :)"}
          </p>
        </div>
      </div>

      <div className="space-y-2 text-center">
        <Image
          src="/lights.jpg"
          alt="lights photo"
          width={800}
          height={400}
          className="w-full h-auto rounded"
          priority
        />
        <p className="text-xs opacity-70">i wanna visit japan someday.</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg">contact</h2>
        <div className="flex items-center space-x-3 text-sm">
          <a
            href="https://x.com/axdrsh"
            className="underline hover:opacity-70"
            target="_blank"
            rel="noopener noreferrer"
          >
            x
          </a>
          <a
            href="https://github.com/axdrsh"
            className="underline hover:opacity-70"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            href="mailto:adarsh@adarsh.dev"
            className="underline hover:opacity-70"
          >
            email
          </a>
        </div>
      </div>
    </div>
  );
}
