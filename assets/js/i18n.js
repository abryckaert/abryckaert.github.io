/**
 * =====================================================================
 *  i18n.js : traductions du site (anglais, français, espagnol)
 * =====================================================================
 *  Fonctionnement :
 *   - Dans index.html, chaque texte traduisible porte un attribut
 *     data-i18n="cle" (ex. data-i18n="nav.about").
 *   - L'objet `translations` ci-dessous contient, pour chaque langue
 *     (en / fr / es), la valeur de chaque clé.
 *   - Au chargement, getCurrentLanguage() choisit la langue, puis
 *     setLanguage() remplace tous les textes de la page.
 *
 *  Choix de la langue (getBrowserLanguage) :
 *   - navigateur en français                         -> fr
 *   - navigateur en espagnol, ou pays d'Amérique latine -> es
 *   - tout le reste                                  -> en
 *   Un choix fait avec le menu de langue est retenu jusqu'à la fin de la
 *   visite (sessionStorage), puis on revient à la langue du navigateur.
 *
 *  Ajouter / modifier un texte :
 *   1. Mettre data-i18n="ma.cle" sur l'élément dans index.html
 *      (garder le texte anglais dedans : il sert de secours).
 *   2. Ajouter 'ma.cle': '...' dans les TROIS blocs en, fr et es.
 *   3. Changer le numéro « ?v= » de i18n.js dans index.html.
 *
 *  Options d'un élément traduit :
 *   - data-i18n-html  : la valeur peut contenir du HTML ; les \n
 *                       deviennent des retours à la ligne <br>.
 *   - attribut title  : s'il est présent, il est traduit aussi ; si
 *                       l'élément contient des balises (icône, <span>…),
 *                       seul le title est traduit, pas le contenu.
 *   - data-i18n-typed-items : liste « a, b, c » pour le texte animé (Typed.js).
 *
 *  Débogage : dans la console du navigateur,
 *   window.i18n.setLanguage('es')      -> passe le site en espagnol
 *   window.i18n.getBrowserLanguage()   -> langue détectée
 *   sessionStorage.clear()             -> oublie le choix manuel
 * =====================================================================
 */

