import ContactHero from "../../Components/ContactHero";
import ContactForm from "../../Components/ContactForm";
import ContactInfo from "../../Components/ContactInfo";
import Navbar from "../../Components/Navbar";

export default function Contact() {
  return (
    <><Navbar/>
    <main className="min-h-screen bg-[#030712] text-white">
      <ContactHero />
          <section className="px-6 pb-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.8fr]">

        <ContactForm />

        <ContactInfo />

      </div>
    </section>
    </main></>
  );
}