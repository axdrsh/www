import Link from "next/link";

export default function BlogPost() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Link href="/devlog" className="underline hover:opacity-70">
          ← back to devlog
        </Link>
        <div className="space-y-1">
          <h1 className="text-xl">reverse pomodoro: a new way to work</h1>
          <time className="text-sm opacity-70">july 10, 2025</time>
        </div>
      </div>

      <article className="space-y-4 leading-relaxed">
        <p>
          most productivity methods, like the pomodoro technique, split your
          work into fixed time blocks: 25 minutes on, 5 minutes off. sounds good
          in theory, but in practice? it becomes a timer-watching game. it's
          rigid, easy to cheat, and kind of annoying when you're in flow.
        </p>

        <p>
          so i flipped it. i call it <strong>reverse pomodoro</strong>.
        </p>

        <p>
          instead of blocking time, you track it. just start a stopwatch when
          you're actually working. pause when you stop. that's it. every minute
          gets counted. no fake focus. no waiting for a bell.
        </p>

        <p>
          the goal? <em>momentum</em>. watching your real work time stack up
          hits different. it's not about ending a session, it's about building
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

        <div className="p-4 border border-gray-700 rounded">
          <p className="opacity-90 mb-2">try it yourself</p>
          <p>
            i even built a little app just for this. dead simple, zero clutter,
            just a clean interface that tracks your real work time across
            different projects. check it out here:{" "}
            <a
              href="https://worklog.axdrsh.xyz"
              className="underline hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              worklog.axdrsh.xyz
            </a>
          </p>
        </div>

        <p className="text-center opacity-80">
          that was the post. thanks for reading! 😊
        </p>
      </article>
    </div>
  );
}
