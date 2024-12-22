import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold">adarsh.</h1>
      <span className="font-medium">(18M, he/him)</span>

      <section>
        <h2 className="text-2xl font-semibold mb-4">about</h2>
        <div className="space-y-2">
          <p>
            I'm a first-year college student who likes building things with code
            and technology. minimalist, both in design and life, seeking
            simplicity in a complex world.
          </p>
          {/* <p>1st year college student.</p>
          <p>
            <span className="font-medium">interested in:</span> cybersecurity,
            building things with code.
          </p> */}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">stuff</h2>
        <div className="space-y-2">
          <p>
            <span className="font-medium">working on:</span>{" "}
            <Link
              href="https://x.com/axdrsh"
              className="underline inline-flex items-center hover:text-primary"
            >
              floww
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </p>
          <p>
            <Link
              href="https://x.com/axdrsh"
              className="underline inline-flex items-center hover:text-primary"
            >
              X
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </p>
          <p>
            <Link
              href="https://wwww.github.com/axdrsh"
              className="underline inline-flex items-center hover:text-primary"
            >
              github (checkout my projects.)
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </p>
          <p>
            <Link
              href="#"
              className="underline inline-flex items-center hover:text-primary"
            >
              blog.
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </p>
          <p>
            <Link
              href="https://discord.com/user/1160444718421913701"
              className="underline inline-flex items-center hover:text-primary"
            >
              discord
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </p>
          <p>
            <Link
              href="#"
              className="underline inline-flex items-center hover:text-primary"
            >
              resume
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">contact</h2>
        <Link
          href="mailto:axdrsh@gmail.com"
          className="underline inline-flex items-center hover:text-primary"
        >
          axdrsh@gmail.com
          <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
