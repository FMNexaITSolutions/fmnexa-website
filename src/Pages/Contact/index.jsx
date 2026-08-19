import ContactHero from "../../Components/ContactHero";
import ContactForm from "../../Components/ContactForm";
import ContactInfo from "../../Components/ContactInfo";
import Navbar from "../../Components/Navbar";

export default function Contact() {
  return (
    <div className="relative w-full overflow-x-hidden bg-[#030712]">
      <Navbar />

      <main className="relative w-full overflow-x-hidden text-white">
        
        <ContactHero />

        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">

            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
              
              <ContactForm />

              <ContactInfo />

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}