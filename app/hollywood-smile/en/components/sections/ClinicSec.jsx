export default function ClinicSec() {
  return (
    <section className=" overflow-hidden bg-gray-100 py-16 lg:py-28 ">
      <div className="mx-auto max-w-screen-2xl px-0 ">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div className="-mx-4 sm:-mx-6 lg:-ml-10 lg:mr-6">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-main-100">
                  <img
                    src="/img/clinic/clinic-1.jpeg"
                    className="h-full w-full object-cover"
                    alt="Clinic moment 1"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-main-100">
                  <img
                    src="/img/clinic/clinic-2.jpeg"
                    className="h-full w-full object-cover"
                    alt="Clinic moment 2"
                  />
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-main-100">
                  <img
                    src="/img/clinic/clinic-3.jpeg"
                    className="h-full w-full object-cover"
                    alt="Clinic moment 3"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-main-100">
                  <img
                    src="/img/clinic/clinic-4.jpeg"
                    className="h-full w-full object-cover"
                    alt="Clinic moment 4"
                  />
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-main-100">
                  <img
                    src="/img/clinic/clinic-6.jpeg"
                    className="h-full w-full object-cover"
                    alt="Clinic moment 5"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-main-100">
                  <img
                    src="/img/clinic/clinic-7.jpeg"
                    className="h-full w-full object-cover"
                    alt="Clinic moment 6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-0 lg:mr-18">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-main-400 mb-3">
              Istanbul • Türkiye
            </p>

            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extralight leading-tight text-main-900 mb-6">
              Ödüllü
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                Gülüşlerin Adresi<span className="absolute left-0 right-0 -bottom-1 h-[1.5px] bg-copper-500 rounded-full"></span>
              </span>
            </h2>

            <p className="text-[15px] sm:text-[16px] text-main-700 leading-relaxed mb-6">
              Uzun yıllardır ekibimiz, Türkiye'den, Avrupa'dan ve dünyanın dört bir yanından gelen hastalar için doğal ve uzun ömürlü gülüşler tasarlamaya odaklanmaktadır. Her tedavi planı; minimal invaziv teknikler ile ileri dijital planlamanın birleşimiyle, tamamen kişiye özel olarak hazırlanır.
            </p>

            <p className="text-[15px] sm:text-[16px] text-main-700 leading-relaxed mb-6">
              Kişiselleştirilmiş yaklaşımımız, detaylara gösterdiğimiz titizlik ve sizi yansıtan, daha özgüvenli hissettiren sonuçlara olan bağlılığımızla gurur duyuyoruz.
            </p>

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
      </div>
    </section>
  );
}
