import React, { useState, useEffect, useRef } from 'react';
import { Monitor, PenTool, Armchair as Chair, Layers, Ear, Lightbulb, Headphones, Laptop, FileText, Building, Video, Mail, MapPin, Phone, Menu, X, Users, Shield, Zap, Star, Award, TrendingUp, CheckCircle, ArrowRight, Play, Lock, Eye, EyeOff, Save, Download, Bold, Italic, List, ListOrdered, Quote, Code, Link, Image, Undo, Redo, Calendar, User, Briefcase, Globe, Hash, CreditCard, FileText as FileTextIcon } from 'lucide-react';
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white border-b border-gray-200 py-4 shadow-sm' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100 py-5'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="/images/logo/logodef.svg" 
              alt="B2B Group Logo" 
              className="h-8 md:h-12 w-auto object-contain"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('settori')} className="text-xs font-bold text-dark-gray hover:text-primary transition-colors tracking-widest uppercase">
              Settori
            </button>
            <button onClick={() => scrollToSection('approccio')} className="text-xs font-bold text-dark-gray hover:text-primary transition-colors tracking-widest uppercase">
              Metodologia
            </button>
            <button onClick={() => scrollToSection('catalogo')} className="text-xs font-bold text-dark-gray hover:text-primary transition-colors tracking-widest uppercase">
              Catalogo
            </button>
            <button onClick={onEcommerce} className="text-xs font-bold text-dark-gray hover:text-primary transition-colors tracking-widest uppercase flex items-center gap-2">
              Ecommerce
            </button>
            <button onClick={() => scrollToSection('contatti')} className="bg-dark-gray text-white px-6 py-2 rounded-[2px] border border-dark-gray hover:bg-transparent hover:text-dark-gray transition-colors font-bold text-xs uppercase tracking-widest">
              Contattaci
            </button>
          </nav>

          <button 
            className="md:hidden relative z-10 text-dark-gray p-2 hover:bg-gray-50 rounded-[2px] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-5 pb-5 border-t border-gray-100 pt-5 bg-white shadow-xl absolute left-0 right-0 px-6 top-full">
            <div className="flex flex-col space-y-1">
              <button onClick={() => scrollToSection('settori')} className="text-left px-2 py-3 text-xs text-dark-gray hover:text-primary font-bold uppercase tracking-widest transition-colors border-b border-gray-50">
                Settori
              </button>
              <button onClick={() => scrollToSection('approccio')} className="text-left px-2 py-3 text-xs text-dark-gray hover:text-primary font-bold uppercase tracking-widest transition-colors border-b border-gray-50">
                Metodologia
              </button>
              <button onClick={() => scrollToSection('catalogo')} className="text-left px-2 py-3 text-xs text-dark-gray hover:text-primary font-bold uppercase tracking-widest transition-colors border-b border-gray-50">
                Catalogo
              </button>
              <button onClick={() => scrollToSection('contatti')} className="text-center px-2 py-3 text-xs bg-dark-gray text-white font-bold uppercase tracking-widest mt-4 rounded-[2px]">
                Contattaci
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] bg-cream flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center space-x-3 bg-white border border-gray-200 px-4 py-2 shadow-sm rounded-[2px]">
            <div className="w-2 h-2 bg-primary rounded-[1px]"></div>
            <span className="text-dark-gray text-xs font-bold uppercase tracking-widest">Soluzioni Enterprise B2B</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-dark-gray leading-[1.05] tracking-tight">
            Asset e <br />
            Forniture per <br />
            <span className="text-primary">l'Impresa.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-lg border-l-2 border-primary pl-6">
            Infrastrutture IT, arredi direzionali e impianti industriali integrati. Un unico partner affidabile per l'espansione e l'efficienza aziendale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button 
              onClick={() => scrollToSection('contatti')}
              className="bg-primary text-white border border-primary px-8 py-4 text-xs font-bold uppercase tracking-widest shadow-sm hover:bg-white hover:text-primary transition-colors flex items-center justify-center group rounded-[2px]"
            >
              Richiedi Consulenza
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('catalogo')}
              className="bg-white border border-gray-300 text-dark-gray px-8 py-4 text-xs font-bold uppercase tracking-widest shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center rounded-[2px] hover:border-dark-gray"
            >
              Esplora Settori
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-200">
            <div>
              <div className="text-3xl font-black text-dark-gray tracking-tight">500<span className="text-primary">+</span></div>
              <div className="text-xs text-secondary font-bold mt-2 uppercase tracking-wider">Clienti</div>
            </div>
            <div>
              <div className="text-3xl font-black text-dark-gray tracking-tight">15<span className="text-primary">+</span></div>
              <div className="text-xs text-secondary font-bold mt-2 uppercase tracking-wider">Anni</div>
            </div>
            <div>
              <div className="text-3xl font-black text-dark-gray tracking-tight">24/7</div>
              <div className="text-xs text-secondary font-bold mt-2 uppercase tracking-wider">Supporto</div>
            </div>
          </div>
        </div>

        <div className="w-full relative min-h-[500px]">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[2px] bg-gray-200 border border-gray-200 rounded-[2px] overflow-hidden shadow-lg p-[2px]">
            <div className="bg-white p-8 flex flex-col justify-between group hover:bg-gray-50 transition-colors relative overflow-hidden">
              <Monitor className="w-8 h-8 text-primary mb-6" />
              <div>
                <h3 className="font-bold text-dark-gray text-xl mb-1 uppercase tracking-tight">Informatica</h3>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Server & IT</p>
              </div>
            </div>
            <div className="bg-dark-gray p-8 flex flex-col justify-between group hover:bg-[#15203b] transition-colors relative overflow-hidden">
              <Layers className="w-8 h-8 text-secondary mb-6 relative z-10" />
              <div className="relative z-10">
                <h3 className="font-bold text-white text-xl mb-1 uppercase tracking-tight">Horeca</h3>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Impianti & Auto</p>
              </div>
            </div>
            <div className="bg-primary p-8 flex flex-col justify-between group hover:bg-primary-dark transition-colors relative overflow-hidden">
               <Chair className="w-8 h-8 text-white mb-6 relative z-10" />
               <div className="relative z-10">
                 <h3 className="font-bold text-white text-xl mb-1 uppercase tracking-tight">Arredo</h3>
                 <p className="text-xs text-white/80 font-semibold uppercase tracking-wider">Uffici & Design</p>
               </div>
            </div>
            <div className="bg-white p-8 flex flex-col justify-between group hover:bg-gray-50 transition-colors relative overflow-hidden">
               <FileText className="w-8 h-8 text-primary mb-6" />
               <div>
                 <h3 className="font-bold text-dark-gray text-xl mb-1 uppercase tracking-tight">Office</h3>
                 <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Consumabili</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SettoriPrincipali = () => {
  const settori = [
    {
      icon: Monitor,
      title: "Informatica Professional",
      description: "Hardware enterprise, server, reti, licensing e soluzioni cloud integrate.",
      features: ["Consulenza IT", "Fornitura Client", "Networking", "Software"],
    },
    {
      icon: Chair,
      title: "Arredo Direzionale",
      description: "Progettazione e fornitura di arredi operativi ed ergonomici su misura per uffici e sale riunioni.",
      features: ["Ergonomia", "Materiali Premium", "Uffici Chiavi in Mano", "Design"],
    },
    {
      icon: Layers,
      title: "Forniture Horeca",
      description: "Impianti alimentari, macchinari d'automazione e linee produttive ad alte prestazioni.",
      features: ["Automazione", "Linee di Confezionamento", "Attrezzature Industriali", "Progetti Custom"],
    },
    {
      icon: FileText,
      title: "Consumabili Corporate",
      description: "Approvvigionamento di materiale di cancelleria, consumabili stampa e accessori da ufficio.",
      features: ["Stock Garantito", "Consegne Programmate", "Materiali Certificati", "Eco-Friendly"],
    },
  ];

  return (
    <section id="settori" className="py-24 bg-white relative border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center space-x-3 bg-gray-50 border border-gray-200 px-4 py-2 shadow-sm rounded-[2px] mb-6">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-dark-gray text-xs font-bold uppercase tracking-widest">Aree di Intervento</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-dark-gray tracking-tight uppercase">
              I Nostri <span className="text-primary">Settori</span>
            </h2>
          </div>
          <p className="text-lg text-gray-500 font-medium max-w-xl leading-relaxed border-l-2 border-gray-200 pl-6">
            Interveniamo a più livelli per fornire ad ogni impresa gli strumenti operativi e gli spazi essenziali alla propria espansione.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-[2px] bg-gray-200 border border-gray-200 rounded-[2px] overflow-hidden">
          {settori.map((settore, index) => (
            <div 
              key={index}
              className="bg-white p-10 hover:bg-gray-50 transition-colors group relative"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <settore.icon className="w-32 h-32 text-dark-gray" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <settore.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-black text-dark-gray mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">
                    {settore.title}
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    {settore.description}
                  </p>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-y-4 gap-x-2 pt-8 border-t border-gray-100">
                  {settore.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs font-bold text-dark-gray uppercase tracking-widest">
                      <span className="w-1 h-1 bg-primary mr-2 block"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ApproccioLavoro = () => {
  const steps = [
    {
      title: "Audit e Analisi",
      description: "Affianchiamo le aziende nell'analisi dettagliata dello stato di fatto, intercettando criticità e inefficienze operative.",
      number: "01"
    },
    {
      title: "Progettazione e Preventivo",
      description: "Elaboriamo proposte strutturate, calcolando l'impatto tecnico-economico e dimensionando soluzioni su misura.",
      number: "02"
    },
    {
      title: "Deploy e Installazione",
      description: "Il nostro team si occupa dell'approvvigionamento e dell'integrazione sul campo, assicurando l'operatività del cliente.",
      number: "03"
    },
    {
      title: "Assistance & Support",
      description: "Garantiamo SLA rigorosi, manutenzione preventiva e assistenza attiva 24/7 post fornitura.",
      number: "04"
    }
  ];

  return (
    <section id="approccio" className="py-24 bg-dark-gray relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 shadow-sm rounded-[2px] mb-6">
              <Zap className="w-4 h-4 text-white/50" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Sistema Testato</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-white uppercase">
              Metodologia <br/>Operativa
            </h2>
          </div>
          <p className="text-lg text-gray-400 font-medium max-w-xl leading-relaxed border-l-2 border-white/10 pl-6">
            Garantiamo processi trasparenti, tempistiche rigorose e risultati misurabili. Nessun intermediario aggiuntivo, un solo interlocutore per un'efficienza Enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-[2px] bg-white/10 border border-white/10 rounded-[2px] overflow-hidden shadow-2xl">
          {steps.map((step, index) => (
            <div key={index} className="bg-dark-gray p-8 group hover:bg-[#15203b] transition-colors relative">
              <div className="absolute right-6 top-6 text-6xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10 pt-16">
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-12">
            <div>
              <div className="text-5xl font-black text-white tracking-tight">98%</div>
              <div className="text-xs text-primary font-bold uppercase tracking-widest mt-3">Retention Clienti</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white tracking-tight">48<span className="text-primary text-3xl">h</span></div>
              <div className="text-xs text-primary font-bold uppercase tracking-widest mt-3">SLA Garantito</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white tracking-tight">15<span className="text-primary text-3xl">+</span></div>
              <div className="text-xs text-primary font-bold uppercase tracking-widest mt-3">Anni di Attività</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white tracking-tight">100%</div>
              <div className="text-xs text-primary font-bold uppercase tracking-widest mt-3">Gestione In-house</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerSection = () => {
  const partners = [
    { name: "Microsoft", category: "Software & Cloud", logo: "/images/fornitori/Microsoft_logo.svg" },
    { name: "Intel", category: "Hardware", logo: "/images/fornitori/Intel_logo.svg" },
    { name: "Lenovo", category: "Computing", logo: "/images/fornitori/Lenovo_logo.svg" },
    { name: "Epson", category: "Printing", logo: "/images/fornitori/Epson_logo.svg" },
    { name: "Herman Miller", category: "Furniture", logo: "/images/fornitori/HermanMiller_logo.svg" },
    { name: "Vitra", category: "Design", logo: "/images/fornitori/Logo_vitra.svg" },
    { name: "Fellowes", category: "Office Solutions", logo: "/images/fornitori/Fellowes_Brands_logo.svg" },
    { name: "Logitech", category: "Peripherals", logo: "/images/fornitori/Logitech_logo.svg" }
  ];

  return (
    <section className="py-24 bg-white relative border-t border-gray-200">
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-16 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center space-x-3 bg-gray-50 border border-gray-200 px-4 py-2 shadow-sm rounded-[2px] mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-dark-gray text-xs font-bold uppercase tracking-widest">Partnership Inoltrate</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark-gray mb-4 tracking-tight uppercase">
            Network <span className="text-primary">Fornitori</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            Selezioniamo i brand leader del mercato per garantire i più alti standard qualitativi nelle forniture aziendali.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-gray-200 border border-gray-200 rounded-[2px] overflow-hidden shadow-sm">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group relative bg-white p-10 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center min-h-[200px]"
            >
              <div className="w-32 h-16 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute bottom-4 text-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  {partner.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CatalogoSettori = ({ onQuoteRequest }: { onQuoteRequest: () => void }) => {
  const cataloghi = [
    {
      title: "Informatica",
      description: "Notebook, desktop, server, NAS, networking e licenze software aziendali.",
      icon: Laptop,
      image: "/images/informatica.jpg",
      features: ["Hardware Enterprise", "Cloud Solutions", "Cybersecurity", "Software Licensing"],
      stats: "2000+ Prodotti"
    },
    {
      title: "Arredamento",
      description: "Spazi operativi e direzionali progettati per l'efficienza organizzativa.",
      icon: Chair,
      image: "/images/arredo-ufficio.jpg",
      features: ["Design Ergonomico", "Materiali Premium", "Personalizzazione", "Spazi Chiavi in Mano"],
      stats: "1000+ Soluzioni"
    },
    {
      title: "Consumabili",
      description: "Ufficio strutturato con fornitura ricorrente di materiale tecnico e consumabili.",
      icon: FileText,
      image: "/images/forniture-e-materiali.jpg",
      features: ["Stock Garantito", "Consegna Express", "Certificazioni", "Bulk Pricing"],
      stats: "5000+ Articoli",
      comingSoon: true,
      comingSoonText: 'Q3 2026',
    },
    {
      title: "Horeca",
      description: "Sistemi automatizzati, impianti industriali e macchinari di alto livello.",
      icon: Layers,
      image: "/images/3094495_banco-vendita-gastronomia-degustazione-arredo-negozio-industriale-vetrina-refrigerata.jpg",
      features: ["Impianti Alimentari", "Linee Produzione", "Confezionamento", "Automazione"],
      stats: "500+ Macchinari"
    },
  ];

  return (
    <section id="catalogo" className="py-24 relative bg-cream border-t border-gray-200">
      <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white border border-gray-200 px-4 py-2 shadow-sm rounded-[2px] mb-6">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-dark-gray text-xs font-bold uppercase tracking-widest">Offerta Prodotti</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-dark-gray mb-4 tracking-tight uppercase">
            Catalogo <span className="text-primary">Forniture</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            Scopri la nostra gamma completa organizzata per settore divisionale.
          </p>
        </div>

        <div className="space-y-[2px] bg-gray-200 border border-gray-200 rounded-[2px] overflow-hidden shadow-sm">
          {cataloghi.map((catalogo, index) => (
            <div 
              key={index}
              className={`p-10 md:p-16 bg-white relative group ${catalogo.comingSoon ? 'grayscale opacity-70' : ''}`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-[2px] flex items-center justify-center shadow-sm">
                      <catalogo.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-dark-gray uppercase tracking-tight">
                        {catalogo.title}
                      </h3>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                        {catalogo.comingSoon ? catalogo.comingSoonText : catalogo.stats}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 font-medium leading-relaxed border-l-2 border-primary pl-4">
                    {catalogo.description}
                  </p>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-4 pt-4">
                    {catalogo.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-dark-gray text-xs font-bold uppercase tracking-widest">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative border border-gray-200 rounded-[2px] overflow-hidden shadow-sm aspect-video">
                    <img 
                      src={catalogo.image} 
                      alt={catalogo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 transition-colors pointer-events-none z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContattiSection = ({ onQuoteRequest }: { onQuoteRequest: () => void }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
    alert('Messaggio inviato! Ti contatteremo presto.');
    setFormData({ nome: '', email: '', messaggio: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contatti" className="py-24 bg-dark-gray relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 shadow-sm rounded-[2px] mb-6">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">Inizia il Progetto</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Contattaci
          </h2>
          <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed border-l-2 border-primary pl-4 text-left">
            Richiedi un audit operativo gratuito o un preventivo di fornitura. Tempi di risposta medi: under 24h.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-[2px] bg-white/10 border border-white/10 rounded-[2px] p-[2px] shadow-2xl">
          {/* Contatti */}
          <div className="flex flex-col gap-[2px]">
            <div className="group flex flex-col items-start gap-4 bg-dark-gray p-8 hover:bg-[#15203b] transition-colors relative h-full">
              <MapPin className="w-8 h-8 text-white mb-2" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1 uppercase">Sede Operativa</h3>
                <p className="text-white/60 text-sm font-medium mb-4">Via Nazionale delle Puglie, 7<br/>Casalnuovo di Napoli (NA), 80013</p>
                <a href="https://www.google.com/maps?q=Via+Nazionale+delle+Puglie,+7,+Casalnuovo+di+Napoli+(NA)" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white uppercase text-[10px] font-bold tracking-widest flex items-center gap-1 transition-colors">Google Maps <ArrowRight className="w-3 h-3" /></a>
              </div>
            </div>
            <div className="group flex flex-col items-start gap-4 bg-dark-gray p-8 hover:bg-[#15203b] transition-colors relative h-full">
              <MapPin className="w-8 h-8 text-white mb-2" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1 uppercase">Sede Legale</h3>
                <p className="text-white/60 text-sm font-medium mb-4">Via San Lazzaro, 55<br/>Frignano (CE), 81030</p>
                <a href="https://www.google.com/maps?q=Via+San+Lazzaro,+55,+Frignano+(CE)" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white uppercase text-[10px] font-bold tracking-widest flex items-center gap-1 transition-colors">Google Maps <ArrowRight className="w-3 h-3" /></a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-[2px]">
              <div className="group flex flex-col items-start gap-4 bg-dark-gray p-8 hover:bg-[#15203b] transition-colors relative h-full">
                <Phone className="w-8 h-8 text-white mb-2" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 uppercase">Telefono</h3>
                  <p className="text-white/80 text-sm font-bold">+39 081 1893 9337</p>
                  <p className="text-white/40 text-xs font-medium mt-1">H24/7</p>
                </div>
              </div>
              <div className="group flex flex-col items-start gap-4 bg-dark-gray p-8 hover:bg-[#15203b] transition-colors relative h-full">
                <Calendar className="w-8 h-8 text-white mb-2" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 uppercase">Orari</h3>
                  <div className="text-white/80 text-sm font-medium">L-V: 08-18<br/>S: 09-13</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="bg-dark-gray p-12 h-full flex flex-col justify-center relative group">
               <Mail className="w-8 h-8 text-primary mb-6" />
               <h3 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">Email Diretta</h3>
               <p className="text-white/60 font-medium mb-12">Scrivici direttamente per ricevere documentazione, listini o un primo audit.</p>
               
               <div className="space-y-4 mb-12">
                 <div>
                   <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Informazioni Commerciali</p>
                   <p className="text-white text-xl font-bold">info@b2b-group.it</p>
                 </div>
                 <div>
                   <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Amministrazione PEC</p>
                   <p className="text-white text-xl font-bold">b2bgroupsrls@pec.it</p>
                 </div>
               </div>

               <a 
                 href="mailto:info@b2b-group.it"
                 className="mt-auto inline-flex items-center justify-center bg-primary text-white border border-primary px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-white transition-colors duration-300 w-full rounded-[2px]"
               >
                 Invia Richiesta
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0b101d] py-10 border-t border-white/5">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center border-b border-white/5 pb-10 mb-6">
        <div>
           <img src="/images/logo/logodef.svg" alt="B2B Group Logo" className="h-8 grayscale brightness-200 opacity-60 mb-4" />
           <p className="text-white/40 text-xs font-medium max-w-sm">Asset e forniture di alto livello progettate per supportare l'espansione del tuo business in ambito IT, office, arredo direzionale e impianti industriali.</p>
        </div>
        <div className="flex flex-col md:items-end">
           <a href="mailto:info@b2b-group.it" className="inline-block border border-white/20 text-white text-xs font-bold px-8 py-3 rounded-[2px] hover:bg-white hover:text-dark-gray transition-colors tracking-widest uppercase">
             Richiedi Preventivo Rapido
           </a>
        </div>
      </div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} B2B Group SRLS. P.IVA 09292831210. Tutti i diritti riservati.
        </p>
        <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-4 md:mt-0 flex gap-4">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Termini Legali</a>
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