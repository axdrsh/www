import Link from "next/link";

export default function BlogPost() {
  return (
    <main className="max-w-xl mx-auto px-4 py-12 space-y-6 font-mono">
      <div className="space-y-4">
        <Link href="/blog" className="underline hover:text-gray-300">
          ← back to blog
        </Link>
        <div className="space-y-2">
          <h1 className="text-xl">reverse pomodoro: a new way to work</h1>
          <time className="text-sm opacity-70">july 10, 2025</time>
        </div>
      </div>

      <article className="space-y-4 text-sm leading-relaxed">
        <p>
          most productivity methods, like pomodoro, split your work into fixed
          time blocks; 25 minutes on, 5 minutes off. sounds good in theory, but
          in practice? it becomes a timer-watching game. it’s rigid, easy to
          cheat, and kinda annoying when you’re in flow.
        </p>

        <p>so i flipped it. i call it reverse pomodoro.</p>

        <p>
          instead of blocking time, you track it. just start a stopwatch when
          you're actually working. pause when you stop. that’s it. every minute
          gets counted. no fake focus. no waiting for a bell.
        </p>

        <p>
          the goal? momentum. watching your real work time stack up hits
          different. it’s not about ending a session, it’s about building
          momentum.
        </p>

        <p>
          you take breaks when you need to. go long if you're in flow. no guilt.
          no interruptions. no blocks. just raw time and effort, building up.
        </p>

        <p>
          reverse pomodoro isn't about working harder - it's about seeing your
          focus clearly. and once you see it, you want to keep going.
        </p>

        <p>
          i even built a little app just for this. dead simple, zero clutter,
          just a clean interface that tracks your real work time across
          different projects. check it out here:{" "}
          <a href="axdrsh/xyz" className="underline hover:text-gray-300">
            worklog.axdrsh.xyz
          </a>
        </p>

        <p>that was the post. thanks for reading ^_^</p>
      </article>
    </main>
  );
}
