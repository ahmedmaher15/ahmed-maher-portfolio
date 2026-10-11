"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Reveal from "@/components/Reveal";
import { experience, projects, skills } from "@/data/portfolio";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const filters = ["All", "Delivery", "Marketplace", "Services", "Other"] as const;
  const projectGroup = (name: string, category: string) => {
    const text = `${name} ${category}`.toLowerCase();
    if (/takka|delivery|food delivery/.test(text)) return "Delivery";
    if (/marketplace|market|freelanc|carsy|معاوضة/.test(text)) return "Marketplace";
    if (/service|keep ic|bnaa/.test(text)) return "Services";
    return "Other";
  };
  const filteredProjects = projects.filter((project) => activeFilter === "All" || projectGroup(project.name, project.category) === activeFilter);
  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);
  const { scrollYProgress } = useScroll();

  return (
    <main className="siteShell">
      <motion.div className="scrollProgress" style={{ scaleX: scrollYProgress }} />

      <header className="navWrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <span className="brandDot" /> Ahmed Maher
          </a>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="navActions">
            <ThemeToggle />
            <button className="menuButton" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <motion.div id="mobile-navigation" className="mobileMenu container" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </header>

      <section id="home" className="hero container">
        <motion.div className="heroCopy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="availability"><span className="availabilityDot" />Open to remote opportunities</div>
          <p className="eyebrow">Senior Flutter Developer · Egypt</p>
          <h1>I build mobile apps <span>that just feel right.</span></h1>
          <p className="heroLead">I turn complex ideas into smooth, reliable iOS and Android apps. With 5+ years of Flutter experience, I take products from the first screen to the App Store and beyond.</p>
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
          <div className="profilePhoto"><Image src="/profile/ahmed.png" alt="Ahmed Maher" width={700} height={900} sizes="(max-width: 920px) 100vw, 430px" priority className="portraitImage"/></div>
          <div className="statsRow">
            <div><strong>5+</strong><span>Years</span></div>
            <div><strong>{projects.length}+</strong><span>Projects</span></div>
            <div><strong>iOS + Android</strong><span>Platforms</span></div>
          </div>
        </motion.div>
      </section>

      <section className="techStrip">
        <div className="techTrack">
          {[...skills, ...skills].map((skill, i) => (
            <span className="techPill" key={`${skill.name}-${i}`}>
              <span className="miniDot" />
              {skill.name}
            </span>
          ))}
        </div>
      </section>
      <section id="about" className="section container">
        <Reveal><div className="sectionHead"><span>01 · ABOUT</span><h2>A developer who cares about the details.</h2></div></Reveal>
        <div className="aboutGrid">
          <Reveal><article className="aboutMain"><div className="aboutIntro"><span className="smallEyebrow">A little about me</span><h3>Hey, I&apos;m Ahmed <span aria-hidden="true">👋</span></h3><p>I&apos;m a Senior Flutter Developer with <strong>5+ years of experience</strong> building and shipping real apps for iOS and Android.</p><p>I love turning complicated workflows into simple, friendly experiences. From clean architecture and real-time features to performance tuning and app releases, I care about every detail that makes an app great to use.</p><div className="aboutHighlights"><span><CheckCircle2 size={15}/> Flutter & Dart</span><span><CheckCircle2 size={15}/> Clean Architecture</span><span><CheckCircle2 size={15}/> Production apps</span></div></div></article></Reveal>
          <Reveal delay={.06}><article className="miniCard"><span>Location</span><strong><MapPin size={18}/>Egypt</strong><p>Open to remote roles and strong product teams.</p></article></Reveal>
          <Reveal delay={.1}><article className="miniCard"><span>Focus</span><strong>Quality over shortcuts</strong><p>Architecture, UX polish, performance and maintainable releases.</p></article></Reveal>
        </div>
      </section>

      <section id="experience" className="section container">
        <Reveal><div className="sectionHead"><span>02 · EXPERIENCE</span><h2>Where I’ve made an impact.</h2></div></Reveal>
        <div className="experienceList">{experience.map((item,index)=><Reveal key={`${item.company}-${item.period}`} delay={index*.04}><article className="experienceRow"><div className="index">0{index+1}</div><div className="role"><span>{item.period}</span><h3>{item.role}</h3><p>{item.company}</p></div><ul>{item.points.map(p=><li key={p}>{p}</li>)}</ul></article></Reveal>)}</div>
      </section>

      <section id="projects" className="section container">
        <Reveal><div className="sectionHead"><span>03 · PROJECTS</span><h2>Real apps. Real users.</h2></div></Reveal>
        <p className="sectionLead">Browse the apps I&apos;ve helped bring to life — from delivery ecosystems to marketplaces and service platforms.</p>
        <div className="projectToolbar" role="group" aria-label="Filter projects">
          <div className="filterButtons">
            {filters.map((filter) => <button key={filter} type="button" className={`filterButton ${activeFilter === filter ? "active" : ""}`} aria-pressed={activeFilter === filter} onClick={() => {setActiveFilter(filter); setShowAllProjects(false);}}>{filter}</button>)}
          </div>
          <span className="projectCount">{filteredProjects.length} projects</span>
        </div>
        <div className="projectsGrid">
          {visibleProjects.map((project) => {
            const index = projects.indexOf(project);
            return (
            <Reveal key={project.name} delay={(index % 2) * 0.04}>
              <article className="projectCard">
                <div className="projectVisual">
                  <div className="projectGlow" />
                  <Image
                    src={project.image}
                    alt={`${project.name} logo`}
                    width={260}
                    height={260}
                    className="projectLogo"
                  />
                  <span className="projectNumber">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="projectBody">
                  <div className="projectMeta">
                    <span>{project.category}</span>
                    <ArrowUpRight size={17} />
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  {(project.appStore || project.googlePlay) && (
                    <div className="storeLinks">
                      {project.appStore && (
                        <a className="storeLink" href={project.appStore} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on the App Store`}>
                          <span className="storeIcon">●</span> App Store <ArrowUpRight size={14} />
                        </a>
                      )}
                      {project.googlePlay && (
                        <a className="storeLink" href={project.googlePlay} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on Google Play`}>
                          <span className="storeIcon">▶</span> Google Play <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          );})}
        </div>
        {filteredProjects.length > 6 && <div className="moreProjects"><button className="button secondary" type="button" onClick={() => setShowAllProjects(!showAllProjects)}>{showAllProjects ? <>Show fewer projects <ChevronUp size={17}/></> : <>Show all {filteredProjects.length} projects <ChevronDown size={17}/></>}</button></div>}
      </section>

      <section className="section container" id="skills"><Reveal><div className="sectionHead"><span>04 · EXPERTISE</span><h2>Tools I use to build better apps.</h2></div><div className="skillCloud">{skills.map((skill)=><span className="skillChip" key={skill.name}>{skill.name}</span>)}</div></Reveal></section>

      <section className="section container educationSection"><Reveal><div className="educationCard"><div><span>05 · EDUCATION</span></div><div><h2>Bachelor of Computer Science</h2><p>Cairo Higher Institute, Egypt · 2017 — 2021</p><p className="educationExtras">Arabic — Native &nbsp;·&nbsp; English — Professional working proficiency</p></div></div></Reveal></section>

      <section id="contact" className="section container"><Reveal><div className="contactCard"><span>06 · CONTACT</span><h2>Let&apos;s build something great.</h2><p>Have a Flutter role, product idea, or app that needs some care? I’d love to hear about it.</p><div className="heroActions contactActions"><a className="button primary" href="mailto:am2778209@gmail.com">Email me <Mail size={16}/></a><a className="button secondary" href="https://linkedin.com/in/1ahmedmaher" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16}/></a></div></div></Reveal></section>

      <footer className="footer container"><div><strong>Ahmed Maher</strong><span>Senior Flutter Developer</span></div><span>© 2026</span></footer>
    </main>
  );
}
