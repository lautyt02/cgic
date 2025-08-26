import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import InfoSection from '../components/InfoSection.jsx';
import ContactForm from '../components/ContactForm.jsx';
import LogosBanner from '../components/LogosBanner.jsx';
import Footer from '../components/Footer.jsx';
import { getContent } from '../lib/api.js';
import infoFallback from '../data/info.json';
import logosFallback from '../data/logos.json';

export default function Home() {
  const [info, setInfo] = useState(infoFallback);
  const [logos, setLogos] = useState(logosFallback);

  useEffect(() => {
    getContent().then((data) => {
      if (data.info) setInfo(data.info);
      if (data.logos) setLogos(data.logos);
    }).catch(() => {});
  }, []);

  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <section id="inicio" className="h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold">Bienvenido</h1>
        </section>
        <section id="info">
          {info.map((item) => (
            <InfoSection key={item.titulo} titulo={item.titulo} parrafo={item.parrafo} />
          ))}
        </section>
        <ContactForm />
        <LogosBanner logos={logos} />
      </main>
      <Footer />
    </div>
  );
}
