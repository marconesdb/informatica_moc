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
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "https://layout-novo-portfolio.vercel.app/" },
    { name: "Serviços", href: "#services" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s",
        background: isScrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        boxShadow: isScrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
        padding: isScrolled ? "1rem 0" : "1.5rem 0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.05em", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ background: "#18181b", color: "#fff", padding: 4, borderRadius: 6 }}>
            <Terminal size={20} />
          </div>
          <span>MARCONE <span style={{ color: "#71717a", fontWeight: 400 }}>S.</span> BRITO</span>
        </div>

        {/* Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {navLinks.map(l => (
            <a key={l.name} href={l.href} style={{ fontSize: "0.875rem", fontWeight: 500, color: "#52525b", textDecoration: "none" }}>{l.name}</a>
          ))}
          <a href="#contact" style={{ background: "#18181b", color: "#fff", padding: "0.5rem 1.25rem", borderRadius: 9999, fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>
            Contratar
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: "none", border: "none", cursor: "pointer" }}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div style={{ background: "#fff", borderBottom: "1px solid #f4f4f5", padding: "1.5rem" }}>
          {navLinks.map(l => (
            <a key={l.name} href={l.href} onClick={() => setIsMobileMenuOpen(false)}
              style={{ display: "block", fontSize: "1.1rem", fontWeight: 500, color: "#52525b", marginBottom: 16, textDecoration: "none" }}>
              {l.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};


// ── Hero ───────────────────────────────────────────────────────────────────
const Hero = () => (
  <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80, position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", top: 0, right: 0, zIndex: -1, width: "50%", height: "100%", background: "rgba(244,244,245,0.5)", transform: "skewX(12deg)", transformOrigin: "top right" }} />
    <div style={{ position: "absolute", top: "25%", left: "25%", zIndex: -1, width: 256, height: 256, background: "rgba(228,228,231,0.3)", borderRadius: "50%", filter: "blur(48px)" }} />

    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", width: "100%" }}>
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0.25rem 0.75rem", borderRadius: 9999, background: "#f4f4f5", border: "1px solid #e4e4e7", fontSize: "0.75rem", fontWeight: 600, color: "#52525b", marginBottom: 24 }}>
          <span style={{ position: "relative", display: "flex", width: 8, height: 8 }}>
            <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#34d399", opacity: 0.75, animation: "ping 1s infinite" }} />
            <span style={{ position: "relative", display: "inline-flex", borderRadius: "50%", width: 8, height: 8, background: "#10b981" }} />
          </span>
          DISPONÍVEL PARA PROJETOS
        </div>

        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.04em", marginBottom: 24 }}>
          Informática <span style={{ color: "#a1a1aa" }}>Montes Claros</span>
        </h1>

        <p style={{ fontSize: "1.125rem", color: "#52525b", marginBottom: 32, maxWidth: 480, lineHeight: 1.7 }}>
          Olá, eu sou <strong>Marcone S. de Brito</strong>. Especialista em criar interfaces modernas,
          sistemas eficientes e soluções técnicas completas para o seu negócio.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <a href="https://wa.me/5538992182727?text=Olá,%20gostaria%20de%20conversar!" target="_blank" rel="noopener noreferrer"
            style={{ background: "#18181b", color: "#fff", padding: "1rem 2rem", borderRadius: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            Vamos Conversar <ChevronRight size={18} />
          </a>
          <a href="#services"
            style={{ background: "#fff", color: "#18181b", border: "1px solid #e4e4e7", padding: "1rem 2rem", borderRadius: 12, fontWeight: 600, textDecoration: "none" }}>
            Ver Serviços
          </a>
        </div>

        <div style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 24, opacity: 0.5, filter: "grayscale(1)" }}>
          {[{ Icon: Monitor, label: "Web" }, { Icon: Smartphone, label: "Mobile" }, { Icon: Server, label: "Sistemas" }].map(({ Icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Icon size={20} /><span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ position: "relative", zIndex: 10, background: "#fff", padding: 16, borderRadius: 24, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid #f4f4f5" }}>
          <div style={{ background: "#18181b", borderRadius: 16, overflow: "hidden", aspectRatio: "1/1", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px", zIndex: 1 }} />
            <img
              src={informatica}
              alt="Informática Montes Claros"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "relative", zIndex: 2 }}
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: -24, right: -24, width: 128, height: 128, background: "#18181b", borderRadius: 16, zIndex: -1, transform: "rotate(12deg)" }} />
        <div style={{ position: "absolute", bottom: -24, left: -24, width: 128, height: 128, background: "#e4e4e7", borderRadius: 16, zIndex: -1, transform: "rotate(-12deg)" }} />
      </div>
    </div>

    <style>{`@keyframes ping { 0%,100%{transform:scale(1);opacity:.75} 50%{transform:scale(2);opacity:0} }`}</style>
  </section>
);


// ── Services ───────────────────────────────────────────────────────────────
const Services = () => {
  const services = [
    { icon: <Layout />, title: "Desenvolvimento Front-end", description: "Criação de interfaces responsivas, rápidas e acessíveis utilizando React.js e Tailwind CSS." },
    { icon: <Wrench />, title: "Suporte Técnico TI", description: "Manutenção de hardware, configuração e formatação de computadores." },
  ];

  return (
    <section id="services" style={{ padding: "6rem 1.5rem", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a1a1aa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>O que eu faço</h2>
          <h3 style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em" }}>Serviços Especializados</h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
          {services.map((s, i) => (
            <div key={i} style={{ padding: 32, borderRadius: 16, border: "1px solid #f4f4f5", background: "#fafafa", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-5px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fafafa"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
              <div style={{ width: 48, height: 48, background: "#fff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", marginBottom: 24 }}>
                {s.icon}
              </div>
              <h4 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: 12 }}>{s.title}</h4>
              <p style={{ color: "#52525b", lineHeight: 1.7 }}>{s.description}</p>
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
    <section id="skills" style={{ padding: "6rem 1.5rem", background: "#18181b", color: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#52525b", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Expertise</h2>
          <h3 style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 24 }}>Habilidades Técnicas</h3>
          <p style={{ color: "#a1a1aa", fontSize: "1.125rem", lineHeight: 1.7, marginBottom: 32 }}>
            Ao longo da minha carreira como Analista e Desenvolvedor, consolidei um conjunto de habilidades
            que me permite atuar desde a infraestrutura até a interface final do usuário.
          </p>
          {["Foco em Performance", "Código Limpo e Escalável", "Soluções Orientadas a Resultados"].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <CheckCircle2 color="#10b981" size={20} />
              <span style={{ fontWeight: 500 }}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {cats.map((c, i) => (
            <div key={i} style={{ background: "rgba(39,39,42,0.5)", padding: 24, borderRadius: 16, border: "1px solid rgba(63,63,70,0.5)" }}>
              <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>{c.title}</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {c.skills.map(s => (
                  <span key={s} style={{ padding: "0.25rem 0.75rem", background: "rgba(63,63,70,0.5)", borderRadius: 8, fontSize: "0.875rem", fontWeight: 500, border: "1px solid rgba(82,82,91,0.3)" }}>{s}</span>
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
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&q=80",
    title: "Manutenção de Hardware",
    subtitle: "Diagnóstico, limpeza e upgrade de computadores e notebooks",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1280&q=80",
    title: "Desenvolvimento de Sistemas",
    subtitle: "Aplicações web modernas com React, Node.js e TypeScript",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1280&q=80",
    title: "Redes e Infraestrutura",
    subtitle: "Configuração de redes Wi-Fi domésticas, com foco em segurança e performance",
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1280&q=80",
    title: "Suporte Técnico em TI",
    subtitle: "Atendimento presencial e remoto em residências e escritórios",
  },
  {
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1280&q=80",
    title: "Aulas Particulares de Informática",
    subtitle: "Do básico ao avançado — aprenda no seu ritmo",
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
    <section style={{ padding: "6rem 1.5rem", background: "#f4f4f5" }} aria-label="Galeria de projetos">
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a1a1aa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
            Portfólio
          </h2>
          <h3 style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em" }}>
            Nossos Trabalhos
          </h3>
        </div>

        {/* Carousel wrapper */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: "relative", borderRadius: 20, overflow: "hidden",
            boxShadow: "0 25px 60px rgba(0,0,0,0.15)", userSelect: "none", height: 480,
          }}
        >
          {/* Slides */}
          {SLIDES.map((s, i) => (
            <div
              key={i}
              style={{
                position: "absolute", inset: 0,
                opacity: i === current ? 1 : 0,
                transition: "opacity 0.7s ease",
                pointerEvents: i === current ? "auto" : "none",
              }}
            >
              <img
                src={s.image}
                alt={s.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />

              {/* Overlay gradiente */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
              }} />

              {/* Texto sobre a imagem */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "2.5rem",
                transform: i === current ? "translateY(0)" : "translateY(16px)",
                opacity: i === current ? 1 : 0,
                transition: "all 0.5s ease 0.2s",
              }}>
                <h4 style={{
                  color: "#fff", fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                  fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em",
                }}>
                  {s.title}
                </h4>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem" }}>
                  {s.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Botão Anterior */}
          <button onClick={prev} aria-label="Anterior"
            style={{
              position: "absolute", top: "50%", left: 16, transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)", color: "#fff",
              width: 44, height: 44, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "background 0.2s", zIndex: 10,
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.30)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Botão Próximo */}
          <button onClick={next} aria-label="Próximo"
            style={{
              position: "absolute", top: "50%", right: 16, transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)", color: "#fff",
              width: 44, height: 44, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "background 0.2s", zIndex: 10,
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.30)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
          >
            <ChevronRight size={22} />
          </button>

          {/* Contador */}
          <div style={{
            position: "absolute", top: 16, right: 20,
            background: "rgba(0,0,0,0.40)", backdropFilter: "blur(6px)",
            color: "#fff", fontSize: "0.8rem", fontWeight: 600,
            padding: "4px 12px", borderRadius: 9999, zIndex: 10,
          }}>
            {current + 1} / {total}
          </div>

          {/* Dots */}
          <div style={{ position: "absolute", bottom: 20, right: 24, display: "flex", gap: 8, zIndex: 10 }}>
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
                style={{
                  width: i === current ? 28 : 8, height: 8, borderRadius: 9999,
                  background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
                  border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s",
                }}
              />
            ))}
          </div>

          {/* Barra de progresso */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, height: 3,
            width: `${((current + 1) / total) * 100}%`,
            background: "#fff", transition: "width 0.4s ease", zIndex: 10,
          }} />
        </div>
      </div>
    </section>
  );
};


