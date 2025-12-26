import Script from "next/script";

import Header from "./components/Header";
import HollywoodSmileEffects from "./components/HollywoodSmileEffects";
import Footer from "./components/Footer";
import Overlays from "./components/Overlays";
import {
  HeroSlide,
  HollywoodSmileSec,
  PopularTreatments,
  BookAppointmentFormSec,
  BeforeAfter,
  FullWidthCampaignBanner,
  StepFormSec,
  Treatments,
  BookAppointmentFormSec2,
  InternationalPatientsSec,
  ClinicSec,
  HealthTourism,
  LuckySpinFormSec,
  LocalAttractions,
  GoogleReviews,
  Faqs
} from "./components/sections";

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export const metadata = {
  title: "Hollywood Smile in Turkey | BM TÜRKIEY",
  description:
    "Hollywood Smile in Turkey with a personalised plan and premium approach for natural-looking results.",
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://atomclinic.mezbilisim.dev/hollywood-smile/en",
    languages: {
      en: "https://atomclinic.mezbilisim.dev/hollywood-smile/en",
      tr: "https://atomclinic.mezbilisim.dev/tr/hollywood-smile",
      ru: "https://atomclinic.mezbilisim.dev/ru/hollywood-smile",
      "x-default": "https://atomclinic.mezbilisim.dev/hollywood-smile/en"
    }
  },
  openGraph: {
    type: "website",
    siteName: "BM TÜRKIEY",
    locale: "en",
    title: "Hollywood Smile in Turkey | BM TÜRKIEY",
    description:
      "Hollywood Smile in Turkey with a personalised plan and premium approach for natural-looking results.",
    url: "https://atomclinic.mezbilisim.dev/hollywood-smile/en",
    images: [
      {
        url: "https://atomclinic.mezbilisim.dev/img/lp/hollywood-smile/sec-hollywood-smile.jpg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hollywood Smile in Turkey | BM TÜRKIEY",
    description:
      "Hollywood Smile in Turkey with a personalised plan and premium approach for natural-looking results.",
    images: [
      "https://atomclinic.mezbilisim.dev/img/lp/hollywood-smile/sec-hollywood-smile.jpg"
    ]
  }
};

export default function HollywoodSmilePage() {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.6/build/js/intlTelInput.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.6/build/js/utils.js"
        strategy="afterInteractive"
      />
      <Header />
      <HollywoodSmileEffects />
      <main>
        <HeroSlide />
        <HollywoodSmileSec />
        <PopularTreatments />
        <BookAppointmentFormSec />
        <BeforeAfter />
        <FullWidthCampaignBanner />
        <StepFormSec />
        <Treatments />
        <BookAppointmentFormSec2 />
        <InternationalPatientsSec />
        <ClinicSec />
        <HealthTourism />
        <LuckySpinFormSec idPrefix="lucky-section" />
        <LocalAttractions />
        <GoogleReviews />
        <Faqs />
      </main>
      <Footer />
      <Overlays />
    </>
  );
}
