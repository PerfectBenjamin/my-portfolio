import Head from "next/head";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";

export default function Archive() {
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
        <title>All Projects — Perfect Benjamin-Maji</title>
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

            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mt-6 mb-16">
              All Projects
            </h1>

            <table className="w-full border-collapse text-left">
              <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                <tr>
                  <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                    Year
                  </th>
                  <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                    Project
                  </th>
                  <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                    Made at
                  </th>
                  <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                    Built with
                  </th>
                  <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-300/10 last:border-none">
                  <td className="py-4 pr-8 align-top text-sm text-slate-500">
                    2026
                  </td>
                  <td className="py-4 pr-8 align-top text-sm font-medium text-slate-200">
                    Zairah Creatives
                  </td>
                  <td className="hidden py-4 pr-8 align-top text-sm text-slate-400 lg:table-cell">
                    SendVoy Limited
                  </td>
                  <td className="hidden py-4 pr-8 align-top lg:table-cell">
                    <ul className="flex flex-wrap gap-2">
                      {["HTML", "CSS", "JavaScript"].map((t) => (
                        <li key={t}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {t}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 align-top text-sm sm:table-cell">
                    <a
                      href="https://zairahcreatives.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-baseline gap-1 font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 text-sm"
                    >
                      zairahcreatives.com
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 translate-y-px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="border-b border-slate-300/10 last:border-none">
                  <td className="py-4 pr-8 align-top text-sm text-slate-500">
                    2026
                  </td>
                  <td className="py-4 pr-8 align-top text-sm font-medium text-slate-200">
                    SendVoy Admin
                  </td>
                  <td className="hidden py-4 pr-8 align-top text-sm text-slate-400 lg:table-cell">
                    SendVoy Limited
                  </td>
                  <td className="hidden py-4 pr-8 align-top lg:table-cell">
                    <ul className="flex flex-wrap gap-2">
                      {["Flutter", "Dart", "Firebase"].map((t) => (
                        <li key={t}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {t}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="border-b border-slate-300/10 last:border-none">
                  <td className="py-4 pr-8 align-top text-sm text-slate-500">
                    2026
                  </td>
                  <td className="py-4 pr-8 align-top text-sm font-medium text-slate-200">
                    SendVoy Envoy
                  </td>
                  <td className="hidden py-4 pr-8 align-top text-sm text-slate-400 lg:table-cell">
                    SendVoy Limited
                  </td>
                  <td className="hidden py-4 pr-8 align-top lg:table-cell">
                    <ul className="flex flex-wrap gap-2">
                      {["Flutter", "Dart", "Firebase"].map((t) => (
                        <li key={t}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {t}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="border-b border-slate-300/10 last:border-none">
                  <td className="py-4 pr-8 align-top text-sm text-slate-500">
                    2026
                  </td>
                  <td className="py-4 pr-8 align-top text-sm font-medium text-slate-200">
                    SendVoy Voyager
                  </td>
                  <td className="hidden py-4 pr-8 align-top text-sm text-slate-400 lg:table-cell">
                    SendVoy Limited
                  </td>
                  <td className="hidden py-4 pr-8 align-top lg:table-cell">
                    <ul className="flex flex-wrap gap-2">
                      {["Flutter", "Dart", "Firebase"].map((t) => (
                        <li key={t}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {t}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="border-b border-slate-300/10 last:border-none">
                  <td className="py-4 pr-8 align-top text-sm text-slate-500">
                    2026
                  </td>
                  <td className="py-4 pr-8 align-top text-sm font-medium text-slate-200">
                    Grape Shop
                  </td>
                  <td className="hidden py-4 pr-8 align-top text-sm text-slate-400 lg:table-cell">
                    Grape Innovations
                  </td>
                  <td className="hidden py-4 pr-8 align-top lg:table-cell">
                    <ul className="flex flex-wrap gap-2">
                      {["React.js", "CSS"].map((t) => (
                        <li key={t}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {t}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="hidden py-4 align-top text-sm sm:table-cell">
                    <a
                      href="https://www.grapeshop.store/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-baseline gap-1 font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 text-sm"
                    >
                      grapeshop.store
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 translate-y-px"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="border-b border-slate-300/10 last:border-none">
                  <td className="py-4 pr-8 align-top text-sm text-slate-500">
                    2025
                  </td>
                  <td className="py-4 pr-8 align-top text-sm font-medium text-slate-200">
                    Grape Estate
                  </td>
                  <td className="hidden py-4 pr-8 align-top text-sm text-slate-400 lg:table-cell">
                    Grape Innovations
                  </td>
                  <td className="hidden py-4 pr-8 align-top lg:table-cell">
                    <ul className="flex flex-wrap gap-2">
                      {["Next.js", "Tailwind CSS"].map((t) => (
                        <li key={t}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {t}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="border-b border-slate-300/10 last:border-none">
                  <td className="py-4 pr-8 align-top text-sm text-slate-500">
                    2025
                  </td>
                  <td className="py-4 pr-8 align-top text-sm font-medium text-slate-200">
                    Grocero
                  </td>
                  <td className="hidden py-4 pr-8 align-top text-sm text-slate-400 lg:table-cell"></td>
                  <td className="hidden py-4 pr-8 align-top lg:table-cell">
                    <ul className="flex flex-wrap gap-2">
                      {["React.js", "Node.js", "Express", "Supabase"].map(
                        (t) => (
                          <li key={t}>
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {t}
                            </div>
                          </li>
                        ),
                      )}
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="border-b border-slate-300/10 last:border-none">
                  <td className="py-4 pr-8 align-top text-sm text-slate-500">
                    2025
                  </td>
                  <td className="py-4 pr-8 align-top text-sm font-medium text-slate-200">
                    CMS Mobile App
                  </td>
                  <td className="hidden py-4 pr-8 align-top text-sm text-slate-400 lg:table-cell">
                    Nile University of Nigeria
                  </td>
                  <td className="hidden py-4 pr-8 align-top lg:table-cell">
                    <ul className="flex flex-wrap gap-2">
                      {[
                        "React Native",
                        "Expo",
                        "Expo Router",
                        "React Native SVG",
                      ].map((t) => (
                        <li key={t}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {t}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="border-b border-slate-300/10 last:border-none">
                  <td className="py-4 pr-8 align-top text-sm text-slate-500">
                    2025
                  </td>
                  <td className="py-4 pr-8 align-top text-sm font-medium text-slate-200">
                    CMS Admin Panel
                  </td>
                  <td className="hidden py-4 pr-8 align-top text-sm text-slate-400 lg:table-cell">
                    Nile University of Nigeria
                  </td>
                  <td className="hidden py-4 pr-8 align-top lg:table-cell">
                    <ul className="flex flex-wrap gap-2">
                      {["React.js", "Firebase", "Tailwind CSS"].map((t) => (
                        <li key={t}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {t}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
