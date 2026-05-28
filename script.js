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
      "nav-impossible": "05 / Impossible List",

      "btn-download-resume": "View Curriculum Vitae",
      "btn-consultation": "Initiate Briefing",
      "btn-impossible-list": "Impossible List",

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
      "skills-languages-title": "Languages & Scripting",
      "skills-languages-item1": "• Python (OOP & Socket Automation)",
      "skills-languages-item2": "• Unix Bash Shell Scripting & C Programming",
      "skills-languages-item3": "• SQL Database Querying & Design",
      "skills-languages-item4": "• Spanish Translation Support & Setup",
      "skill-automation-title": "Automation & Virtualization",
      "skill-automation-item1": "• Python Scripting (OOP & Socket Automation)",
      "skill-automation-item2": "• Unix Bash Shell Scripting & C Programming",
      "skill-automation-item3": "• Virtualization (VMware, VirtualBox)",
      "skill-automation-item4": "• Cisco Packet Tracer Lab Mockups",

      "projects-heading": "03 / Projects",
      "project-1-meta": "Academic Project",
      "project-1-title": "Wazuh SIEM & Suricata NIDS Integration",
      "project-1-desc": "Deployed a full Wazuh SIEM architecture (Manager + Agents) integrated with Suricata NIDS for EVE JSON event analysis. Conducted simulated Red Team campaigns (Nmap scans, SSH/FTP/RDP brute force with Hydra, SQLMap injections, and hping3 SYN flood DoS) from Kali Linux, correlating and auditing events to validate rule coverage.",
      "proj-wazuh-report": "View Project Report",
      "project-2-meta": "Personal Lab",
      "project-2-title": "Snort IDS/IPS Inline Deployment",
      "project-2-desc": "Installed and configured Snort 3 in inline IPS mode (NFQ) for active threat blocking. Developed custom detection rules targeting ICMP traffic anomalies, SSH brute-forcing, and Nmap SYN scans. Validated defensive actions against web vectors like SQL injections.",
      "proj-snort-presentation": "View Presentation",
      "proj-snort-report": "View Lab Report",
      "project-3-meta": "Academic Project",
      "project-3-title": "Capture The Flag Web Platform",
      "project-3-desc": "Engineered and launched a functional, multiplayer web CTF platform built on object-oriented programming in Python. Implemented user-isolated challenge execution, automated scoring trackers, and clean administration panels. Hosted in production on Railway.",
      "proj-ctf-repo": "Code Repository",
      "proj-ctf-live": "Live Platform",

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
      "cert-btn-verify": "Verify",

      "ctf-heading": "CTF Competitions",
      "ctf-ensi-desc": "ENSI 2K26 CTF (Cyberspace x ENSI) — 11 Flags solved (May 2026)",
      "ctf-nsec-desc": "NorthSec 2026 — 6 Flags solved (April 2026)",
      "ctf-morocco-spain-desc": "Morocco-Spain Cybersecurity Forum AI CTF 2026 — 5 Flags solved (Team ANARCHOTECH) (May 2026)",
      "ctf-skills-desc": "Acquired Competencies: Digital Forensics, Web Exploitation, Reverse Engineering.",
      
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
      "project-4-desc": "Designed and documented a secure site-to-site and remote-access VPN infrastructure for enterprise environments. Defined strict firewall rule sets, cryptographic protocols (IPsec/OpenVPN), and access control lists (ACLs) to ensure data confidentiality and secure remote operations.",
      "proj-vpn-report": "View Architecture Report",

      // Project 5 translations
      "project-5-meta": "Personal Lab",
      "project-5-title": "CyberSec Active Directory Commander",
      "project-5-desc": "Engineered an enterprise-grade desktop administration suite in Python utilizing LDAP/LDAPS protocols to manage and audit Active Directory objects. Implemented batch operations (bulk enable/disable/delete), interactive OU structure rendering, security group membership trees, and localized audit logging for SIEM compliance.",
      "proj-ad-repo": "Code Repository"
    },
    fr: {
      "hero-subtitle": "Cybersécurité & Infrastructure Réseau",
      "hero-tagline": "Étudiant en 1ère année DUT Cybersécurité à l'EST Tétouan, passionné par la détection des menaces, les architectures SIEM, l'audit réseau et les compétitions CTF.",
      "status-ready": "Recherche de stage d'initiation (Fin 2026) : Disponible",
      
      "nav-about": "01 / À Propos",
      "nav-skills": "02 / Compétences",
      "nav-projects": "03 / Projets",
      "nav-education": "04 / Formation & Certifs",
      "nav-impossible": "05 / Liste Impossible",

      "btn-download-resume": "Voir le Curriculum Vitae",
      "btn-consultation": "Initier le Briefing",
      "btn-impossible-list": "Liste Impossible",

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
      "proj-wazuh-report": "Voir le Rapport de Projet",
      "project-2-meta": "Lab Personnel",
      "project-2-title": "Implémentation Snort IDS/IPS Inline",
      "project-2-desc": "Installation et configuration de Snort 3 en mode IPS inline (NFQ) pour le blocage actif du trafic malveillant. Développement de règles de détection d'intrusions personnalisées (ICMP, force brute SSH, scans SYN). Test de blocage face à des attaques applicatives Web.",
      "proj-snort-presentation": "Voir la Présentation",
      "proj-snort-report": "Voir le Rapport de TP",
      "project-3-meta": "Projet Académique",
      "project-3-title": "Plateforme Web Capture The Flag",
      "project-3-desc": "Conception et déploiement d'une plateforme web CTF fonctionnelle écrite en Python (POO). Intégration de l'isolation des défis pour chaque utilisateur, d'un tableau d'affichage des scores automatisé et de panels d'administration. Hébergée sur Railway.",
      "proj-ctf-repo": "Dépôt de Code",
      "proj-ctf-live": "Plateforme Live",

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
      "cert-btn-verify": "Vérifier",

      "ctf-heading": "Compétitions CTF",
      "ctf-ensi-desc": "ENSI 2K26 CTF (Cyberspace x ENSI) — 11 flags validés (Mai 2026)",
      "ctf-nsec-desc": "NorthSec 2026 — 6 flags validés (Avril 2026)",
      "ctf-morocco-spain-desc": "Morocco-Spain Cybersecurity Forum AI CTF 2026 — 5 flags validés (Équipe ANARCHOTECH) (Mai 2026)",
      "ctf-skills-desc": "Compétences acquises : Forensique numérique, exploitation web, reverse engineering.",
      
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
      "project-4-desc": "Conception et documentation d'une infrastructure VPN site-à-site et d'accès distant sécurisée pour un environnement d'entreprise. Définition de pare-feux, de protocoles cryptographiques (IPsec/OpenVPN) et de listes de contrôle d'accès (ACL) pour garantir la confidentialité des flux.",
      "proj-vpn-report": "Voir le Rapport d'Architecture",

      // Project 5 translations
      "project-5-meta": "Lab Personnel",
      "project-5-title": "CyberSec Active Directory Commander",
      "project-5-desc": "Développement d'une suite d'administration de bureau de niveau entreprise en Python avec protocoles LDAP/LDAPS pour gérer et auditer les objets Active Directory. Intègre des opérations par lots (activation/désactivation/suppression en masse), une arborescence interactive des UOs et des journaux d'audit pour conformité SIEM.",
      "proj-ad-repo": "Dépôt de Code"
    },
    es: {
      "hero-subtitle": "Ciberseguridad e Infraestructura de Red",
      "hero-tagline": "Estudiante de primer año de DUT Ciberseguridad en EST Tetuán, apasionado por la detección de amenazas, arquitecturas SIEM, auditoría de redes y competiciones de CTF.",
      "status-ready": "Prácticas de iniciación a finales de 2026: Listo para el compromiso",
      
      "nav-about": "01 / Sobre mí",
      "nav-skills": "02 / Habilidades",
      "nav-projects": "03 / Proyectos",
      "nav-education": "04 / Educación y Certificados",
      "nav-impossible": "05 / Lista Imposible",

      "btn-download-resume": "Ver Curriculum Vitae",
      "btn-consultation": "Iniciar briefing",
      "btn-impossible-list": "Lista Imposible",

      "about-heading": "01 / Sobre mí",
      "about-p1": "Me acerco a la seguridad digital con la misma precisión, discreción y rigor técnico necesarios en entornos de misión crítica. Actualmente estudiante de primer año de DUT Ciberseguridad en EST Tetuán, me especializo en el diseño de perímetros de red seguros y flujos de trabajo de defensa contra amenazas.",
      "about-p2": "Mi experiencia práctica incluye el despliegue en laboratorio de soluciones SIEM y NIDS/IPS (Wazuh, Suricata, Snort) junto con simulaciones activas de Red Team. Esta exposición de doble cara me permite construir reglas de correlación efectivas y validar la cobertura de amenazas utilizando herramientas como Nmap, Hydra, SQLMap y hping3.",
      "about-p3": "Soy un jugador activo de CTF (resolviendo desafíos en ENSI CTF y NorthSec), centrándome en análisis forense digital, explotación web e ingeniería inversa. Busco unas prácticas de iniciación para finales de 2026 para aplicar mi curiosidad técnica y habilidades de resolución de problemas a infraestructuras corporativas reales.",

      "skills-heading": "02 / Habilidades",
      "skills-intro": "Un índice estructurado de competencias técnicas cultivadas a través de proyectos universitarios, laboratorios domésticos y entornos de desafíos de CTF.",
      "skill-secops-title": "Operaciones de Seguridad y SIEM",
      "skill-secops-item1": "• Wazuh SIEM, Suricata NIDS, Snort IDS/IPS",
      "skill-secops-item2": "• Correlación de eventos y análisis de logs de auditoría",
      "skill-secops-item3": "• Búsqueda de amenazas y monitoreo de incidentes",
      "skill-secops-item4": "• Supervisión activa de sistemas con Zabbix",
      "skill-netdef-title": "Infraestructura de Red y Defensa",
      "skill-netdef-item1": "• Ingeniería de perímetros seguros y configuración de VPN",
      "skill-netdef-item2": "• Administración de Windows Server (Active Directory, GPO)",
      "skill-netdef-item3": "• Auditoría de la pila OSI/TCP-IP y captura de paquetes",
      "skill-netdef-item4": "• Firewalls, protocolos de enrutamiento y modos IDS/IPS",
      "skill-offensive-title": "Auditoría Ofensiva y de Vulnerabilidades",
      "skill-offensive-item1": "• Escaneo de vulnerabilidades (Nmap, Nikto, SQLMap)",
      "skill-offensive-item2": "• Pruebas de fuerza bruta simuladas (Hydra, hping3)",
      "skill-offensive-item3": "• Análisis forense digital e ingeniería inversa",
      "skill-offensive-item4": "• Aislamiento de malware en entornos de laboratorio",
      "skill-automation-title": "Automatización y Virtualización",
      "skill-automation-item1": "• Scripting en Python (POO y automatización de sockets)",
      "skill-automation-item2": "• Scripting en Bash Unix y programación en C",
      "skill-automation-item3": "• Virtualización (VMware, VirtualBox)",
      "skill-automation-item4": "• Maquetas de laboratorio con Cisco Packet Tracer",

      "projects-heading": "03 / Proyectos",
      "project-1-meta": "Proyecto Académico",
      "project-1-title": "Integración de Wazuh SIEM y Suricata NIDS",
      "project-1-desc": "Desplegué una arquitectura Wazuh completa (Manager + Agentes) integrada con Suricata NIDS para el análisis de eventos EVE JSON. Realicé campañas simuladas de Red Team (escaneos Nmap, fuerza bruta SSH/FTP/RDP con Hydra, inyecciones SQLMap y DoS por inundación SYN hping3) desde Kali Linux, correlacionando y auditando eventos para validar la cobertura de reglas.",
      "proj-wazuh-report": "Ver Informe de Proyecto",
      "project-2-meta": "Laboratorio Personal",
      "project-2-title": "Despliegue Inline de Snort IDS/IPS",
      "project-2-desc": "Instalé y configuré Snort 3 en modo IPS en línea (NFQ) para el bloqueo activo de amenazas. Desarrollé reglas de detección personalizadas dirigidas a anomalías de tráfico ICMP, fuerza bruta SSH y escaneos SYN con Nmap. Validé acciones defensivas contra vectores web como inyecciones SQL.",
      "proj-snort-presentation": "Ver Presentación",
      "proj-snort-report": "Ver Informe de Laboratorio",
      "project-3-meta": "Proyecto Académico",
      "project-3-title": "Plataforma Web Capture The Flag",
      "project-3-desc": "Diseñé y lancé una plataforma web CTF funcional y multijugador basada en programación orientada a objetos en Python. Implementé la ejecución de desafíos aislados por usuario, rastreadores de puntuación automatizados y paneles de administración limpios. Alojado en producción en Railway.",
      "proj-ctf-repo": "Repositorio de Código",
      "proj-ctf-live": "Plataforma en Vivo",

      "education-heading": "04 / Educación y Certificaciones",
      "edu-dut-title": "DUT en Ciberseguridad",
      "edu-dut-school": "EST Tetuán, Marruecos — 2025 - Presente",
      "edu-dut-desc": "Cursos clave: Redes y Seguridad (OSI/TCP-IP, Firewalls, VPN, IDS/IPS), Windows Server (AD, GPO), Python, C, SQL.",
      "edu-bac-title": "Baccalauréat en Ciencias Físicas",
      "edu-bac-school": "Lycée Abdelkhalek Torres, Tetuán — Mención Bien (opción francesa/bilingüe)",
      
      "certs-title": "Certificaciones de la Industria",
      "cert-1-title": "Primeros pasos con Cisco Packet Tracer",
      "cert-1-issuer": "Cisco Networking Academy — Mayo 2026",
      "cert-2-title": "Introducción a la Ciberseguridad",
      "cert-2-issuer": "Cisco Networking Academy — Abril 2026",
      "cert-3-title": "Fundamentos de la Ciberseguridad",
      "cert-3-issuer": "Google / Coursera — Abril 2026",
      "cert-btn-verify": "Verificar",

      "ctf-heading": "Competiciones de CTF",
      "ctf-ensi-desc": "ENSI 2K26 CTF (Cyberspace x ENSI) — 11 Flags resueltos (Mayo 2026)",
      "ctf-nsec-desc": "NorthSec 2026 — 6 Flags resueltos (Abril 2026)",
      "ctf-morocco-spain-desc": "Morocco-Spain Cybersecurity Forum AI CTF 2026 — 5 Flags resueltos (Equipo ANARCHOTECH) (Mayo 2026)",
      "ctf-skills-desc": "Competencias adquiridas: Análisis forense digital, explotación web, ingeniería inversa.",
      
      // Modal translations
      "modal-title": "Canal de Briefing Seguro",
      "modal-desc": "Seleccione su método preferido para establecer contacto. Puede copiar las credenciales o abrir su gestor de correo del sistema.",
      "modal-copy": "Copiar",
      "modal-call": "Llamar",
      "modal-direct": "Aplicación de Correo por Defecto",
      
      // Project 4 & Guide translations
      "proj-ctf-guide": "Guía de Despliegue",
      "project-4-meta": "Proyecto Académico",
      "project-4-title": "Arquitectura VPN Empresarial Segura",
      "project-4-desc": "Diseñé y documenté una infraestructura VPN segura de sitio a sitio y de acceso remoto para entornos empresariales. Definí conjuntos estrictos de reglas de firewall, protocolos criptográficos (IPsec/OpenVPN) y listas de control de acceso (ACL) para garantizar la confidencialidad de los datos y operaciones remotas seguras.",
      "proj-vpn-report": "Ver Informe de Arquitectura",

      // Project 5 translations
      "project-5-meta": "Laboratorio Personal",
      "project-5-title": "CyberSec Active Directory Commander",
      "project-5-desc": "Desarrollé una suite de administración de escritorio de nivel empresarial en Python utilizando protocolos LDAP/LDAPS para administrar y auditar objetos de Active Directory. Implementé operaciones por lotes (activación/desactivación/eliminación masiva), representación interactiva de la estructura de OU, árboles de membresía de grupos de seguridad y registro de auditoría localizado para el cumplimiento de SIEM.",
      "proj-ad-repo": "Repositorio de Código"
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
  if (document.getElementById('lang-en')) document.getElementById('lang-en').addEventListener('click', () => updateLanguage('en'));
  if (document.getElementById('lang-fr')) document.getElementById('lang-fr').addEventListener('click', () => updateLanguage('fr'));
  if (document.getElementById('lang-es')) document.getElementById('lang-es').addEventListener('click', () => updateLanguage('es'));

  // Initialize Language
  updateLanguage(currentLang);

  // 3. tsParticles Integration
  function setupParticlesBackground() {
    if (typeof tsParticles !== 'undefined') {
      tsParticles.load("tsparticles", {
        particles: {
          links: {
            enable: true,
            distance: 120,
            opacity: 0.12,
            color: "#f5f2eb",
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 45,
          },
          size: {
            value: 1.5,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1.2,
            straight: false,
          },
          opacity: {
            value: 0.25,
          },
          color: {
            value: "#f5f2eb",
          },
          shape: {
            type: "circle",
          },
        },
        retina_detect: true,
      });
    }
  }

  if (document.getElementById('tsparticles')) {
    const particlesScript = document.createElement("script");
    particlesScript.src = "https://cdn.jsdelivr.net/npm/tsparticles-preset-links@2.12.0/tsparticles.preset.links.bundle.min.js";
    particlesScript.onload = setupParticlesBackground;
    document.body.appendChild(particlesScript);
  }


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

  // 6. Secure Communication Modal Interactions
  const modal = document.getElementById('contact-modal');
  const modalContent = document.getElementById('contact-modal-content');
  const ctaBtn = document.getElementById('btn-cta');
  const socialEmailBtn = document.getElementById('social-link-email');
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

  if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (socialEmailBtn) {
    socialEmailBtn.addEventListener('click', (e) => {
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
