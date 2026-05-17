import Head from "next/head";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";

const screenshots = [
  { src: "/images/projects/cms-app/CMS_app1.png", alt: "Home screen" },
  { src: "/images/projects/cms-app/CMS_app2.png", alt: "Quick Loan screen" },
  {
    src: "/images/projects/cms-app/CMS_app3.png",
    alt: "Notifications screen",
  },
  { src: "/images/projects/cms-app/CMS_app4.png", alt: "My Account screen" },
  { src: "/images/projects/cms-app/CMS_app5.png", alt: "Savings screen" },
  { src: "/images/projects/cms-app/CMS_app6.png", alt: "Loans screen" },
];

const tech = ["React Native", "Expo", "Expo Router", "React Native SVG"];

export default function CmsMobileApp() {
  const router = useRouter();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (window.innerWidth < 1024) return;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - left, y: e.clientY - top });
  }, []);

  return (
    <>
      <Head>
        <title>
          Cooperative Management System Mobile App - Perfect Benjamin-Maji
        </title>
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
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                <div>
                  <button
                    onClick={() => router.back()}
                    className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300 cursor-pointer bg-none border-none p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Perfect Benjamin-Maji
                  </button>

                  <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mt-6">
                    CMS Mobile App
                  </h1>
                  <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Cooperative Management System
                  </h2>
                  <p className="mt-4 max-w-xs leading-normal">
                    A cooperative management system mobile app with user profile
                    management, notifications, loan and savings screens. Built
                    with React Native and Expo.
                  </p>

                  <ul
                    className="mt-8 flex flex-wrap gap-2"
                    aria-label="Technologies used"
                  >
                    {tech.map((t) => (
                      <li key={t}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {t}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </header>

              <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {screenshots.map((s) => (
                    <div key={s.src} className="group relative">
                      <img
                        src={s.src}
                        alt={s.alt}
                        className="w-full rounded-xl border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                      />
                      <p className="mt-2 text-xs text-slate-500 text-center">
                        {s.alt}
                      </p>
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