// ── Contact ────────────────────────────────────────────────────────────────
const Contact = () => (
  <section id="contact" style={{ padding: "6rem 1.5rem", background: "#fff" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a1a1aa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Fale comigo</h2>
        <h3 style={{ fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.03em" }}>Entre em Contato</h3>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginBottom: 24 }}>
        {[
          { icon: <Mail size={22} />, label: "E-mail", value: "marconebritt@gmail.com", href: "mailto:marconebritt@gmail.com" },
          { icon: <Github size={22} />, label: "GitHub", value: "https://github.com/marconesdb", href: "https://github.com" },
          { icon: <Linkedin size={22} />, label: "LinkedIn", value: "https://www.linkedin.com/in/marconesb/", href: "https://linkedin.com" },
        ].map(({ icon, label, value, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
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

      {/* Telefones lado a lado */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }}>
        {[
          { icon: <Phone size={22} />, label: "Telefone 1", value: "(38) 99218-2727", href: "tel:+5538992182727" },
          { icon: <Phone size={22} />, label: "Telefone 2", value: "(38) 99913-8667", href: "tel:+5538999138667" },
        ].map(({ icon, label, value, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
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

      <div style={{ textAlign: "center" }}>
        <a href="https://wa.me/5538992182727?text=Olá,%20gostaria%20de%20conversar!" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#18181b", color: "#fff", padding: "1rem 2.5rem", borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: "1rem" }}>
          Falar pelo WhatsApp <ChevronRight size={18} />
        </a>
      </div>
    </div>
  </section>
);


// ── Footer ─────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer style={{ padding: "3rem 1.5rem", borderTop: "1px solid #a1a1aa", background: "#a0a0a3" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
      <div style={{ fontSize: "1rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ background: "#18181b", color: "#a1a1aa", padding: 4, borderRadius: 6 }}><Terminal size={16} /></div>
        MARCONE <span style={{ color: "#18181b", fontWeight: 400, marginLeft: 4 }}>S.</span> BRITO
      </div>
      <p style={{ fontSize: "0.875rem", color: "#71717a" }}>© {new Date().getFullYear()} Marcone S. de Brito. Todos os direitos reservados.</p>
      <div style={{ display: "flex", gap: 24 }}>
        {["Privacidade", "Termos"].map(l => <a key={l} href="#" style={{ fontSize: "0.875rem", fontWeight: 500, color: "#52525b", textDecoration: "none" }}>{l}</a>)}
      </div>
    </div>
  </footer>
);


// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      <Nav />
      <Hero />
      <Services />
      <Skills />
      <ImageCarousel />
      <Contact />
      <Footer />
    </div>
  );
}