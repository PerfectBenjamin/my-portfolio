import Head from "next/head";
import Link from "next/link";
import { useState, useCallback } from "react";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (window.innerWidth < 1024) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - left, y: e.clientY - top });
  }, []);

  return (
    <>
      <Head>
        <title>Perfect Benjamin-Maji</title>
        <meta name="viewport" content="width=device-width" />
        <style>{`html, body { margin: 0; padding: 0; background-color: #0f172a; }`}</style>
      </Head>

      <div
        className="group/spotlight relative"
        onMouseMove={handleMouseMove}
      >
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        />

        <div
          className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
          style={{ minHeight: "100vh" }}
        >
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-24">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-half lg:flex-col lg:justify-between lg:py-24">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    Perfect Benjamin-Maji
                  </h1>
                  <h2 className="mt-3 text-lg font-medium text-slate-200">
                    Frontend Engineer
                  </h2>
                  <p className="mt-4 max-w-xs leading-normal text-slate-400">
                    I build seamless, accessible experiences for web and mobile
                    users.
                  </p>

                  <nav
                    className="nav hidden lg:block"
                    aria-label="In-page jump links"
                  >
                    <ul className="mt-16 w-max">
                      <li>
                        <a
                          className="group flex items-center py-3 px-3 lg:px-0 lg:py-3 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
                          href="#about"
                        >
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-teal-300 lg:mr-4 lg:h-px lg:w-8 lg:bg-slate-600"></span>
                          <span>ABOUT</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="group flex items-center py-3 px-3 lg:px-0 lg:py-3 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
                          href="#experience"
                        >
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-teal-300 lg:mr-4 lg:h-px lg:w-8 lg:bg-slate-600"></span>
                          <span>EXPERIENCE</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="group flex items-center py-3 px-3 lg:px-0 lg:py-3 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-teal-300 focus-visible:text-teal-300"
                          href="#projects"
                        >
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300 group-focus-visible:w-16 group-focus-visible:bg-teal-300 lg:mr-4 lg:h-px lg:w-8 lg:bg-slate-600"></span>
                          <span>PROJECTS</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <ul className="ml-1 mt-8 flex items-center gap-5 lg:mt-0 lg:flex-col">
                  <li>
                    <a
                      href="https://github.com/PerfectBenjamin"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="GitHub"
                      className="block hover:text-teal-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/perfectbenjamin"
                      target="_blank"
                      rel="noreferrer noopener"
                      title="LinkedIn"
                      className="block hover:text-teal-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.439-.103.25-.129.599-.129.948v5.418h-3.554s.05-8.736 0-9.646h3.554v1.348c-.009.015-.021.03-.033.042h.033v-.042c.418-.645 1.162-1.571 2.828-1.571 2.065 0 3.614 1.348 3.614 4.25v5.619zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.926-1.715 1.144 0 1.915.762 1.915 1.715 0 .953-.771 1.715-1.926 1.715zm1.946 11.019H3.391V9.956h3.892v10.496zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:perfectmaji98@gmail.com"
                      className="block hover:text-teal-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </header>

              <main className="pt-24 lg:w-half lg:py-24">
                <section
                  id="about"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                      About
                    </h2>
                  </div>
                  <div>
                    <p className="mb-4 text-base text-slate-400">
                      I'm a frontend engineer focused on building accessible,
                      high-quality user interfaces for the web and mobile. I
                      care about creating experiences that are not only visually
                      precise but also intuitive and inclusive for everyone. My
                      work lives at the intersection of design and engineering,
                      where thoughtful UX meets clean, scalable code.
                    </p>
                    <p className="mb-4 text-base text-slate-400">
                      I enjoy translating designs into seamless, responsive
                      interfaces, with close attention to detail, performance,
                      and accessibility. From component architecture to
                      micro-interactions, I aim to build interfaces that feel
                      polished, consistent, and reliable across devices.
                    </p>
                    <p className="text-base text-slate-400">
                      I've developed a strong foundation in modern frontend
                      technologies and spend time refining how I structure,
                      scale, and maintain UI systems. I'm always exploring
                      better ways to build—whether that's improving performance,
                      strengthening accessibility, or adopting more efficient
                      workflows.
                    </p>
                  </div>
                </section>

                <section
                  id="experience"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                      Experience
                    </h2>
                  </div>
                  <ol className="group/list">
                    <li className="mb-12 pb-12 border-b border-slate-200/10 group/item last:mb-0 last:pb-0 last:border-b-0">
                      <div className="relative pl-6 group/body">
                        <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-slate-400 ring-1 ring-slate-900 group-hover/item:ring-teal-500 group-focus-within/item:ring-teal-500"></div>
                        <div className="flex flex-col flex-1">
                          <h3 className="font-semibold leading-tight text-slate-200 group-hover/link:text-teal-300">
                            <a
                              className="group/link inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                              href="#"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <span>
                                Full-Stack Engineer · SendVoy Logistics
                              </span>
                              <span className="text-slate-400 ml-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </a>
                          </h3>
                          <p className="text-sm font-semibold leading-normal text-slate-500">
                            2026 – Present
                          </p>
                          <p className="mt-2 text-sm leading-normal text-slate-400">
                            I build and maintain mobile applications that power
                            logistics and delivery operations, using Flutter and
                            Dart to create fast, responsive, and user-friendly
                            experiences. My work focuses on delivering reliable
                            features that support real-time interactions,
                            payments, and seamless user flows.
                          </p>
                          <ul className="mt-2 flex flex-wrap gap-2">
                            {["Dart", "Flutter", "Firebase", "Pagstack"].map(
                              (t) => (
                                <li key={t}>
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    {t}
                                  </div>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>
                    </li>

                    <li className="mb-12 pb-12 border-b border-slate-200/10 group/item last:mb-0 last:pb-0 last:border-b-0">
                      <div className="relative pl-6 group/body">
                        <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-slate-400 ring-1 ring-slate-900 group-hover/item:ring-teal-500 group-focus-within/item:ring-teal-500"></div>
                        <div className="flex flex-col flex-1">
                          <h3 className="font-semibold leading-tight text-slate-200">
                            <span className="inline-flex items-baseline font-medium leading-tight text-slate-200">
                              Freelance Software Developer · Remote
                            </span>
                          </h3>
                          <p className="text-sm font-semibold leading-normal text-slate-500">
                            2024 – Present
                          </p>
                          <p className="mt-2 text-sm leading-normal text-slate-400">
                            Partnering with startups and agencies to deliver
                            custom web and mobile solutions. I work across the
                            full stack, from responsive frontend interfaces to
                            backend systems, helping turn ideas into polished,
                            production-ready products.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ol>
                </section>

                <section id="projects" className="mb-0 scroll-mt-16">
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                      Projects
                    </h2>
                  </div>
                  <div>
                    <Link
                      href="/archive"
                      className="inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-6 py-3 text-sm font-medium leading-6 text-teal-300 hover:bg-teal-400/20 transition-colors"
                    >
                      View Full Project Archive
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
