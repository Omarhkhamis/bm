"use client";

import { useEffect, useState } from "react";

const cases = [
  {
    image: "/img/hollywood-smile/before-after/ba3.jpg",
    caption: "Natural smile design with minimal preparation."
  },
  {
    image: "/img/hollywood-smile/before-after/ba2.jpg",
    caption: "Natural smile design with minimal preparation."
  },
  {
    image: "/img/hollywood-smile/before-after/ba4.jpg",
    caption: "Natural smile design with minimal preparation."
  },
  {
    image: "/img/hollywood-smile/before-after/ba13.jpg",
    caption: "Natural smile design with minimal preparation."
  },
  {
    image: "/img/hollywood-smile/before-after/ba6.jpg",
    caption: "Natural smile design with minimal preparation."
  }
];

export default function BeforeAfter() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const openLightbox = (image) => {
    setActiveImage(image);
    setIsOpen(true);
  };

  return (
    <section id="before-after" className="relative overflow-hidden bg-white py-20 ">
      <div className="mx-auto inline-grid md:block overflow-hidden max-w-screen-2xl px-6 lg:px-10 lg:grid justify-center items-center lg:grid-cols-2 gap-12">
        <div className=" order-2 md:order1 mb-10 space-y-7">
          <h2 className="text-4xl   xl:text-5xl font-extralight leading-snug text-main-900">
            Aesthetic Dentistry Clinic <br />
            <span className="relative inline-block">
              in Istanbul, Türkiye<span className="absolute left-0 right-0 -bottom-2 h-[1px] bg-copper-500 rounded-full"></span>
            </span>
          </h2>

          <ul className="space-y-4 font-light text-[15px] mb-12 text-main-800">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper-600 text-white text-[11px] font-semibold shadow-sm">✓</span>
              <span>
                Over <b className="text-copper-600 font-medium">50,000 Veneers</b>{" "}
                placed
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper-600 text-white text-[11px] font-semibold shadow-sm">✓</span>
              <span>
                Over <b className="text-copper-600 font-medium">25,000 Smiles</b>{" "}
                straightened
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper-600 text-white text-[11px] font-semibold shadow-sm">✓</span>
              <span>
                The only clinic with a{" "}
                <b className="text-copper-600 font-medium">10-year</b> guarantee
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copper-600 text-white text-[11px] font-semibold shadow-sm">✓</span>
              <span>
                <b className="text-main-900">Weekend & evening appointments</b>{" "}
                — available by request
              </span>
            </li>
          </ul>

          <button
            type="button"
            className="rounded-xl bg-gradient-to-r from-copper-600 to-copper-500 text-white shadow-[0_10px_10px_rgba(0,0,0,0.09)] hover:from-copper-700 hover:to-copper-500 px-4 py-3 text-[11.5px] font-medium uppercase tracking-[0.13em] inline-flex items-center justify-center cursor-pointer transition-transform duration-200 ease-out disabled:opacity-60 disabled:pointer-events-none"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-book-consultation"))
            }
          >
            Free Consultation →</button>
        </div>

        <div className="relative order-1 md:order-2  lg:-ml-20 mt-10 lg:mt-0 w-full lg:w-[125%]">
          <div className="relative lg:mt-10">
            <div className="relative overflow-hidden marquee">
              <div
                className="marquee__track gap-4 md:gap-6 pr-4 md:pr-32"
                style={{
                  "--marquee-duration": "42s",
                  "--marquee-duration-mobile": "30s"
                }}
              >
                {[...cases, ...cases].map((item, index) => (
                  <article
                    key={`${item.image}-${index}`}
                    className="shrink-0 basis-1/2 md:basis-[325px] md:w-[325px]"
                  >
                    <div className="rounded-xl border border-main-200 overflow-hidden bg-white">
                      <img
                        src={item.image}
                        className="h-73 sm:h-105 lg:h-107 w-full object-cover cursor-pointer"
                        alt="Smile case"
                        loading="lazy"
                        onClick={() => openLightbox(item.image)}
                      />
                    </div>

                    <p className="text-[12px] text-main-500 mt-3 leading-relaxed">
                      {item.caption}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity ${
              isOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative max-w-[92vw] max-h-[88vh] overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute top-3 right-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white text-xl font-light hover:bg-black/80 cursor-pointer transition"
                aria-label="Close"
                onClick={() => setIsOpen(false)}
              >
                <span className="leading-none translate-y-[-1px] select-none">
                  &times;
                </span>
              </button>

              {activeImage ? (
                <img
                  src={activeImage}
                  className="max-h-[88vh] w-auto object-contain"
                  alt="Smile case preview"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
