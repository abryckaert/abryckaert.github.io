// Système de traduction multilingue
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.title': 'Anthony Bryckaert',
    'hero.subtitle': "I'm",
    'hero.typedItems': 'Engineer, Developer, Pentester',
    'hero.download': 'Download resume',
    
    // About section
    'about.title': 'About',
    'about.subtitle': 'Engineer specializing in Software Development, Cybersecurity, and Artificial Intelligence',
    'about.description': 'I am deeply committed to the fields of Information Technology, with a particular focus on Cybersecurity and Artificial Intelligence.',
    'about.nationality': 'Nationality:',
    'about.nationality.value': 'French',
    'about.firstLang': 'First language:',
    'about.firstLang.value': 'French (native)',
    'about.secondLang': 'Second language:',
    'about.secondLang.value': 'English (B2)',
    'about.thirdLang': 'Third language:',
    'about.thirdLang.value': 'Spanish (B1)',
    'about.city': 'City:',
    'about.city.value': 'Aix-En-Provence',
    'about.age': 'Age:',
    'about.degree': 'Degree:',
    'about.degree.value': "Master's in Computer Science",
    'about.email': 'Email:',
    'about.phone': 'Professional phone number:',
    'about.seeking': 'I am looking for freelance opportunities in AI engineering, web application, and software development. I am particularly interested in projects involving artificial intelligence including model development, fine-tuning, and deployment as well as exploring applications in machine learning, deep learning, and software solutions.',
    
    // Skills section
    'skills.title': 'Skills',
    'skills.subtitle': "All the skills I've acquired at jobs, school and through personal projects.",
    'skills.network': 'Network : Wireshark, Cisco Pack Tracer, Firewall',
    'skills.backend': 'Backend : Java, Python, C++, Javascript',
    'skills.frontend': 'Frontend : Bootstrap, Angular, Javascript, CMS (Odoo, Wordpress, Wix)',
    'skills.ai': 'AI development : PyTorch, Azure',
    'skills.forensic': 'Forensic',
    'skills.pentesting': 'Pentesting',
    
    // Resume section
    'resume.title': 'Resume',
    'resume.subtitle': 'Here are all my qualifications and experiences',
    'resume.diplomas': 'Diplomas',
    'resume.experience': 'Professional Experience',
    'resume.m2.title': 'Third year of Engineer school (M2)',
    'resume.m2.period': '2025 - 2026',
    'resume.m2.school': 'ESAIP Engineering School, Aix-En-Provence 13090, France',
    'resume.m2.exchange': 'Exchange Semester at UNAJ National University Arturo Jauretche, Buenos Aires, Argentina',
    'resume.m2.courses': 'Development : Design Pattern in C#\nApplication Development : Kotlin\nWeb Application Development : Node.js, Express.js',
    'resume.m1.title': 'Second year of Engineer school (M1)',
    'resume.m1.period': '2023 - 2025',
    'resume.m1.school': 'ESAIP Engineering School, Aix-En-Provence 13090, France',
    'resume.m1.toeic': 'TOEIC certificate, score 850',
    'resume.m1.courses': 'Cybersecurity : Forensic, CTF, Cryptology, Secure development, Risk management\nDevelopment : Backend Java | Android development\nLinux Administration : Apache, Ssh, Iptable, Git | Windows Administration :\nNetwork :',
    'resume.l3.sem2.title': 'First year of Engineer school',
    'resume.l3.sem2.period': 'Semester two of Engineer school 2023',
    'resume.l3.sem2.school': 'ESAIP Engineering School, Aix-En-Provence 13090, France',
    'resume.l3.sem2.exchange': 'Exchange Semester at VIA University College, Horsens, 8700, Denmark',
    'resume.l3.sem2.courses': 'MongoDB, ASP.NET, SQL Server Management Studio',
    'resume.l3.sem1.period': 'Semester one of Engineer school 2022',
    'resume.l3.sem1.courses': 'Frontend : Html, Css | Backend : Java | Network : Cisco Packet Tracer',
    'resume.bts.title': '2 years diploma in IT (BTS SN)',
    'resume.bts.period': '2019 - 2022',
    'resume.bts.school': 'Saint Jean-Baptiste de lasalle, Avignon 84000, France',
    'resume.bts.courses': 'Development : Java, C++, Qt Creator Framework\nLinux administration : Apache, VsFtp, MySql, Ssh, Ufw firewall',
    'resume.csgroup.title': 'CS GROUP FRANCE IA Solutions Developer',
    'resume.csgroup.period': '2026-2026 (6 months)',
    'resume.csgroup.location': 'Aix-En-Provence, France',
    'resume.csgroup.description': 'Design and development of Artificial Intelligence-based solutions at CS GROUP FRANCE\'s Aix-en-Provence office. My work focused on creating intelligent systems aimed at optimizing business processes and enhancing decision support.',
    'resume.capgemini.title': 'Capgemini secure development and risk analysis (EBIOS RM)',
    'resume.capgemini.period': '2024-2025 (7 months)',
    'resume.capgemini.location': 'Aix-En-Provence, France',
    'resume.capgemini.description': 'During my internship at Capgemini\'s Aix-en-Provence office, I developed web application, an internal HR management tool using Node.js, to streamline employee activity tracking and KPI monitoring with role-based functionalities. In parallel, I conducted risk analyses using the EBIOS RM methodology and utilized Docker to deploy tools such as CISO Assistant. These tasks enhanced my technical expertise and contributed to improving operational efficiency and security.',
    'resume.nato.title': 'NATO (OTAN)',
    'resume.nato.period': '2024 (4 months)',
    'resume.nato.location': 'France',
    'resume.archelon.title': 'Volunteering in Archelon',
    'resume.archelon.period': 'Summer 2023',
    'resume.archelon.location': 'Chania, Crete',
    'resume.archelon.description': 'Archelon is committed to protecting sea turtles through habitat conservation, scientific research to better understand their needs, and public awareness to encourage the preservation of these species and their natural environments.',
    'resume.entrep.title': 'Les entrep\'',
    'resume.entrep.period': '2022',
    'resume.entrep.location': 'Avignon, 84000, France',
    'resume.entrep.description': 'Practicing business creation involves exploring ideas and assessing fit through a cycle of doing, failing, and redoing, supported by diverse teamwork and mentorship. It combines practical learning and networking, culminating in the Les Entrep\' certificate for professional advancement.',
    'resume.technician.title': 'Technician trainee',
    'resume.technician.period': '2021',
    'resume.technician.location': 'Emergency Informatique, Avignon, 84000, France',
    'resume.technician.description': 'Computer repair, installation and configuration of network equipment',
    
    // Portfolio section
    'portfolio.title': 'My projects',
    'portfolio.subtitle': 'Here are all my projects, others are still in progress',
    'portfolio.filter.all': 'All',
    'portfolio.filter.software': 'Software',
    'portfolio.filter.web': 'Web',
    'portfolio.aepf.title': 'Website for Polynesian Association',
    'portfolio.aepf.description': 'Creation of a website to promote Polynesian culture',
    'portfolio.aepf.lightbox': 'Website developed with Silex, an open-source website maker',
    'portfolio.pikawa.title': 'Connected Coffee Machine "Pikawa"',
    'portfolio.pikawa.description': 'Make and manage coffee with Bluetooth',
    'portfolio.pikawa.lightbox': 'Developed in C++ with QT Creator framework during my 2-year diploma project',
    'portfolio.levigneux.title': 'Le Vigneux Vin',
    'portfolio.levigneux.description': 'Web application for winemaker',
    'portfolio.levigneux.lightbox': 'Website created with ASP.NET, enabling the winemaker to add and manage their wines',
    'portfolio.brainpilot.title': 'BrainPilot',
    'portfolio.brainpilot.description': 'Android application to help students',
    'portfolio.brainpilot.lightbox': 'Android application developed in Java to help students manage their time',
    'portfolio.hr.title': 'Internal HR Management Tool',
    'portfolio.hr.description': 'An application developed using Node.js to streamline HR processes, including employee activity tracking, KPI monitoring, and role-based functionalities for administrators, project managers, and consultants.',
    'portfolio.hr.lightbox': 'Detailed description of the project',
    'portfolio.details': 'Portfolio Details',
    
    // Services section
    'services.title': 'Services',
    'services.subtitle': 'Here are all the services I can accomplish for your company.',
    'services.website.title': 'Website Creation',
    'services.website.description': 'I can create a website for your company with Bootstrap, React, Angular or with a CMS like Wordpress, Wix and Odoo.',
    'services.software.title': 'Software Developement',
    'services.software.description': 'I can build with a team the Frontend and the Backend of software using Java, C++, C or Python.',
    'services.forensic.title': 'Forensic Analysis',
    'services.forensic.description': 'I can recover deleted files or look for suspicious malware in RAM or disk image.',
    'services.pentest.title': 'Pentest',
    'services.pentest.description': 'I can perform a pentest with your accord on your network, servers and software.',
    'services.network.title': 'Administrate Network',
    'services.network.description': 'I can administrate a Linux or Windows servers or network of your company',
    'services.ai.title': 'Develop AI Agent',
    'services.ai.description': 'I can develop and train an AI agent to meet your specific needs.',
    
    // Testimonials section
    'testimonials.title': 'Testimonials',
    'testimonials.raimana.title': 'Student specialized in Big Data',
    'testimonials.raimana.text': 'Anthony is a passionate person, he loves what he does and it shows. Very involved in all the projects we\'ve done together. I look forward to working with you again.',
    'testimonials.teony.title': 'Student specialized in Big Data & Junior AQSE President',
    'testimonials.teony.text': 'Anthony stands out for his professionalism and his ability to inspire the team. His pragmatic approach and innovative spirit make him an invaluable asset in the workplace. Working alongside him is both rewarding and stimulating.',
    
    // Contact section
    'contact.title': 'Contact',
    'contact.location': 'Location:',
    'contact.linkedin': 'Linkedin:',
    'contact.email': 'Email:',
    'contact.call': 'Call:',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.resume': 'CV',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.title': 'Anthony Bryckaert',
    'hero.subtitle': "Je suis",
    'hero.typedItems': 'Ingénieur, Développeur, Pentester',
    'hero.download': 'Télécharger le CV',
    
    // About section
    'about.title': 'À propos',
    'about.subtitle': 'Ingénieur spécialisé en Développement Logiciel, Cybersécurité et Intelligence Artificielle',
    'about.description': 'Je suis profondément engagé dans les domaines des Technologies de l\'Information, avec un focus particulier sur la Cybersécurité et l\'Intelligence Artificielle.',
    'about.nationality': 'Nationalité:',
    'about.nationality.value': 'Française',
    'about.firstLang': 'Première langue:',
    'about.firstLang.value': 'Français (natif)',
    'about.secondLang': 'Deuxième langue:',
    'about.secondLang.value': 'Anglais (B2)',
    'about.thirdLang': 'Troisième langue:',
    'about.thirdLang.value': 'Espagnol (B1)',
    'about.city': 'Ville:',
    'about.city.value': 'Aix-En-Provence',
    'about.age': 'Âge:',
    'about.degree': 'Diplôme:',
    'about.degree.value': 'Master en Informatique',
    'about.email': 'Email:',
    'about.phone': 'Téléphone professionnel:',
    'about.seeking': 'Je recherche des opportunités en freelance dans l\'ingénierie IA, le développement d\'applications web et le développement logiciel. Je suis particulièrement intéressé par les projets impliquant l\'intelligence artificielle, notamment le développement de modèles, le fine-tuning et le déploiement, ainsi que l\'exploration d\'applications en machine learning, deep learning et solutions logicielles.',
    
    // Skills section
    'skills.title': 'Compétences',
    'skills.subtitle': 'Toutes les compétences que j\'ai acquises au travail, à l\'école et à travers des projets personnels.',
    'skills.network': 'Réseau : Wireshark, Cisco Pack Tracer, Firewall',
    'skills.backend': 'Backend : Java, Python, C++, Javascript',
    'skills.frontend': 'Frontend : Bootstrap, Angular, Javascript, CMS (Odoo, Wordpress, Wix)',
    'skills.ai': 'Développement IA : PyTorch, Azure',
    'skills.forensic': 'Forensic',
    'skills.pentesting': 'Pentesting',
    
    // Resume section
    'resume.title': 'CV',
    'resume.subtitle': 'Voici toutes mes qualifications et expériences',
    'resume.diplomas': 'Diplômes',
    'resume.experience': 'Expérience Professionnelle',
    'resume.m2.title': 'Troisième année d\'école d\'ingénieur (M2)',
    'resume.m2.period': '2025 - 2026',
    'resume.m2.school': 'École d\'ingénieurs ESAIP, Aix-En-Provence 13090, France',
    'resume.m2.exchange': 'Semestre d\'échange à l\'Université Nationale Arturo Jauretche (UNAJ), Buenos Aires, Argentine',
    'resume.m2.courses': 'Développement : Design Pattern en C#\nDéveloppement d\'applications : Kotlin\nDéveloppement d\'applications web : Node.js, Express.js',
    'resume.m1.title': 'Deuxième année d\'école d\'ingénieur (M1)',
    'resume.m1.period': '2023 - 2025',
    'resume.m1.school': 'École d\'ingénieurs ESAIP, Aix-En-Provence 13090, France',
    'resume.m1.toeic': 'Certificat TOEIC, score 850',
    'resume.m1.courses': 'Cybersécurité : Forensic, CTF, Cryptologie, Développement sécurisé, Gestion des risques\nDéveloppement : Backend Java | Développement Android\nAdministration Linux : Apache, Ssh, Iptable, Git | Administration Windows :\nRéseau :',
    'resume.l3.sem2.title': 'Première année d\'école d\'ingénieur',
    'resume.l3.sem2.period': 'Deuxième semestre d\'école d\'ingénieur 2023',
    'resume.l3.sem2.school': 'École d\'ingénieurs ESAIP, Aix-En-Provence 13090, France',
    'resume.l3.sem2.exchange': 'Semestre d\'échange au VIA University College, Horsens, 8700, Danemark',
    'resume.l3.sem2.courses': 'MongoDB, ASP.NET, SQL Server Management Studio',
    'resume.l3.sem1.period': 'Premier semestre d\'école d\'ingénieur 2022',
    'resume.l3.sem1.courses': 'Frontend : Html, Css | Backend : Java | Réseau : Cisco Packet Tracer',
    'resume.bts.title': 'Diplôme de 2 ans en informatique (BTS SN)',
    'resume.bts.period': '2019 - 2022',
    'resume.bts.school': 'Saint Jean-Baptiste de lasalle, Avignon 84000, France',
    'resume.bts.courses': 'Développement : Java, C++, Framework Qt Creator\nAdministration Linux : Apache, VsFtp, MySql, Ssh, Pare-feu Ufw',
    'resume.csgroup.title': 'CS GROUP FRANCE Développeur Solutions IA',
    'resume.csgroup.period': '2026-2026 (6 mois)',
    'resume.csgroup.location': 'Aix-En-Provence, France',
    'resume.csgroup.description': 'Conception et développement de solutions basées sur l\'Intelligence Artificielle au bureau CS GROUP FRANCE d\'Aix-en-Provence. Mon travail s\'est concentré sur la création de systèmes intelligents visant à optimiser les processus métier et à améliorer l\'aide à la décision.',
    'resume.capgemini.title': 'Capgemini développement sécurisé et analyse des risques (EBIOS RM)',
    'resume.capgemini.period': '2024-2025 (7 mois)',
    'resume.capgemini.location': 'Aix-En-Provence, France',
    'resume.capgemini.description': 'Lors de mon stage au bureau Capgemini d\'Aix-en-Provence, j\'ai développé une application web, un outil de gestion RH interne utilisant Node.js, pour rationaliser le suivi des activités des employés et le suivi des KPI avec des fonctionnalités basées sur les rôles. En parallèle, j\'ai effectué des analyses de risques en utilisant la méthodologie EBIOS RM et utilisé Docker pour déployer des outils tels que CISO Assistant. Ces tâches ont renforcé mon expertise technique et contribué à améliorer l\'efficacité opérationnelle et la sécurité.',
    'resume.nato.title': 'OTAN (NATO)',
    'resume.nato.period': '2024 (4 mois)',
    'resume.nato.location': 'France',
    'resume.archelon.title': 'Bénévolat à Archelon',
    'resume.archelon.period': 'Été 2023',
    'resume.archelon.location': 'Chania, Crète',
    'resume.archelon.description': 'Archelon s\'engage à protéger les tortues marines grâce à la conservation de l\'habitat, à la recherche scientifique pour mieux comprendre leurs besoins, et à la sensibilisation du public pour encourager la préservation de ces espèces et de leurs environnements naturels.',
    'resume.entrep.title': 'Les entrep\'',
    'resume.entrep.period': '2022',
    'resume.entrep.location': 'Avignon, 84000, France',
    'resume.entrep.description': 'Pratiquer la création d\'entreprise implique d\'explorer des idées et d\'évaluer leur adéquation à travers un cycle de faire, échouer et refaire, soutenu par un travail d\'équipe diversifié et du mentorat. Cela combine l\'apprentissage pratique et le réseautage, culminant avec le certificat Les Entrep\' pour l\'avancement professionnel.',
    'resume.technician.title': 'Stagiaire technicien',
    'resume.technician.period': '2021',
    'resume.technician.location': 'Emergency Informatique, Avignon, 84000, France',
    'resume.technician.description': 'Réparation d\'ordinateurs, installation et configuration d\'équipements réseau',
    
    // Portfolio section
    'portfolio.title': 'Mes projets',
    'portfolio.subtitle': 'Voici tous mes projets, d\'autres sont encore en cours',
    'portfolio.filter.all': 'Tous',
    'portfolio.filter.software': 'Logiciel',
    'portfolio.filter.web': 'Web',
    'portfolio.aepf.title': 'Site web pour l\'Association Polynésienne',
    'portfolio.aepf.description': 'Création d\'un site web pour promouvoir la culture polynésienne',
    'portfolio.aepf.lightbox': 'Site web développé avec Silex, un créateur de sites web open-source',
    'portfolio.pikawa.title': 'Machine à café connectée "Pikawa"',
    'portfolio.pikawa.description': 'Faire et gérer le café avec Bluetooth',
    'portfolio.pikawa.lightbox': 'Développé en C++ avec le framework QT Creator lors de mon projet de diplôme de 2 ans',
    'portfolio.levigneux.title': 'Le Vigneux Vin',
    'portfolio.levigneux.description': 'Application web pour viticulteur',
    'portfolio.levigneux.lightbox': 'Site web créé avec ASP.NET, permettant au viticulteur d\'ajouter et de gérer ses vins',
    'portfolio.brainpilot.title': 'BrainPilot',
    'portfolio.brainpilot.description': 'Application Android pour aider les étudiants',
    'portfolio.brainpilot.lightbox': 'Application Android développée en Java pour aider les étudiants à gérer leur temps',
    'portfolio.hr.title': 'Outil de gestion RH interne',
    'portfolio.hr.description': 'Une application développée en utilisant Node.js pour rationaliser les processus RH, incluant le suivi des activités des employés, le suivi des KPI et les fonctionnalités basées sur les rôles pour les administrateurs, chefs de projet et consultants.',
    'portfolio.hr.lightbox': 'Description détaillée du projet',
    'portfolio.details': 'Détails du Portfolio',
    
    // Services section
    'services.title': 'Services',
    'services.subtitle': 'Voici tous les services que je peux accomplir pour votre entreprise.',
    'services.website.title': 'Création de site web',
    'services.website.description': 'Je peux créer un site web pour votre entreprise avec Bootstrap, React, Angular ou avec un CMS comme Wordpress, Wix et Odoo.',
    'services.software.title': 'Développement logiciel',
    'services.software.description': 'Je peux construire avec une équipe le Frontend et le Backend de logiciels en utilisant Java, C++, C ou Python.',
    'services.forensic.title': 'Analyse forensique',
    'services.forensic.description': 'Je peux récupérer des fichiers supprimés ou rechercher des logiciels malveillants suspects dans la RAM ou l\'image disque.',
    'services.pentest.title': 'Pentest',
    'services.pentest.description': 'Je peux effectuer un pentest avec votre accord sur votre réseau, serveurs et logiciels.',
    'services.network.title': 'Administrer le réseau',
    'services.network.description': 'Je peux administrer des serveurs Linux ou Windows ou le réseau de votre entreprise',
    'services.ai.title': 'Développer un agent IA',
    'services.ai.description': 'Je peux développer et entraîner un agent IA pour répondre à vos besoins spécifiques.',
    
    // Testimonials section
    'testimonials.title': 'Témoignages',
    'testimonials.raimana.title': 'Étudiant spécialisé en Big Data',
    'testimonials.raimana.text': 'Anthony est une personne passionnée, il aime ce qu\'il fait et cela se voit. Très impliqué dans tous les projets que nous avons faits ensemble. J\'ai hâte de retravailler avec vous.',
    'testimonials.teony.title': 'Étudiant spécialisé en Big Data & Président Junior AQSE',
    'testimonials.teony.text': 'Anthony se distingue par son professionnalisme et sa capacité à inspirer l\'équipe. Son approche pragmatique et son esprit innovant font de lui un atout inestimable sur le lieu de travail. Travailler à ses côtés est à la fois enrichissant et stimulant.',
    
    // Contact section
    'contact.title': 'Contact',
    'contact.location': 'Localisation:',
    'contact.linkedin': 'Linkedin:',
    'contact.email': 'Email:',
    'contact.call': 'Téléphone:',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.resume': 'Currículum',
    'nav.portfolio': 'Portafolio',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    
    // Hero section
    'hero.title': 'Anthony Bryckaert',
    'hero.subtitle': 'Soy',
    'hero.typedItems': 'Ingeniero, Desarrollador, Pentester',
    'hero.download': 'Descargar currículum',
    
    // About section
    'about.title': 'Acerca de',
    'about.subtitle': 'Ingeniero especializado en Desarrollo de Software, Ciberseguridad e Inteligencia Artificial',
    'about.description': 'Estoy profundamente comprometido con los campos de Tecnologías de la Información, con un enfoque particular en Ciberseguridad e Inteligencia Artificial.',
    'about.nationality': 'Nacionalidad:',
    'about.nationality.value': 'Francesa',
    'about.firstLang': 'Primera lengua:',
    'about.firstLang.value': 'Francés (nativo)',
    'about.secondLang': 'Segunda lengua:',
    'about.secondLang.value': 'Inglés (B2)',
    'about.thirdLang': 'Tercera lengua:',
    'about.thirdLang.value': 'Español (B1)',
    'about.city': 'Ciudad:',
    'about.city.value': 'Aix-En-Provence',
    'about.age': 'Edad:',
    'about.degree': 'Título:',
    'about.degree.value': 'Máster en Informática',
    'about.email': 'Email:',
    'about.phone': 'Teléfono profesional:',
    'about.seeking': 'Busco oportunidades freelance en ingeniería de IA, desarrollo de aplicaciones web y desarrollo de software. Estoy particularmente interesado en proyectos que involucren inteligencia artificial, incluyendo desarrollo de modelos, fine-tuning y despliegue, así como explorar aplicaciones en machine learning, deep learning y soluciones de software.',
    
    // Skills section
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Todas las habilidades que he adquirido en trabajos, escuela y a través de proyectos personales.',
    'skills.network': 'Red : Wireshark, Cisco Pack Tracer, Firewall',
    'skills.backend': 'Backend : Java, Python, C++, Javascript',
    'skills.frontend': 'Frontend : Bootstrap, Angular, Javascript, CMS (Odoo, Wordpress, Wix)',
    'skills.ai': 'Desarrollo IA : PyTorch, Azure',
    'skills.forensic': 'Forensic',
    'skills.pentesting': 'Pentesting',
    
    // Resume section
    'resume.title': 'Currículum',
    'resume.subtitle': 'Aquí están todas mis calificaciones y experiencias',
    'resume.diplomas': 'Diplomas',
    'resume.experience': 'Experiencia Profesional',
    'resume.m2.title': 'Tercer año de escuela de ingeniería (M2)',
    'resume.m2.period': '2025 - 2026',
    'resume.m2.school': 'Escuela de Ingeniería ESAIP, Aix-En-Provence 13090, Francia',
    'resume.m2.exchange': 'Semestre de intercambio en la Universidad Nacional Arturo Jauretche (UNAJ), Buenos Aires, Argentina',
    'resume.m2.courses': 'Desarrollo : Design Pattern en C#\nDesarrollo de aplicaciones : Kotlin\nDesarrollo de aplicaciones web : Node.js, Express.js',
    'resume.m1.title': 'Segundo año de escuela de ingeniería (M1)',
    'resume.m1.period': '2023 - 2025',
    'resume.m1.school': 'Escuela de Ingeniería ESAIP, Aix-En-Provence 13090, Francia',
    'resume.m1.toeic': 'Certificado TOEIC, puntuación 850',
    'resume.m1.courses': 'Ciberseguridad : Forensic, CTF, Criptología, Desarrollo seguro, Gestión de riesgos\nDesarrollo : Backend Java | Desarrollo Android\nAdministración Linux : Apache, Ssh, Iptable, Git | Administración Windows :\nRed :',
    'resume.l3.sem2.title': 'Primer año de escuela de ingeniería',
    'resume.l3.sem2.period': 'Segundo semestre de escuela de ingeniería 2023',
    'resume.l3.sem2.school': 'Escuela de Ingeniería ESAIP, Aix-En-Provence 13090, Francia',
    'resume.l3.sem2.exchange': 'Semestre de intercambio en VIA University College, Horsens, 8700, Dinamarca',
    'resume.l3.sem2.courses': 'MongoDB, ASP.NET, SQL Server Management Studio',
    'resume.l3.sem1.period': 'Primer semestre de escuela de ingeniería 2022',
    'resume.l3.sem1.courses': 'Frontend : Html, Css | Backend : Java | Red : Cisco Packet Tracer',
    'resume.bts.title': 'Diploma de 2 años en informática (BTS SN)',
    'resume.bts.period': '2019 - 2022',
    'resume.bts.school': 'Saint Jean-Baptiste de lasalle, Avignon 84000, Francia',
    'resume.bts.courses': 'Desarrollo : Java, C++, Framework Qt Creator\nAdministración Linux : Apache, VsFtp, MySql, Ssh, Firewall Ufw',
    'resume.csgroup.title': 'CS GROUP FRANCE Desarrollador de Soluciones IA',
    'resume.csgroup.period': '2026-2026 (6 meses)',
    'resume.csgroup.location': 'Aix-En-Provence, Francia',
    'resume.csgroup.description': 'Diseño y desarrollo de soluciones basadas en Inteligencia Artificial en la oficina de CS GROUP FRANCE en Aix-en-Provence. Mi trabajo se centró en crear sistemas inteligentes destinados a optimizar los procesos empresariales y mejorar el apoyo a la toma de decisiones.',
    'resume.capgemini.title': 'Capgemini desarrollo seguro y análisis de riesgos (EBIOS RM)',
    'resume.capgemini.period': '2024-2025 (7 meses)',
    'resume.capgemini.location': 'Aix-En-Provence, Francia',
    'resume.capgemini.description': 'Durante mi pasantía en la oficina de Capgemini en Aix-en-Provence, desarrollé una aplicación web, una herramienta de gestión de RRHH interna usando Node.js, para optimizar el seguimiento de actividades de empleados y el monitoreo de KPI con funcionalidades basadas en roles. En paralelo, realicé análisis de riesgos usando la metodología EBIOS RM y utilicé Docker para desplegar herramientas como CISO Assistant. Estas tareas mejoraron mi experiencia técnica y contribuyeron a mejorar la eficiencia operativa y la seguridad.',
    'resume.nato.title': 'OTAN (NATO)',
    'resume.nato.period': '2024 (4 meses)',
    'resume.nato.location': 'Francia',
    'resume.archelon.title': 'Voluntariado en Archelon',
    'resume.archelon.period': 'Verano 2023',
    'resume.archelon.location': 'Chania, Creta',
    'resume.archelon.description': 'Archelon se compromete a proteger las tortugas marinas a través de la conservación del hábitat, la investigación científica para comprender mejor sus necesidades, y la concienciación pública para fomentar la preservación de estas especies y sus entornos naturales.',
    'resume.entrep.title': 'Les entrep\'',
    'resume.entrep.period': '2022',
    'resume.entrep.location': 'Avignon, 84000, Francia',
    'resume.entrep.description': 'Practicar la creación de empresas implica explorar ideas y evaluar su adecuación a través de un ciclo de hacer, fallar y rehacer, apoyado por un trabajo en equipo diverso y mentoría. Combina aprendizaje práctico y networking, culminando en el certificado Les Entrep\' para el avance profesional.',
    'resume.technician.title': 'Técnico en prácticas',
    'resume.technician.period': '2021',
    'resume.technician.location': 'Emergency Informatique, Avignon, 84000, Francia',
    'resume.technician.description': 'Reparación de computadoras, instalación y configuración de equipos de red',
    
    // Portfolio section
    'portfolio.title': 'Mis proyectos',
    'portfolio.subtitle': 'Aquí están todos mis proyectos, otros aún están en progreso',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.software': 'Software',
    'portfolio.filter.web': 'Web',
    'portfolio.aepf.title': 'Sitio web para la Asociación Polinesia',
    'portfolio.aepf.description': 'Creación de un sitio web para promover la cultura polinesia',
    'portfolio.aepf.lightbox': 'Sitio web desarrollado con Silex, un creador de sitios web de código abierto',
    'portfolio.pikawa.title': 'Máquina de café conectada "Pikawa"',
    'portfolio.pikawa.description': 'Hacer y gestionar café con Bluetooth',
    'portfolio.pikawa.lightbox': 'Desarrollado en C++ con el framework QT Creator durante mi proyecto de diploma de 2 años',
    'portfolio.levigneux.title': 'Le Vigneux Vin',
    'portfolio.levigneux.description': 'Aplicación web para viticultor',
    'portfolio.levigneux.lightbox': 'Sitio web creado con ASP.NET, permitiendo al viticultor agregar y gestionar sus vinos',
    'portfolio.brainpilot.title': 'BrainPilot',
    'portfolio.brainpilot.description': 'Aplicación Android para ayudar a estudiantes',
    'portfolio.brainpilot.lightbox': 'Aplicación Android desarrollada en Java para ayudar a los estudiantes a gestionar su tiempo',
    'portfolio.hr.title': 'Herramienta de gestión de RRHH interna',
    'portfolio.hr.description': 'Una aplicación desarrollada usando Node.js para optimizar los procesos de RRHH, incluyendo seguimiento de actividades de empleados, monitoreo de KPI y funcionalidades basadas en roles para administradores, gerentes de proyecto y consultores.',
    'portfolio.hr.lightbox': 'Descripción detallada del proyecto',
    'portfolio.details': 'Detalles del Portafolio',
    
    // Services section
    'services.title': 'Servicios',
    'services.subtitle': 'Aquí están todos los servicios que puedo realizar para su empresa.',
    'services.website.title': 'Creación de sitio web',
    'services.website.description': 'Puedo crear un sitio web para su empresa con Bootstrap, React, Angular o con un CMS como Wordpress, Wix y Odoo.',
    'services.software.title': 'Desarrollo de software',
    'services.software.description': 'Puedo construir con un equipo el Frontend y el Backend de software usando Java, C++, C o Python.',
    'services.forensic.title': 'Análisis forense',
    'services.forensic.description': 'Puedo recuperar archivos eliminados o buscar malware sospechoso en RAM o imagen de disco.',
    'services.pentest.title': 'Pentest',
    'services.pentest.description': 'Puedo realizar un pentest con su acuerdo en su red, servidores y software.',
    'services.network.title': 'Administrar red',
    'services.network.description': 'Puedo administrar servidores Linux o Windows o la red de su empresa',
    'services.ai.title': 'Desarrollar agente IA',
    'services.ai.description': 'Puedo desarrollar y entrenar un agente IA para satisfacer sus necesidades específicas.',
    
    // Testimonials section
    'testimonials.title': 'Testimonios',
    'testimonials.raimana.title': 'Estudiante especializado en Big Data',
    'testimonials.raimana.text': 'Anthony es una persona apasionada, ama lo que hace y se nota. Muy involucrado en todos los proyectos que hemos hecho juntos. Espero trabajar contigo de nuevo.',
    'testimonials.teony.title': 'Estudiante especializado en Big Data y Presidente Junior AQSE',
    'testimonials.teony.text': 'Anthony se destaca por su profesionalismo y su capacidad para inspirar al equipo. Su enfoque pragmático y espíritu innovador lo convierten en un activo invaluable en el lugar de trabajo. Trabajar junto a él es tanto gratificante como estimulante.',
    
    // Contact section
    'contact.title': 'Contacto',
    'contact.location': 'Ubicación:',
    'contact.linkedin': 'Linkedin:',
    'contact.email': 'Email:',
    'contact.call': 'Llamar:',
  }
};

