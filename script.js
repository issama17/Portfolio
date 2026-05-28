document.addEventListener('DOMContentLoaded', () => {
  // 1. Translation System Database
  const translations = {
    en: {
      "hero-subtitle": "Cybersecurity & Network Infrastructure",
      "hero-tagline": "First-year DUT Cybersecurity student at EST Tétouan, passionate about threat detection, SIEM architectures, network auditing, and CTF competitions.",
      "status-ready": "Initiation Internship late 2026: Ready for Engagement",
      
      "nav-about": "01 / About",
      "nav-skills": "02 / Skills",
      "nav-projects": "03 / Projects",
      "nav-education": "04 / Education & Certs",

      "btn-download-resume": "Download Resume PDF",
      "btn-consultation": "Initiate Briefing",

      "about-heading": "01 / About",
      "about-p1": "I approach digital security with the same precision, discretion, and technical rigor required in mission-critical environments. Currently a first-year DUT Cybersecurity student at EST Tétouan, I specialize in designing secure network perimeters and threat defense workflows.",
      "about-p2": "My hands-on experience includes laboratory deployment of SIEM and NIDS/IPS solutions (Wazuh, Suricata, Snort) coupled with active Red Team simulations. This double-sided exposure allows me to construct effective correlation rules and validate threat coverage using tools like Nmap, Hydra, SQLMap, and hping3.",
      "about-p3": "I am an active CTF player (solving challenges in ENSI CTF and NorthSec), focusing on digital forensics, web exploitation, and reverse engineering. I am seeking a practical initiation internship for late 2026 to apply my technical curiosity and problem-solving skills to real-world corporate infrastructures.",

      "skills-heading": "02 / Skills",
      "skills-intro": "A structured index of technical competencies cultivated through university projects, home labs, and CTF challenge environments.",
      "skill-secops-title": "Security Operations & SIEM",
      "skill-secops-item1": "• Wazuh SIEM, Suricata NIDS, Snort IDS/IPS",
      "skill-secops-item2": "• Event Correlation & Audit Log Analysis",
      "skill-secops-item3": "• Threat Hunting & Incident Monitoring",
      "skill-secops-item4": "• Active System Supervision with Zabbix",
      "skill-netdef-title": "Network & Defense Infrastructure",
      "skill-netdef-item1": "• Secure Perimeter Engineering & VPN Setup",
      "skill-netdef-item2": "• Windows Server Admin (Active Directory, GPO)",
      "skill-netdef-item3": "• OSI/TCP-IP Stack Auditing & Packet Capture",
      "skill-netdef-item4": "• Firewalls, Routing Protocols & IDS/IPS Modes",
      "skill-offensive-title": "Offensive & Vulnerability Auditing",
      "skill-offensive-item1": "• Vulnerability Scans (Nmap, Nikto, SQLMap)",
      "skill-offensive-item2": "• Simulated Brute-Force Testing (Hydra, hping3)",
      "skill-offensive-item3": "• Digital Forensics & Reverse Engineering",
      "skill-offensive-item4": "• Lab-Environment Malware Isolation",
      "skill-automation-title": "Automation & Virtualization",
      "skill-automation-item1": "• Python Scripting (OOP & Socket Automation)",
      "skill-automation-item2": "• Unix Bash Shell Scripting & C Programming",
      "skill-automation-item3": "• Virtualization (VMware, VirtualBox)",
      "skill-automation-item4": "• Cisco Packet Tracer Lab Mockups",

      "projects-heading": "03 / Projects",
      "project-1-meta": "Academic Project",
      "project-1-title": "Wazuh SIEM & Suricata NIDS Integration",
      "project-1-desc": "Deployed a full Wazuh SIEM architecture (Manager + Agents) integrated with Suricata NIDS for EVE JSON event analysis. Conducted simulated Red Team campaigns (Nmap scans, SSH/FTP/RDP brute force with Hydra, SQLMap injections, and hping3 SYN flood DoS) from Kali Linux, correlating and auditing events to validate rule coverage.",
      "project-2-meta": "Personal Lab",
      "project-2-title": "Snort IDS/IPS Inline Deployment",
      "project-2-desc": "Installed and configured Snort 3 in inline IPS mode (NFQ) for active threat blocking. Developed custom detection rules targeting ICMP traffic anomalies, SSH brute-forcing, and Nmap SYN scans. Validated defensive actions against web vectors like SQL injections.",
      "project-3-meta": "Academic Project",
      "project-3-title": "Capture The Flag Web Platform",
      "project-3-desc": "Engineered and launched a functional, multiplayer web CTF platform built on object-oriented programming in Python. Implemented user-isolated challenge execution, automated scoring trackers, and clean administration panels. Hosted in production on Railway.",

      "education-heading": "04 / Education & Certifications",
      "edu-dut-title": "DUT in Cybersecurity (Diploma of University Technology)",
      "edu-dut-school": "EST Tétouan, Morocco — 2025 - Present",
      "edu-dut-desc": "Key Courses: Networks & Security (OSI/TCP-IP, Firewalls, VPN, IDS/IPS), Windows Server (AD, GPO), Python, C, SQL.",
      "edu-bac-title": "Baccalauréat in Physical Sciences",
      "edu-bac-school": "Lycée Abdelkhalek Torres, Tétouan — Mention Bien (French/Bilingual option)",
      
      "certs-title": "Industry Certifications",
      "cert-1-title": "Getting Started with Cisco Packet Tracer",
      "cert-1-issuer": "Cisco Networking Academy — May 2026",
      "cert-2-title": "Introduction to Cybersecurity",
      "cert-2-issuer": "Cisco Networking Academy — Apr 2026",
      "cert-3-title": "Foundations of Cybersecurity",
      "cert-3-issuer": "Google / Coursera — Apr 2026",

      "ctf-heading": "CTF Competitions",
      "ctf-ensi-desc": "ENSI 2K26 CTF (Cyberspace x ENSI) — 11 Flags solved (May 2026)",
      "ctf-nsec-desc": "NorthSec 2026 — 6 Flags solved (April 2026)",
      "ctf-skills-desc": "Acreed Competencies: Digital Forensics, Web Exploitation, Reverse Engineering.",

      "footer-desc": "Designed & Engineered with absolute discretion. Built using custom structural markup, Tailwind CSS utility layers, and lightweight client-side scripts. Deployable instantly on Vercel."
    },
    fr: {
      "hero-subtitle": "Cybersécurité & Infrastructure Réseau",
      "hero-tagline": "Étudiant en 1ère année DUT Cybersécurité à l'EST Tétouan, passionné par la détection des menaces, les architectures SIEM, l'audit réseau et les compétitions CTF.",
      "status-ready": "Recherche de stage d'initiation (Fin 2026) : Disponible",
      
      "nav-about": "01 / À Propos",
      "nav-skills": "02 / Compétences",
      "nav-projects": "03 / Projets",
      "nav-education": "04 / Formation & Certifs",

      "btn-download-resume": "Télécharger le CV PDF",
      "btn-consultation": "Initier le Briefing",

      "about-heading": "01 / À Propos",
      "about-p1": "J'aborde la sécurité numérique avec la même précision, discrétion et rigueur technique exigées dans les infrastructures critiques. Actuellement étudiant en 1ère année DUT Cybersécurité à l'EST Tétouan, je me spécialise dans la conception de périmètres réseau sécurisés et le déploiement de workflows de détection.",
      "about-p2": "Mon expérience pratique comprend le déploiement en laboratoire de solutions SIEM et NIDS/IPS (Wazuh, Suricata, Snort) couplé à des simulations Red Team. Cette double exposition me permet de construire des règles de corrélation efficaces et de valider la couverture de détection avec des outils comme Nmap, Hydra, SQLMap et hping3.",
      "about-p3": "Participant actif aux CTFs (ENSI CTF et NorthSec), je me concentre sur la forensique numérique, l'exploitation web et le reverse engineering. Je recherche activement un stage d'initiation pour fin 2026 pour mettre mon sens de l'analyse au service d'infrastructures d'entreprise réelles.",

      "skills-heading": "02 / Compétences",
      "skills-intro": "Index structuré des compétences techniques développées lors de projets académiques, laboratoires personnels et simulations CTF.",
      "skill-secops-title": "Opérations de Sécurité & SIEM",
      "skill-secops-item1": "• Wazuh SIEM, Suricata NIDS, Snort IDS/IPS",
      "skill-secops-item2": "• Corrélation d'événements & Analyse de Logs",
      "skill-secops-item3": "• Threat Hunting & Surveillance des Incidents",
      "skill-secops-item4": "• Supervision active de systèmes avec Zabbix",
      "skill-netdef-title": "Réseaux & Infrastructures de Défense",
      "skill-netdef-item1": "• Ingénierie de périmètres sécurisés & VPN",
      "skill-netdef-item2": "• Admin Windows Server (Active Directory, GPO)",
      "skill-netdef-item3": "• Audit de pile OSI/TCP-IP & capture de paquets",
      "skill-netdef-item4": "• Pare-feux, Protocoles de Routage & Modes IPS",
      "skill-offensive-title": "Audit Offensif & Vulnérabilités",
      "skill-offensive-item1": "• Scans de vulnérabilités (Nmap, Nikto, SQLMap)",
      "skill-offensive-item2": "• Tests de force brute simulés (Hydra, hping3)",
      "skill-offensive-item3": "• Forensique numérique & Reverse Engineering",
      "skill-offensive-item4": "• Isolation de malwares en environnement lab",
      "skill-automation-title": "Automatisation & Virtualisation",
      "skill-automation-item1": "• Scripting Python (POO & Programmation Socket)",
      "skill-automation-item2": "• Scripting Shell Bash Unix & Langage C",
      "skill-automation-item3": "• Virtualisation (VMware, VirtualBox)",
      "skill-automation-item4": "• Maquettes réseau avec Cisco Packet Tracer",

      "projects-heading": "03 / Projets",
      "project-1-meta": "Projet Académique",
      "project-1-title": "Intégration SIEM Wazuh & NIDS Suricata",
      "project-1-desc": "Déploiement d'une architecture Wazuh complète (Manager + Agents) intégrée à Suricata NIDS pour l'analyse des alertes EVE JSON. Réalisation de campagnes Red Team simulées (scans Nmap, force brute SSH/FTP avec Hydra, injections SQLMap et DoS SYN flood hping3) depuis Kali Linux. Corrélation des événements pour valider les règles.",
      "project-2-meta": "Lab Personnel",
      "project-2-title": "Implémentation Snort IDS/IPS Inline",
      "project-2-desc": "Installation et configuration de Snort 3 en mode IPS inline (NFQ) pour le blocage actif du trafic malveillant. Développement de règles de détection d'intrusions personnalisées (ICMP, force brute SSH, scans SYN). Test de blocage face à des attaques applicatives Web.",
      "project-3-meta": "Projet Académique",
      "project-3-title": "Plateforme Web Capture The Flag",
      "project-3-desc": "Conception et déploiement d'une plateforme web CTF fonctionnelle écrite en Python (POO). Intégration de l'isolation des défis pour chaque utilisateur, d'un tableau d'affichage des scores automatisé et de panels d'administration. Hébergée sur Railway.",

      "education-heading": "04 / Formation & Certifications",
      "edu-dut-title": "DUT en Cybersécurité",
      "edu-dut-school": "EST Tétouan, Maroc — 2025 - En cours",
      "edu-dut-desc": "Cours clés : Réseaux & Sécurité (OSI/TCP-IP, Pare-feux, VPN, IDS/IPS), Windows Server (AD, GPO), Python, C, SQL.",
      "edu-bac-title": "Baccalauréat Sciences Physiques",
      "edu-bac-school": "Lycée Abdelkhalek Torres, Tétouan — Mention Bien (option française/bilingue)",
      
      "certs-title": "Certifications Professionnelles",
      "cert-1-title": "Getting Started with Cisco Packet Tracer",
      "cert-1-issuer": "Cisco Networking Academy — Mai 2026",
      "cert-2-title": "Introduction to Cybersecurity",
      "cert-2-issuer": "Cisco Networking Academy — Avril 2026",
      "cert-3-title": "Foundations of Cybersecurity",
      "cert-3-issuer": "Google / Coursera — Avril 2026",

      "ctf-heading": "Compétitions CTF",
      "ctf-ensi-desc": "ENSI 2K26 CTF (Cyberspace x ENSI) — 11 flags validés (Mai 2026)",
      "ctf-nsec-desc": "NorthSec 2026 — 6 flags validés (Avril 2026)",
      "ctf-skills-desc": "Compétences acquises : Forensique numérique, exploitation web, reverse engineering.",

      "footer-desc": "Conçu & Développé avec discrétion. Construit à l'aide de balisage structurel personnalisé, de couches utilitaires Tailwind CSS et de scripts clients légers. Déployable instantanément sur Vercel."
    }
  };

  // 2. Language Switcher Logic
  let currentLang = localStorage.getItem('portfolio-lang') || 'en';

  const updateLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    // Update active visual state on switcher buttons
    const btnEn = document.getElementById('lang-en');
    const btnFr = document.getElementById('lang-fr');

    if (lang === 'en') {
      btnEn.classList.add('text-cream', 'bg-navy/40');
      btnEn.classList.remove('text-slate');
      btnFr.classList.add('text-slate');
      btnFr.classList.remove('text-cream', 'bg-navy/40');
    } else {
      btnFr.classList.add('text-cream', 'bg-navy/40');
      btnFr.classList.remove('text-slate');
      btnEn.classList.add('text-slate');
      btnEn.classList.remove('text-cream', 'bg-navy/40');
    }

    // Set document lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Translate DOM elements
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  };

  // Switcher Click Listeners
  document.getElementById('lang-en').addEventListener('click', () => updateLanguage('en'));
  document.getElementById('lang-fr').addEventListener('click', () => updateLanguage('fr'));

  // Initialize Language
  updateLanguage(currentLang);

  // 3. Mouse Spotlight Effect (Desktop only)
  const spotlight = document.querySelector('.spotlight');
  if (spotlight) {
    window.addEventListener('mousemove', (e) => {
      spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
      spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
    });
  }

  // 4. Scroll Spy (Scroll-Tracking Navigation)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const spyObserverOptions = {
    root: null,
    rootMargin: '-25% 0px -55% 0px', // Triggers when section occupies the active focal area
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, spyObserverOptions);

  sections.forEach(section => spyObserver.observe(section));

  // Fallback for reaching bottom of page (highlights last section link)
  window.addEventListener('scroll', () => {
    const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 12);
    if (isAtBottom && navLinks.length > 0) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[navLinks.length - 1].classList.add('active');
    }
  });

  // 5. Scroll Reveal Animations (Fade in up)
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserverOptions = {
    root: null,
    threshold: 0.05,
    rootMargin: '0px 0px -80px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);

  revealElements.forEach(el => revealObserver.observe(el));
});
