"use client";

import { useState } from "react";

export default function HeroSlide() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 900);
  };

  return (
    <section className="relative pt-42 pb-20  h-auto  overflow-hidden bg-main-900">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        preload="none"
        playsInline
      >
        <source
          src="https://atomclinic.mezbilisim.dev/img/general/tan%C4%B1t%C4%B1m.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-main-900/90 via-main-900/80 to-main-900/90 sm:to-main-900/30"></div>

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-screen-2xl flex-col justify-center px-6 lg:px-10">
          <div className="grid gap-1 sm:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            <div className="space-y-6 xl:p-3 sm:p-0 text-white lg:max-w-2xl">
              <p className="text-[14px] tracking-[0.24em] mb-3 uppercase text-main-200/80">
                Istanbul • Türkiye
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-extralight leading-tight">
                Hollywood Smile in Türkiye<br className="hidden sm:block" />
                with BM TÜRKIEY
              </h1>

              <p className="text-[17px] tracking-[0.05em] font-extralight  sm:text-left text-main-100/80 lg:max-w-md">
                Bespoke smile design, minimally invasive treatments and
                long-lasting results in the heart of Istanbul.
              </p>

              <div className=" hidden sm:flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/+905465266449"
                  target="_blank"
                  className="inline-block"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="rounded-xl bg-gradient-to-r from-copper-600 to-copper-500 text-white shadow-[0_10px_10px_rgba(0,0,0,0.09)] hover:from-copper-700 hover:to-copper-500 px-4 py-3 text-[11.5px] font-medium uppercase tracking-[0.13em] inline-flex items-center justify-center cursor-pointer transition-transform duration-200 ease-out disabled:opacity-60 disabled:pointer-events-none"
                  >
                    <i className="fa-brands fa-whatsapp text-[15px] opacity-90 mr-2"></i>
                    WhatsApp Consultation →</button>
                </a>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-full lg:max-w-md rounded-3xl bg-gradient-to-br from-copper-500/40 via-main-800/70 to-copper-700/20 p-[1px] shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
                <div className="rounded-[22px] bg-main-950/80 backdrop-blur-xl border border-white/10 px-7 py-8">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-1.5 pointer-events-none relative z-0">
                      <p className="text-[11px] tracking-[0.20em] uppercase font-medium text-main-100/70">
                        Request an appointment
                      </p>

                      <h2 className="text-[24px] sm:text-[25px] capitalize font-light leading-snug tracking-[0.01em] text-white">
                        Schedule your smile consultation
                      </h2>

                      <p className="text-[15px] font-light leading-relaxed text-main-100/70">
                        Share a few details and our team will contact you
                        shortly.
                      </p>
                    </div>

                    <input
                      type="text"
                      placeholder=""
                      autoComplete="off"
                      className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-1 transition hidden"
                      tabIndex={-1}
                      aria-hidden="true"
                    />

                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-medium tracking-[0.15em] uppercase text-main-100/70">
                        Full name
                      </label>

                      <input
                        type="text"
                        placeholder="Name Surname"
                        autoComplete="name"
                        className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-1 transition rounded-xl px-3.5 py-2.5 text-[14px] border-white/10 bg-main-900/60 text-white placeholder:text-main-300/60 focus:border-copper-400 focus:ring-copper-400/60"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-medium tracking-[0.15em] uppercase text-main-100/70">
                          Phone
                        </label>

                        <div className="relative phone-iti" data-iti>
                          <input
                            type="tel"
                            placeholder="+44 ..."
                            autoComplete="tel"
                            className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-1 transition border-white/10 bg-main-900/60 text-white placeholder:text-main-300/60 focus:border-copper-400 focus:ring-copper-400/60"
                            id="phone-PG9EElejCVv7vmrw3CS2"
                          />
                        </div>

                        <input
                          type="hidden"
                          id="phone-PG9EElejCVv7vmrw3CS2_hidden"
                          name="phone"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-medium tracking-[0.15em] uppercase text-main-100/70">
                          Email
                        </label>

                        <input
                          type="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-1 transition rounded-xl px-3.5 py-2.5 text-[14px] border-white/10 bg-main-900/60 text-white placeholder:text-main-300/60 focus:border-copper-400 focus:ring-copper-400/60"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-medium tracking-[0.15em] uppercase text-main-100/70">
                        Message (optional)
                      </label>

                      <textarea
                        rows={3}
                        placeholder="Tell us briefly about your smile goals."
                        className="w-full rounded-lg border outline-none focus:ring-1 transition rounded-xl px-3.5 py-2.5 text-[14px] resize-none border-white/10 bg-main-900/60 text-white placeholder:text-main-300/60 focus:border-copper-400 focus:ring-copper-400/60"
                      ></textarea>
                    </div>

                    <div className="grid">
                      <button
                        type="submit"
                        className="rounded-xl bg-gradient-to-r from-copper-600 to-copper-500 text-white shadow-[0_10px_10px_rgba(0,0,0,0.09)] hover:from-copper-700 hover:to-copper-500 px-4 py-3 text-[11.5px] font-medium uppercase tracking-[0.13em] inline-flex items-center justify-center cursor-pointer transition-transform duration-200 ease-out disabled:opacity-60 disabled:pointer-events-none"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
                      </button>

                      <style>{`
                        @keyframes soft-pop {
                          0%, 100% { transform: scale(1); opacity: 1; }
                          50%      { transform: scale(1.06); opacity: 1; }
                        }
                        @keyframes soft-ring {
                          0%, 100% { transform: scale(1); opacity: .18; }
                          50%      { transform: scale(1.15); opacity: 0.56; }
                        }
                      `}</style>

                      <span className="inline-flex text-[12px] mt-4 items-center gap-2 text-gray-300">
                        <span className="relative inline-flex items-center justify-center">
                          <span
                            className="absolute -inset-1 rounded-full"
                            style={{
                              background: "rgba(16,185,129,.35)",
                              filter: "blur(6px)",
                              animation:
                                "soft-ring 2.6s ease-in-out infinite"
                            }}
                          ></span>

                          <i
                            className="fa-solid ml-1 relative z-10 text-emerald-600 text-[13px]"
                            style={{
                              animation: "soft-pop 2.6s ease-in-out infinite"
                            }}
                          ></i>
                        </span>

                        Your details stay private.
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
