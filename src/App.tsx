/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Code2, 
  Cpu, 
  Layout, 
  Database, 
  Smartphone, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  ChevronRight,
  Terminal,
  Server,
  Wrench,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: 'https://layout-novo-portfolio.vercel.app/' },
  { name: 'Serviços', href: '#services' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          <div className="bg-zinc-900 text-white p-1 rounded">
            <Terminal size={20} />
          </div>
          <span>MARCONE <span className="text-zinc-500 font-normal">S.</span> BRITO</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
          >
            Contratar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-zinc-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-zinc-100/50 skew-x-12 transform origin-top-right" />
      <div className="absolute top-1/4 left-1/4 -z-10 w-64 h-64 bg-zinc-200/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-600 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            DISPONÍVEL PARA PROJETOS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Informática <span className="text-zinc-400">Montes Claros</span>
          </h1>
          <p className="text-lg text-zinc-600 mb-8 max-w-lg leading-relaxed">
            Olá, eu sou <strong>Marcone S. de Brito</strong>. Especialista em criar interfaces modernas, 
            sistemas eficientes e soluções técnicas completas para o seu negócio.
          </p>
          <div className="flex flex-wrap gap-4">
           <a 
            href="https://wa.me/5538992182727?text=Olá,%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-zinc-800 transition-all flex items-center gap-2 group"
          >
            Vamos Conversar
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

            <a 
              href="#services" 
              className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-xl font-semibold hover:bg-zinc-50 transition-all"
            >
              Ver Serviços
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 grayscale opacity-50">
            <div className="flex items-center gap-2">
              <Monitor size={20} />
              <span className="text-sm font-medium">Web</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone size={20} />
              <span className="text-sm font-medium">Mobile</span>
            </div>
            <div className="flex items-center gap-2">
              <Server size={20} />
              <span className="text-sm font-medium">Sistemas</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-zinc-100">
            <div className="bg-zinc-900 rounded-2xl overflow-hidden aspect-square flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
              <Code2 size={120} className="text-white/20 absolute" />
              <div className="text-zinc-400 font-mono text-sm p-8 z-10">
                <p className="text-emerald-400">const developer = &#123;</p>
                <p className="pl-4">name: "Marcone Silva",</p>
                <p className="pl-4">role: "Full-Stack Specialist",</p>
                <p className="pl-4">skills: ["React", "TS", "Node"],</p>
                <p className="pl-4">passion: "Clean Code",</p>
                <p className="text-emerald-400">&#125;;</p>
                <p className="mt-4 text-zinc-500">// Building the future...</p>
              </div>
            </div>
          </div>
          {/* Decorative cards */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-zinc-900 rounded-2xl -z-10 rotate-12" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-zinc-200 rounded-2xl -z-10 -rotate-12" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Layout className="text-zinc-900" />,
      title: "Desenvolvimento Front-end",
      description: "Criação de interfaces responsivas, rápidas e acessíveis utilizando React.js e Tailwind CSS."
    },
    {/*{
      icon: <Database className="text-zinc-900" />,
      title: "Análise de Sistemas",
      description: "Levantamento de requisitos, modelagem de dados e arquitetura de soluções escaláveis."
    },*/},

    {
      icon: <Wrench className="text-zinc-900" />,
      title: "Suporte Técnico TI",
      description: "Manutenção de hardware, configuração e formatação de computadores."
    },
    {/*{
      icon: <Smartphone className="text-zinc-900" />,
      title: "Aplicações Mobile",
      description: "Desenvolvimento de apps modernos que funcionam perfeitamente em qualquer dispositivo."
    }*/},
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">O que eu faço</h2>
          <h3 className="text-4xl font-bold tracking-tight">Serviços Especializados</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-zinc-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Desenvolvimento",
      skills: ["React.js", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "Node.js", "Git/GitHub"]
    },
   
    {
      title: "Técnico em Informática",
      skills: ["Hardware", "Wi-fi","Windows", "Segurança", "Virtualização", "IA", "Aulas Particulares"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Expertise</h2>
            <h3 className="text-4xl font-bold tracking-tight mb-6">Habilidades Técnicas</h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Ao longo da minha carreira como Analista e Desenvolvedor, consolidei um conjunto de habilidades 
              que me permite atuar desde a infraestrutura até a interface final do usuário.
            </p>
            <div className="space-y-4">
              {['Foco em Performance', 'Código Limpo e Escalável', 'Soluções Orientadas a Resultados'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-zinc-700/50 rounded-lg text-sm font-medium border border-zinc-600/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-900 rounded-[2.5rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full -mr-32 -mt-32" />
          
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
                Vamos iniciar um <span className="text-emerald-400">projeto?</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                Estou sempre aberto a novos desafios e parcerias. Se você precisa de um sistema robusto, 
                um site moderno ou consultoria técnica, entre em contato.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:marconebritt@gmail.com" className="flex items-center gap-4 text-white hover:text-emerald-400 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">E-mail</p>
                    <p className="text-lg font-medium">marconebritt@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex gap-4 pt-6">
                  <a href="#" className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition-all">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-800/50 p-12 lg:p-20 border-l border-zinc-700/50">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Nome</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome"
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">E-mail</label>
                    <input 
                      type="email" 
                      placeholder="seu@email.com"
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Mensagem</label>
                  <textarea 
                    rows={4}
                    placeholder="Como posso ajudar?"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="bg-zinc-900 text-white p-1 rounded">
            <Terminal size={16} />
          </div>
          <span>MARCONE <span className="text-zinc-500 font-normal"> S.</span> BRITO</span>
        </div>
        
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Marcone S. de Brito. Todos os direitos reservados.
        </p>
        
        <div className="flex gap-6 text-sm font-medium text-zinc-600">
          <a href="#" className="hover:text-zinc-900">Privacidade</a>
          <a href="#" className="hover:text-zinc-900">Termos</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
