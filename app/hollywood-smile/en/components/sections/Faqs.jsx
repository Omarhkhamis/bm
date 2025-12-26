"use client";

import { useRef, useState } from "react";

const faqItems = [
  {
    icon: "fa-circle-question",
    title: "How does the consultation process work for international patients?",
    subtitle:
      "Send photos / X-rays, receive a personalised plan, then confirm travel dates.",
    body:
      "Our team reviews your case, shares a recommended treatment plan and estimated timeline, and answers your questions. Once you're ready, we coordinate appointments and support you with travel planning."
  },
  {
    icon: "fa-tooth",
    title: "How many days should I plan to stay in Istanbul?",
    subtitle: "It depends on the treatment (veneers vs implants vs full-arch).",
    body:
      "For aesthetic treatments, many patients complete the main steps within a few days.\nImplant and full-arch cases may require a staged plan. We'll confirm your ideal schedule after evaluation."
  },
  {
    icon: "fa-shield-heart",
    title: "Is there a warranty / aftercare plan?",
    subtitle:
      "Clear aftercare guidance and follow-up support after you'return home.",
    body:
      "You'll receive written aftercare instructions and we remain available for questions.\nTreatment-specific warranty terms are explained during consultation based on procedure type and materials."
  },
  {
    icon: "fa-credit-card",
    title: "Can I get a transparent quote before travelling?",
    subtitle: "Yes — we provide a clear plan and cost estimate after your evaluation.",
    body:
      "Share your details and visuals; our team prepares your plan and an estimate.\nFinal pricing depends on clinical examination and confirmed scope."
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const panelRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 900);
  };

  return (
    <section
      id="faqs"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-main-400">
              Help Center
            </p>
            <h2 className="mt-3 text-4xl  lg:text-5xl font-extralight text-main-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm sm:text-[15px] font-light text-main-600">
              Quick answers for international patients.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full w-fit border border-main-200 bg-white/70 px-4 py-2 text-[12px] text-main-700 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <span className="inline-flex items-center -mr-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-main-100/70">
              <span className="relative h-1.5 w-1.5 shrink-0">
                <span className="absolute inset-0 block rounded-full bg-emerald-400/60 animate-ping"></span>
                <span className="absolute -inset-1 block rounded-full bg-emerald-400/25 blur-sm"></span>
                <span className="absolute inset-0 block rounded-full bg-emerald-400"></span>
              </span>
            </span>
            Average response time:{" "}
            <b className=" mr-2 font-medium text-main-900"> 30 minutes</b>
          </div>
        </div>

        <div className="mt-10 grid gap-10 mb-7 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                const bodyLines = item.body.split("\n");
                const panelStyle = {
                  maxHeight:
                    isOpen && panelRefs.current[index]
                      ? `${panelRefs.current[index].scrollHeight}px`
                      : "0px",
                  opacity: isOpen ? 1 : 0
                };

                return (
                  <div
                    key={item.title}
                    className={`group cursor-pointer select-none rounded-3xl border p-5 sm:p-6 lg:p-6.5 bg-white transition-colors duration-100 ${
                      isOpen ? "border-copper-300" : "border-main-200"
                    }`}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen ? "true" : "false"}
                    aria-controls={`faq-body-${index}`}
                    onClick={() => toggle(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggle(index);
                      }
                    }}
                  >
                    <div className="w-full flex items-start sm:items-center justify-between gap-4 text-left">
                      <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-copper-50 border border-copper-200/60">
                          <i className={`fa-solid ${item.icon} text-copper-600`}></i>
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-[15px] mb-2 sm:text-[16px] font-normal text-main-900 leading-snug">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-[13px] font-light text-main-600 leading-snug line-clamp-2 sm:line-clamp-none">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <span
                        className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-main-200 bg-white text-main-800"
                        onClick={(event) => {
                          event.stopPropagation();
                          toggle(index);
                        }}
                      >
                        <i
                          className={`fa-solid fa-chevron-down text-[12px] transition-transform duration-150 ease-out ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        ></i>
                      </span>
                    </div>

                    <div
                      id={`faq-body-${index}`}
                      className="overflow-hidden transition-[max-height,opacity] duration-200 ease-out"
                      style={panelStyle}
                      ref={(el) => {
                        panelRefs.current[index] = el;
                      }}
                    >
                      <div className="mt-4 pl-12 sm:pl-13 text-sm font-light leading-relaxed text-main-600">
                        {bodyLines.map((line, lineIndex) => (
                          <span key={`${item.title}-${lineIndex}`}>
                            {line}
                            {lineIndex < bodyLines.length - 1 ? <br /> : null}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              <p className="p-2 sm:p-0 mt-6 text-[13px] font-light text-main-500">
                For medical accuracy, a final plan is confirmed after clinical
                assessment.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-main-200 bg-white/70 p-6 lg:p-7 shadow-[0_18px_50px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-copper-200/30 blur-3xl"></div>
              <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-copper-300/20 blur-3xl"></div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1.5 pointer-events-none relative z-0">
                  <p className="text-[11px] tracking-[0.20em] uppercase font-medium text-gray-600">
                    Request an appointment
                  </p>

                  <h2 className="text-[24px] sm:text-[25px] capitalize font-light leading-snug tracking-[0.01em] text-main-900">
                    Schedule your smile consultation
                  </h2>

                  <p className="text-[15px] font-light leading-relaxed text-gray-600">
                    Share a few details and our team will contact you shortly.
                  </p>
                </div>

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

                <input
                  type="text"
                  placeholder=""
                  autoComplete="off"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-1 transition hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                />

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-medium tracking-[0.15em] uppercase text-main-900/60">
                    Full name
                  </label>

                  <input
                    type="text"
                    placeholder="Name Surname"
                    autoComplete="name"
                    className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-1 transition rounded-xl px-3.5 py-2.5 text-[14px] border-gray-200 bg-white text-main-900 placeholder:text-gray-400 focus:border-copper-500 focus:ring-copper-500/20"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-medium tracking-[0.15em] uppercase text-main-900/60">
                      Phone
                    </label>

                    <div className="relative phone-iti" data-iti>
                      <input
                        type="tel"
                        placeholder="+44 ..."
                        autoComplete="tel"
                        className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-1 transition border-gray-200 bg-white text-main-900 placeholder:text-gray-400 focus:border-copper-500 focus:ring-copper-500/20"
                        id="phone-CBUwdZYPZhe7VcEgRKic"
                      />
                    </div>

                    <input
                      type="hidden"
                      id="phone-CBUwdZYPZhe7VcEgRKic_hidden"
                      name="phone"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-medium tracking-[0.15em] uppercase text-main-900/60">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-1 transition rounded-xl px-3.5 py-2.5 text-[14px] border-gray-200 bg-white text-main-900 placeholder:text-gray-400 focus:border-copper-500 focus:ring-copper-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-medium tracking-[0.15em] uppercase text-main-900/60">
                    Message (optional)
                  </label>

                  <textarea
                    rows={3}
                    placeholder="Tell us briefly about your smile goals."
                    className="w-full rounded-lg border outline-none focus:ring-1 transition rounded-xl px-3.5 py-2.5 text-[14px] resize-none border-gray-200 bg-white text-main-900 placeholder:text-gray-400 focus:border-copper-500 focus:ring-copper-500/20"
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

                  <span className="inline-flex text-[12px] mt-4 items-center gap-2 text-gray-500">
                    <span className="relative inline-flex items-center justify-center">
                      <span
                        className="absolute -inset-1 rounded-full"
                        style={{
                          background: "rgba(16,185,129,.35)",
                          filter: "blur(6px)",
                          animation: "soft-ring 2.6s ease-in-out infinite"
                        }}
                      ></span>

                      <i
                        className="fa-solid ml-1 fa-lock relative z-10 text-emerald-600 text-[13px]"
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
    </section>
  );
}
