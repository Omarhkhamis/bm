export default function HealthTourism() {
  return (
    <section
      id="health-tourism"
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16 lg:py-32"
    >
      <div className="mx-auto max-w-screen-xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-main-400">
            4 easy steps
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-5xl font-extralight text-main-900 tracking-tight">
            To Get Your Perfect Smile
          </h2>
          <p className="mt-4 text-sm sm:text-[17px] font-light text-main-600">
            From your first message to your final check-up, our team guides you
            through a seamless and personalised treatment journey at Atom
            Clinic.
          </p>
        </div>

        <div className="relative mt-14 hidden lg:block">
          <div className="absolute inset-x-16 top-6 h-px bg-gradient-to-r from-main-100 via-main-200 to-main-100"></div>
        </div>

        <div className="mt-8 lg:mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative flex flex-col jus items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border border-main-200 shadow-sm">
              <i className="fa-solid fa-comments text-copper-500 text-xl"></i>
            </div>

            <h3 className="mt-5 text-md justify-items-center items-center justify-center gap-2 font-light tracking-[0.03em] capitalize text-main-900">
              <span className="flex  items-center justify-center rounded-full text-[12px] font-normal text-gray-500">
                STEP 1
              </span>
              <span>Tell us your dental problem</span>
            </h3>

            <p className="mt-3 text-sm leading-relaxed font-extralight text-main-600 max-w-xs">
              Share your concerns, photos and X-rays (if available) via WhatsApp
              or e-mail. Our coordinators will review your case carefully.
            </p>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border border-main-200 shadow-sm">
              <i className="fa-solid fa-clipboard-list text-copper-500 text-xl"></i>
            </div>

            <h3 className="mt-5 text-md justify-items-center items-center justify-center gap-2 font-light tracking-[0.03em] capitalize text-main-900">
              <span className="flex  items-center justify-center rounded-full text-[12px] font-normal text-gray-500">
                STEP 2
              </span>
              <span>Treatment plan &amp; proposal</span>
            </h3>

            <p className="mt-3 text-sm leading-relaxed font-extralight text-main-600 max-w-xs">
              Within 24 hours our doctors prepare a personalised treatment plan,
              timeline and transparent cost estimate tailored to your needs.
            </p>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border border-main-200 shadow-sm">
              <i className="fa-solid fa-plane-departure text-copper-500 text-xl"></i>
            </div>

            <h3 className="mt-5 text-md justify-items-center items-center justify-center gap-2 font-light tracking-[0.03em] capitalize text-main-900">
              <span className="flex  items-center justify-center rounded-full text-[12px] font-normal text-gray-500">
                STEP 3
              </span>
              <span>Travel &amp; treatment in Istanbul</span>
            </h3>

            <p className="mt-3 text-sm leading-relaxed font-extralight text-main-600 max-w-xs">
              Once your dates are confirmed, we arrange airport pick-up, hotel
              options and your clinical appointments at BM TÜRKIEY.
            </p>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border border-main-200 shadow-sm">
              <i className="fa-solid fa-check-circle text-copper-500 text-xl"></i>
            </div>

            <h3 className="mt-5 text-md justify-items-center items-center justify-center gap-2 font-light tracking-[0.03em] capitalize text-main-900">
              <span className="flex  items-center justify-center rounded-full text-[12px] font-normal text-gray-500">
                STEP 4
              </span>
              <span>Last check-up &amp; perfect smile</span>
            </h3>

            <p className="mt-3 text-sm leading-relaxed font-extralight text-main-600 max-w-xs">
              Before you return home, our doctors complete all final checks and
              give you personalised after-care instructions for long-term
              results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