// Fonction pour obtenir la langue actuelle
function getCurrentLanguage() {
  // Vérifier si une langue est sauvegardée dans localStorage
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang && translations[savedLang]) {
    return savedLang;
  }
  
  // Détecter la langue du navigateur
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0];
  
  // Si la langue du navigateur est supportée, l'utiliser
  if (translations[langCode]) {
    return langCode;
  }
  
  // Par défaut, retourner l'anglais
  return 'en';
}

// Fonction pour changer la langue
function setLanguage(lang) {
  if (!translations[lang]) {
    console.error(`Language ${lang} is not supported`);
    return;
  }
  
  // Sauvegarder la préférence
  localStorage.setItem('preferred-language', lang);
  
  // Mettre à jour l'attribut lang du HTML
  document.documentElement.lang = lang;
  
  // Traduire tous les éléments avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = translations[lang][key];
      } else if (element.hasAttribute('data-i18n-html')) {
        // Remplacer les \n par <br> pour le HTML
        const htmlContent = translations[lang][key].replace(/\n/g, '<br>');
        element.innerHTML = htmlContent;
      } else if (element.hasAttribute('title') && element.children.length === 0) {
        // Si l'élément a un attribut title et pas d'enfants, mettre à jour le title et le texte
        element.setAttribute('title', translations[lang][key]);
        element.textContent = translations[lang][key];
      } else if (element.hasAttribute('title') && element.children.length > 0) {
        // Si l'élément a un attribut title et des enfants (comme les liens avec icônes), seulement mettre à jour le title
        element.setAttribute('title', translations[lang][key]);
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Mettre à jour les éléments avec data-i18n-typed-items
  document.querySelectorAll('[data-i18n-typed-items]').forEach(element => {
    const key = element.getAttribute('data-i18n-typed-items');
    if (translations[lang][key]) {
      const translatedItems = translations[lang][key];
      element.setAttribute('data-typed-items', translatedItems);
      
      // Réinitialiser Typed.js si l'instance existe
      if (window.typedInstance) {
        window.typedInstance.destroy();
        window.typedInstance = null;
      }
      
      // Recréer l'instance Typed avec les nouvelles traductions
      const typed_strings = translatedItems.split(',').map(s => s.trim());
      window.typedInstance = new Typed(element, {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  });
  
  // Mettre à jour le sélecteur de langue
  const langSelector = document.getElementById('language-selector');
  if (langSelector) {
    langSelector.value = lang;
  }
}

// Fonction pour initialiser Typed.js
function initializeTyped() {
  const typed = document.querySelector('.typed');
  if (typed && !window.typedInstance) {
    let typed_strings;
    if (typed.hasAttribute('data-i18n-typed-items')) {
      const key = typed.getAttribute('data-i18n-typed-items');
      const currentLang = getCurrentLanguage();
      if (translations[currentLang] && translations[currentLang][key]) {
        typed_strings = translations[currentLang][key].split(',').map(s => s.trim());
      } else {
        typed_strings = typed.getAttribute('data-typed-items').split(',').map(s => s.trim());
      }
    } else {
      typed_strings = typed.getAttribute('data-typed-items').split(',').map(s => s.trim());
    }
    window.typedInstance = new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
}

// Initialiser la langue au chargement
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getCurrentLanguage();
  setLanguage(currentLang);
  
  // S'assurer que le sélecteur de langue est synchronisé
  const langSelector = document.getElementById('language-selector');
  if (langSelector) {
    langSelector.value = currentLang;
  }
  
  // Initialiser Typed.js après les traductions
  initializeTyped();
});

// Exporter les fonctions pour utilisation globale
window.i18n = {
  setLanguage,
  getCurrentLanguage,
  translations
};

