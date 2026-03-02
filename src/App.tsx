import { useState, useEffect, useCallback } from "react";
import {
  Monitor, Layout, Smartphone, Mail, Github, Linkedin,
  ChevronRight, ChevronLeft, Terminal, Server, Wrench, CheckCircle2, Menu, X, Phone
} from "lucide-react";
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
    { name: "Início",      href: "#home" },
    { name: "Sobre",       href: "https://layout-novo-portfolio.vercel.app/" },
    { name: "Serviços",    href: "#services" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contato",     href: "#contact" },
  ];

  return (
    // ✅ SEO: <header> + <nav> semânticos com aria-label
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s",
        background: isScrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        boxShadow: isScrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
        padding: isScrolled ? "1rem 0" : "1.5rem 0",
      }}
    >
      <nav
        aria-label="Navegação principal"
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        {/* ✅ SEO: aria-label na marca */}
        <a
          href="#home"
          aria-label="Informática Montes Claros — página inicial"
          style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.05em", display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "inherit" }}
        >
          <div style={{ background: "#18181b", color: "#fff", padding: 4, borderRadius: 6 }}>
            <Terminal size={20} aria-hidden="true" />
          </div>
          <span>MARCONE <span style={{ color: "#71717a", fontWeight: 400 }}>S.</span> BRITO</span>
        </a>

        {/* Desktop */}
        <div role="menubar" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {navLinks.map(l => (
            <a key={l.name} href={l.href} role="menuitem"
              style={{ fontSize: "0.875rem", fontWeight: 500, color: "#52525b", textDecoration: "none" }}>
              {l.name}
            </a>
          ))}
          <a href="#contact"
            aria-label="Contratar Marcone S. Brito"
            style={{ background: "#18181b", color: "#fff", padding: "0.5rem 1.25rem", borderRadius: 9999, fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>
            Contratar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" role="menu" style={{ background: "#fff", borderBottom: "1px solid #f4f4f5", padding: "1.5rem" }}>
          {navLinks.map(l => (
            <a key={l.name} href={l.href} role="menuitem" onClick={() => setIsMobileMenuOpen(false)}
              style={{ display: "block", fontSize: "1.1rem", fontWeight: 500, color: "#52525b", marginBottom: 16, textDecoration: "none" }}>
              {l.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};


// ── Hero ───────────────────────────────────────────────────────────────────
const Hero = () => (
  // ✅ SEO: <section> com id e aria-labelledby apontando para o h1
  <section
    id="home"
    aria-labelledby="hero-heading"
    style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80, position: "relative", overflow: "hidden" }}
  >
    <div style={{ position: "absolute", top: 0, right: 0, zIndex: -1, width: "50%", height: "100%", background: "rgba(244,244,245,0.5)", transform: "skewX(12deg)", transformOrigin: "top right" }} />
    <div style={{ position: "absolute", top: "25%", left: "25%", zIndex: -1, width: 256, height: 256, background: "rgba(228,228,231,0.3)", borderRadius: "50%", filter: "blur(48px)" }} />

    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", width: "100%" }}>
      <div>
        <p style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.25rem 0.75rem", borderRadius: 9999, background: "#f4f4f5", border: "1px solid #e4e4e7", fontSize: "0.75rem", fontWeight: 600, color: "#52525b", marginBottom: 24 }}>
          {/* ✅ SEO: aria-label no status de disponibilidade */}
          <span aria-label="Disponível para projetos" style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
            <span aria-hidden="true" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#34d399", opacity: 0.75, animation: "ping 1s infinite" }} />
            <span aria-hidden="true" style={{ position: "relative", display: "inline-flex", borderRadius: "50%", width: 8, height: 8, background: "#10b981" }} />
          </span>
          DISPONÍVEL PARA PROJETOS
        </p>

        {/* ✅ SEO: único h1 da página com palavra-chave principal */}
        <h1
          id="hero-heading"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 24 }}
        >
          Informática <span style={{ color: "#a1a1aa" }}>Montes Claros</span>
        </h1>

        <p style={{ fontSize: "1.125rem", color: "#52525b", marginBottom: 32, maxWidth: 480, lineHeight: 1.7 }}>
          Olá, eu sou <strong>Marcone S. de Brito</strong>. Especialista em criar interfaces modernas,
          sistemas eficientes e soluções técnicas completas para o seu negócio.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <a
            href="https://wa.me/5538992182727?text=Olá,%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com Marcone pelo WhatsApp"
            style={{ background: "#18181b", color: "#fff", padding: "1rem 2rem", borderRadius: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
          >
            Vamos Conversar <ChevronRight size={18} aria-hidden="true" />
          </a>
          <a href="#services" aria-label="Ver serviços oferecidos"
            style={{ background: "#fff", color: "#18181b", border: "1px solid #e4e4e7", padding: "1rem 2rem", borderRadius: 12, fontWeight: 600, textDecoration: "none" }}>
            Ver Serviços
          </a>
        </div>

        {/* ✅ SEO: lista semântica de especialidades */}
        <ul
          aria-label="Áreas de atuação"
          style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 24, opacity: 0.5, filter: "grayscale(1)", listStyle: "none", padding: 0 }}
        >
          {[{ Icon: Monitor, label: "Web" }, { Icon: Smartphone, label: "Mobile" }, { Icon: Server, label: "Sistemas" }].map(({ Icon, label }) => (
            <li key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Icon size={20} aria-hidden="true" />
              <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ position: "relative", zIndex: 10, background: "#fff", padding: 16, borderRadius: 24, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid #f4f4f5" }}>
          <div style={{ background: "#18181b", borderRadius: 16, overflow: "hidden", aspectRatio: "1/1", position: "relative" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px", zIndex: 1 }} />
            {/* ✅ SEO: alt descritivo e keyword na imagem principal */}
            <img
              src={informatica}
              alt="Marcone S. Brito — Técnico em Informática em Montes Claros, MG"
              width={600}
              height={600}
              loading="eager"
              fetchPriority="high"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "relative", zIndex: 2 }}
            />
          </div>
        </div>
        <div aria-hidden="true" style={{ position: "absolute", top: -24, right: -24, width: 128, height: 128, background: "#18181b", borderRadius: 16, zIndex: -1, transform: "rotate(12deg)" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: -24, left: -24, width: 128, height: 128, background: "#e4e4e7", borderRadius: 16, zIndex: -1, transform: "rotate(-12deg)" }} />
      </div>
    </div>

    <style>{`@keyframes ping { 0%,100%{transform:scale(1);opacity:.75} 50%{transform:scale(2);opacity:0} }`}</style>
  </section>
);


// ── Services ───────────────────────────────────────────────────────────────
const Services = () => {
  const services = [
    {
      icon: <Layout aria-hidden="true" />,
      title: "Desenvolvimento Front-end",
      description: "Criação de interfaces responsivas, rápidas e acessíveis utilizando React.js e Tailwind CSS.",
    },
    {
      icon: <Wrench aria-hidden="true" />,
      title: "Suporte Técnico TI",
      description: "Manutenção de hardware, configuração e formatação de computadores.",
    },
  ];

  return (
    // ✅ SEO: <section> semântica com aria-labelledby
    <section id="services" aria-labelledby="services-heading" style={{ padding: "6rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          {/* ✅ SEO: h2 como título da seção */}
          <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a1a1aa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
            O que eu faço
          </p>
          <h2 id="services-heading" style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em" }}>
            Serviços Especializados
          </h2>
        </div>

        {/* ✅ SEO: lista semântica de serviços */}
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, listStyle: "none", padding: 0 }}>
          {services.map((s, i) => (
            <li key={i}
              style={{ padding: 32, borderRadius: 16, border: "1px solid #f4f4f5", background: "#fafafa", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-5px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fafafa"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
            >
              <div style={{ width: 48, height: 48, background: "#fff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", marginBottom: 24 }}>
                {s.icon}
              </div>
              {/* ✅ SEO: h3 dentro de cada card de serviço */}
              <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ color: "#52525b", lineHeight: 1.7 }}>{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};


// ── Skills ─────────────────────────────────────────────────────────────────
const Skills = () => {
  const cats = [
    { title: "Desenvolvimento",       skills: ["React.js", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "Node.js", "Git/GitHub"] },
    { title: "Técnico em Informática", skills: ["Hardware", "Wi-fi", "Windows", "Segurança", "Virtualização", "IA", "Aulas Particulares"] },
  ];

  return (
    <section id="skills" aria-labelledby="skills-heading" style={{ padding: "6rem 1.5rem", background: "#18181b", color: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#52525b", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
            Expertise
          </p>
          {/* ✅ SEO: h2 com id para aria-labelledby */}
          <h2 id="skills-heading" style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Habilidades Técnicas
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: "1.125rem", lineHeight: 1.7, marginBottom: 32 }}>
            Ao longo da minha carreira como Analista e Desenvolvedor, consolidei um conjunto de habilidades
            que me permite atuar desde a infraestrutura até a interface final do usuário.
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {["Foco em Performance", "Código Limpo e Escalável", "Soluções Orientadas a Resultados"].map(item => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <CheckCircle2 color="#10b981" size={20} aria-hidden="true" />
                <span style={{ fontWeight: 500 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {cats.map((c, i) => (
            <div key={i} style={{ background: "rgba(39,39,42,0.5)", padding: 24, borderRadius: 16, border: "1px solid rgba(63,63,70,0.5)" }}>
              {/* ✅ SEO: h3 para cada categoria de habilidade */}
              <h3 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                {c.title}
              </h3>
              {/* ✅ SEO: lista semântica de skills */}
              <ul style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", padding: 0 }}>
                {c.skills.map(s => (
                  <li key={s} style={{ padding: "0.25rem 0.75rem", background: "rgba(63,63,70,0.5)", borderRadius: 8, fontSize: "0.875rem", fontWeight: 500, border: "1px solid rgba(82,82,91,0.3)" }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// ── ImageCarousel ──────────────────────────────────────────────────────────
const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&q=80",
    title: "Manutenção de Hardware",
    subtitle: "Diagnóstico, limpeza e upgrade de computadores e notebooks",
    // ✅ SEO: alt texto descritivo para cada slide
    alt: "Técnico realizando manutenção de hardware em computador em Montes Claros",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1280&q=80",
    title: "Desenvolvimento de Sistemas",
    subtitle: "Aplicações web modernas com React, Node.js e TypeScript",
    alt: "Desenvolvimento de sistemas web modernos com React e TypeScript",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1280&q=80",
    title: "Redes e Infraestrutura",
    subtitle: "Configuração de redes Wi-Fi domésticas, com foco em segurança e performance",
    alt: "Configuração de redes Wi-Fi e infraestrutura de TI em Montes Claros",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1280&q=80",
    title: "Suporte Técnico em TI",
    subtitle: "Atendimento presencial e remoto em residências e escritórios",
    alt: "Suporte técnico em TI presencial e remoto em Montes Claros MG",
  },
  {
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1280&q=80",
    title: "Aulas Particulares de Informática",
    subtitle: "Do básico ao avançado — aprenda no seu ritmo",
    alt: "Aulas particulares de informática do básico ao avançado em Montes Claros",
  },
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
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      aria-roledescription="carrossel"
      style={{ padding: "6rem 1.5rem", background: "#f4f4f5" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a1a1aa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
            Portfólio
          </p>
          <h2 id="portfolio-heading" style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em" }}>
            Nossos Trabalhos
          </h2>
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          role="region"
          aria-label="Galeria de projetos"
          aria-live="polite"
          style={{ position: "relative", borderRadius: 20, overflow: "hidden", boxShadow: "0 25px 60px rgba(0,0,0,0.15)", userSelect: "none", height: 480 }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} de ${total}: ${s.title}`}
              aria-hidden={i !== current}
              style={{ position: "absolute", inset: 0, opacity: i === current ? 1 : 0, transition: "opacity 0.7s ease", pointerEvents: i === current ? "auto" : "none" }}
            >
              {/* ✅ SEO: alt descritivo + loading lazy para slides não-iniciais */}
              <img
                src={s.image}
                alt={s.alt}
                width={1280}
                height={480}
                loading={i === 0 ? "eager" : "lazy"}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2.5rem", transform: i === current ? "translateY(0)" : "translateY(16px)", opacity: i === current ? 1 : 0, transition: "all 0.5s ease 0.2s" }}>
                {/* ✅ SEO: h3 nos títulos do carrossel */}
                <h3 style={{ color: "#fff", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>
                  {s.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem" }}>{s.subtitle}</p>
              </div>
            </div>
          ))}

          <button onClick={prev} aria-label="Slide anterior"
            style={{ position: "absolute", top: "50%", left: 16, transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 0.2s", zIndex: 10 }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.30)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          <button onClick={next} aria-label="Próximo slide"
            style={{ position: "absolute", top: "50%", right: 16, transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff", width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background 0.2s", zIndex: 10 }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.30)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>

          <div aria-hidden="true" style={{ position: "absolute", top: 16, right: 20, background: "rgba(0,0,0,0.40)", backdropFilter: "blur(6px)", color: "#fff", fontSize: "0.8rem", fontWeight: 600, padding: "4px 12px", borderRadius: 9999, zIndex: 10 }}>
            {current + 1} / {total}
          </div>

          {/* ✅ SEO: dots com aria-label e aria-current */}
          <div role="tablist" aria-label="Navegação de slides" style={{ position: "absolute", bottom: 20, right: 24, display: "flex", gap: 8, zIndex: 10 }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Ir para slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                style={{ width: i === current ? 28 : 8, height: 8, borderRadius: 9999, background: i === current ? "#fff" : "rgba(255,255,255,0.45)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s" }}
              />
            ))}
          </div>

          <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, height: 3, width: `${((current + 1) / total) * 100}%`, background: "#fff", transition: "width 0.4s ease", zIndex: 10 }} />
        </div>
      </div>
    </section>
  );
};


// ── Contact ────────────────────────────────────────────────────────────────
const Contact = () => (
  <section id="contact" aria-labelledby="contact-heading" style={{ padding: "6rem 1.5rem", background: "#fff" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ marginBottom: 48 }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a1a1aa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
          Fale comigo
        </p>
        <h2 id="contact-heading" style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em" }}>
          Entre em Contato
        </h2>
      </div>

      {/* ✅ SEO: address para dados de contato */}
      <address style={{ fontStyle: "normal" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginBottom: 24 }}>
          {[
            { icon: <Mail size={22} aria-hidden="true" />, label: "E-mail",   value: "marconebritt@gmail.com",              href: "mailto:marconebritt@gmail.com" },
            { icon: <Github size={22} aria-hidden="true" />, label: "GitHub", value: "github.com/marconesdb",               href: "https://github.com/marconesdb" },
            { icon: <Linkedin size={22} aria-hidden="true" />, label: "LinkedIn", value: "linkedin.com/in/marconesb/",      href: "https://www.linkedin.com/in/marconesb/" },
          ].map(({ icon, label, value, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={`${label}: ${value}`}
              style={{ display: "flex", alignItems: "center", gap: 16, padding: 24, borderRadius: 16, border: "1px solid #f4f4f5", background: "#fafafa", textDecoration: "none", color: "inherit", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
              <div style={{ width: 48, height: 48, background: "#18181b", color: "#fff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {icon}
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>{label}</p>
                <p style={{ fontSize: "0.95rem", fontWeight: 500, color: "#18181b" }}>{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }}>
          {[
            { icon: <Phone size={22} aria-hidden="true" />, label: "Telefone 1", value: "(38) 99218-2727", href: "tel:+5538992182727" },
            { icon: <Phone size={22} aria-hidden="true" />, label: "Telefone 2", value: "(38) 99913-8667", href: "tel:+5538999138667" },
          ].map(({ icon, label, value, href }) => (
            <a key={label} href={href}
              aria-label={`Ligar para ${label}: ${value}`}
              style={{ display: "flex", alignItems: "center", gap: 16, padding: 24, borderRadius: 16, border: "1px solid #f4f4f5", background: "#fafafa", textDecoration: "none", color: "inherit", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
              <div style={{ width: 48, height: 48, background: "#18181b", color: "#fff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {icon}
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>{label}</p>
                <p style={{ fontSize: "0.95rem", fontWeight: 500, color: "#18181b" }}>{value}</p>
              </div>
            </a>
          ))}
        </div>
      </address>

      <div style={{ textAlign: "center" }}>
        <a
          href="https://wa.me/5538992182727?text=Olá,%20gostaria%20de%20conversar!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com Marcone pelo WhatsApp agora"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#18181b", color: "#fff", padding: "1rem 2.5rem", borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: "1rem" }}
        >
          Falar pelo WhatsApp <ChevronRight size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);


// ── Footer ─────────────────────────────────────────────────────────────────
const Footer = () => (
  // ✅ SEO: <footer> semântico
  <footer style={{ padding: "3rem 1.5rem", borderTop: "1px solid #a1a1aa", background: "#a0a0a3" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
      <a
        href="#home"
        aria-label="Informática Montes Claros — voltar ao topo"
        style={{ fontSize: "1rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "inherit" }}
      >
        <div style={{ background: "#18181b", color: "#a1a1aa", padding: 4, borderRadius: 6 }}>
          <Terminal size={16} aria-hidden="true" />
        </div>
        MARCONE <span style={{ color: "#18181b", fontWeight: 400, marginLeft: 4 }}>S.</span> BRITO
      </a>

      <p style={{ fontSize: "0.875rem", color: "#71717a" }}>
        © {new Date().getFullYear()} Marcone S. de Brito. Todos os direitos reservados.
      </p>

      <nav aria-label="Links do rodapé" style={{ display: "flex", gap: 24 }}>
        {["Privacidade", "Termos"].map(l => (
          <a key={l} href="#"
            style={{ fontSize: "0.875rem", fontWeight: 500, color: "#52525b", textDecoration: "none" }}>
            {l}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);


// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    // ✅ SEO: <main> envolve o conteúdo principal para leitores de tela e crawlers
    <div style={{ minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <Nav />
      <main id="main-content">
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