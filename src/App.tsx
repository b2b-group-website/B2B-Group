import React, { useState, useEffect, useRef } from 'react';
import { Monitor, PenTool, Armchair as Chair, Layers, Ear, Lightbulb, Headphones, Laptop, FileText, Building, Video, Mail, MapPin, Phone, Menu, X, ChevronRight, Users, Shield, Zap, Star, Award, TrendingUp, CheckCircle, ArrowRight, Play, Lock, Eye, EyeOff, Save, Download, Bold, Italic, List, ListOrdered, Quote, Code, Link, Image, Undo, Redo, Calendar, User, Briefcase, Globe, Hash, CreditCard, FileText as FileTextIcon } from 'lucide-react';
import ProductPreviewFan, { ProductCategory } from "./ProductPreviewFan";

const Header = ({ onEcommerce }: { onEcommerce?: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-primary/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/images/logo/b2bgrouplogo.svg" 
                alt="B2B Group Logo" 
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('settori')} className="relative text-dark-gray hover:text-primary transition-all duration-300 font-semibold group">
              Settori
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('approccio')} className="relative text-dark-gray hover:text-primary transition-all duration-300 font-semibold group">
              Approccio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('catalogo')} className="relative text-dark-gray hover:text-primary transition-all duration-300 font-semibold group">
              Catalogo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={onEcommerce} className="relative text-dark-gray hover:text-primary transition-all duration-300 font-semibold group">
              Ecommerce
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('contatti')} className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold relative overflow-hidden group">
              <span className="relative z-10">Contatti</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </nav>

          <button 
            className="md:hidden relative z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-primary/20 pt-6 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('settori')} className="text-left text-dark-gray hover:text-primary transition-colors font-semibold">
                Settori
              </button>
              <button onClick={() => scrollToSection('approccio')} className="text-left text-dark-gray hover:text-primary transition-colors font-semibold">
                Approccio
              </button>
              <button onClick={() => scrollToSection('catalogo')} className="text-left text-dark-gray hover:text-primary transition-colors font-semibold">
                Catalogo
              </button>
              <button onClick={() => scrollToSection('contatti')} className="text-left bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 w-fit font-semibold">
                Contatti
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { icon: Monitor, color: 'from-primary to-blue-600' },
    { icon: Chair, color: 'from-secondary to-orange-600' },
    { icon: FileText, color: 'from-tertiary-red to-red-600' },
    { icon: Layers, color: 'from-purple-600 to-pink-600' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-white to-cream overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-tertiary-red/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-secondary/10 to-tertiary-red/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full border border-primary/20">
                <Star className="w-5 h-5 text-secondary" />
                <span className="text-primary font-semibold">Soluzioni Premium per Imprese</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-dark-gray leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-tertiary-red bg-clip-text text-transparent">
                  Soluzioni complete
                </span>
                <br />
                <span className="text-dark-gray">per l'impresa</span>
                <br />
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  moderna
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-dark-gray/80 font-light leading-relaxed max-w-2xl">
                <span className="font-semibold text-primary">Informatica</span>, 
                <span className="font-semibold text-secondary"> arredo</span> e 
                <span className="font-semibold text-tertiary-red"> materiali per impresa</span> — 
                forniture professionali per imprese di ogni dimensione.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contatti')}
                className="group bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Contattaci Ora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-primary">500+</div>
                <div className="text-sm text-dark-gray/60 font-semibold">Clienti Soddisfatti</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-secondary">15+</div>
                <div className="text-sm text-dark-gray/60 font-semibold">Anni di Esperienza</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-tertiary-red">24/7</div>
                <div className="text-sm text-dark-gray/60 font-semibold">Supporto Tecnico</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-primary/10">
              {/* Animated Cards */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`relative rounded-2xl p-6 transition-all duration-500 transform ${
                      currentSlide === index 
                        ? 'scale-110 shadow-2xl z-10' 
                        : 'scale-100 shadow-lg hover:scale-105'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} rounded-2xl opacity-10`}></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <slide.icon className={`w-12 h-12 ${
                        currentSlide === index ? 'text-white' : 'text-primary'
                      } transition-colors duration-500`} />
                    </div>
                    {currentSlide === index && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} rounded-2xl animate-pulse`}></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-black text-dark-gray">Tutto per la tua impresa</h3>
                <p className="text-dark-gray/70 font-semibold">in un'unica soluzione professionale</p>
                
                <div className="flex justify-center space-x-2 pt-4">
                  {slides.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index 
                          ? 'bg-gradient-to-r from-primary to-secondary scale-125' 
                          : 'bg-dark-gray/20'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-secondary to-tertiary-red rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full animate-bounce delay-1000"></div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-2xl"></div>
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
      title: "Informatica professionale",
      description: "PC, server, reti, software, periferiche di ultima generazione",
      color: "from-primary to-blue-600",
      bgColor: "from-primary/10 to-blue-100/50",
      stats: "2000+ Dispositivi",
      features: ["Hardware Enterprise", "Software Licensing", "Cloud Solutions", "Cybersecurity"]
    },
    {
      icon: PenTool,
      title: "Forniture per impresa",
      description: "Carta, toner, accessori, cancelleria di qualità premium",
      color: "from-secondary to-orange-600",
      bgColor: "from-secondary/10 to-orange-100/50",
      stats: "5000+ Prodotti",
      features: ["Materiali Premium", "Consegna Rapida", "Stock Garantito", "Eco-Friendly"]
    },
    {
      icon: Chair,
      title: "Arredo per impresa",
      description: "Scrivanie, sedute ergonomiche, scaffalature design",
      color: "from-tertiary-red to-red-600",
      bgColor: "from-tertiary-red/10 to-red-100/50",
      stats: "1000+ Soluzioni",
      features: ["Design Ergonomico", "Materiali Premium", "Personalizzazione", "Garanzia Estesa"]
    },
    {
      icon: Layers, // Puoi scegliere un'icona più adatta se vuoi
      title: "Macchinari industriali",
      description: "Forniture di macchinari industriali per industrie alimentari e non: linee di produzione, confezionamento, automazione, impianti su misura",
      color: "from-green-700 to-lime-500",
      bgColor: "from-green-100/50 to-lime-100/50",
      stats: "500+ Macchinari",
      features: [
        "Impianti alimentari",
        "Linee di confezionamento",
        "Automazione industriale",
        "Soluzioni personalizzate"
      ]
    },
  ];

  return (
    <section id="settori" className="py-24 bg-gradient-to-br from-white via-cream to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23107A72' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">I Nostri Settori di Eccellenza</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-dark-gray mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Settori Principali
            </span>
          </h2>
          <p className="text-xl text-dark-gray/70 font-light max-w-3xl mx-auto leading-relaxed">
            Offriamo soluzioni complete e innovative per ogni esigenza imprenditoriale, 
            dalla tecnologia all'arredo, con un approccio integrato e personalizzato
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {settori.map((settore, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-primary/10 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${settore.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${settore.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <settore.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {settore.stats}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-dark-gray mb-4 group-hover:text-primary transition-colors duration-300">
                  {settore.title}
                </h3>
                
                <p className="text-dark-gray/70 font-light leading-relaxed mb-6">
                  {settore.description}
                </p>

                <div className="space-y-3 mb-6">
                  {settore.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span className="text-dark-gray font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
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
      icon: Ear,
      title: "Ascolto attivo",
      description: "Analizziamo le tue esigenze reali attraverso consulenze personalizzate",
      details: ["Audit completo", "Analisi workflow", "Identificazione criticità", "Pianificazione budget"],
      color: "from-primary to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Progettazione su misura",
      description: "Combinazione ottimale tra tecnologia, spazio e produttività",
      details: ["Design 3D", "Prototipazione", "Test funzionali", "Ottimizzazione layout"],
      color: "from-secondary to-orange-600"
    },
    {
      icon: Headphones,
      title: "Fornitura e supporto",
      description: "Consegna rapida, installazione professionale, assistenza garantita",
      details: ["Consegna express", "Installazione certificata", "Training team", "Supporto 24/7"],
      color: "from-tertiary-red to-red-600"
    }
  ];

  return (
    <section id="approccio" className="py-24 bg-gradient-to-br from-tertiary-dark via-gray-900 to-tertiary-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
            <TrendingUp className="w-5 h-5 text-secondary" />
            <span className="text-white font-semibold">Metodologia Consolidata</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Il nostro <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">approccio</span>
          </h2>
          <p className="text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            Un metodo consolidato e testato per garantire il successo del tuo progetto, 
            dalla consulenza iniziale al supporto post-vendita
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-white/30 to-transparent z-0"></div>
              )}
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <step.icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/80 font-light leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-left">
                        <div className="w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
                        <span className="text-white/70 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-secondary mb-2">98%</div>
                <div className="text-white/80 font-semibold">Soddisfazione Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">72h</div>
                <div className="text-white/80 font-semibold">Tempo Medio Consegna</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-secondary mb-2">15+</div>
                <div className="text-white/80 font-semibold">Anni Esperienza</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">500+</div>
                <div className="text-white/80 font-semibold">Progetti Completati</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerSection = () => {
  const partners = [
    { 
      name: "Microsoft", 
      category: "Software & Cloud",
      logo: "/images/fornitori/Microsoft_logo.svg"
    },
    { 
      name: "Intel", 
      category: "Hardware",
      logo: "/images/fornitori/Intel_logo.svg"
    },
    { 
      name: "Lenovo", 
      category: "Computing",
      logo: "/images/fornitori/Lenovo_logo.svg"
    },
    { 
      name: "Epson", 
      category: "Printing",
      logo: "/images/fornitori/Epson_logo.svg"
    },
    { 
      name: "Herman Miller", 
      category: "Furniture",
      logo: "/images/fornitori/HermanMiller_logo.svg"
    },
    { 
      name: "Vitra", 
      category: "Design",
      logo: "/images/fornitori/Logo_vitra.svg"
    },
    { 
      name: "Fellowes", 
      category: "Office Solutions",
      logo: "/images/fornitori/Fellowes_Brands_logo.svg"
    },
    { 
      name: "Logitech", 
      category: "Peripherals",
      logo: "/images/fornitori/Logitech_logo.svg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23107A72' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Partnership di Eccellenza</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-dark-gray mb-4">
            I nostri <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">partner</span>
          </h2>
          <p className="text-lg text-dark-gray/70 font-light max-w-2xl mx-auto">
            Collaboriamo con i migliori brand del settore per offrirti soluzioni all'avanguardia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-primary/10 hover:border-secondary/30 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center space-y-4">
                <div className="w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <div>
                  <h3 className="font-black text-dark-gray group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-dark-gray/60 font-semibold mt-1">
                    {partner.category}
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-secondary to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-black text-dark-gray">Diventa nostro partner</h3>
                  <p className="text-dark-gray/70 font-medium">Unisciti alla nostra rete di eccellenza</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CatalogoSettori = ({ onQuoteRequest }: { onQuoteRequest: () => void }) => {
  const cataloghi = [
    {
      title: "Informatica",
      description: "Notebook, desktop, server, NAS, networking, licenze software di ultima generazione per la massima produttività aziendale",
      icon: Laptop,
      image: "/images/informatica.jpg",
      background: "cream",
      features: ["Hardware Enterprise", "Cloud Solutions", "Cybersecurity", "Software Licensing"],
      stats: "2000+ Prodotti",
      color: "from-primary to-blue-600"
    },
    {
      title: "Arredo ufficio",
      description: "Mobili, scrivanie regolabili, sedute ergonomiche e design per ambienti di lavoro moderni.",
      icon: Chair,
      image: "/images/arredo-ufficio.jpg",
      background: "white",
      features: ["Design Ergonomico", "Materiali Premium", "Personalizzazione", "Sostenibilità"],
      stats: "1000+ Soluzioni",
      color: "from-secondary to-orange-600"
    },
    {
      title: "Forniture da ufficio",
      description: "Carta, cancelleria, toner, archiviazione e materiali essenziali per l'ufficio.",
      icon: FileText,
      image: "/images/forniture-e-materiali.jpg",
      background: "cream",
      features: ["Stock Garantito", "Consegna Express", "Eco-Friendly", "Bulk Pricing"],
      stats: "5000+ Articoli",
      color: "from-tertiary-red to-red-600",
      comingSoon: true,
      comingSoonText: 'In arrivo a breve!',
    },
    {
      title: "Macchinari industriali",
      description: "Macchinari e impianti per industrie alimentari e non: produzione, confezionamento, automazione, soluzioni su misura per ogni esigenza industriale",
      icon: Layers, // Puoi scegliere un'icona più adatta se vuoi
      image: "/images/3094495_banco-vendita-gastronomia-degustazione-arredo-negozio-industriale-vetrina-refrigerata.jpg",
      background: "cream",
      features: [
        "Impianti alimentari",
        "Linee di produzione",
        "Confezionamento",
        "Automazione industriale"
      ],
      stats: "500+ Macchinari",
      color: "from-green-700 to-lime-500"
    },
  ];

  return (
    <section id="catalogo" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Layers className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Catalogo Completo</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-dark-gray mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Catalogo
            </span> per settori
          </h2>
          <p className="text-xl text-dark-gray/70 font-light max-w-3xl mx-auto leading-relaxed">
            Scopri la nostra gamma completa di prodotti e servizi organizzati per settore, 
            con soluzioni innovative per ogni esigenza imprenditoriale
          </p>
        </div>

        <div className="space-y-0">
          {cataloghi.map((catalogo, index) => (
            <div 
              key={index}
              className={`py-20 px-10 md:px-20 relative ${catalogo.background === 'cream' ? 'bg-gradient-to-br from-cream to-white' : 'bg-gradient-to-br from-white to-cream'}`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23107A72' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>

              <div className="relative z-10">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${catalogo.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <catalogo.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-black text-dark-gray">
                          {catalogo.title}
                        </h3>
                        <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2">
                          {catalogo.stats}
                        </div>
                      </div>
                    </div>

                    <p className="text-xl text-dark-gray/70 font-light leading-relaxed">
                      {catalogo.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {catalogo.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 bg-white/50 rounded-xl p-4 border border-primary/10">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-dark-gray font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                      <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-primary/10 group-hover:shadow-3xl transition-all duration-500">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={catalogo.image} 
                            alt={catalogo.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-6 bg-gradient-to-br from-white to-cream/50">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-black text-dark-gray text-lg">{catalogo.title}</h4>
                              <p className="text-dark-gray/60 font-medium">Soluzioni professionali</p>
                            </div>
                            <div className={`w-12 h-12 bg-gradient-to-br ${catalogo.color} rounded-xl flex items-center justify-center`}>
                              <catalogo.icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
    <section id="contatti" className="py-24 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/90 via-primary to-secondary/90"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
            <Mail className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Inizia il Tuo Progetto</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-white to-cream bg-clip-text text-transparent">
              Contattaci
            </span>
          </h2>
          <p className="text-xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Vuoi ricevere un preventivo su misura o semplicemente saperne di più? 
            Il nostro team di esperti è qui per trasformare le tue idee in realtà.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          {/* Colonna sinistra: contatti */}
          <div className="flex flex-col gap-8 justify-center">
            <div className="group flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">Email</h3>
                <p className="text-white/80 text-lg font-semibold">info@b2b-group.it</p>
                <p className="text-white/60 font-medium mt-1">Risposta garantita entro 2 ore</p>
              </div>
            </div>
            <div className="group flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">Sede principale</h3>
                <p className="text-white/80 text-lg font-semibold">
                  Circonvallazione Clodia, 163/167<br />
                  00195 Roma – Italia
                </p>
                <p className="text-white/60 font-medium mt-1">Showroom aperto su appuntamento</p>
              </div>
            </div>
          </div>
          {/* Colonna destra: benefit */}
          <div className="flex flex-col justify-center h-full">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border-2 border-secondary/40 shadow-xl">
              <h3 className="text-2xl font-black text-white mb-6 text-center">Perché scegliere B2B Group?</h3>
              <div className="space-y-4">
                {[
                  "Consulenza gratuita e personalizzata",
                  "Preventivi competitivi e trasparenti",
                  "Consegna e installazione professionale",
                  "Garanzia estesa su tutti i prodotti",
                  "Supporto tecnico post-vendita"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-white font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-tertiary-dark via-gray-900 to-tertiary-dark py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23107A72' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">
          Hai bisogno di un preventivo personalizzato?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Il nostro team ti risponde rapidamente! Clicca sul pulsante qui sotto per inviare una mail diretta al nostro reparto preventivi.
        </p>
        <a href="mailto:preventivi@b2b-group.it" className="inline-block bg-gradient-to-r from-primary to-secondary text-white text-xl font-bold px-10 py-5 rounded-full shadow-2xl hover:scale-105 hover:shadow-primary/40 transition-all duration-300 mb-4">
          Richiedi Preventivo via Email
        </a>
        <p className="text-white/60 text-sm mt-2">Risposta garantita entro 2 ore lavorative</p>
      </div>
    </footer>
  );
};

// Utility per trovare l'immagine giusta tra tutte le sottocartelle e formati
const findProductImage = (imgName: string, catalogo: string) => {
  if (!imgName) return undefined;
  let subfolder = '';
  if (catalogo === 'informatica') subfolder = 'informatica';
  else if (catalogo === 'arredo') subfolder = 'arredo';
  else if (catalogo === 'alimentare') subfolder = 'impiantistica';
  else if (catalogo === 'ufficio') subfolder = 'ufficio';
  const extensions = ['.webp', '.jfif', '.jpg', '.jpeg', '.png'];
  return extensions.map(ext => `/images/ecommerce/${subfolder}/${imgName}${ext}`);
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
    // Cerca prezzo e immagine nell'ultimo elemento di 'null'
    const nullArr = item.null || [];
    if (nullArr.length > 0) {
      const last = nullArr[nullArr.length - 1];
      const parts = last.split(';');
      if (parts.length === 2) {
        // Esempio: "00 €;nomefileimmagine"
        immagine = parts[1];
        // Provo a trovare il prezzo in altri elementi
        for (let i = nullArr.length - 1; i >= 0; i--) {
          const p = nullArr[i].split(';');
          if (p.length === 2 && !isNaN(Number(p[1].replace(/\D/g, '')))) {
            prezzo = parseFloat(p[1].replace(/\D/g, ''));
            break;
          }
        }
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
      title: 'Arredo ufficio',
      description: "Mobili, scrivanie regolabili, sedute ergonomiche e design per ambienti di lavoro moderni.",
      image: '/images/arredo-ufficio.jpg',
      accentColor: 'from-secondary to-orange-600',
      cta: "Scopri l'arredo",
    },
    {
      key: 'forniture',
      title: 'Forniture da ufficio',
      description: "Carta, cancelleria, toner, archiviazione e materiali essenziali per l'ufficio.",
      image: '/images/forniture-e-materiali.jpg',
      accentColor: 'from-tertiary-red to-red-600',
      cta: 'Scopri le forniture',
    },
    {
      key: 'alimentare',
      title: 'Arredamento per industrie alimentari',
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
          <button onClick={() => setCatalogo('alimentare')} className={`px-6 py-2 rounded-full font-bold ${catalogo==='alimentare' ? 'bg-primary text-white' : 'bg-white border'}`}>Arredamento per industrie alimentari</button>
          <button onClick={() => setCatalogo('ufficio')} className={`px-6 py-2 rounded-full font-bold ${catalogo==='ufficio' ? 'bg-primary text-white' : 'bg-white border'}`}>Forniture da ufficio</button>
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