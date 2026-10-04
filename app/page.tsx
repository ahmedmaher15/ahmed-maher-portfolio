"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Smartphone,
  TerminalSquare,
} from "lucide-react";
import { motion } from "framer-motion";

import ThemeToggle from "@/components/ThemeToggle";
import Reveal from "@/components/Reveal";
import { experience, projects, skills } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="siteShell">
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />
      <div className="noiseLayer" />

      <header className="navWrap">
        <nav className="nav container">
          <a href="#home" className="brand" aria-label="Ahmed Maher home">
            <span className="brandMark">AM</span>
            <span className="brandCopy">
              <strong>Ahmed Maher</strong>
              <small>Flutter Developer</small>
            </span>
          </a>

          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="navActions">
            <a className="navCta" href="mailto:am2778209@gmail.com">
              Let&apos;s talk <ArrowUpRight size={15} />
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section id="home" className="hero container">
        <motion.div
          className="heroMain"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="eyebrowRow">
            <span className="statusPill">
              <span className="statusDot" /> Open to opportunities
            </span>
            <span className="eyebrowMeta">Cairo, Egypt · Remote friendly</span>
          </div>

          <h1>
            I design and build <span className="accentText">mobile products</span>
            <br />that feel fast, clean and production-ready.
          </h1>

          <p className="heroLead">
            Senior Flutter Developer with 4+ years of experience building scalable apps,
            clean architecture, real-time flows and reliable production systems for iOS and Android.
          </p>

          <div className="heroActions">
            <a className="button primary" href="#projects">
              Explore my work <ArrowDownRight size={17} />
            </a>
            <a
              className="button secondary"
              href="https://github.com/ahmedmaher15"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> GitHub
            </a>
          </div>

          <div className="heroMetaGrid">
            <div>
              <span>Experience</span>
              <strong>4+ years</strong>
            </div>
            <div>
              <span>Projects shipped</span>
              <strong>{projects.length}+</strong>
            </div>
            <div>
              <span>Platforms</span>
              <strong>iOS + Android</strong>
            </div>
          </div>
        </motion.div>

        <motion.aside
          className="heroVisual"
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
        >
          <div className="visualGlow" />
          <div className="portraitFrame">
            <Image
              src="/profile/ahmed.png"
              alt="Ahmed Maher"
              width={640}
              height={760}
              priority
              className="portraitImage"
            />
          </div>

          <motion.div
            className="floatingCard floatingCode"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code2 size={18} />
            <div>
              <small>Specialized in</small>
              <strong>Flutter · Clean Architecture</strong>
            </div>
          </motion.div>

          <motion.div
            className="floatingCard floatingShip"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <Sparkles size={18} />
            <div>
              <small>Current focus</small>
              <strong>Polished product experiences</strong>
            </div>
          </motion.div>
        </motion.aside>
      </section>

      <section className="stackStrip" aria-label="Technology stack">
        <div className="stackTrack">
          {[...skills, ...skills].map((skill, index) => (
            <div className="stackItem" key={`${skill.name}-${index}`}>
              {skill.icon ? (
                <Image src={skill.icon} alt="" width={22} height={22} />
              ) : (
                <TerminalSquare size={18} />
              )}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section container aboutSection">
        <Reveal>
          <div className="sectionHeader splitHeader">
            <div>
              <p className="sectionKicker">01 · About</p>
              <h2>Product-minded engineering, not just feature delivery.</h2>
            </div>
            <p className="sectionIntro">
              I care about the complete product lifecycle: architecture, UI quality, API integration,
              performance, release quality and maintainability after launch.
            </p>
          </div>
        </Reveal>

        <div className="aboutGrid">
          <Reveal>
            <article className="bentoCard aboutStatement">
              <span className="cardIcon"><Smartphone size={20} /></span>
              <h3>Mobile systems that can grow without becoming painful to maintain.</h3>
              <p>
                My work combines reusable UI systems, predictable state management and clean boundaries
                between presentation, business logic and data layers.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="bentoCard aboutMini">
              <span className="miniLabel">Location</span>
              <div className="iconLine"><MapPin size={18} /> Egypt</div>
              <p>Available for strong product teams, remote roles and serious Flutter projects.</p>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="bentoCard aboutMini">
              <span className="miniLabel">Working style</span>
              <strong>Ownership-driven</strong>
              <p>From requirements and architecture to store deployment and production maintenance.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="experience" className="section container">
        <Reveal>
          <div className="sectionHeader">
            <p className="sectionKicker">02 · Experience</p>
            <h2>Built across product teams, ecosystems and production apps.</h2>
          </div>
        </Reveal>

        <div className="experienceList">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 0.05}>
              <article className="experienceRow">
                <div className="experienceIndex">0{index + 1}</div>
                <div className="experienceRole">
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" className="section container projectsSection">
        <Reveal>
          <div className="sectionHeader splitHeader projectHeading">
            <div>
              <p className="sectionKicker">03 · Selected Projects</p>
              <h2>Apps built for real users, real operations and real production.</h2>
            </div>
            <p className="sectionIntro">
              A selection of delivery, logistics, marketplace and service products I&apos;ve worked on.
            </p>
          </div>
        </Reveal>

        <div className="projectsGrid">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 3) * 0.05}>
              <article className={`projectCard ${index === 0 ? "featuredProject" : ""}`}>
                <div className="projectVisual">
                  <div className="projectVisualGlow" />
                  <Image
                    src={project.image}
                    alt={`${project.name} logo`}
                    width={320}
                    height={320}
                    className="projectLogo"
                  />
                  <span className="projectNumber">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="projectContent">
                  <div className="projectTopline">
                    <span>{project.category}</span>
                    <ArrowUpRight size={18} />
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tagRow">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container credentialsSection">
        <Reveal>
          <div className="credentialsCard">
            <div>
              <p className="sectionKicker">04 · Education</p>
              <h2>Bachelor of Computer Science</h2>
              <p>Cairo Higher Institute, Egypt · 2017 — 2021</p>
            </div>
            <div className="credentialBadge">CS</div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section container contactSection">
        <Reveal>
          <div className="contactCard">
            <div className="contactGlow" />
            <p className="sectionKicker">05 · Contact</p>
            <h2>Have a role, product or mobile challenge worth discussing?</h2>
            <p>
              I&apos;m open to senior Flutter opportunities and product-focused teams that care about quality.
            </p>

            <div className="contactActions">
              <a className="button primary large" href="mailto:am2778209@gmail.com">
                <Mail size={18} /> Email me
              </a>
              <a
                className="button secondary large"
                href="https://linkedin.com/in/1ahmedmaher"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="footer container">
        <div>
          <strong>Ahmed Maher</strong>
          <span>Senior Flutter Developer</span>
        </div>
        <div className="footerLinks">
          <a href="https://github.com/ahmedmaher15" target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
          <a href="https://linkedin.com/in/1ahmedmaher" target="_blank" rel="noreferrer">
            <Linkedin size={17} /> LinkedIn
          </a>
        </div>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
