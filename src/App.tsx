import { useState, useEffect, useCallback } from "react";

const MonitorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>;
const SmartphoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
const ServerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
const TerminalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>;
const LayoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>;
const WrenchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>;
const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>;
const ChevronRightLgIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
import informatica from "./assets/informatica.png";

// ── Nav ────────────────────────────────────────────────────────────────────
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "https://layout-novo-portfolio-marconesbs-projects.vercel.app/" },
    { name: "Serviços", href: "#services" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/85 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#home" className="text-base font-bold tracking-tight flex items-center gap-2 no-underline text-zinc-900">
          <div className="bg-zinc-900 text-white p-1 rounded-md">
            <TerminalIcon />
          </div>
          <span>MARCONE <span className="text-zinc-400 font-normal">S.</span> BRITO</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map(l => (
            <a key={l.name} href={l.href} className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors no-underline">
              {l.name}
            </a>
          ))}
          <a href="#contact" className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium no-underline hover:bg-zinc-700 transition-colors">
            Contratar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden bg-transparent border-none cursor-pointer text-zinc-900 p-1"
        >
          {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-100 px-4 py-4">
          {navLinks.map(l => (
            <a key={l.name} href={l.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-zinc-600 hover:text-zinc-900 py-3 no-underline border-b border-zinc-50 last:border-0">
              {l.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-3 bg-zinc-900 text-white text-center px-5 py-3 rounded-xl text-sm font-medium no-underline">
            Contratar
          </a>
        </div>
      )}
    </header>
  );
};

// ── Hero ───────────────────────────────────────────────────────────────────
const Hero = () => (
  <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
    {/* BG shapes */}
    <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-zinc-100/50" style={{ transform: "skewX(12deg)", transformOrigin: "top right" }} />
    <div className="absolute top-1/4 left-1/4 -z-10 w-64 h-64 bg-zinc-200/30 rounded-full" style={{ filter: "blur(48px)" }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center py-12 lg:py-0">
      {/* Text */}
      <div className="order-2 lg:order-1">
        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-500 mb-6">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500" />
          </span>
          DISPONÍVEL PARA PROJETOS
        </p>

        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight tracking-tight mb-6">
          Informática <span className="text-zinc-400">Montes Claros</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-500 mb-8 max-w-xl leading-relaxed">
          Olá, eu sou <strong className="text-zinc-900">Marcone S. de Brito</strong>. Especialista em criar interfaces modernas,
          sistemas eficientes e soluções técnicas completas para o seu negócio.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/5538992182727" target="_blank" rel="noopener noreferrer"
            className="bg-zinc-900 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold no-underline flex items-center gap-2 hover:bg-zinc-700 transition-colors text-sm sm:text-base">
            Vamos Conversar <ChevronRightIcon />
          </a>
          <a href="#services"
            className="bg-white text-zinc-900 border border-zinc-200 px-6 sm:px-8 py-3 rounded-xl font-semibold no-underline hover:shadow-md transition-all text-sm sm:text-base">
            Ver Serviços
          </a>
        </div>

        <ul className="mt-10 flex items-center gap-6 opacity-40 grayscale list-none p-0 m-0 mt-10">
          {[{ Icon: MonitorIcon, label: "Web" }, { Icon: SmartphoneIcon, label: "Mobile" }, { Icon: ServerIcon, label: "Sistemas" }].map(({ Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm font-medium">
              <Icon />{label}
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
        <div className="relative z-10 bg-white p-3 sm:p-4 rounded-2xl shadow-2xl border border-zinc-100 w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <div className="bg-zinc-900 rounded-xl overflow-hidden aspect-square relative">
            <div className="absolute inset-0 opacity-10 z-10"
              style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center relative z-20">
              <div className="text-center text-white/80 px-6">
                <img src={informatica}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 bg-zinc-900 rounded-2xl -z-10 rotate-12" />
        <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 bg-zinc-200 rounded-2xl -z-10 -rotate-12" />
      </div>
    </div>
  </section>
);

// ── Services ───────────────────────────────────────────────────────────────
const Services = () => {
  const services = [
    {
      icon: <LayoutIcon />,
      title: "Desenvolvimento Front-end",
      description: "Criação de interfaces responsivas, rápidas e acessíveis utilizando React.js e Tailwind CSS.",
    },
    {
      icon: <WrenchIcon />,
      title: "Suporte Técnico TI",
      description: "Manutenção de hardware, configuração e formatação de computadores.",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <p className="text-xs font-bold text-zinc-400 tracking-widest uppercase mb-2">O que eu faço</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Serviços Especializados</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((s, i) => (
            <div key={i}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-zinc-800">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm sm:text-base">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Skills ─────────────────────────────────────────────────────────────────
const Skills = () => {
  const cats = [
    { title: "Desenvolvimento", skills: ["React.js", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "Node.js", "Git/GitHub"] },
    { title: "Técnico em Informática", skills: ["Hardware", "Wi-fi", "Windows", "Segurança", "Virtualização", "IA", "Aulas Particulares"] },
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-xs font-bold text-zinc-500 tracking-widest uppercase mb-2">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Habilidades Técnicas</h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8">
            Ao longo da minha carreira como Analista e Desenvolvedor, consolidei um conjunto de habilidades
            que me permite atuar desde a infraestrutura até a interface final do usuário.
          </p>
          <ul className="space-y-4 list-none p-0 m-0">
            {["Foco em Performance", "Código Limpo e Escalável", "Soluções Orientadas a Resultados"].map(item => (
              <li key={item} className="flex items-center gap-3">
                <CheckIcon />
                <span className="font-medium text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          {cats.map((c, i) => (
            <div key={i} className="bg-zinc-800/50 p-5 sm:p-6 rounded-2xl border border-zinc-700/50">
              <h3 className="text-xs font-bold text-zinc-500 tracking-widest uppercase mb-4">{c.title}</h3>
              <div className="flex flex-wrap gap-2">
                {c.skills.map(s => (
                  <span key={s} className="px-3 py-1 bg-zinc-700/50 rounded-lg text-sm font-medium border border-zinc-600/30">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── ImageCarousel ──────────────────────────────────────────────────────────
const SLIDES = [
  { image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&q=80", title: "Manutenção de Hardware", subtitle: "Diagnóstico, limpeza e upgrade de computadores e notebooks", alt: "Manutenção de hardware em Montes Claros" },
  { image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1280&q=80", title: "Desenvolvimento de Sistemas", subtitle: "Aplicações web modernas com React, Node.js e TypeScript", alt: "Desenvolvimento de sistemas web modernos" },
  { image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1280&q=80", title: "Redes e Infraestrutura", subtitle: "Configuração de redes Wi-Fi domésticas, com foco em segurança e performance", alt: "Configuração de redes Wi-Fi" },
  { image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1280&q=80", title: "Suporte Técnico em TI", subtitle: "Atendimento presencial e remoto em residências e escritórios", alt: "Suporte técnico em TI presencial e remoto" },
  { image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1280&q=80", title: "Aulas Particulares de Informática", subtitle: "Do básico ao avançado — aprenda no seu ritmo", alt: "Aulas particulares de informática" },
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = SLIDES.length;

  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next, isHovered]);

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-bold text-zinc-400 tracking-widest uppercase mb-2">Portfólio</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Nossos Trabalhos</h2>
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative rounded-2xl overflow-hidden shadow-2xl select-none"
          style={{ height: "clamp(240px, 50vw, 480px)" }}
        >
          {SLIDES.map((s, i) => (
            <div key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
            >
              <img src={s.image} alt={s.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className={`absolute bottom-0 left-0 right-0 p-5 sm:p-8 transition-all duration-500 ${i === current ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 tracking-tight">{s.title}</h3>
                <p className="text-white/80 text-xs sm:text-base">{s.subtitle}</p>
              </div>
            </div>
          ))}

          {/* Controls */}
          <button onClick={prev}
            className="absolute top-1/2 left-3 sm:left-4 -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/30 text-white w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/35 transition-colors z-10">
            <ChevronLeftIcon />
          </button>
          <button onClick={next}
            className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/30 text-white w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/35 transition-colors z-10">
            <ChevronRightLgIcon />
          </button>

          {/* Counter */}
          <div className="absolute top-3 right-4 sm:top-4 sm:right-5 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
            {current + 1} / {total}
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 sm:bottom-5 right-5 sm:right-6 flex gap-2 z-10">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-2 rounded-full border-none cursor-pointer transition-all duration-300 ${i === current ? "bg-white w-7" : "bg-white/45 w-2"}`} />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 h-0.5 bg-white z-10 transition-all duration-400 ease-in-out"
            style={{ width: `${((current + 1) / total) * 100}%` }} />
        </div>
      </div>
    </section>
  );
};

// ── Contact ────────────────────────────────────────────────────────────────
const Contact = () => {
  const contacts = [
    { icon: <MailIcon />, label: "E-mail", value: "marconebritt@gmail.com", href: "mailto:marconebritt@gmail.com" },
    { icon: <GithubIcon />, label: "GitHub", value: "github.com/marconesdb", href: "https://github.com/marconesdb" },
    { icon: <LinkedinIcon />, label: "LinkedIn", value: "linkedin.com/in/marconesb/", href: "https://www.linkedin.com/in/marconesb/" },
  ];
  const phones = [
    { label: "Telefone 1", value: "(38) 99218-2727", href: "tel:+5538992182727" },
    { label: "Telefone 2", value: "(38) 99913-8667", href: "tel:+5538999138667" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12">
          <p className="text-xs font-bold text-zinc-400 tracking-widest uppercase mb-2">Fale comigo</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Entre em Contato</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {contacts.map(({ icon, label, value, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl border border-zinc-100 bg-zinc-50 no-underline text-inherit hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-zinc-900 text-white rounded-xl flex items-center justify-center shrink-0">{icon}</div>
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-0.5">{label}</p>
                <p className="text-sm sm:text-base font-medium text-zinc-900">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {phones.map(({ label, value, href }) => (
            <a key={label} href={href}
              className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl border border-zinc-100 bg-zinc-50 no-underline text-inherit hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-zinc-900 text-white rounded-xl flex items-center justify-center shrink-0"><PhoneIcon /></div>
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-0.5">{label}</p>
                <p className="text-sm sm:text-base font-medium text-zinc-900">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a href="https://wa.me/5538992182727" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold no-underline text-sm sm:text-base hover:bg-zinc-700 transition-colors">
            Falar pelo WhatsApp <ChevronRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

// ── Footer ─────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="py-8 sm:py-10 border-t border-zinc-200 bg-zinc-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
      <a href="#home" className="text-sm font-bold flex items-center gap-2 no-underline text-zinc-900">
        <div className="bg-zinc-900 text-zinc-400 p-1 rounded-md"><TerminalIcon /></div>
        MARCONE <span className="text-zinc-500 font-normal ml-1">S.</span> BRITO
      </a>
      <p className="text-sm text-zinc-400 order-last sm:order-none">
        © {new Date().getFullYear()} Marcone S. de Brito. Todos os direitos reservados.
      </p>
      <nav className="flex gap-5">
        {["Privacidade", "Termos"].map(l => (
          <a key={l} href="#" className="text-sm font-medium text-zinc-500 hover:text-zinc-900 no-underline transition-colors">{l}</a>
        ))}
      </nav>
    </div>
  </footer>
);

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-zinc-900">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Skills />
        <ImageCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}