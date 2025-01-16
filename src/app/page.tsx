import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold">adarsh.</h1>
      <span className="font-medium">(18M, he/him)</span>

      <section>
        {/* <h2 className="text-2xl font-semibold mb-4">about</h2> */}
        <div className="space-y-2">
          <p>
            i'm a first-year college student who likes building stuff with code
            and technology. i build things that are actually useful, whether
            it’s websites, small apps, or just messing around with stuff for
            fun. minimalist, both in design and life.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">stuff</h2>
        <div className="space-y-2">
          <p>
            <span className="font-medium">working on:</span>{" "}
            <Link
              href="https://github.com/floww"
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
              href="https://www.github.com/axdrsh"
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
              href="https://discord.com/users/1160444718421913701"
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
        <p>
          dm me on X or write me an{" "}
          <Link
            href="mailto:axdrsh@gmail.com"
            className="underline inline-flex items-center hover:text-primary"
          >
            email
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
