import React, { useState, useEffect } from 'react';
import { Monitor, PenTool, Armchair as Chair, Layers, Ear, Lightbulb, Headphones, Laptop, FileText, Building, Video, Mail, MapPin, Phone, Menu, X, ChevronRight, Users, Shield, Zap, Star, Award, TrendingUp, CheckCircle, ArrowRight, Play, Lock, Eye, EyeOff, Save, Download, Bold, Italic, List, ListOrdered, Quote, Code, Link, Image, Undo, Redo, Calendar, User, Briefcase, Globe, Hash, CreditCard, FileText as FileTextIcon } from 'lucide-react';

// Maintenance Page Component
const MaintenancePage = ({ onAuthenticate, showSecurityWarning = false }: { onAuthenticate: () => void, showSecurityWarning?: boolean }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate loading
    setTimeout(() => {
      if (password === 'sitob2bgroup') {
        onAuthenticate();
      } else {
        setError('Password non corretta. Riprova.');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream flex items-center justify-center p-6 relative overflow-hidden security-box">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-tertiary-red/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-secondary/10 to-tertiary-red/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-md w-full">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-primary/10">
          {/* Security Warning Banner */}
          {showSecurityWarning && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="text-red-500 text-xl">🚨</div>
                <p className="text-red-700 font-bold text-sm">VIOLAZIONE DI SICUREZZA RILEVATA</p>
              </div>
              <p className="text-red-600 text-xs leading-relaxed">
                È stato rilevato un tentativo di screenshot o accesso non autorizzato. 
                <strong> È assolutamente vietato:</strong>
              </p>
              <ul className="text-red-600 text-xs mt-2 space-y-1">
                <li>• Eseguire screenshot o catture dello schermo</li>
                <li>• Tentare di riprodurre o clonare il contenuto</li>
                <li>• Accedere a informazioni sensibili della codebase</li>
                <li>• Utilizzare DevTools o strumenti di sviluppo</li>
              </ul>
              <p className="text-red-700 text-xs font-semibold mt-2">
                La violazione di queste regole comporta la revoca permanente dell'accesso.
              </p>
              <div className="mt-2 text-center">
                <div className="text-blue-600 font-bold text-xs tracking-wider font-mono">Vite Preview Protection System</div>
              </div>
            </div>
          )}

          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img 
                src="/images/logo/b2bgrouplogo.svg" 
                alt="B2B Group Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <h1 className="text-3xl font-black text-dark-gray mb-2">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sito in Manutenzione
              </span>
            </h1>
            <p className="text-dark-gray/70 font-medium">
              Stiamo migliorando il nostro sito per offrirti un'esperienza migliore
            </p>
          </div>

          {/* Maintenance Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <Lock className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Access Form */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20">
            <h2 className="text-xl font-bold text-dark-gray mb-4 text-center">
              Accesso Addetti
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-dark-gray font-semibold mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-medium"
                    placeholder="Inserisci la password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-gray/50 hover:text-dark-gray transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Verificando...
                  </span>
                ) : (
                  'Accedi al Sito'
                )}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-dark-gray/60 font-medium">
              La sessione scade ogni 60 minuti per motivi di sicurezza
            </p>
            <div className="mt-2">
              <div className="text-blue-600 font-bold text-xs tracking-wider font-mono">Vite Preview Protection System</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Preview Mode Box Component
const PreviewModeBox = ({ onSessionExpire }: { onSessionExpire: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [userInfo, setUserInfo] = useState({
    ip: 'Rilevamento...',
    location: 'Analisi...',
    browser: '',
    os: '',
    screen: '',
    language: '',
    timezone: ''
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Get user agent information
    const userAgent = navigator.userAgent;
    const browser = userAgent.includes('Chrome') ? 'Chrome' : 
                   userAgent.includes('Firefox') ? 'Firefox' : 
                   userAgent.includes('Safari') ? 'Safari' : 
                   userAgent.includes('Edge') ? 'Edge' : 'Unknown';
    
    const os = userAgent.includes('Windows') ? 'Windows' : 
               userAgent.includes('Mac') ? 'macOS' : 
               userAgent.includes('Linux') ? 'Linux' : 
               userAgent.includes('Android') ? 'Android' : 
               userAgent.includes('iOS') ? 'iOS' : 'Unknown';

    // Get screen information
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    
    // Get language and timezone
    const language = navigator.language || 'Unknown';
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    setUserInfo({
      ip: 'Rilevamento...',
      location: 'Analisi...',
      browser,
      os,
      screen: screenResolution,
      language,
      timezone
    });

    // Simulate IP and location detection
    setTimeout(() => {
      setUserInfo(prev => ({
        ...prev,
        ip: '192.168.1.100', // Simulated IP
        location: 'Roma, Italia' // Simulated location
      }));
    }, 2000);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Session expired, redirect to maintenance page
          onSessionExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onSessionExpire]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 preview-mode-box">
      <div 
        className="bg-white/95 backdrop-blur-lg rounded-xl p-4 shadow-2xl border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="space-y-2">
          {/* Default view - always visible */}
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div>
              <div className="text-red-500 font-bold text-sm">PREVIEW MODE</div>
              <div className="text-red-500 font-mono text-lg font-black">{formatTime(timeLeft)}</div>
              <div className="text-red-500/60 text-xs mt-1 max-w-48">
                ⚠️ File riservato, non pubblicare, clonare o riprodurre
              </div>
            </div>
          </div>
          
          {/* Detailed information - only on hover */}
          {isHovered && (
            <>
              <div className="border-t border-red-500/20 pt-2">
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-red-500/60">IP:</span>
                    <span className="text-red-500 font-mono">{userInfo.ip}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-500/60">Browser:</span>
                    <span className="text-red-500">{userInfo.browser}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-500/60">OS:</span>
                    <span className="text-red-500">{userInfo.os}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-500/60">Schermo:</span>
                    <span className="text-red-500 font-mono">{userInfo.screen}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-500/60">Lingua:</span>
                    <span className="text-red-500">{userInfo.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-500/60">Fuso orario:</span>
                    <span className="text-red-500">{userInfo.timezone}</span>
                  </div>
                </div>
              </div>
            </>
          )}
          
          <div className="border-t border-red-500/20 pt-2">
            <div className="text-blue-600/60 font-bold text-xs tracking-wider font-mono">Vite Preview Protection System</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
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
                className="w-12 h-12 object-contain"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">B2B Group</span>
              <div className="text-xs text-dark-gray/60 font-semibold">OFFICE SOLUTIONS</div>
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
                <span className="text-primary font-semibold">Soluzioni Premium per Uffici</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-dark-gray leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-tertiary-red bg-clip-text text-transparent">
                  Soluzioni complete
                </span>
                <br />
                <span className="text-dark-gray">per l'ufficio</span>
                <br />
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  moderno
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-dark-gray/80 font-light leading-relaxed max-w-2xl">
                <span className="font-semibold text-primary">Informatica</span>, 
                <span className="font-semibold text-secondary"> arredo</span> e 
                <span className="font-semibold text-tertiary-red"> materiali per ufficio</span> — 
                forniture professionali per aziende di ogni dimensione.
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
                <h3 className="text-2xl font-black text-dark-gray">Tutto per il tuo ufficio</h3>
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
      title: "Forniture per ufficio",
      description: "Carta, toner, accessori, cancelleria di qualità premium",
      color: "from-secondary to-orange-600",
      bgColor: "from-secondary/10 to-orange-100/50",
      stats: "5000+ Prodotti",
      features: ["Materiali Premium", "Consegna Rapida", "Stock Garantito", "Eco-Friendly"]
    },
    {
      icon: Chair,
      title: "Arredo per ufficio",
      description: "Scrivanie, sedute ergonomiche, scaffalature design",
      color: "from-tertiary-red to-red-600",
      bgColor: "from-tertiary-red/10 to-red-100/50",
      stats: "1000+ Soluzioni",
      features: ["Design Ergonomico", "Materiali Premium", "Personalizzazione", "Garanzia Estesa"]
    },
    {
      icon: Layers,
      title: "Soluzioni integrate",
      description: "Postazioni complete, sale riunioni, smart office",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-100/50 to-pink-100/50",
      stats: "300+ Progetti",
      features: ["Progettazione 3D", "Installazione", "Smart Technology", "Supporto 24/7"]
    }
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
            Offriamo soluzioni complete e innovative per ogni esigenza aziendale, 
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

                <button className="group/btn bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center">
                  Scopri di più
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
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

                  <button className="bg-gradient-to-r from-secondary to-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 w-full">
                    Scopri il processo
                  </button>
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
      description: "Mobili modulabili, scrivanie regolabili, sedute ergonomiche, contenitori di design per ambienti di lavoro moderni",
      icon: Chair,
      image: "/images/arredo-ufficio.jpg",
      background: "white",
      features: ["Design Ergonomico", "Materiali Premium", "Personalizzazione", "Sostenibilità"],
      stats: "1000+ Soluzioni",
      color: "from-secondary to-orange-600"
    },
    {
      title: "Forniture e materiali",
      description: "Carta, cancelleria, toner, archiviazione e tutti i materiali essenziali per il funzionamento quotidiano dell'ufficio",
      icon: FileText,
      image: "/images/forniture-e-materiali.jpg",
      background: "cream",
      features: ["Stock Garantito", "Consegna Express", "Eco-Friendly", "Bulk Pricing"],
      stats: "5000+ Articoli",
      color: "from-tertiary-red to-red-600"
    },
    {
      title: "Tecnologia per meeting",
      description: "Proiettori, sistemi di videoconferenza, pannelli interattivi e soluzioni smart per sale riunioni moderne",
      icon: Video,
      image: "/images/meeting-technology.jpg",
      background: "white",
      features: ["4K Technology", "Wireless Solutions", "AI Integration", "Remote Control"],
      stats: "300+ Sistemi",
      color: "from-purple-600 to-pink-600"
    }
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
            con soluzioni innovative per ogni esigenza aziendale
          </p>
        </div>

        <div className="space-y-0">
          {cataloghi.map((catalogo, index) => (
            <div 
              key={index}
              className={`py-20 relative ${catalogo.background === 'cream' ? 'bg-gradient-to-br from-cream to-white' : 'bg-gradient-to-br from-white to-cream'}`}
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

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                        Richiedi catalogo
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                      <button 
                        onClick={onQuoteRequest}
                        className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        Preventivo gratuito
                      </button>
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Messaggio inviato! Ti contatteremo presto.');
    setFormData({ nome: '', email: '', messaggio: '' });
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

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-8">
              <div className="group flex items-start space-x-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Email</h3>
                  <p className="text-white/80 text-lg font-semibold">info@b2b-group.it</p>
                  <p className="text-white/60 font-medium mt-1">Risposta garantita entro 2 ore</p>
                </div>
              </div>

              <div className="group flex items-start space-x-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
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

              <div className="group flex items-start space-x-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Supporto 24/7</h3>
                  <p className="text-white/80 text-lg font-semibold">+39 06 123 456 789</p>
                  <p className="text-white/60 font-medium mt-1">Assistenza tecnica sempre disponibile</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-black text-white mb-6">Perché scegliere B2B Group?</h3>
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

            {/* Quote Request Button */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Richiesta Preventivo Dettagliata</h3>
                  <p className="text-white/80 font-medium">
                    Compila il form completo con i dati aziendali e descrivi le tue esigenze
                  </p>
                </div>
                
                <button
                  onClick={onQuoteRequest}
                  className="w-full bg-gradient-to-r from-secondary to-white text-primary py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group flex items-center justify-center space-x-2"
                >
                  <span className="relative z-10 flex items-center">
                    <FileTextIcon className="w-5 h-5 mr-2" />
                    Richiedi Preventivo Completo
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <p className="text-sm text-white/60 font-medium">
                  ✓ Form completo • ✓ Editor Markdown • ✓ Dati aziendali • ✓ Risposta entro 24h
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-white mb-2">Richiedi un preventivo</h3>
              <p className="text-white/80 font-medium">Compila il form e riceverai una risposta personalizzata</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-white font-bold mb-3">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all duration-300"
                  placeholder="Il tuo nome e cognome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-bold mb-3">
                  Email aziendale *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all duration-300"
                  placeholder="nome@azienda.com"
                />
              </div>

              <div>
                <label htmlFor="messaggio" className="block text-white font-bold mb-3">
                  Descrivi il tuo progetto *
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows={5}
                  value={formData.messaggio}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/60 focus:bg-white/30 transition-all duration-300 resize-none font-semibold"
                  placeholder="Raccontaci di cosa hai bisogno: numero di postazioni, tipologia di ufficio, budget indicativo..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-secondary to-white text-primary py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Invia richiesta
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm font-medium">
                Rispondiamo entro 2 ore lavorative • Consulenza sempre gratuita
              </p>
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

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/logo/b2bgrouplogo.svg" 
                alt="B2B Group Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">B2B Group</span>
                <div className="text-xs text-white/60 font-semibold">OFFICE SOLUTIONS</div>
              </div>
            </div>
            <p className="text-white/80 font-light leading-relaxed mb-6 max-w-md">
              Da oltre 15 anni forniamo soluzioni complete per l'ufficio moderno, 
              combinando tecnologia all'avanguardia, design funzionale e servizio eccellente.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-white font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                <span className="text-white font-bold">@</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black mb-4">Servizi</h3>
            <ul className="space-y-3">
              {[
                "Informatica aziendale",
                "Arredo ufficio",
                "Forniture materiali",
                "Tecnologie meeting",
                "Consulenza IT",
                "Supporto tecnico"
              ].map((service, idx) => (
                <li key={idx}>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black mb-4">Azienda</h3>
            <ul className="space-y-3">
              {[
                "Chi siamo",
                "I nostri partner",
                "Certificazioni",
                "Sostenibilità",
                "Carriere",
                "News & Eventi"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300 font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-white/60 text-sm font-medium">
                © 2024 B2B Group. Tutti i diritti riservati.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <span>Made with</span>
              <div className="w-4 h-4 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
              <span>in Rome, Italy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Anti-Screenshot Protection Component
const AntiScreenshotProtection = ({ onSessionExpire }: { onSessionExpire: () => void }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Detect common screenshot shortcuts
      const isScreenshotShortcut = 
        (e.ctrlKey && e.key === 'p') || // Ctrl+P (Print)
        (e.ctrlKey && e.shiftKey && e.key === 'I') || // Ctrl+Shift+I (DevTools)
        (e.ctrlKey && e.shiftKey && e.key === 'C') || // Ctrl+Shift+C (DevTools)
        (e.ctrlKey && e.shiftKey && e.key === 'J') || // Ctrl+Shift+J (DevTools)
        (e.key === 'F12') || // F12 (DevTools)
        (e.ctrlKey && e.key === 'u') || // Ctrl+U (View Source)
        (e.ctrlKey && e.shiftKey && e.key === 'S') || // Ctrl+Shift+S (Save Page As)
        (e.metaKey && e.shiftKey && e.key === '4') || // Cmd+Shift+4 (Mac Screenshot)
        (e.metaKey && e.shiftKey && e.key === '3') || // Cmd+Shift+3 (Mac Screenshot)
        (e.key === 'PrintScreen') || // PrintScreen key
        (e.altKey && e.key === 'PrintScreen') || // Alt+PrintScreen
        (e.key === 'Stamp') || // Stamp key (Italian keyboard)
        (e.metaKey && e.shiftKey && e.key === 'S') || // Windows+Shift+S (Windows Snipping Tool)
        (e.ctrlKey && e.shiftKey && e.key === 'S' && e.metaKey); // Windows+Shift+S (alternative detection)

      if (isScreenshotShortcut) {
        e.preventDefault();
        setIsBlurred(true);
        setCountdown(5);
        
        // Start countdown timer
        const countdownTimer = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              clearInterval(countdownTimer);
              onSessionExpire();
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      // Prevent right-click context menu
      e.preventDefault();
      setIsBlurred(true);
      setCountdown(5);
      
      // Start countdown timer
      const countdownTimer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownTimer);
            onSessionExpire();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    };

    const handleSelectStart = (e: Event) => {
      // Prevent text selection (common in screenshot attempts)
      e.preventDefault();
    };

    const handleDragStart = (e: Event) => {
      // Prevent drag operations
      e.preventDefault();
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, [onSessionExpire]);

  if (!isBlurred) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-xl flex items-center justify-center security-box">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border-2 border-red-500/50 text-center max-w-md">
        <div className="text-red-500 text-4xl mb-4">🚫</div>
        <h2 className="text-2xl font-black text-red-500 mb-2">Accesso Negato</h2>
        <p className="text-dark-gray/80 font-medium mb-4">
          Screenshot e riproduzioni non sono consentiti
        </p>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
          <p className="text-red-700 text-sm font-semibold mb-2">⚠️ AVVISO DI SICUREZZA</p>
          <p className="text-red-600 text-xs leading-relaxed">
            È vietato eseguire screenshot, tentativi di riproduzione o accesso a informazioni sensibili della codebase. 
            La violazione di queste regole comporta la revoca immediata dell'accesso.
          </p>
        </div>
        <div className="text-red-500 font-mono text-lg font-black mb-2">
          Reindirizzamento in: {countdown}s
        </div>
        <p className="text-sm text-dark-gray/60">
          File riservato - Vite Preview Protection System
        </p>
        <div className="mt-2 text-center">
          <div className="text-blue-600 font-bold text-xs tracking-wider font-mono">Vite Preview Protection System</div>
        </div>
      </div>
    </div>
  );
};

// Custom Cursor Component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(true); // Start as true

  useEffect(() => {
    // Hide default cursor when custom cursor is active
    if (isHovering) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [isHovering]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Don't show custom cursor on security boxes
      if (target.closest('.security-box') || target.closest('.preview-mode-box')) {
        setIsHovering(false);
      } else {
        setIsHovering(true);
      }
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{ 
          left: position.x - 4, 
          top: position.y - 4,
          transform: 'scale(1)',
          opacity: isHovering ? 1 : 0
        }}
      >
        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg animate-pulse"></div>
      </div>
      
      {/* Outer ring */}
      <div 
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{ 
          left: position.x - 12, 
          top: position.y - 12,
          transform: 'scale(1)',
          opacity: isHovering ? 1 : 0
        }}
      >
        <div className="w-6 h-6 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
      </div>
      
      {/* Glow effect */}
      <div 
        className="fixed pointer-events-none z-[9997] transition-all duration-500 ease-out"
        style={{ 
          left: position.x - 20, 
          top: position.y - 20,
          transform: 'scale(1)',
          opacity: isHovering ? 1 : 0
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-sm animate-pulse" style={{ animationDuration: '2s' }}></div>
      </div>
    </>
  );
};

// Quote Request Page Component
const QuoteRequestPage = ({ onBack }: { onBack: () => void }) => {
  const [companyData, setCompanyData] = useState({
    companyName: '',
    vatNumber: '',
    fiscalCode: '',
    address: '',
    city: '',
    postalCode: '',
    province: '',
    country: 'Italia',
    phone: '',
    email: '',
    website: '',
    sector: '',
    employees: '',
    contactPerson: '',
    contactRole: '',
    contactPhone: '',
    contactEmail: ''
  });

  const [markdownContent, setMarkdownContent] = useState(`# Richiesta Preventivo

## Descrizione del Progetto

Descrivi qui il tuo progetto in dettaglio...

## Esigenze Specifiche

- **Numero di postazioni**: 
- **Tipologia di ufficio**: 
- **Budget indicativo**: 
- **Tempi di consegna desiderati**: 

## Prodotti/Servizi Richiesti

### Informatica
- [ ] PC Desktop
- [ ] Notebook
- [ ] Server
- [ ] Software
- [ ] Periferiche

### Arredo
- [ ] Scrivanie
- [ ] Sedie
- [ ] Armadi
- [ ] Accessori

### Forniture
- [ ] Carta
- [ ] Toner
- [ ] Cancelleria
- [ ] Archiviazione

## Note Aggiuntive

Inserisci qui eventuali note o requisiti particolari...

---
*Preventivo richiesto il: ${new Date().toLocaleDateString('it-IT')}*
`);

  const [isPreview, setIsPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCompanyDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCompanyData({
      ...companyData,
      [e.target.name]: e.target.value
    });
  };

  const insertMarkdown = (text: string) => {
    const textarea = document.getElementById('markdown-editor') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const before = markdownContent.substring(0, start);
      const after = markdownContent.substring(end);
      const newContent = before + text + after;
      setMarkdownContent(newContent);
      
      // Set cursor position after inserted text
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + text.length, start + text.length);
      }, 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Preventivo inviato con successo! Ti contatteremo entro 24 ore.');
      setIsSubmitting(false);
    }, 2000);
  };

  const downloadMarkdown = () => {
    const blob = new Blob([markdownContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `preventivo-${companyData.companyName || 'azienda'}-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderMarkdownPreview = (content: string) => {
    // Simple markdown rendering
    return content
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold text-primary mb-2">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold text-dark-gray mb-3">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-black text-primary mb-4">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/^- \[ \] (.*$)/gim, '<div class="flex items-center space-x-2 mb-1"><input type="checkbox" disabled class="w-4 h-4 text-primary"> <span>$1</span></div>')
      .replace(/^- \[x\] (.*$)/gim, '<div class="flex items-center space-x-2 mb-1"><input type="checkbox" checked disabled class="w-4 h-4 text-primary"> <span class="line-through">$1</span></div>')
      .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/\n/g, '<br>');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <button 
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors duration-300 mb-6"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span className="font-semibold">Torna al sito</span>
          </button>
          
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-3 rounded-full border border-primary/20 mb-6">
            <FileTextIcon className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Richiesta Preventivo</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-dark-gray mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Richiesta Preventivo
            </span>
          </h1>
          <p className="text-xl text-dark-gray/70 font-light max-w-3xl mx-auto leading-relaxed">
            Compila i dati della tua azienda e descrivi le tue esigenze per ricevere un preventivo personalizzato
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Company Data Form */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-primary/10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-dark-gray">Dati Aziendali</h2>
                    <p className="text-dark-gray/60 font-medium">Informazioni della società</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      Nome Azienda *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={companyData.companyName}
                      onChange={handleCompanyDataChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Nome della tua azienda"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      Partita IVA
                    </label>
                    <input
                      type="text"
                      name="vatNumber"
                      value={companyData.vatNumber}
                      onChange={handleCompanyDataChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="IT12345678901"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      Codice Fiscale
                    </label>
                    <input
                      type="text"
                      name="fiscalCode"
                      value={companyData.fiscalCode}
                      onChange={handleCompanyDataChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="RSSMRA80A01H501U"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      Settore
                    </label>
                    <select
                      name="sector"
                      value={companyData.sector}
                      onChange={handleCompanyDataChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    >
                      <option value="">Seleziona settore</option>
                      <option value="tecnologia">Tecnologia</option>
                      <option value="finanza">Finanza</option>
                      <option value="sanita">Sanità</option>
                      <option value="istruzione">Istruzione</option>
                      <option value="legale">Legale</option>
                      <option value="consulenza">Consulenza</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      Numero Dipendenti
                    </label>
                    <select
                      name="employees"
                      value={companyData.employees}
                      onChange={handleCompanyDataChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    >
                      <option value="">Seleziona range</option>
                      <option value="1-10">1-10 dipendenti</option>
                      <option value="11-50">11-50 dipendenti</option>
                      <option value="51-200">51-200 dipendenti</option>
                      <option value="201-500">201-500 dipendenti</option>
                      <option value="500+">Oltre 500 dipendenti</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      Sito Web
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={companyData.website}
                      onChange={handleCompanyDataChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="https://www.azienda.com"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-dark-gray font-bold mb-2">
                    Indirizzo Completo
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={companyData.address}
                    onChange={handleCompanyDataChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Via Roma 123"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      Città *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={companyData.city}
                      onChange={handleCompanyDataChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Roma"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      CAP *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={companyData.postalCode}
                      onChange={handleCompanyDataChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="00100"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      Provincia *
                    </label>
                    <input
                      type="text"
                      name="province"
                      value={companyData.province}
                      onChange={handleCompanyDataChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="RM"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Person */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-primary/10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-tertiary-red rounded-xl flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-dark-gray">Persona di Contatto</h2>
                    <p className="text-dark-gray/60 font-medium">Referente per il progetto</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={companyData.contactPerson}
                      onChange={handleCompanyDataChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Mario Rossi"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      Ruolo
                    </label>
                    <input
                      type="text"
                      name="contactRole"
                      value={companyData.contactRole}
                      onChange={handleCompanyDataChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Amministratore Delegato"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={companyData.contactPhone}
                      onChange={handleCompanyDataChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="+39 06 123 456 789"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-gray font-bold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={companyData.contactEmail}
                      onChange={handleCompanyDataChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-primary/20 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="mario.rossi@azienda.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Markdown Editor */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-tertiary-red to-primary rounded-xl flex items-center justify-center">
                      <FileTextIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-dark-gray">Richiesta Dettagliata</h2>
                      <p className="text-dark-gray/60 font-medium">Editor Markdown</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsPreview(!isPreview)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                    >
                      {isPreview ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      <span className="text-sm font-semibold">{isPreview ? 'Modifica' : 'Anteprima'}</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={downloadMarkdown}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors duration-300"
                    >
                      <Download className="w-4 h-4" />
                      <span className="text-sm font-semibold">Scarica</span>
                    </button>
                  </div>
                </div>

                {/* Markdown Toolbar */}
                <div className="flex flex-wrap items-center gap-2 mb-4 p-3 bg-gray-50 rounded-xl border border-primary/10">
                  <button
                    type="button"
                    onClick={() => insertMarkdown('**testo in grassetto**')}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    title="Grassetto"
                  >
                    <Bold className="w-4 h-4 text-primary" />
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => insertMarkdown('*testo in corsivo*')}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    title="Corsivo"
                  >
                    <Italic className="w-4 h-4 text-primary" />
                  </button>
                  
                  <div className="w-px h-6 bg-primary/20"></div>
                  
                  <button
                    type="button"
                    onClick={() => insertMarkdown('# Titolo 1')}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    title="Titolo 1"
                  >
                    <span className="text-sm font-bold text-primary">H1</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => insertMarkdown('## Titolo 2')}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    title="Titolo 2"
                  >
                    <span className="text-sm font-bold text-primary">H2</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => insertMarkdown('### Titolo 3')}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    title="Titolo 3"
                  >
                    <span className="text-sm font-bold text-primary">H3</span>
                  </button>
                  
                  <div className="w-px h-6 bg-primary/20"></div>
                  
                  <button
                    type="button"
                    onClick={() => insertMarkdown('- Elemento lista')}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    title="Lista puntata"
                  >
                    <List className="w-4 h-4 text-primary" />
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => insertMarkdown('1. Elemento numerato')}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    title="Lista numerata"
                  >
                    <ListOrdered className="w-4 h-4 text-primary" />
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => insertMarkdown('- [ ] Checkbox vuoto')}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    title="Checkbox"
                  >
                    <span className="text-sm text-primary">☐</span>
                  </button>
                  
                  <div className="w-px h-6 bg-primary/20"></div>
                  
                  <button
                    type="button"
                    onClick={() => insertMarkdown('> Citazione')}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    title="Citazione"
                  >
                    <Quote className="w-4 h-4 text-primary" />
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => insertMarkdown('`codice`')}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    title="Codice inline"
                  >
                    <Code className="w-4 h-4 text-primary" />
                  </button>
                </div>

                {/* Markdown Editor/Preview */}
                {isPreview ? (
                  <div className="min-h-[500px] p-6 bg-gray-50 rounded-xl border border-primary/10 overflow-y-auto">
                    <div 
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: renderMarkdownPreview(markdownContent) }}
                    />
                  </div>
                ) : (
                  <textarea
                    id="markdown-editor"
                    value={markdownContent}
                    onChange={(e) => setMarkdownContent(e.target.value)}
                    className="w-full min-h-[500px] p-6 bg-gray-50 rounded-xl border border-primary/10 text-dark-gray placeholder-dark-gray/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none font-mono text-sm leading-relaxed"
                    placeholder="Inizia a scrivere la tua richiesta in Markdown..."
                  />
                )}
              </div>

              {/* Submit Button */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
                <div className="text-center space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-dark-gray mb-2">Invia Richiesta</h3>
                    <p className="text-dark-gray/70 font-medium">
                      Il nostro team analizzerà la tua richiesta e ti contatterà entro 24 ore
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-secondary to-white text-primary py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Invio in corso...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5" />
                        <span>Invia Richiesta Preventivo</span>
                      </>
                    )}
                  </button>
                  
                  <p className="text-sm text-dark-gray/60 font-medium">
                    ✓ Consulenza gratuita • ✓ Preventivo personalizzato • ✓ Risposta entro 24h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showSecurityWarning, setShowSecurityWarning] = useState(false);
  const [showQuoteRequest, setShowQuoteRequest] = useState(false);

  const handleAuthentication = () => {
    setAuthenticated(true);
    setShowSecurityWarning(false);
  };

  const handleSessionExpire = () => {
    setAuthenticated(false);
    setShowSecurityWarning(true);
  };

  const handleShowQuoteRequest = () => {
    setShowQuoteRequest(true);
  };

  const handleBackToSite = () => {
    setShowQuoteRequest(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      {authenticated ? (
        <>
          {showQuoteRequest ? (
            <QuoteRequestPage onBack={handleBackToSite} />
          ) : (
            <>
              <Header />
              <HeroSection />
              <SettoriPrincipali />
              <ApproccioLavoro />
              <PartnerSection />
              <CatalogoSettori onQuoteRequest={handleShowQuoteRequest} />
              <ContattiSection onQuoteRequest={handleShowQuoteRequest} />
              <Footer />
            </>
          )}
          <PreviewModeBox onSessionExpire={handleSessionExpire} />
          <AntiScreenshotProtection onSessionExpire={handleSessionExpire} />
          <CustomCursor />
        </>
      ) : (
        <MaintenancePage onAuthenticate={handleAuthentication} showSecurityWarning={showSecurityWarning} />
      )}
    </div>
  );
}

export default App;