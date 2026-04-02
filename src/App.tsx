import { useState, useEffect, useRef } from 'react';
import { Armchair as Chair, Layers, Laptop, FileText, Mail, MapPin, Phone, Menu, X, Shield, Zap, CheckCircle, ArrowRight, Calendar } from 'lucide-react';
import ProductPreviewFan, { ProductCategory } from "./ProductPreviewFan";

const Header = ({ onEcommerce }: { onEcommerce?: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <img src="/images/logo/logodef.svg" alt="B2B Group" className="h-8 md:h-10 w-auto" />
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => window.location.hash = 'settori'} className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">Aree di Intervento</button>
            <button onClick={() => window.location.hash = 'approccio'} className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">Metodo</button>
            <button onClick={() => window.location.hash = 'catalogo'} className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">Forniture</button>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <button 
              onClick={() => window.location.hash = 'contatti'}
              className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors px-4 py-2"
            >
              Contatti
            </button>
            <button 
              onClick={onEcommerce}
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-sm hover:shadow-md hover:bg-primary/90 transition-all"
            >
              Ecommerce Online
            </button>
          </div>

          <button 
            className="md:hidden text-gray-600 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 bg-white/95 backdrop-blur-md absolute left-0 right-0 px-6 top-full shadow-lg rounded-b-2xl">
            <div className="flex flex-col space-y-4">
              <button onClick={() => { window.location.hash = 'settori'; setIsMenuOpen(false); }} className="text-left text-sm font-semibold text-gray-700">Aree di Intervento</button>
              <button onClick={() => { window.location.hash = 'approccio'; setIsMenuOpen(false); }} className="text-left text-sm font-semibold text-gray-700">Metodo</button>
              <button onClick={() => { window.location.hash = 'catalogo'; setIsMenuOpen(false); }} className="text-left text-sm font-semibold text-gray-700">Forniture</button>
              <button onClick={() => { window.location.hash = 'contatti'; setIsMenuOpen(false); }} className="text-left text-sm font-semibold text-primary">Contatti</button>
              <button onClick={onEcommerce} className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-sm w-full text-center">Ecommerce Online</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative border-b border-gray-100">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-white border border-gray-100 rounded-full px-4 py-1.5 shadow-sm mb-8 text-primary shadow-primary/5">
           <Zap className="w-4 h-4" />
           <span className="text-xs font-semibold">Infrastruttura globale B2B</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 tracking-tight leading-[1.05] max-w-5xl mb-6">
          Progettiamo l'assetto per <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">far scalare</span> il tuo business.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-10 leading-relaxed font-medium">
          Dalla fornitura IT all'arredo direzionale, fino agli impianti industriali. Il partner enterprise per un'operatività senza ostacoli.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button onClick={() => window.location.hash = 'contatti'} className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-4 text-base font-semibold transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 w-full sm:w-auto">
            Inizia il progetto <ArrowRight className="w-5 h-5" />
          </button>
          <button onClick={() => window.location.hash = 'catalogo'} className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-full px-8 py-4 text-base font-semibold transition-all shadow-sm w-full sm:w-auto">
            Esplora il catalogo
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 max-w-7xl mx-auto px-6 relative z-10">
        {[
           { title: "Informatica & Cloud", icon: Laptop, text: "Server, Endpoint e Networking" },
           { title: "Arredo Direzionale", icon: Chair, text: "Uffici e spazi operativi" },
           { title: "Impianti Horeca", icon: Layers, text: "Automazione industriale" },
           { title: "Consumabili Office", icon: FileText, text: "Forniture periodiche garantite" }
        ].map((item, idx) => (
           <div key={idx} className="bg-white border border-gray-100/80 rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(6,81,237,0.1)] transition-all duration-300 transform hover:-translate-y-1">
             <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-5">
               <item.icon className="w-6 h-6 stroke-[2px]" />
             </div>
             <h3 className="text-lg text-gray-900 font-bold mb-2">{item.title}</h3>
             <p className="text-sm text-gray-500 font-medium">{item.text}</p>
           </div>
        ))}
      </div>
    </section>
  );
};

