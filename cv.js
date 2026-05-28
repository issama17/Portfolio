document.addEventListener('DOMContentLoaded', () => {
  // 1. CV Translation Database
  const cvTranslations = {
    en: {
      "toolbar-back": "← Back to Portfolio",
      "toolbar-print": "Print CV",
      "toolbar-download": "Download PDF",
      "btn-impossible-list": "Impossible List",
      "cv-title": "Cybersecurity Student",
      "cv-subtitle": "Initiation Internship late 2026",
      "cv-location": "M'diq, Morocco (Tétouan / Tanger)",
      
      "sec-profile": "Professional Profile",
      "profile-desc": "First-year DUT Cybersecurity student at EST Tétouan, passionate about threat detection and securing network infrastructures. Practical laboratory experience in deploying SIEM/NIDS (Wazuh, Suricata, Snort) and simulating Red Team campaigns. Active CTF player. Available for an initiation internship in late 2026.",

      "sec-education": "Education",
      "edu-dut-title": "DUT in Cybersecurity",
      "edu-dut-school": "EST Tétouan, Morocco — 2025 - Present",
      "edu-dut-courses": "Key Courses: Networks & Security (OSI/TCP-IP, Firewalls, VPN, IDS/IPS), Windows Server (AD, GPO), Python, C, SQL",
      "edu-bac-title": "Baccalauréat in Physical Sciences",
      "edu-bac-school": "Lycée Abdelkhalek Torres, Tétouan — 2025",
      "edu-bac-desc": "French option, Mention Bien",

      "sec-projects": "Academic & Lab Projects",
      "proj-wazuh-title": "Wazuh SIEM & Suricata NIDS Integration",
      "proj-wazuh-meta": "Academic Project",
      "proj-wazuh-l1": "• Deployed a full Wazuh SIEM architecture (Manager + Agents) with Suricata NIDS integration for EVE JSON alert analysis.",
      "proj-wazuh-l2": "• Conducted simulated Red Team campaigns: Nmap scans, Hydra brute force (SSH/FTP/RDP), SQLMap injections, and hping3 SYN flood from Kali Linux.",
      "proj-wazuh-l3": "• Correlated and analyzed security events to validate detection rules and coverage.",
      "proj-wazuh-report": "View Project Report",
      
      "proj-snort-title": "Snort IDS/IPS Implementation",
      "proj-snort-meta": "Personal Lab",
      "proj-snort-l1": "• Installed Snort 3 and developed custom rules for ICMP anomaly detection, SSH brute force, and Nmap SYN scans.",
      "proj-snort-l2": "• Configured Snort in inline IPS mode (NFQ) for active threat blocking, testing it against SQL injection vectors.",
      "proj-snort-presentation": "View Presentation",
      "proj-snort-report": "View Lab Report",

      "proj-ctf-title": "CTF Platform - Capture The Flag",
      "proj-ctf-meta": "Academic Project",
      "proj-ctf-l1": "• Developed and deployed a functional web CTF platform built on object-oriented programming in Python. Hosted in production on Railway.",
      "proj-ctf-repo": "Code Repository",
      "proj-ctf-live": "Live Platform",

      "sec-certifications": "Industry Certifications",
      "cert-cisco-packet": "Getting Started with Cisco Packet Tracer — Cisco Networking Academy (May 2026)",
      "cert-cisco-intro": "Introduction to Cybersecurity — Cisco Networking Academy (April 2026)",
      "cert-google": "Foundations of Cybersecurity — Google / Coursera (April 2026)",

      "sec-ctf": "CTF Competitions & Achievements",
      "ctf-ensi": "• ENSI 2K26 CTF (Cyberspace x ENSI) — 11 flags validated (May 2026)",
      "ctf-nsec": "• NorthSec 2026 — 6 flags validated (April 2026)",
      "ctf-morocco-spain": "• Morocco-Spain Cybersecurity Forum AI CTF 2026 — 5 flags validated (Team ANARCHOTECH) (May 2026)",
      "ctf-skills-title": "Acquired Skills:",
      "ctf-skills-desc": "Digital Forensics, Web Exploitation, Reverse Engineering",

      "sec-skills": "Technical Skills",
      "skills-secops": "Security & SIEM",
      "skills-offensive": "Offensive Tools",
      "skills-systems": "Systems",
      "skills-languages": "Languages & Scripting",
      "skills-virtual": "Virtualization",

      "sec-languages": "Languages",
      "lang-arabic": "Arabic: Native",
      "lang-french": "French: Fluent",
      "lang-english": "English: Technical / Operational",

      "sec-soft-skills": "Soft Skills",
      "soft-1": "• Analytical Mind & Problem Solving",
      "soft-2": "• Teamwork (Simulated Red/Blue Team)",
      "soft-3": "• Autonomy & Technical Curiosity",

      "sec-interests": "Interests",
      "interest-1": "• Bodybuilding (Discipline & Strength)",
      "interest-2": "• Simulation/Racing Games (Forza, ETS2)",

      "sec-copyright": "© 2026 Issam Echahbouni. All security parameters and credentials protected under operational copyright.",

      // Modal translations
      "modal-title": "Secure Briefing Channel",
      "modal-desc": "Select your preferred method to establish contact. You can copy the credentials or open your system mailer.",
      "modal-copy": "Copy",
      "modal-call": "Call",
      "modal-direct": "Default Mail App",
      
      // Project 4 & Guide translations
      "proj-ctf-guide": "Deployment Guide",
      "project-4-meta": "Academic Project",
      "project-4-title": "Secure Enterprise VPN Architecture",
      "proj-vpn-l1": "• Designed and audited a secure site-to-site and remote-access VPN tunnel infrastructure using IPsec and OpenVPN.",
      "proj-vpn-l2": "• Configured network firewalls, custom security policies, routing protocols, and access control lists (ACLs) to protect corporate resources.",
      "proj-vpn-report": "View Architecture Report",

      // Project 5 translations
      "project-5-meta": "Personal Lab",
      "project-5-title": "CyberSec Active Directory Commander",
      "proj-ad-l1": "• Engineered an enterprise-grade desktop administration suite in Python with LDAP/LDAPS support.",
      "proj-ad-l2": "• Implemented batch account lifecycle actions, nested group membership mapping, and local audit logging for compliance.",
      "proj-ad-repo": "Code Repository"
    },
    fr: {
      "toolbar-back": "← Retour au Portfolio",
      "toolbar-print": "Imprimer le CV",
      "toolbar-download": "Télécharger PDF",
      "btn-impossible-list": "Liste Impossible",
      "cv-title": "Étudiant en Cybersécurité",
      "cv-subtitle": "Stage d'Initiation Fin 2026",
      "cv-location": "M'diq, Maroc (Tétouan / Tanger)",
      
      "sec-profile": "Profil Professionnel",
      "profile-desc": "Étudiant en 1ère année DUT Cybersécurité (EST Tétouan), passionné par la détection des menaces et la sécurisation des infrastructures réseau. Expérience pratique en laboratoire : déploiement SIEM/NIDS (Wazuh, Suricata, Snort) et simulations Red Team. Participant actif aux compétitions CTF. Disponible pour un stage d'initiation fin 2026.",

      "sec-education": "Formation",
      "edu-dut-title": "DUT Cybersécurité",
      "edu-dut-school": "EST Tétouan, Maroc — 2025 - En cours",
      "edu-dut-courses": "Cours clés : Réseaux & Sécurité (OSI/TCP-IP, Pare-feux, VPN, IDS/IPS), Windows Server (AD, GPO), Python, C, SQL",
      "edu-bac-title": "Baccalauréat Sciences Physiques",
      "edu-bac-school": "Lycée Abdelkhalek Torres, Tétouan — 2025",
      "edu-bac-desc": "Option française, mention Bien",

      "sec-projects": "Projets Académiques & Personnels",
      "proj-wazuh-title": "Architecture Wazuh SIEM & Suricata NIDS",
      "proj-wazuh-meta": "Projet Académique",
      "proj-wazuh-l1": "• Déployé une architecture Wazuh complète (Manager + Agents) avec intégration de Suricata NIDS pour l'analyse des alertes EVE JSON.",
      "proj-wazuh-l2": "• Campagnes Red Team simulées : scans Nmap, brute force SSH/FTP/RDP (Hydra), injections SQL (SQLMap), DoS SYN flood (hping3) depuis Kali Linux.",
      "proj-wazuh-l3": "• Corréler et analyser les événements de sécurité pour valider la couverture de détection et l'efficacité des règles.",
      "proj-wazuh-report": "Voir le Rapport de Projet",
      
      "proj-snort-title": "Implémentation Snort IDS/IPS",
      "proj-snort-meta": "Lab Personnel",
      "proj-snort-l1": "• Installé Snort 3 ; développé des règles personnalisées pour la détection ICMP, brute force SSH et scans Nmap SYN.",
      "proj-snort-l2": "• Configuré Snort en mode IPS inline (NFQ) pour le blocage actif du trafic malveillant incluant les injections SQL.",
      "proj-snort-presentation": "Voir la Présentation",
      "proj-snort-report": "Voir le Rapport de TP",

      "proj-ctf-title": "Plateforme CTF - Capture The Flag",
      "proj-ctf-meta": "Projet Académique",
      "proj-ctf-l1": "• Développé et déployé une plateforme web CTF fonctionnelle en Python (POO), hébergée en production sur Railway.",
      "proj-ctf-repo": "Dépôt de Code",
      "proj-ctf-live": "Plateforme Live",

      "sec-certifications": "Certifications",
      "cert-cisco-packet": "Getting Started with Cisco Packet Tracer — Cisco Networking Academy (Mai 2026)",
      "cert-cisco-intro": "Introduction to Cybersecurity — Cisco Networking Academy (Avril 2026)",
      "cert-google": "Foundations of Cybersecurity — Google / Coursera (Avril 2026)",

      "sec-ctf": "Compétitions CTF",
      "ctf-ensi": "• ENSI 2K26 CTF (Cyberspace x ENSI) — 11 flags validés (Mai 2026)",
      "ctf-nsec": "• NorthSec 2026 — 6 flags validés (Avril 2026)",
      "ctf-morocco-spain": "• Morocco-Spain Cybersecurity Forum AI CTF 2026 — 5 flags validés (Team ANARCHOTECH) (Mai 2026)",
      "ctf-skills-title": "Compétences acquises :",
      "ctf-skills-desc": "Forensique numérique, exploitation web, reverse engineering",

      "sec-skills": "Compétences Techniques",
      "skills-secops": "Sécurité & SIEM",
      "skills-offensive": "Outils Offensifs",
      "skills-systems": "Systèmes",
      "skills-languages": "Langages & Scripting",
      "skills-virtual": "Virtualisation",

      "sec-languages": "Langues",
      "lang-arabic": "Arabe : Langue maternelle",
      "lang-french": "Français : Courant (études)",
      "lang-english": "Anglais : Opérationnel (technique)",

      "sec-soft-skills": "Soft Skills",
      "soft-1": "• Esprit d'analyse et résolution de problèmes (CTF)",
      "soft-2": "• Travail en équipe (simulations Red/Blue team)",
      "soft-3": "• Autonomie et curiosité technique",

      "sec-interests": "Centres d'intérêt",
      "interest-1": "• Musculation (discipline, force & hypertrophie)",
      "interest-2": "• Jeux vidéo de simulation/automobile (ETS2, Forza)",

      "sec-copyright": "© 2026 Issam Echahbouni. Tous paramètres de sécurité et qualifications protégés sous copyright opérationnel.",

      // Modal translations
      "modal-title": "Canal de Briefing Sécurisé",
      "modal-desc": "Sélectionnez votre méthode préférée pour établir le contact. Vous pouvez copier les coordonnées ou ouvrir votre messagerie.",
      "modal-copy": "Copier",
      "modal-call": "Appeler",
      "modal-direct": "Messagerie par Défaut",
      
      // Project 4 & Guide translations
      "proj-ctf-guide": "Guide de Déploiement",
      "project-4-meta": "Projet Académique",
      "project-4-title": "Architecture VPN Sécurisée d'Entreprise",
      "proj-vpn-l1": "• Conception et audit d'une infrastructure de tunnels VPN site-à-site et d'accès distant sécurisée avec IPsec et OpenVPN.",
      "proj-vpn-l2": "• Configuration de pare-feux réseau, de politiques de sécurité personnalisées, de protocoles de routage et de listes de contrôle d'accès (ACL).",
      "proj-vpn-report": "Voir le Rapport d'Architecture",

      // Project 5 translations
      "project-5-meta": "Lab Personnel",
      "project-5-title": "CyberSec Active Directory Commander",
      "proj-ad-l1": "• Développement d'une suite d'administration Active Directory d'entreprise en Python avec support LDAP/LDAPS.",
      "proj-ad-l2": "• Implémentation d'actions en lot sur le cycle de vie des comptes, de cartographie des groupes imbriqués et de journalisation d'audit local pour la conformité SIEM.",
      "proj-ad-repo": "Dépôt de Code"
    },
    es: {
      "toolbar-back": "← Volver al Portafolio",
      "toolbar-print": "Imprimir CV",
      "toolbar-download": "Descargar PDF",
      "btn-impossible-list": "Lista Imposible",
      "cv-title": "Estudiante de Ciberseguridad",
      "cv-subtitle": "Prácticas de Iniciación finales 2026",
      "cv-location": "M'diq, Marruecos (Tetuán / Tánger)",
      
      "sec-profile": "Perfil Profesional",
      "profile-desc": "Estudiante de primer año de DUT Ciberseguridad en EST Tetuán, apasionado por la detección de amenazas y la seguridad de infraestructuras de red. Experiencia práctica en laboratorio en el despliegue de SIEM/NIDS (Wazuh, Suricata, Snort) y simulaciones de Red Team. Jugador activo de CTF. Disponible para prácticas de iniciación a finales de 2026.",

      "sec-education": "Educación",
      "edu-dut-title": "DUT en Ciberseguridad",
      "edu-dut-school": "EST Tetuán, Marruecos — 2025 - Presente",
      "edu-dut-courses": "Cursos clave: Redes y Seguridad (OSI/TCP-IP, Firewalls, VPN, IDS/IPS), Windows Server (AD, GPO), Python, C, SQL",
      "edu-bac-title": "Baccalauréat en Ciencias Físicas",
      "edu-bac-school": "Lycée Abdelkhalek Torres, Tetuán — 2025",
      "edu-bac-desc": "Opción francesa, Mención Bien",

      "sec-projects": "Proyectos Académicos y de Laboratorio",
      "proj-wazuh-title": "Arquitectura de Wazuh SIEM y Suricata NIDS",
      "proj-wazuh-meta": "Proyecto Académico",
      "proj-wazuh-l1": "• Desplegué una arquitectura Wazuh completa (Manager + Agentes) con integración de Suricata NIDS para el análisis de alertas EVE JSON.",
      "proj-wazuh-l2": "• Realicé campañas de Red Team simuladas: scans Nmap, fuerza bruta SSH/FTP/RDP (Hydra), inyecciones SQL (SQLMap) y DoS SYN flood (hping3) desde Kali Linux.",
      "proj-wazuh-l3": "• Correlacioné y analicé eventos de seguridad para validar reglas de detección y cobertura.",
      "proj-wazuh-report": "Ver Informe de Proyecto",
      
      "proj-snort-title": "Implementación de Snort IDS/IPS",
      "proj-snort-meta": "Laboratorio Personal",
      "proj-snort-l1": "• Instalé Snort 3 y desarrollé reglas personalizadas para la detección de anomalías ICMP, fuerza bruta SSH y escaneos SYN con Nmap.",
      "proj-snort-l2": "• Configuré Snort en modo IPS en línea (NFQ) para bloqueo activo de amenazas, probándolo contra vectores de inyección SQL.",
      "proj-snort-presentation": "Ver Presentación",
      "proj-snort-report": "Ver Informe de Laboratorio",

      "proj-ctf-title": "Plataforma CTF - Capture The Flag",
      "proj-ctf-meta": "Proyecto Académico",
      "proj-ctf-l1": "• Desarrollé y desplegué una plataforma web CTF funcional en Python (POO), alojada en producción en Railway.",
      "proj-ctf-repo": "Repositorio de Código",
      "proj-ctf-live": "Plataforma en Vivo",

      "sec-certifications": "Certificaciones de la Industria",
      "cert-cisco-packet": "Primeros pasos con Cisco Packet Tracer — Cisco Networking Academy (Mayo 2026)",
      "cert-cisco-intro": "Introducción a la Ciberseguridad — Cisco Networking Academy (Abril 2026)",
      "cert-google": "Fundamentos de la Ciberseguridad — Google / Coursera (Abril 2026)",

      "sec-ctf": "Competiciones de CTF y Logros",
      "ctf-ensi": "• ENSI 2K26 CTF (Cyberspace x ENSI) — 11 flags validados (Mayo 2026)",
      "ctf-nsec": "• NorthSec 2026 — 6 flags validados (Abril 2026)",
      "ctf-morocco-spain": "• Morocco-Spain Cybersecurity Forum AI CTF 2026 — 5 flags validados (Equipo ANARCHOTECH) (Mayo 2026)",
      "ctf-skills-title": "Habilidades Adquiridas:",
      "ctf-skills-desc": "Análisis forense digital, explotación web, ingeniería inversa",

      "sec-skills": "Habilidades Técnicas",
      "skills-secops": "Seguridad y SIEM",
      "skills-offensive": "Herramientas Ofensivas",
      "skills-systems": "Sistemas",
      "skills-languages": "Idiomas y Scripting",
      "skills-virtual": "Virtualización",

      "sec-languages": "Idiomas",
      "lang-arabic": "Árabe: Nativo",
      "lang-french": "Francés: Fluido",
      "lang-english": "Inglés: Técnico / Operacional",

      "sec-soft-skills": "Habilidades Blandas",
      "soft-1": "• Mente analítica y resolución de problemas",
      "soft-2": "• Trabajo en equipo (simulaciones Red/Blue Team)",
      "soft-3": "• Autonomía y curiosidad técnica",

      "sec-interests": "Intereses",
      "interest-1": "• Culturismo (disciplina y fuerza)",
      "interest-2": "• Juegos de simulación y conducción (Forza, ETS2)",

      "sec-copyright": "© 2026 Issam Echahbouni. Todos los parámetros de seguridad y credenciales protegidos bajo derecho de autor operacional.",

      // Modal translations
      "modal-title": "Canal de Briefing Seguro",
      "modal-desc": "Seleccione su método preferido para establecer contacto. Puede copiar las credenciales o abrir su gestor de correo.",
      "modal-copy": "Copiar",
      "modal-call": "Llamar",
      "modal-direct": "Aplicación de Correo por Defecto",
      
      // Project 4 & Guide translations
      "proj-ctf-guide": "Guía de Despliegue",
      "project-4-meta": "Proyecto Académico",
      "project-4-title": "Arquitectura VPN Empresarial Segura",
      "proj-vpn-l1": "• Diseñé y audité una infraestructura de túneles VPN segura de sitio a sitio y de acceso remoto usando IPsec y OpenVPN.",
      "proj-vpn-l2": "• Configuré firewalls de red, políticas de seguridad personalizadas, enrutamiento y listas de control de acceso (ACL).",
      "proj-vpn-report": "Ver Informe de Arquitectura",

      // Project 5 translations
      "project-5-meta": "Laboratorio Personal",
      "project-5-title": "CyberSec Active Directory Commander",
      "proj-ad-l1": "• Desarrollé una suite de administración de escritorio de nivel empresarial en Python utilizando protocolos LDAP/LDAPS.",
      "proj-ad-l2": "• Implementé operaciones por lotes, mapeo de membresía de grupos y registro de auditoría local para cumplimiento.",
      "proj-ad-repo": "Repositorio de Código"
    }
  };

  // 2. Language State Syncer
  let currentLang = localStorage.getItem('portfolio-lang') || 'en';

  const updateLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    // Visual active states on buttons
    const btnEn = document.getElementById('lang-en');
    const btnFr = document.getElementById('lang-fr');
    const btnEs = document.getElementById('lang-es');

    if (btnEn) btnEn.classList.remove('text-cream', 'bg-navy/40', 'text-slate');
    if (btnFr) btnFr.classList.remove('text-cream', 'bg-navy/40', 'text-slate');
    if (btnEs) btnEs.classList.remove('text-cream', 'bg-navy/40', 'text-slate');

    if (lang === 'en') {
      if (btnEn) btnEn.classList.add('text-cream', 'bg-navy/40');
      if (btnFr) btnFr.classList.add('text-slate');
      if (btnEs) btnEs.classList.add('text-slate');
    } else if (lang === 'fr') {
      if (btnFr) btnFr.classList.add('text-cream', 'bg-navy/40');
      if (btnEn) btnEn.classList.add('text-slate');
      if (btnEs) btnEs.classList.add('text-slate');
    } else if (lang === 'es') {
      if (btnEs) btnEs.classList.add('text-cream', 'bg-navy/40');
      if (btnEn) btnEn.classList.add('text-slate');
      if (btnFr) btnFr.classList.add('text-slate');
    }

    document.documentElement.setAttribute('lang', lang);

    // Apply translations
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (cvTranslations[lang] && cvTranslations[lang][key]) {
        element.textContent = cvTranslations[lang][key];
      }
    });
  };

  // Language Event Listeners
  if (document.getElementById('lang-en')) document.getElementById('lang-en').addEventListener('click', () => updateLanguage('en'));
  if (document.getElementById('lang-fr')) document.getElementById('lang-fr').addEventListener('click', () => updateLanguage('fr'));
  if (document.getElementById('lang-es')) document.getElementById('lang-es').addEventListener('click', () => updateLanguage('es'));

  // Initialize Language
  updateLanguage(currentLang);

  // 3. Print Actual PDF function
  const printBtn = document.getElementById('btn-print-cv');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        window.open('CV_Echahbouni_Issam.pdf', '_blank');
      } else {
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = 'none';
        iframe.src = 'CV_Echahbouni_Issam.pdf';
        
        document.body.appendChild(iframe);
        
        iframe.onload = () => {
          setTimeout(() => {
            try {
              iframe.contentWindow.focus();
              iframe.contentWindow.print();
            } catch (e) {
              window.open('CV_Echahbouni_Issam.pdf', '_blank');
            }
          }, 200);
        };
      }
    });
  }

  // 4. Secure Communication Modal Interactions
  const modal = document.getElementById('contact-modal');
  const modalContent = document.getElementById('contact-modal-content');
  const cvEmailBtn = document.getElementById('cv-email-trigger');
  const closeBtn = document.getElementById('modal-close');
  const copyBtn = document.getElementById('btn-copy-email');

  const openModal = () => {
    if (modal && modalContent) {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modalContent.classList.remove('scale-95');
      modalContent.classList.add('scale-100');
    }
  };

  const closeModal = () => {
    if (modal && modalContent) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      modalContent.classList.remove('scale-100');
      modalContent.classList.add('scale-95');
    }
  };

  if (cvEmailBtn) {
    cvEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('pointer-events-none')) {
      closeModal();
    }
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('issam.echahbouni@etu.uae.ac.ma').then(() => {
        const textSpan = copyBtn.querySelector('[data-i18n="modal-copy"]') || copyBtn;
        const originalText = currentLang === 'en' ? 'Copy' : 'Copier';
        const successText = currentLang === 'en' ? 'Copied!' : 'Copié !';
        
        textSpan.textContent = successText;
        copyBtn.classList.remove('bg-cream');
        copyBtn.classList.add('bg-emerald-500', 'text-white');
        
        setTimeout(() => {
          textSpan.textContent = originalText;
          copyBtn.classList.remove('bg-emerald-500', 'text-white');
          copyBtn.classList.add('bg-cream');
        }, 2000);
      });
    });
  }
});
