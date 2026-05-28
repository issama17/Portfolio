document.addEventListener('DOMContentLoaded', () => {
  // 1. CV Translation Database
  const cvTranslations = {
    en: {
      "toolbar-back": "← Back to Portfolio",
      "toolbar-print": "Print CV",
      "toolbar-download": "Download PDF",
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
      "proj-wazuh-title": "Wazuh SIEM & Suricata NIDS Architecture",
      "proj-wazuh-meta": "Academic Project",
      "proj-wazuh-l1": "• Deployed a full Wazuh SIEM architecture (Manager + Agents) with Suricata NIDS integration for EVE JSON alert analysis.",
      "proj-wazuh-l2": "• Conducted simulated Red Team campaigns: Nmap scans, Hydra brute force (SSH/FTP/RDP), SQLMap injections, and hping3 SYN flood from Kali Linux.",
      "proj-wazuh-l3": "• Correlated and analyzed security events to validate detection rules and coverage.",
      
      "proj-snort-title": "Snort IDS/IPS Implementation",
      "proj-snort-meta": "Personal Lab",
      "proj-snort-l1": "• Installed Snort 3 and developed custom rules for ICMP anomaly detection, SSH brute force, and Nmap SYN scans.",
      "proj-snort-l2": "• Configured Snort in inline IPS mode (NFQ) for active threat blocking, testing it against SQL injection vectors.",

      "proj-ctf-title": "CTF Platform - Capture The Flag",
      "proj-ctf-meta": "Academic Project",
      "proj-ctf-l1": "• Developed and deployed a functional web CTF platform built on object-oriented programming in Python. Hosted in production on Railway.",

      "sec-certifications": "Industry Certifications",
      "cert-cisco-packet": "Getting Started with Cisco Packet Tracer — Cisco Networking Academy (May 2026)",
      "cert-cisco-intro": "Introduction to Cybersecurity — Cisco Networking Academy (April 2026)",
      "cert-google": "Foundations of Cybersecurity — Google / Coursera (April 2026)",

      "sec-ctf": "CTF Competitions & Achievements",
      "ctf-ensi": "• ENSI 2K26 CTF (Cyberspace x ENSI) — 11 flags validated (May 2026)",
      "ctf-nsec": "• NorthSec 2026 — 6 flags validated (April 2026)",
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

      "sec-copyright": "© 2026 Issam Echahbouni. All security parameters and credentials protected under operational copyright."
    },
    fr: {
      "toolbar-back": "← Retour au Portfolio",
      "toolbar-print": "Imprimer le CV",
      "toolbar-download": "Télécharger PDF",
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
      
      "proj-snort-title": "Implémentation Snort IDS/IPS",
      "proj-snort-meta": "Lab Personnel",
      "proj-snort-l1": "• Installé Snort 3 ; développé des règles personnalisées pour la détection ICMP, brute force SSH et scans Nmap SYN.",
      "proj-snort-l2": "• Configuré Snort en mode IPS inline (NFQ) pour le blocage actif du trafic malveillant incluant les injections SQL.",

      "proj-ctf-title": "Plateforme CTF - Capture The Flag",
      "proj-ctf-meta": "Projet Académique",
      "proj-ctf-l1": "• Développé et déployé une plateforme web CTF fonctionnelle en Python (POO), hébergée en production sur Railway.",

      "sec-certifications": "Certifications",
      "cert-cisco-packet": "Getting Started with Cisco Packet Tracer — Cisco Networking Academy (Mai 2026)",
      "cert-cisco-intro": "Introduction to Cybersecurity — Cisco Networking Academy (Avril 2026)",
      "cert-google": "Foundations of Cybersecurity — Google / Coursera (Avril 2026)",

      "sec-ctf": "Compétitions CTF",
      "ctf-ensi": "• ENSI 2K26 CTF (Cyberspace x ENSI) — 11 flags validés (Mai 2026)",
      "ctf-nsec": "• NorthSec 2026 — 6 flags validés (Avril 2026)",
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

      "sec-copyright": "© 2026 Issam Echahbouni. Tous paramètres de sécurité et qualifications protégés sous copyright opérationnel."
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
  document.getElementById('lang-en').addEventListener('click', () => updateLanguage('en'));
  document.getElementById('lang-fr').addEventListener('click', () => updateLanguage('fr'));

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
});