const SettoriPrincipali = () => {
  const settori = [
    { title: "Informatica Professional", icon: Laptop, category: "Hardware & Cloud", features: ["Networking", "Server", "Endpoints", "Licensing"] },
    { title: "Arredo Direzionale", icon: Chair, category: "Uffici & Operatività", features: ["Ergonomia", "Chiavi in mano", "Space Plan", "Acustica"] },
    { title: "Forniture Horeca", icon: Layers, category: "Impianti Industriali", features: ["Automazione", "Refrigerazione", "Cottura", "Lavaggio"] },
    { title: "Consumabili Office", icon: FileText, category: "Approvvigionamento", features: ["Materiali", "Print", "Cancelleria", "Logistica"] },
  ];

  return (
    <section id="settori" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              Aree operative B2B. <br className="hidden md:block"/>Tutto in un'unica <span className="text-primary">infrastruttura.</span>
            </h2>
          </div>
          <p className="text-lg text-gray-500 font-medium max-w-lg md:text-right">
            L'ecosistema aziendale si articola in quattro hub d'intervento specializzati per l'espansione del tuo business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {settori.map((s, idx) => (
             <div key={idx} className="group flex flex-col p-8 rounded-3xl border border-gray-100 bg-white hover:bg-gray-50/50 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(6,81,237,0.06)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
               <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                 <s.icon className="w-7 h-7 stroke-[2px]" />
               </div>
               <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{s.category}</div>
               <h3 className="text-2xl font-bold text-gray-900 mb-6">{s.title}</h3>
               
               <ul className="space-y-3 mb-8 mt-auto">
                 {s.features.map((f, i) => (
                   <li key={i} className="flex items-center text-sm font-medium text-gray-600">
                     <CheckCircle className="w-4 h-4 text-primary shrink-0 mr-3 opacity-70" />
                     {f}
                   </li>
                 ))}
               </ul>
               <button className="flex items-center text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                 Scopri di più <ArrowRight className="w-4 h-4 ml-1" />
               </button>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ApproccioLavoro = () => {
  const steps = [
    { title: "Audit e Checkup", text: "Analizziamo l'infrastruttura esistente identificando colli di bottiglia e limiti operativi." },
    { title: "Modellazione Scalabile", text: "Progettiamo soluzioni pronte a sostenere carichi futuri e scaling in tempo reale." },
    { title: "Deploy e Migrazione", text: "Azione puntuale e fornitura sul campo, con zero downtime garantito." },
    { title: "Supporto H24", text: "Monitoraggio, assistenza preventiva e Service Level Tracking continuativo." }
  ];

  return (
    <section id="approccio" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 flex flex-col justify-center">
             <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 shadow-sm mb-6 text-white w-max">
               <Shield className="w-4 h-4" />
               <span className="text-xs font-semibold tracking-wide">Metodologia Tracciabile</span>
             </div>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 mt-4">
                Metodo <br/>esatto.
             </h2>
             <p className="text-lg text-gray-400 font-medium leading-relaxed mb-10">
                Garantiamo processi trasparenti, tempistiche rigorose e risultati misurabili. Nessun intermediario.
             </p>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-pointer relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 text-9xl font-black text-white/5 group-hover:text-white/10 transition-colors select-none">
                  {idx + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm font-medium text-gray-400 leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerSection = () => {
  const partners = ["Microsoft", "Intel", "Lenovo", "Epson", "Herman Miller", "Vitra", "Fellowes", "Logitech"];
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-6 text-center max-w-7xl">
         <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Partner Ufficiali e Sistemi Certificati</p>
         <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
           {partners.map((p, i) => (
             <div key={i} className="text-xl font-extrabold text-gray-800 grayscale hover:grayscale-0 transition-all duration-300 hover:text-primary hover:opacity-100 cursor-default">
               {p}
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};

const CatalogoSettori = ({ onQuoteRequest }: { onQuoteRequest: () => void }) => {
  const cataloghi = [
    { title: "Informatica Corporate", img: "/images/informatica.jpg", desc: "Equipaggia il tuo team con dispositivi enterprise-grade certificati.", cta: "Scopri Hardware" },
    { title: "Design Operativo", img: "/images/arredo-ufficio.jpg", desc: "Progettazione degli spazi e fornitura di arredamento direzionale.", cta: "Vedi Soluzioni" },
    { title: "Automazione Horeca", img: "/images/3094495_banco-vendita-gastronomia-degustazione-arredo-negozio-industriale-vetrina-refrigerata.jpg", desc: "Impiantistica alimentare ad alta potenza.", cta: "Scopri Impianti" },
  ];

  return (
    <section id="catalogo" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Catalogo Forniture
          </h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            Accedi direttamente al più grande distaccamento europeo di soluzioni B2B approvate per l'industria.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {cataloghi.map((cat, idx) => (
            <div key={idx} className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_-4px_rgba(6,81,237,0.1)] transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
               <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
               </div>
               <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{cat.title}</h3>
                  <p className="text-gray-500 font-medium mb-6 leading-relaxed flex-1">{cat.desc}</p>
                  <button className="flex items-center text-primary font-bold text-sm tracking-wide mt-auto group-hover:translate-x-1 transition-transform">
                    {cat.cta} <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContattiSection = ({ onQuoteRequest }: { onQuoteRequest: () => void }) => {
  return (
    <section id="contatti" className="py-24 bg-gray-50 border-y border-gray-100 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 bg-white rounded-[2rem] shadow-[0_8px_30px_-4px_rgba(6,81,237,0.05)] border border-gray-100/80 overflow-hidden">
          <div className="p-10 lg:p-16 flex flex-col justify-between bg-primary lg:col-span-2 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="relative z-10">
              <Mail className="w-12 h-12 mb-8 text-white stroke-[2px]" />
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">Inizia la <br/>collaborazione.</h2>
              <p className="text-lg font-medium opacity-90 mb-12">
                Un Service Manager dedicato è pronto a elaborare un preventivo personalizzato under 24h.
              </p>
              <a href="mailto:info@b2b-group.it" className="inline-flex items-center justify-center bg-white text-primary hover:bg-gray-50 transition-colors font-bold rounded-2xl px-8 py-4 w-full shadow-lg">
                Scrivici un'email
              </a>
            </div>
          </div>
          <div className="p-10 lg:p-16 lg:col-span-3 grid sm:grid-cols-2 gap-x-8 gap-y-12">
             <div className="group cursor-default">
               <div className="w-12 h-12 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                 <MapPin className="w-6 h-6 stroke-[2px]" />
               </div>
               <h3 className="text-gray-900 font-bold mb-2 text-lg">Quartier Generale</h3>
               <p className="text-gray-500 font-medium">Via Nazionale delle Puglie 7<br/>Casalnuovo di Napoli (NA)</p>
             </div>
             <div className="group cursor-default">
               <div className="w-12 h-12 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                 <Phone className="w-6 h-6 stroke-[2px]" />
               </div>
               <h3 className="text-gray-900 font-bold mb-2 text-lg">Telecomunicazioni</h3>
               <p className="text-gray-500 font-medium">+39 081 1893 9337<br/>Supporto H24 disponibile</p>
             </div>
             <div className="group cursor-default">
               <div className="w-12 h-12 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                 <MapPin className="w-6 h-6 stroke-[2px]" />
               </div>
               <h3 className="text-gray-900 font-bold mb-2 text-lg">Sede Legale</h3>
               <p className="text-gray-500 font-medium">Via San Lazzaro 55<br/>Frignano (CE)</p>
             </div>
             <div className="group cursor-default">
               <div className="w-12 h-12 bg-gray-50 text-gray-700 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                 <Calendar className="w-6 h-6 stroke-[2px]" />
               </div>
               <h3 className="text-gray-900 font-bold mb-2 text-lg">Orari Operativi</h3>
               <p className="text-gray-500 font-medium">Lunedì-Venerdì: 08:00 - 18:00<br/>Sabato: 09:00 - 13:00</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 border-b border-white/10 pb-12 mb-10">
          <div>
             <img src="/images/logo/logodef.svg" alt="B2B Group" className="h-10 grayscale brightness-200 opacity-80 mb-6" />
             <p className="font-medium max-w-md text-sm leading-relaxed text-gray-400">
               Infrastruttura globale e fornitura enterprise. Ecosistemi operativi per la scalabilità del tuo business dal 2010.
             </p>
          </div>
          <div className="flex md:justify-end items-end pb-2">
             <a href="mailto:info@b2b-group.it" className="text-2xl md:text-3xl font-extrabold text-white hover:text-primary transition-colors hover:underline decoration-primary/50 underline-offset-8">
               Avvia progetto condiviso
             </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-semibold gap-4">
          <p>&copy; {new Date().getFullYear()} B2B GROUP SRLS. P.IVA 09292831210.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Termini Legali</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Utility per trovare l'immagine giusta tra tutte le sottocartelle e formati
const findProductImage = (imgName: string, catalogo: string) => {
  if (!imgName) return undefined;
  let subfolders = [];
  
  if (catalogo === 'informatica') subfolders = ['informatica'];
  else if (catalogo === 'arredo') subfolders = ['arredo'];
  else if (catalogo === 'alimentare') {
    // Per alimentare, controlla prima arredo (per i 5 prodotti spostati) poi impiantistica (per gli altri)
    subfolders = ['arredo', 'impiantistica'];
  }
  else if (catalogo === 'ufficio') subfolders = ['ufficio'];
  
  const extensions = ['.webp', '.jfif', '.jpg', '.jpeg', '.png'];
  const paths = [];
  
  // Genera tutti i possibili percorsi per tutte le cartelle e estensioni
  subfolders.forEach(subfolder => {
    extensions.forEach(ext => {
      paths.push(`/images/ecommerce/${subfolder}/${imgName}${ext}`);
    });
  });
  
  return paths;
};

const parseCatalogProduct = (item: any, catalogo?: string): any => {
  if (catalogo === 'informatica') {
    const key = Object.keys(item)[0];
    const parts = item[key].split(';');
    let id = parts[0] || Math.random().toString();
    let nome = parts[1] || '';
    let prezzo = 0;
    // Se il prezzo è presente come terzo elemento nella chiave principale, uso quello
    if (parts.length >= 3 && parts[2] && !isNaN(Number(parts[2].replace(/\D/g, '')))) {
      prezzo = parseFloat(parts[2].replace(/\D/g, '')) || 0;
    } else {
      // Altrimenti provo la penultima stringa di null
      const nullArr = item.null || [];
      if (nullArr.length > 0) {
        const prezzoStr = nullArr[nullArr.length - 2]?.split(';')[1];
        prezzo = parseFloat(prezzoStr?.replace(/\D/g, '')) || 0;
      }
    }
    // Immagine
    let immagine;
    const nullArr = item.null || [];
    if (nullArr.length > 0) {
      const imgStr = nullArr[nullArr.length - 1]?.split(';')[1];
      if (imgStr) immagine = imgStr; // solo nome base, senza estensione
    }
    // Mostra solo prodotti con nome e prezzo > 0
    if (!nome || prezzo <= 0) return null;
    return {
      id,
      nome,
      prezzo,
      immagine
    };
  }
  if (catalogo === 'ufficio') {
    // Parsing specifico per UFFICIO.json
    let nome = '';
    let prezzo = 0;
    let immagine = '';
    // Nome prodotto dal primo campo stringa
    const firstKey = Object.keys(item)[0];
    nome = item[firstKey];
    // Cerca prezzo e immagine nell'array 'null'
    const nullArr = item.null || [];
    // Trova immagine (sempre nell'ultimo elemento, dopo il punto e virgola)
    if (nullArr.length > 0) {
      const last = nullArr[nullArr.length - 1];
      const parts = last.split(';');
      if (parts.length === 2) {
        immagine = parts[1];
      }
    }
    // Trova prezzo: cerca la prima stringa che contiene ';' e dopo il ';' c'è un numero
    for (let i = 0; i < nullArr.length; i++) {
      const p = nullArr[i].split(';');
      if (p.length === 2 && !isNaN(Number(p[1].replace(/\D/g, ''))) && p[1].replace(/\D/g, '') !== '' && !p[1].includes('€')) {
        prezzo = parseFloat(p[1].replace(/\D/g, ''));
        break;
      }
    }
    if (!nome || !immagine) return null;
    return {
      id: nome + immagine,
      nome,
      prezzo,
      immagine
    };
  }
  if (catalogo === 'alimentare') {
    // Parsing specifico per catalogo_ecommerce_b2b_alimentare.json
    const nome = item.nome || '';
    const prezzoStr = item.prezzo || '';
    const prezzo = parseFloat(prezzoStr.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
    const immagine = item.immagine || '';
    
    if (!nome || prezzo <= 0) return null;
    return {
      id: nome + immagine,
      nome,
      prezzo,
      immagine
    };
  }
  // Default/compatibilità altri cataloghi
  const key = Object.keys(item)[0];
  const [id, settore, prodotto, prezzo] = item[key].split(';');
  const imgArr = item.null && item.null[0] ? item.null[0].split(';') : [];
  let immagine;
  if (imgArr[1]) immagine = imgArr[1]; // solo nome base, senza estensione
  if (!prodotto || !prezzo || parseFloat(prezzo.replace(/\D/g, '')) <= 0) return null;
  return {
    id: id || Math.random().toString(),
    settore: settore || '',
    nome: prodotto || '',
    prezzo: parseFloat(prezzo?.replace(/\D/g, '')) || 0,
    immagine
  };
};

const ProductImage = ({ imgName, catalogo, size }: { imgName: string, catalogo: string, size?: string }) => {
  const [currentExt, setCurrentExt] = useState(0);
  const paths = findProductImage(imgName, catalogo);
  const sizeClass = size === 'grande' ? 'w-80 h-80 md:w-[420px] md:h-[420px]' : 'w-32 h-32';
  if (!imgName || !paths || paths.length === 0) return <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Nessuna immagine</div>;
  return (
    <img
      src={paths[currentExt]}
      alt={imgName}
      className={`${sizeClass} object-contain mb-4`}
      onError={() => {
        if (currentExt < paths.length - 1) setCurrentExt(currentExt + 1);
      }}
    />
  );
};

const ArredoGrid = ({ prodotti }: { prodotti: any[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {prodotti.map(prodotto => (
      <div key={prodotto.id} className="flex flex-col md:flex-row bg-white/90 rounded-3xl shadow-2xl overflow-hidden border border-primary/10">
        <div className="flex-1 flex items-center justify-center bg-gray-50 p-8 min-h-[420px] min-w-[320px]">
          {prodotto.immagine && <ProductImage imgName={prodotto.immagine} catalogo="arredo" size="grande" />}
        </div>
        <div className="flex-1 flex flex-col justify-between p-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-bold mb-2">{prodotto.settore}</div>
            <div className="font-black text-2xl mb-2 text-dark-gray">{prodotto.nome}</div>
            <div className="text-primary font-black text-2xl mb-4">{prodotto.prezzo.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</div>
          </div>
          <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className="mt-4 bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">Aggiungi al carrello</button>
        </div>
      </div>
    ))}
  </div>
);

const EcommercePage = ({ onBack }: { onBack: () => void }) => {
  const [prodotti, setProdotti] = useState<any[]>([]);
  const [carrello, setCarrello] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [catalogo, setCatalogo] = useState('alimentare');
  const [showFan, setShowFan] = useState(true);
  const [fanFadeOut, setFanFadeOut] = useState(false);

  const categories: ProductCategory[] = [
    {
      key: 'informatica',
      title: 'Informatica',
      description: 'Notebook, desktop, server, networking e licenze software di ultima generazione.',
      image: '/images/informatica.jpg',
      accentColor: 'from-primary to-blue-600',
      cta: 'Scopri il mondo IT',
    },
    {
      key: 'arredo',
      title: 'Arredamento',
      description: "Mobili, scrivanie regolabili, sedute ergonomiche e design per ambienti di lavoro moderni.",
      image: '/images/arredo-ufficio.jpg',
      accentColor: 'from-secondary to-orange-600',
      cta: "Scopri l'arredo",
    },
    {
      key: 'forniture',
      title: 'Office',
      description: "Carta, cancelleria, toner, archiviazione e materiali essenziali per l'ufficio.",
      image: '/images/forniture-e-materiali.jpg',
      accentColor: 'from-tertiary-red to-red-600',
      cta: 'Scopri le forniture',
    },
    {
      key: 'alimentare',
      title: 'Horeca',
      description: "Macchinari, impianti, automazione e soluzioni su misura per l'industria alimentare.",
      image: '/images/3094495_banco-vendita-gastronomia-degustazione-arredo-negozio-industriale-vetrina-refrigerata.jpg',
      accentColor: 'from-green-700 to-lime-500',
      cta: 'Scopri il settore',
      comingSoon: false,
    },
  ];

  useEffect(() => {
    if (showFan) return;
    setLoading(true);
    let file = '';
    if (catalogo === 'alimentare') file = '/cataloghi/catalogo_ecommerce_b2b_alimentare.json';
    else if (catalogo === 'informatica') file = '/cataloghi/INFORMATICA.json';
    else if (catalogo === 'arredo') file = '/cataloghi/ARREDO.json';
    else if (catalogo === 'ufficio') file = '/cataloghi/UFFICIO.json';
    fetch(file)
      .then(res => res.json())
      .then(data => {
        setProdotti(data.map((item: any) => parseCatalogProduct(item, catalogo)));
        setLoading(false);
      });
  }, [catalogo, showFan]);

  // Mostra ventaglio all'inizio
  if (showFan) {
    return (
      <div className={`transition-opacity duration-700 ${fanFadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <ProductPreviewFan
          categories={categories}
          onSelectCategory={key => setCatalogo(key === 'forniture' ? 'ufficio' : key)}
          onEnterEcommerce={() => {
            setFanFadeOut(true);
            setTimeout(() => {
              setShowFan(false);
              setFanFadeOut(false);
            }, 600);
          }}
          onBackToSite={() => {
            setFanFadeOut(true);
            setTimeout(() => {
              onBack();
              setFanFadeOut(false);
            }, 600);
          }}
        />
      </div>
    );
  }

  const aggiungiAlCarrello = (prodotto: any) => {
    setCarrello(prev => [...prev, prodotto]);
  };
  const rimuoviDalCarrello = (id: string) => {
    setCarrello(prev => prev.filter(p => p.id !== id));
  };
  const totale = carrello.reduce((sum, p) => sum + p.prezzo, 0);

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container mx-auto px-4">
        <button onClick={onBack} className="mb-8 text-primary underline">&larr; Torna al sito</button>
        <h2 className="text-4xl font-black mb-6">Ecommerce</h2>
        <div className="mb-6 flex gap-4">
          <button onClick={() => setCatalogo('informatica')} className={`px-6 py-2 rounded-full font-bold ${catalogo==='informatica' ? 'bg-primary text-white' : 'bg-white border'}`}>Informatica</button>
          <button onClick={() => setCatalogo('arredo')} className={`px-6 py-2 rounded-full font-bold ${catalogo==='arredo' ? 'bg-primary text-white' : 'bg-white border'}`}>Arredo</button>
          <button onClick={() => setCatalogo('alimentare')} className={`px-6 py-2 rounded-full font-bold ${catalogo==='alimentare' ? 'bg-primary text-white' : 'bg-white border'}`}>Horeca</button>
          <button onClick={() => setCatalogo('ufficio')} className={`px-6 py-2 rounded-full font-bold ${catalogo==='ufficio' ? 'bg-primary text-white' : 'bg-white border'}`}>Office</button>
        </div>
        {catalogo === 'arredo'
          ? <ArredoGrid prodotti={prodotti.filter(p => p && p.nome && p.prezzo > 0)} />
          : <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {loading ? <div>Caricamento prodotti...</div> : prodotti.filter(p => p && p.nome && p.prezzo > 0).map(prodotto => (
                <div key={prodotto.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                  {prodotto.immagine && <ProductImage imgName={prodotto.immagine} catalogo={catalogo} />}
                  <div className="font-bold text-lg mb-2 text-center">{prodotto.nome}</div>
                  <div className="text-primary font-black text-xl mb-2">{prodotto.prezzo.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</div>
                  <button onClick={() => aggiungiAlCarrello(prodotto)} className="mt-auto bg-gradient-to-r from-secondary to-primary text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300">Aggiungi al carrello</button>
                </div>
              ))}
            </div>
        }
        <div className="fixed bottom-8 right-8 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-80">
            <h3 className="font-bold text-lg mb-2">Carrello</h3>
            {carrello.length === 0 ? <div className="text-dark-gray/60">Il carrello è vuoto</div> : (
              <ul className="mb-4 max-h-40 overflow-y-auto">
                {carrello.map((p, i) => (
                  <li key={i} className="flex justify-between items-center mb-2">
                    <span>{p.nome}</span>
                    <span>{p.prezzo.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</span>
                    <button onClick={() => rimuoviDalCarrello(p.id)} className="ml-2 text-tertiary-red font-bold">&times;</button>
                  </li>
                ))}
              </ul>
            )}
            <div className="font-bold text-xl mb-2">Totale: {totale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</div>
            <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300" disabled={carrello.length===0}>Procedi all'ordine</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const EcommerceUfficioPage = () => {
  const [prodottiUfficio, setProdottiUfficio] = useState<any[]>([]);

  useEffect(() => {
    if (prodottiUfficio.length === 0) {
      fetch('/cataloghi/UFFICIO.json')
        .then(res => res.json())
        .then(data => {
          // Parsing simile a quello già usato per altri cataloghi
          const prodotti = data.map((item: any) => {
            let nome = '';
            let descrizione = '';
            let prezzo = '';
            let immagine = '';
            // Parsing generico
            const nullArr = item.null || [];
            // Trova nome e immagine
            if (nullArr.length > 0) {
              const last = nullArr[nullArr.length - 1];
              const parts = last.split(';');
              if (parts.length > 1) {
                prezzo = parts[0].replace('00 €', '').trim();
                immagine = parts[1];
              } else {
                immagine = parts[0];
              }
            }
            // Trova nome prodotto
            for (const key in item) {
              if (key.includes(';')) {
                nome = item[key];
              }
            }
            // Trova descrizione
            for (const key in item) {
              if (key.startsWith('00 €')) {
                descrizione = item[key];
              }
            }
            return { nome, descrizione, prezzo, immagine };
          });
          setProdottiUfficio(prodotti);
        });
    }
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-black text-primary mb-10 text-center">Ecommerce Ufficio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {prodottiUfficio.map((prodotto, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-full aspect-square flex items-center justify-center mb-4">
              <img
                src={`/images/ecommerce/ufficio/${prodotto.immagine}.webp`}
                alt={prodotto.nome}
                className="object-contain w-full h-full rounded-xl"
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <h3 className="text-lg font-bold text-dark-gray mb-2 text-center">{prodotto.nome}</h3>
            <p className="text-gray-500 text-sm mb-2 text-center">{prodotto.descrizione}</p>
            <div className="text-primary font-black text-xl mb-2">{prodotto.prezzo ? prodotto.prezzo + ' €' : ''}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [showQuoteRequest, setShowQuoteRequest] = useState(false);
  const [showEcommerce, setShowEcommerce] = useState(false);
  const [page, setPage] = useState<'home' | 'ecommerce' | 'ecommerce-ufficio'>('home');

  const handleShowQuoteRequest = () => {
    setShowQuoteRequest(true);
  };

  const handleBackToSite = () => {
    setShowQuoteRequest(false);
  };

  if (showEcommerce) return <EcommercePage onBack={() => setShowEcommerce(false)} />;

  return (
    <>
      <Header onEcommerce={() => setShowEcommerce(true)} />
      <HeroSection />
      <SettoriPrincipali />
      <ApproccioLavoro />
      <PartnerSection />
      <CatalogoSettori onQuoteRequest={handleShowQuoteRequest} />
      <ContattiSection onQuoteRequest={handleShowQuoteRequest} />
      <Footer />
      {page === 'ecommerce-ufficio' && <EcommerceUfficioPage />}
    </>
  );
};

export default App;