const treatments = [
  {
    title: "Dental Implants",
    description:
      "Advanced implant solutions restoring function and aesthetics with long-term stability, comfort and natural appearance.",
    image: "/img/hollywood-smile/sec-dental-implant.jpg",
    alt: "Dental Implants"
  },
  {
    title: "Zirconium Crowns",
    description:
      "High-strength zirconium restorations offering exceptional durability, natural translucency and aesthetic harmony.",
    image: "/img/hollywood-smile/zirkonyum-veneers.jpg",
    alt: "Zirconium Crowns"
  },
  {
    title: "E-Max & Composite Veneers",
    description:
      "Minimally invasive veneer options designed to enhance brightness, shape and symmetry with natural-looking results.",
    image: "/img/hollywood-smile/sec-veneers.jpg",
    alt: "E-Max & Composite Veneers"
  },
  {
    title: "Ultra Aesthetic Veneers",
    description:
      "Premium smile design focusing on facial harmony, refined proportions and an exceptionally natural aesthetic finish.",
    image: "/img/hollywood-smile/ultra-aesthetic-veneers.jpg",
    alt: "Ultra Aesthetic Veneers"
  }
];

export default function PopularTreatments() {
  return (
    <section
      id="popular-treatments"
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-main-400">
            Popular Treatments
          </p>

          <h2 className="mt-3 text-3xl sm:text-3xl lg:text-5xl font-extralight text-main-900 tracking-tight">
            Most Requested Procedures
          </h2>

          <p className="mt-4 text-sm sm:text-[17px] font-light text-main-600">
            A refined selection of the most popular cosmetic and restorative
            treatments requested by our international patients.
          </p>
        </div>

        <div className="mt-10 lg:mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl bg-white border border-main-200/70 overflow-hidden"
              >
                <div className="relative aspect-[16/10] bg-main-50">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10"></div>
                </div>

                <div className="p-6 lg:p-7">
                  <h3 className="text-lg lg:text-[19px] font-light text-main-900">
                    {item.title}
                  </h3>

                  <div className="mt-3 h-[1px] w-16 rounded-full bg-copper-500/80"></div>

                  <p className="mt-4 text-sm leading-relaxed text-main-600 font-light">
                    {item.description}
                  </p>

                  <a
                    href="https://wa.me/+905465266449"
                    target="_blank"
                    className="inline-block"
                    rel="noreferrer"
                  >
                    <button className="mt-7 inline-flex items-center gap-2 text-[15px] font-light cursor-pointer text-copper-700 hover:text-copper-900 transition">
                      Get Detailed Information →</button>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
