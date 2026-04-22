export default function HiveWebsite() {
  const nav = ["About", "What We Do", "Membership", "Leadership", "Contact"];

  const pillars = [
    {
      title: "Startup Evaluation",
      text: "Members learn how to assess early-stage companies through market sizing, business model analysis, competitive positioning, founder quality, and growth potential.",
    },
    {
      title: "Investment Thinking",
      text: "HIVE develops a disciplined venture mindset through research, investment memos, and discussion around what makes a company truly investable.",
    },
    {
      title: "Community",
      text: "We bring together Virginia Tech students interested in venture capital, entrepreneurship, startups, and private market investing.",
    },
  ];

  const sections = [
    {
      heading: "Weekly Meetings",
      body: "Each week, members break down startups, industry themes, and venture frameworks in a professional, collaborative setting.",
    },
    {
      heading: "Investment Memos",
      body: "Members build structured investment theses on emerging companies and present their views with clarity, discipline, and conviction.",
    },
    {
      heading: "Founder and Alumni Network",
      body: "HIVE aims to connect students with founders, investors, operators, and alumni working across venture and private markets.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <div className="font-serif text-3xl tracking-[0.35em]">HIVE</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.45em] text-white/65">
              Hokies in Venture Evaluation
            </div>
          </div>
          <nav className="hidden gap-8 text-sm text-white/80 md:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="transition hover:text-orange-400">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-32">
            <div className="relative z-10">
              <div className="mb-5 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-orange-300">
                Student-Run Venture Investing at Virginia Tech
              </div>
              <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
                Hokies building a serious platform for venture investing at Virginia Tech.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                HIVE is a student-run venture investing group at Virginia Tech focused on evaluating early-stage companies, sharpening investment judgment, and building a strong community around venture capital and startups.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#membership"
                  className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-medium text-black transition hover:bg-orange-400"
                >
                  Join HIVE
                </a>
                <a
                  href="#what-we-do"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-orange-400 hover:text-orange-300"
                >
                  Explore the Platform
                </a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-left">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold text-white">VC</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/50">Focus</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold text-white">Research</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/50">Work</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold text-white">Community</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/50">Built</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center">
              <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="font-serif text-5xl tracking-[0.32em] text-white">HIVE</div>
                <div className="mt-4 text-xs uppercase tracking-[0.42em] text-white/60">
                  Hokies in Venture Evaluation
                </div>
                <div className="mt-10 grid gap-5">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <div className="text-xs uppercase tracking-[0.25em] text-orange-300">What We Evaluate</div>
                    <div className="mt-2 text-lg text-white/90">Startups, business models, markets, and long-term growth potential</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <div className="text-xs uppercase tracking-[0.25em] text-orange-300">What We Build</div>
                    <div className="mt-2 text-lg text-white/90">Investment thinking, venture fluency, and a strong network at Virginia Tech</div>
                  </div>
                </div>
              </div>            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-orange-300">About</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">What HIVE is building</h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              HIVE was created to give Virginia Tech students a serious platform to explore venture capital through structured analysis, thoughtful discussion, and real investment-style work. The group is designed for students who want to understand startups the way investors do and help build a stronger venture community on campus.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <h3 className="text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 leading-7 text-white/70">{pillar.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="what-we-do" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-3">
              {sections.map((item) => (
                <div key={item.heading} className="rounded-[2rem] border border-white/10 bg-black/30 p-8">
                  <div className="text-xs uppercase tracking-[0.3em] text-orange-300">HIVE</div>
                  <h3 className="mt-4 text-2xl font-semibold">{item.heading}</h3>
                  <p className="mt-4 leading-7 text-white/70">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="membership" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-orange-300">Membership</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">Built for students serious about venture.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                HIVE is intended to be selective, collaborative, and highly motivated. Members should be curious about early-stage companies, interested in investing, and ready to contribute to something meaningful on campus.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="text-sm uppercase tracking-[0.28em] text-orange-300">Ideal Members</div>
              <ul className="mt-6 space-y-4 text-white/80">
                <li>Students interested in venture capital, startups, and private markets</li>
                <li>Builders, thinkers, and communicators who enjoy discussion and research</li>
                <li>People who want to help shape the next generation of HIVE</li>
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-orange-400"
              >
                Contact the Team
              </a>
            </div>
          </div>
        </section>

        <section id="leadership" className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="text-xs uppercase tracking-[0.3em] text-orange-300">Leadership</div>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">Founding leadership</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                "President",
                "Vice President",
                "Head of Research",
              ].map((role) => (
                <div key={role} className="rounded-[2rem] border border-white/10 bg-black/30 p-8">
                  <div className="text-xl font-semibold">{role}</div>
                  <p className="mt-3 text-white/60">Founding position opening soon</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <div className="font-serif text-3xl tracking-[0.32em]">HIVE</div>
            <div className="mt-3 text-sm text-white/65">Hokies in Venture Evaluation</div>
          </div>
          <div className="text-sm text-white/65">
            Virginia Tech · Blacksburg, Virginia · Built for students interested in venture
          </div>
        </div>
      </footer>
    </div>
  );
}
