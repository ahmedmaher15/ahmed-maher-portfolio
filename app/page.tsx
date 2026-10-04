"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Reveal from "@/components/Reveal";
import { experience, projects, skills } from "@/data/portfolio";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="siteShell">
      <motion.div className="scrollProgress" style={{ scaleX: progress }} />

      <header className="navWrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <span className="brandDot" /> Ahmed Maher
          </a>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="navActions">
            <ThemeToggle />
            <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <motion.div className="mobileMenu container" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </header>

      <section id="home" className="hero container">
        <motion.div className="heroCopy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="availability"><span className="availabilityDot" />Available for opportunities</div>
          <p className="eyebrow">Senior Flutter Developer · Egypt</p>
          <h1>Building mobile products <span>people enjoy using.</span></h1>
          <p className="heroLead">I build polished, scalable Flutter applications from architecture and API integration to production releases, performance optimization and long-term maintenance.</p>
          <div className="heroActions">
            <a className="button primary" href="#projects">View projects <ArrowUpRight size={16}/></a>
            <a className="button secondary" href="mailto:am2778209@gmail.com">Contact me <Mail size={16}/></a>
          </div>
          <div className="socialLinks">
            <a href="https://github.com/ahmedmaher15" target="_blank" rel="noreferrer"><Github size={17}/>GitHub</a>
            <a href="https://linkedin.com/in/1ahmedmaher" target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn</a>
          </div>
        </motion.div>

        <motion.div className="profileCard" initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.08}}>
          <div className="profileTop"><span>Flutter Developer</span><span>Cairo, Egypt</span></div>
          <div className="profilePhoto"><Image src="/profile/ahmed.png" alt="Ahmed Maher" width={700} height={900} priority className="portraitImage"/></div>
          <div className="statsRow">
            <div><strong>4+</strong><span>Years</span></div>
            <div><strong>{projects.length}+</strong><span>Projects</span></div>
            <div><strong>iOS + Android</strong><span>Platforms</span></div>
          </div>
        </motion.div>
      </section>

      <section className="techStrip"><div className="techTrack">{[...skills,...skills].map((skill,i)=><span className="techPill" key={`${skill.name}-${i}`}>{skill.icon ? <Image src={skill.icon} alt="" width={18} height={18}/> : <span className="miniDot"/>}{skill.name}</span>)}</div></section>

      <section id="about" className="section container">
        <Reveal><div className="sectionHead"><span>01 · ABOUT</span><h2>Engineering with product thinking.</h2></div></Reveal>
        <div className="aboutGrid">
          <Reveal><article className="aboutMain"><p>I&apos;m a Senior Flutter Developer with hands-on ownership across the full mobile product lifecycle. I focus on clean architecture, predictable state management, responsive interfaces, reliable integrations and production quality.</p><p>I enjoy turning complex product requirements into mobile experiences that feel simple, fast and maintainable.</p></article></Reveal>
          <Reveal delay={.06}><article className="miniCard"><span>Location</span><strong><MapPin size={18}/>Egypt</strong><p>Open to remote roles and strong product teams.</p></article></Reveal>
          <Reveal delay={.1}><article className="miniCard"><span>Focus</span><strong>Quality over shortcuts</strong><p>Architecture, UX polish, performance and maintainable releases.</p></article></Reveal>
        </div>
      </section>

      <section id="experience" className="section container">
        <Reveal><div className="sectionHead"><span>02 · EXPERIENCE</span><h2>From client projects to production ecosystems.</h2></div></Reveal>
        <div className="experienceList">{experience.map((item,index)=><Reveal key={`${item.company}-${item.period}`} delay={index*.04}><article className="experienceRow"><div className="index">0{index+1}</div><div className="role"><span>{item.period}</span><h3>{item.role}</h3><p>{item.company}</p></div><ul>{item.points.map(p=><li key={p}>{p}</li>)}</ul></article></Reveal>)}</div>
      </section>

      <section id="projects" className="section container">
        <Reveal><div className="sectionHead"><span>03 · PROJECTS</span><h2>Products that shipped.</h2></div></Reveal>
        <div className="projectsGrid">{projects.map((project,index)=><Reveal key={project.name} delay={(index%2)*.04}><article className="projectCard"><div className="projectVisual"><div className="projectGlow"/><Image src={project.image} alt={`${project.name} logo`} width={260} height={260} className="projectLogo"/><span className="projectNumber">{String(index+1).padStart(2,'0')}</span></div><div className="projectBody"><div className="projectMeta"><span>{project.category}</span><ArrowUpRight size={17}/></div><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article></Reveal>)}</div>
      </section>

      <section className="section container"><Reveal><div className="educationCard"><div><span>04 · EDUCATION</span></div><div><h2>Bachelor of Computer Science</h2><p>Cairo Higher Institute, Egypt · 2017 — 2021</p></div></div></Reveal></section>

      <section id="contact" className="section container"><Reveal><div className="contactCard"><span>05 · CONTACT</span><h2>Let&apos;s build something great.</h2><p>I&apos;m open to senior Flutter opportunities, product teams and ambitious mobile projects.</p><div className="heroActions contactActions"><a className="button primary" href="mailto:am2778209@gmail.com">Email me <Mail size={16}/></a><a className="button secondary" href="https://linkedin.com/in/1ahmedmaher" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16}/></a></div></div></Reveal></section>

      <footer className="footer container"><div><strong>Ahmed Maher</strong><span>Senior Flutter Developer</span></div><span>© 2026</span></footer>
    </main>
  );
}