const translations = {
  /* ============================ ANGLAIS ============================ */
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'theme.toggle': 'Switch light / dark theme',
    
    // Hero section
    'hero.title': 'Anthony Bryckaert',
    'hero.subtitle': "I'm",
    'hero.typedItems': 'an AI engineer, a cybersecurity engineer, a software developer, open to new opportunities',
    'hero.download': 'Download resume',
    'hero.whatsapp': 'Contact me on WhatsApp',


    
    // About section
    'about.title': 'About',
    'about.subtitle': 'Engineer specializing in Software Development, Cybersecurity, and Artificial Intelligence',
    'about.description': 'I am deeply committed to the fields of Information Technology, with a particular focus on Cybersecurity and Artificial Intelligence.',
    'about.nationality': 'Nationality:',
    'about.nationality.value': 'French',
    'about.firstLang': 'First language:',
    'about.firstLang.value': 'French (native)',
    'about.secondLang': 'Second language:',
    'about.secondLang.value': 'English (B2, TOEIC 850)',
    'about.thirdLang': 'Third language:',
    'about.thirdLang.value': 'Spanish (B2)',
    'about.city': 'City:',
    'about.city.value': 'Avignon',
    'about.age': 'Age:',
    'about.degree': 'Degree:',
    'about.degree.value': 'Computer Science Engineer',
    'about.email': 'Email:',
    'about.phone.fr': 'Professional phone (France):',
    'about.phone.ar': 'Professional phone (Argentina):',
    'about.seeking': 'I am looking for a full-time position in AI engineering, cybersecurity, web application development or software development.',
    
    // Skills section
    'skills.title': 'Skills',
    'skills.network': 'Network : Wireshark, Cisco Pack Tracer, Firewall',
    'skills.backend': 'Backend : Java, Python, C++, Javascript',
    'skills.frontend': 'Frontend : Bootstrap, Angular, Javascript, Node JS CMS (Odoo, Wordpress, Wix)',
    'skills.ai': 'AI development : PyTorch, Langchain, Skills, N8N, Azure',
    'skills.forensic': 'Forensic, OSINT',
    'skills.pentesting': 'Pentesting',
    
    // Resume section
    'resume.title': 'Resume',
    'resume.subtitle': 'Qualifications and experiences',
    'resume.diplomas': 'Diplomas',
    'resume.degree.note': 'Engineering school comparable to UTN or ITBA in Argentina',
    'resume.experience': 'Professional Experience',
    'resume.eng.title': 'Computer Science Engineering Degree · ESAIP',
    'resume.eng.school': 'Aix-en-Provence, France',
    'resume.eng.erasmus1': 'VIA University College, Horsens, Denmark',
    'resume.eng.erasmus2': 'UNAJ National University Arturo Jauretche, Buenos Aires, Argentina',
    'resume.eng.toeic': 'TOEIC: 850 / 990',
    'resume.eng.period': '2022 – 2026',
    'resume.bts.title': 'BTS in Digital Systems, IT & Networks option · La Salle Avignon',
    'resume.bts.period': '2019 – 2022',
    'resume.bts.school': 'Avignon, France',
    'resume.bts.courses': 'Java and C++ (Qt) development, Linux administration (Apache, vsftpd, MySQL, SSH, UFW firewall).',
    'resume.csgroup.title': 'AI Solutions Developer · CS GROUP',
    'resume.csgroup.period': '2026 (6 months)',
    'resume.csgroup.location': 'Aix-en-Provence, France',
    'resume.csgroup.description': 'Design and development of AI solutions to optimize business processes and decision support.',
    'resume.capgemini.title': 'Cybersecurity intern · Capgemini',
    'resume.capgemini.period': '2024 – 2025 (7 months)',
    'resume.capgemini.location': 'Aix-en-Provence, France',
    'resume.capgemini.description': 'Development of an internal HR tool in Node.js (activity tracking, KPIs, role management), EBIOS RM risk analyses, and deployment of CISO Assistant with Docker.',
    'resume.frenchtech.title': 'Jury member · French Tech Buenos Aires',
    'resume.frenchtech.period': '2026',
    'resume.frenchtech.location': 'Buenos Aires, Argentina',
    'resume.frenchtech.description': 'Screening and evaluation of scientific projects, and help organizing the event.',
    'resume.frenchtech.recognition': 'Award recognized by the City of Buenos Aires',
    'resume.nato.title': 'Consultant · NATO',
    'resume.nato.period': '2024 (4 months)',
    'resume.nato.location': 'France',
    'resume.archelon.title': 'Volunteer · Archelon',
    'resume.archelon.period': 'Summer 2023',
    'resume.archelon.location': 'Chania, Greece',
    'resume.archelon.description': 'Sea turtle protection: habitat conservation, scientific monitoring and public awareness.',
    'resume.entrep.title': 'Entrepreneurial Skills Certification · Les Entrep\'',
    'resume.entrep.period': '2022',
    'resume.entrep.location': 'Avignon, France',
    'resume.entrep.description': 'Business creation program: from idea to project, in a team and with a mentor.',
    'resume.technician.title': 'Technician intern · Emergency Informatique',
    'resume.technician.period': '2021',
    'resume.technician.location': 'Avignon, France',
    'resume.technician.description': 'Computer repair, and installation and configuration of network equipment.',
    
    // Portfolio section
    'portfolio.title': 'My projects',
    'portfolio.subtitle': 'Here are all my projects, others are still in progress',
    'portfolio.filter.all': 'All',
    'portfolio.filter.software': 'Software',
    'portfolio.filter.web': 'Web',
    'portfolio.aepf.title': 'Website for Polynesian Association',
    'portfolio.aepf.lightbox': 'Website developed with Silex, an open-source website maker',
    'portfolio.pikawa.title': 'Connected Coffee Machine "Pikawa"',
    'portfolio.pikawa.lightbox': 'Developed in C++ with QT Creator framework during my 2-year diploma project',
    'portfolio.levigneux.title': 'Le Vigneux Vin',
    'portfolio.levigneux.lightbox': 'Website created with ASP.NET, enabling the winemaker to add and manage their wines',
    'portfolio.hr.title': 'Internal HR Management Tool',
    'portfolio.hr.lightbox': 'Detailed description of the project',
    'portfolio.bimmer.title': 'Bimmer Buyer',
    'portfolio.bimmer.lightbox': 'Node.js / Express / MySQL application with a back office and OWASP-based security',
    'portfolio.lazone.title': 'LAZONE',
    'portfolio.lazone.lightbox': 'Custom e-commerce marketplace with authentication, product catalog, cart, favorites, comments, orders and admin back office',
    'portfolio.seeMore': 'See more',
    
    // Testimonials section
    'testimonials.title': 'Testimonials',
    'testimonials.raimana.title': 'Machine Learning Engineer',
    'testimonials.raimana.text': 'Anthony is a passionate person, he loves what he does and it shows. Very involved in all the projects we\'ve done together. I look forward to working with you again.',
    'testimonials.teony.title': 'Data Engineer',
    'testimonials.teony.text': 'Anthony stands out for his professionalism and his ability to inspire the team. His pragmatic approach and innovative spirit make him an invaluable asset in the workplace. Working alongside him is both rewarding and stimulating.',
    
    // Contact section
    'contact.title': 'Contact',
    'contact.location': 'Location:',
    'contact.linkedin': 'Linkedin:',
    'contact.email': 'Email:',
    'contact.call': 'Call:',
  },
  /* ============================ FRANÇAIS =========================== */
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.resume': 'CV',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'theme.toggle': 'Changer de thème (clair / sombre)',
    
    // Hero section
    'hero.title': 'Anthony Bryckaert',
    'hero.subtitle': "Je suis",
    'hero.typedItems': 'ingénieur IA, ingénieur en cybersécurité, développeur logiciel, à la recherche d\'un emploi',
    'hero.download': 'Télécharger le CV',
    'hero.whatsapp': 'Me contacter sur WhatsApp',



    
    // About section
    'about.title': 'À propos',
    'about.subtitle': 'Ingénieur spécialisé en Développement Logiciel, Cybersécurité et Intelligence Artificielle',
    'about.description': 'Je suis profondément engagé dans les domaines des Technologies de l\'Information, avec un focus particulier sur la Cybersécurité et l\'Intelligence Artificielle.',
    'about.nationality': 'Nationalité:',
    'about.nationality.value': 'Française',
    'about.firstLang': 'Première langue:',
    'about.firstLang.value': 'Français (natif)',
    'about.secondLang': 'Deuxième langue:',
    'about.secondLang.value': 'Anglais (B2, TOEIC 850)',
    'about.thirdLang': 'Troisième langue:',
    'about.thirdLang.value': 'Espagnol (B2)',
    'about.city': 'Ville:',
    'about.city.value': 'Aix-En-Provence',
    'about.age': 'Âge:',
    'about.degree': 'Diplôme:',
    'about.degree.value': 'Ingénieur informatique',
    'about.email': 'Email:',
    'about.phone.fr': 'Téléphone pro français :',
    'about.phone.ar': 'Téléphone pro argentin :',
    'about.seeking': 'Je recherche un emploi dans l\'ingénierie IA, la cybersécurité, le développement d\'applications web ou le développement logiciel.',
    
    // Skills section
    'skills.title': 'Compétences',
    'skills.network': 'Réseau : Wireshark, Cisco Pack Tracer, Firewall',
    'skills.backend': 'Backend : Java, Python, C++, Javascript',
    'skills.frontend': 'Frontend : Bootstrap, Angular, Javascript, Node JS CMS (Odoo, Wordpress, Wix)',
    'skills.ai': 'Développement IA : PyTorch, Langchain, Skills, N8N, Azure',
    'skills.forensic': 'Forensic, OSINT',
    'skills.pentesting': 'Pentesting',
    
    // Resume section
    'resume.title': 'CV',
    'resume.subtitle': 'Qualifications et expériences',
    'resume.diplomas': 'Diplômes',
    'resume.degree.note': 'École d’ingénieurs comparable à l’UTN ou l’ITBA en Argentine',
    'resume.experience': 'Expérience Professionnelle',
    'resume.eng.title': 'Diplôme d\'ingénieur en informatique · ESAIP',
    'resume.eng.school': 'Aix-en-Provence, France',
    'resume.eng.erasmus1': 'VIA University College, Horsens, Danemark',
    'resume.eng.erasmus2': 'Université Nationale Arturo Jauretche (UNAJ), Buenos Aires, Argentine',
    'resume.eng.toeic': 'TOEIC : 850 / 990',
    'resume.eng.period': '2022 – 2026',
    'resume.bts.title': 'BTS Systèmes numériques, option Informatique et réseaux · La Salle Avignon',
    'resume.bts.period': '2019 – 2022',
    'resume.bts.school': 'Avignon, France',
    'resume.bts.courses': 'Développement Java et C++ (Qt), administration Linux (Apache, vsftpd, MySQL, SSH, pare-feu UFW).',
    'resume.csgroup.title': 'Développeur de solutions IA · CS GROUP',
    'resume.csgroup.period': '2026 (6 mois)',
    'resume.csgroup.location': 'Aix-en-Provence, France',
    'resume.csgroup.description': 'Conception et développement de solutions d\'IA pour optimiser les processus métier et l\'aide à la décision.',
    'resume.capgemini.title': 'Stagiaire cybersécurité · Capgemini',
    'resume.capgemini.period': '2024 – 2025 (7 mois)',
    'resume.capgemini.location': 'Aix-en-Provence, France',
    'resume.capgemini.description': 'Développement d\'un outil RH interne en Node.js (suivi d\'activité, KPI, gestion des rôles), analyses de risques EBIOS RM et déploiement de CISO Assistant avec Docker.',
    'resume.frenchtech.title': 'Membre du jury · French Tech Buenos Aires',
    'resume.frenchtech.period': '2026',
    'resume.frenchtech.location': 'Buenos Aires, Argentine',
    'resume.frenchtech.description': 'Sélection et évaluation de projets scientifiques, et participation à l\'organisation de l\'événement.',
    'resume.frenchtech.recognition': 'Prix reconnu par la Ville de Buenos Aires',
    'resume.nato.title': 'Consultant · OTAN',
    'resume.nato.period': '2024 (4 mois)',
    'resume.nato.location': 'France',
    'resume.archelon.title': 'Bénévole · Archelon',
    'resume.archelon.period': 'Été 2023',
    'resume.archelon.location': 'Chania, Grèce',
    'resume.archelon.description': 'Protection des tortues marines : préservation de leur habitat, suivi scientifique et sensibilisation du public.',
    'resume.entrep.title': 'Certification en compétences entrepreneuriales · Les Entrep\'',
    'resume.entrep.period': '2022',
    'resume.entrep.location': 'Avignon, France',
    'resume.entrep.description': 'Programme de création d\'entreprise : de l\'idée au projet, en équipe et avec un mentor.',
    'resume.technician.title': 'Stagiaire technicien · Emergency Informatique',
    'resume.technician.period': '2021',
    'resume.technician.location': 'Avignon, France',
    'resume.technician.description': 'Réparation d\'ordinateurs, installation et configuration d\'équipements réseau.',
    
    // Portfolio section
    'portfolio.title': 'Mes projets',
    'portfolio.subtitle': 'Voici tous mes projets, d\'autres sont encore en cours',
    'portfolio.filter.all': 'Tous',
    'portfolio.filter.software': 'Logiciel',
    'portfolio.filter.web': 'Web',
    'portfolio.aepf.title': 'Site web pour l\'Association Polynésienne',
    'portfolio.aepf.lightbox': 'Site web développé avec Silex, un créateur de sites web open-source',
    'portfolio.pikawa.title': 'Machine à café connectée "Pikawa"',
    'portfolio.pikawa.lightbox': 'Développé en C++ avec le framework QT Creator lors de mon projet de diplôme de 2 ans',
    'portfolio.levigneux.title': 'Le Vigneux Vin',
    'portfolio.levigneux.lightbox': 'Site web créé avec ASP.NET, permettant au viticulteur d\'ajouter et de gérer ses vins',
    'portfolio.hr.title': 'Outil de gestion RH interne',
    'portfolio.hr.lightbox': 'Description détaillée du projet',
    'portfolio.bimmer.title': 'Bimmer Buyer',
    'portfolio.bimmer.lightbox': 'Application Node.js / Express / MySQL avec back office et sécurité basée sur l\'OWASP',
    'portfolio.lazone.title': 'LAZONE',
    'portfolio.lazone.lightbox': 'Marketplace e-commerce sur mesure avec authentification, catalogue produits, panier, favoris, commentaires, commandes et back office admin',
    'portfolio.seeMore': 'Voir plus',
    
    // Testimonials section
    'testimonials.title': 'Témoignages',
    'testimonials.raimana.title': 'Ingénieur en apprentissage machine',
    'testimonials.raimana.text': 'Anthony est une personne passionnée, il aime ce qu\'il fait et cela se voit. Très impliqué dans tous les projets que nous avons faits ensemble. J\'ai hâte de retravailler avec vous.',
    'testimonials.teony.title': 'Data Engineer',
    'testimonials.teony.text': 'Anthony se distingue par son professionnalisme et sa capacité à inspirer l\'équipe. Son approche pragmatique et son esprit innovant font de lui un atout inestimable sur le lieu de travail. Travailler à ses côtés est à la fois enrichissant et stimulant.',
    
    // Contact section
    'contact.title': 'Contact',
    'contact.location': 'Localisation:',
    'contact.linkedin': 'Linkedin:',
    'contact.email': 'Email:',
    'contact.call': 'Téléphone:',
  },
  /* ============================ ESPAGNOL =========================== */
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.resume': 'Currículum',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    'theme.toggle': 'Cambiar tema (claro / oscuro)',
    
    // Hero section
    'hero.title': 'Anthony Bryckaert',
    'hero.subtitle': 'Soy',
    'hero.typedItems': 'ingeniero de IA, ingeniero en ciberseguridad, desarrollador de software, en búsqueda de empleo',
    'hero.download': 'Descargar currículum',
    'hero.whatsapp': 'Escríbeme por WhatsApp',
    

    
    // About section
    'about.title': 'Acerca de',
    'about.subtitle': 'Ingeniero especializado en Desarrollo de Software, Ciberseguridad e Inteligencia Artificial',
    'about.description': 'Estoy profundamente comprometido con los campos de Tecnologías de la Información, con un enfoque particular en Ciberseguridad e Inteligencia Artificial.',
    'about.nationality': 'Nacionalidad:',
    'about.nationality.value': 'Francesa',
    'about.firstLang': 'Primera lengua:',
    'about.firstLang.value': 'Francés (nativo)',
    'about.secondLang': 'Segunda lengua:',
    'about.secondLang.value': 'Inglés (B2, TOEIC 850)',
    'about.thirdLang': 'Tercera lengua:',
    'about.thirdLang.value': 'Español (B2)',
    'about.city': 'Ciudad:',
    'about.city.value': 'Aix-En-Provence',
    'about.age': 'Edad:',
    'about.degree': 'Título:',
    'about.degree.value': 'Ingeniero informático',
    'about.email': 'Email:',
    'about.phone.fr': 'Teléfono profesional (Francia):',
    'about.phone.ar': 'Teléfono profesional (Argentina):',
    'about.seeking': 'Busco un empleo en ingeniería de IA, ciberseguridad, desarrollo de aplicaciones web o desarrollo de software.',
    
    // Skills section
    'skills.title': 'Habilidades',
    'skills.network': 'Red : Wireshark, Cisco Pack Tracer, Firewall',
    'skills.backend': 'Backend : Java, Python, C++, Javascript',
    'skills.frontend': 'Frontend : Bootstrap, Angular, Javascript, Node JS CMS (Odoo, Wordpress, Wix)',
    'skills.ai': 'Desarrollo IA : PyTorch, Langchain, Skills, N8N, Azure',
    'skills.forensic': 'Forense, OSINT',
    'skills.pentesting': 'Pentesting',
    
    // Resume section
    'resume.title': 'Currículum',
    'resume.subtitle': 'Calificaciones y experiencias',
    'resume.diplomas': 'Diplomas',
    'resume.degree.note': 'Escuela de ingeniería comparable a la UTN o el ITBA en Argentina',
    'resume.experience': 'Experiencia Profesional',
    'resume.eng.title': 'Título de ingeniero informático · ESAIP',
    'resume.eng.school': 'Aix-en-Provence, Francia',
    'resume.eng.erasmus1': 'VIA University College, Horsens, Dinamarca',
    'resume.eng.erasmus2': 'Universidad Nacional Arturo Jauretche (UNAJ), Buenos Aires, Argentina',
    'resume.eng.toeic': 'TOEIC: 850 / 990',
    'resume.eng.period': '2022 – 2026',
    'resume.bts.title': 'BTS en Sistemas Digitales, opción Informática y Redes · La Salle Avignon',
    'resume.bts.period': '2019 – 2022',
    'resume.bts.school': 'Avignon, Francia',
    'resume.bts.courses': 'Desarrollo en Java y C++ (Qt), administración Linux (Apache, vsftpd, MySQL, SSH, firewall UFW).',
    'resume.csgroup.title': 'Desarrollador de soluciones de IA · CS GROUP',
    'resume.csgroup.period': '2026 (6 meses)',
    'resume.csgroup.location': 'Aix-en-Provence, Francia',
    'resume.csgroup.description': 'Diseño y desarrollo de soluciones de IA para optimizar los procesos de negocio y el apoyo a la toma de decisiones.',
    'resume.capgemini.title': 'Pasante de ciberseguridad · Capgemini',
    'resume.capgemini.period': '2024 – 2025 (7 meses)',
    'resume.capgemini.location': 'Aix-en-Provence, Francia',
    'resume.capgemini.description': 'Desarrollo de una herramienta interna de RR. HH. en Node.js (seguimiento de actividad, KPI, gestión de roles), análisis de riesgos EBIOS RM y despliegue de CISO Assistant con Docker.',
    'resume.frenchtech.title': 'Miembro del jurado · French Tech Buenos Aires',
    'resume.frenchtech.period': '2026',
    'resume.frenchtech.location': 'Buenos Aires, Argentina',
    'resume.frenchtech.description': 'Selección y evaluación de proyectos científicos, y participación en la organización del evento.',
    'resume.frenchtech.recognition': 'Premio reconocido por la Ciudad de Buenos Aires',
    'resume.nato.title': 'Consultor · OTAN',
    'resume.nato.period': '2024 (4 meses)',
    'resume.nato.location': 'Francia',
    'resume.archelon.title': 'Voluntario · Archelon',
    'resume.archelon.period': 'Verano 2023',
    'resume.archelon.location': 'Chania, Grecia',
    'resume.archelon.description': 'Protección de las tortugas marinas: conservación de su hábitat, seguimiento científico y sensibilización del público.',
    'resume.entrep.title': 'Certificación en competencias emprendedoras · Les Entrep\'',
    'resume.entrep.period': '2022',
    'resume.entrep.location': 'Avignon, Francia',
    'resume.entrep.description': 'Programa de creación de empresas: de la idea al proyecto, en equipo y con un mentor.',
    'resume.technician.title': 'Técnico en prácticas · Emergency Informatique',
    'resume.technician.period': '2021',
    'resume.technician.location': 'Avignon, Francia',
    'resume.technician.description': 'Reparación de computadoras, instalación y configuración de equipos de red.',
    
    // Portfolio section
    'portfolio.title': 'Mis proyectos',
    'portfolio.subtitle': 'Aquí están todos mis proyectos, otros aún están en progreso',
    'portfolio.filter.all': 'Todos',
    'portfolio.filter.software': 'Software',
    'portfolio.filter.web': 'Web',
    'portfolio.aepf.title': 'Sitio web para la Asociación Polinesia',
    'portfolio.aepf.lightbox': 'Sitio web desarrollado con Silex, un creador de sitios web de código abierto',
    'portfolio.pikawa.title': 'Máquina de café conectada "Pikawa"',
    'portfolio.pikawa.lightbox': 'Desarrollado en C++ con el framework QT Creator durante mi proyecto de diploma de 2 años',
    'portfolio.levigneux.title': 'Le Vigneux Vin',
    'portfolio.levigneux.lightbox': 'Sitio web creado con ASP.NET, permitiendo al viticultor agregar y gestionar sus vinos',
    'portfolio.hr.title': 'Herramienta de gestión de RRHH interna',
    'portfolio.hr.lightbox': 'Descripción detallada del proyecto',
    'portfolio.bimmer.title': 'Bimmer Buyer',
    'portfolio.bimmer.lightbox': 'Aplicación Node.js / Express / MySQL con back office y seguridad basada en OWASP',
    'portfolio.lazone.title': 'LAZONE',
    'portfolio.lazone.lightbox': 'Marketplace e-commerce a medida con autenticación, catálogo de productos, carrito, favoritos, comentarios, pedidos y back office de administración',
    'portfolio.seeMore': 'Ver más',
    
    // Testimonials section
    'testimonials.title': 'Testimonios',
    'testimonials.raimana.title': 'Ingeniero en aprendizaje automático',
    'testimonials.raimana.text': 'Anthony es una persona apasionada, ama lo que hace y se nota. Muy involucrado en todos los proyectos que hemos hecho juntos. Espero trabajar contigo de nuevo.',
    'testimonials.teony.title': 'Data Engineer',
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
/* ===================================================================
 * Détection de la langue
 * =================================================================== */

// Pays d'Amérique latine (codes région) -> espagnol.
// '419' = code générique « Amérique latine » (ex. es-419).
const LATAM_REGIONS = [
  'AR', 'BO', 'BR', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'GT', 'HN', 'MX',
  'NI', 'PA', 'PE', 'PR', 'PY', 'SV', 'UY', 'VE', '419'
];

// Langue choisie à la main pendant la visite (sinon : celle du navigateur)
function getSavedLanguage() {
  try {
    const saved = sessionStorage.getItem('preferred-language');
    return saved && translations[saved] ? saved : null;
  } catch (e) {
    return null;
  }
}

// Langue à afficher : choix manuel de la visite, sinon langue du navigateur
function getCurrentLanguage() {
  return getSavedLanguage() || getBrowserLanguage();
}

// Langue du navigateur ramenée à fr / es / en.
// On regarde la 1re langue préférée du visiteur (ex. 'es-AR', 'pt-BR', 'en-US') :
//   fr-*  -> fr ;  es-*  -> es ;  *-AR, *-MX, *-BR… (Amérique latine) -> es ;  sinon en.
function getBrowserLanguage() {
  const preferred = (navigator.languages && navigator.languages[0]) ||
    navigator.language || navigator.userLanguage || 'en';
  const [lang, region] = preferred.replace('_', '-').split('-');
  const code = (lang || '').toLowerCase();

  if (code === 'fr') return 'fr';
  if (code === 'es') return 'es';
  if (region && LATAM_REGIONS.includes(region.toUpperCase())) return 'es';
  return 'en';
}

/* ===================================================================
 * Application d'une langue à la page
 * =================================================================== */

// Remplace tous les textes data-i18n par ceux de la langue `lang`
// et retient ce choix pour la durée de la visite.
// Une clé absente de la langue garde le texte déjà affiché (pas d'erreur).
function setLanguage(lang) {
  if (!translations[lang]) {
    console.error(`Language ${lang} is not supported`);
    return;
  }
  
  // Sauvegarder la préférence
  try {
    sessionStorage.setItem('preferred-language', lang);
  } catch (e) {}
  
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
        if (element.hasAttribute('aria-label')) {
          element.setAttribute('aria-label', translations[lang][key]);
        }
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

// Démarre le texte animé de l'accueil (« Je suis Ingénieur… ») dans la
// bonne langue. Appelé une seule fois, après la première traduction.
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

/* ===================================================================
 * Démarrage
 * =================================================================== */

// Au chargement du HTML : choix de la langue, traduction, texte animé
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

// Fonctions accessibles depuis main.js et la console (window.i18n)
window.i18n = {
  setLanguage,
  getCurrentLanguage,
  getBrowserLanguage,
  translations
};

