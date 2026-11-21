/**
 * =====================================================================
 *  main.js : comportements de la page (hors traductions)
 * =====================================================================
 *  Contenu du fichier, dans l'ordre :
 *   1. Petits utilitaires (select / on / onscroll)
 *   2. Menu latéral : lien actif, défilement doux, menu mobile
 *   3. Bouton « retour en haut » et préchargeur
 *   4. Barres de compétences animées
 *   5. Portfolio : filtres (Isotope) et fenêtre « Voir plus » (GLightbox)
 *   6. Carrousels Swiper (témoignages), animations AOS, compteurs
 *   7. Sélecteur de langue (délègue à i18n.js)
 *   8. CV : diplômes / expériences dépliables (accordéons)
 *   9. Portfolio : diaporama des photos au survol d'une carte
 *  10. Fenêtre « Voir plus » : titre, compteur et miniatures
 *  11. Thème clair / sombre (bouton soleil / lune)
 *
 *  Les traductions et le choix de la langue sont dans i18n.js.
 *  Après chaque modification, changer le numéro « ?v= » de main.js dans
 *  index.html pour forcer les navigateurs à recharger le fichier.
 * =====================================================================
 */
(function() {
  "use strict";

  /* ---------------------------------------------------------------
   * 1. Utilitaires
   * --------------------------------------------------------------- */

  // Raccourci pour querySelector / querySelectorAll (all = true -> tableau)
    const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  // Ajoute un écouteur d'événement sur un ou plusieurs éléments
    const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  // Ajoute un écouteur sur le défilement de la page
    const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /* ---------------------------------------------------------------
   * 2. Menu latéral
   * --------------------------------------------------------------- */

  // Met en surbrillance le lien du menu correspondant à la section visible
    let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  // Fait défiler la page en douceur jusqu'à un élément (#id)
    const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /* ---------------------------------------------------------------
   * 3. Bouton « retour en haut » et préchargeur
   * --------------------------------------------------------------- */

  // Affiche le bouton « retour en haut » dès qu'on a défilé de 100 px
    let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  // Ouvre / ferme le menu sur mobile (icône burger <-> croix)
    on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  // Clic sur un lien interne (.scrollto) : défilement doux + fermeture du menu mobile
    on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  // Si l'URL contient une ancre (ex. #portfolio), on y descend au chargement
    window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  // Écran d'ouverture « glitch » : reste affiché au moins MIN_MS, puis
  // part avec une dernière salve de glitch (classe .is-leaving, ~0,5 s).
  // Sécurité : il part de toute façon après MAX_MS, même si la page charge encore.
  let preloader = select('#preloader');
  if (preloader) {
    const MIN_MS = 1400;
    const MAX_MS = 3500;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let leaving = false;

    // Lignes de terminal qui défilent au-dessus du nom (une toutes les 120 ms).
    // Les anciennes montent et sortent par le haut du bloc (CSS : .glitch-term).
    const term = preloader.querySelector('.glitch-term');
    const TERM_LINES = [
      ['ok', 'loading profile: Anthony Bryckaert'],
      ['ok', 'role: AI & Cybersecurity Engineer'],
      ['ok', 'education: Computer Engineering degree'],
      ['ok', 'experience: NATO · Capgemini · CS GROUP'],
      ['ok', 'skills: Python · React · Security · ML'],
      ['ok', 'location: Buenos Aires, Argentina'],
      ['ok', 'status: open to new opportunities'],
      ['cmd', '> ready']
    ];
    if (term) {
      let i = 0;
      const addLine = () => {
        if (leaving || i >= TERM_LINES.length) return;
        const [kind, text] = TERM_LINES[i++];
        const line = document.createElement('div');
        line.className = 'glitch-line' + (kind ? ' is-' + kind : '');
        const tag = kind === 'ok' ? '✓  ' : '';
        line.textContent = tag + text;
        if (kind === 'cmd') {
          const cursor = document.createElement('span');
          cursor.className = 'glitch-cursor';
          cursor.textContent = '_';
          line.appendChild(cursor);
        }
        term.appendChild(line);
        if (i < TERM_LINES.length) setTimeout(addLine, reduceMotion ? 0 : 120);
      };
      addLine();
    }
    const leave = () => {
      if (leaving) return;
      leaving = true;
      preloader.classList.add('is-leaving');
      setTimeout(() => preloader.remove(), reduceMotion ? 200 : 550);
    };
    window.addEventListener('load', () => {
      const wait = Math.max(0, (reduceMotion ? 300 : MIN_MS) - performance.now());
      setTimeout(leave, wait);
    });
    setTimeout(leave, MAX_MS);
  }

    // Typed.js (texte « Je suis Ingénieur… » qui s'écrit tout seul) est
    // initialisé par i18n.js, après l'application des traductions.
    window.typedInstance = null;

  /* ---------------------------------------------------------------
   * 4. Barres de compétences
   * --------------------------------------------------------------- */

  // Quand la section Compétences arrive à l'écran, chaque barre se remplit
  // jusqu'à la valeur de son attribut aria-valuenow (dans index.html).
    let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /* ---------------------------------------------------------------
   * 5. Portfolio : filtres et fenêtre « Voir plus »
   * --------------------------------------------------------------- */

  // Grille des projets (Isotope) + filtres par catégorie (#portfolio-flters).
  // Les catégories viennent des classes filter-web / filter-app des cartes.
    window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  // Fenêtre « Voir plus » (GLightbox). Chaque lien .portfolio-lightbox est une
  // photo ; les liens d'un même projet partagent le même data-gallery, ce qui
  // les regroupe dans une seule galerie. Le style est dans style.css
  // (section « PORTFOLIO LIGHTBOX »), le titre et les miniatures en bas de ce fichier.
    const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox',
    openEffect: 'zoom',
    closeEffect: 'fade',
    slideEffect: 'slide',
    loop: true,
    touchNavigation: true
  });
  setupLightboxChrome(portfolioLightbox);

  // Ancienne fenêtre « détails » (pages externes). Plus utilisée depuis la
  // suppression des liens GitHub, gardée sans effet.
    const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /* ---------------------------------------------------------------
   * 6. Carrousels, animations, compteurs
   * --------------------------------------------------------------- */

  // Carrousel d'une page « détails » de projet (inutilisé actuellement)
    new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  // Carrousel des témoignages (défilement automatique toutes les 5 s)
    new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  // Animations d'apparition au défilement (attributs data-aos dans index.html)
    window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  // Compteurs animés (éléments .purecounter, s'il y en a)
    new PureCounter();

  /* ---------------------------------------------------------------
   * 7. Sélecteur de langue
   * --------------------------------------------------------------- */

  // Le menu déroulant en haut à droite appelle setLanguage() de i18n.js,
  // qui retient le choix jusqu'à la fin de la visite.
    const languageSelector = select('#language-selector');
    if (languageSelector) {
      on('change', '#language-selector', function(e) {
        const selectedLang = this.value;
        if (window.i18n && window.i18n.setLanguage) {
          window.i18n.setLanguage(selectedLang);
        }
      });
    }

})()

/* ===================================================================
 * 8. CV : diplômes et expériences dépliables
 * ===================================================================
 * Structure attendue dans index.html, pour chaque élément :
 *   <div class="resume-item resume-collapsible">
 *     <div class="resume-header" role="button" tabindex="0">  (logo, titre, date, flèche)
 *     <div class="resume-body"><div class="resume-body-inner"> (détails)
 * Un clic (ou Entrée / Espace au clavier) ajoute ou retire la classe .open ;
 * l'animation d'ouverture est faite en CSS (section « Collapsible resume items »).
 */
document.querySelectorAll('.resume-collapsible .resume-header').forEach((header) => {
  const toggle = () => {
    const item = header.closest('.resume-collapsible');
    const open = item.classList.toggle('open');
    header.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  header.addEventListener('click', toggle);
  header.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});

/* ===================================================================
 * 9. Portfolio : diaporama au survol d'une carte
 * ===================================================================
 * Pour chaque carte de projet, on récupère l'image visible + toutes les
 * photos des liens .portfolio-lightbox (y compris les liens cachés).
 * S'il y a au moins 2 photos :
 *   - la carte reçoit la classe .has-slides (le texte passe en bas, voir CSS) ;
 *   - au survol, les photos défilent toutes les 900 ms avec un compteur « 2 / 20 » ;
 *   - les images ne sont chargées qu'au premier survol (page plus légère).
 * Pour changer la vitesse : modifier 900 ci-dessous (en millisecondes).
 */
document.querySelectorAll('.portfolio .portfolio-wrap').forEach((wrap) => {
  const base = wrap.querySelector(':scope > img');
  if (!base) return;
  const first = base.getAttribute('src');
  const hrefs = [...wrap.querySelectorAll('a.portfolio-lightbox')]
    .map((a) => a.getAttribute('href'))
    .filter((h) => h && /\.(webp|png|jpe?g|gif|avif)$/i.test(h));
  const urls = [...new Set([first, ...hrefs])];
  if (urls.length < 2) return;

  // Calque des photos (posé par-dessus l'image de la carte) et compteur
  wrap.classList.add('has-slides');
  const layer = document.createElement('div');
  layer.className = 'portfolio-slides';
  layer.setAttribute('aria-hidden', 'true');
  base.after(layer);
  const counter = document.createElement('span');
  counter.className = 'portfolio-slide-count';
  counter.setAttribute('aria-hidden', 'true');
  wrap.appendChild(counter);

  let imgs = [];
  let index = 0;
  let timer = null;

  // Affiche la photo n et met à jour le compteur
  const show = (n) => {
    imgs[index].classList.remove('active');
    index = n;
    imgs[index].classList.add('active');
    counter.textContent = `${index + 1} / ${imgs.length}`;
  };

  // Entrée de la souris : création des images (1re fois), puis défilement
  wrap.addEventListener('mouseenter', () => {
    if (!imgs.length) {
      imgs = urls.map((u) => {
        const im = new Image();
        im.src = u;
        im.alt = '';
        layer.appendChild(im);
        return im;
      });
      imgs[0].classList.add('active');
    }
    show(0);
    layer.classList.add('on');
    clearInterval(timer);
    timer = setInterval(() => show((index + 1) % imgs.length), 900);
  });

  // Sortie de la souris : arrêt du diaporama, retour à l'image de la carte
  wrap.addEventListener('mouseleave', () => {
    clearInterval(timer);
    timer = null;
    layer.classList.remove('on');
  });
});

/* ===================================================================
 * 10. Fenêtre « Voir plus » : titre, compteur et miniatures
 * ===================================================================
 * GLightbox ne propose ni titre de projet ni miniatures : on les ajoute à
 * l'ouverture de la fenêtre.
 *   - .glb-head   : nom du projet (repris du <h4> de la carte) + « 3 / 20 »
 *   - .glb-thumbs : bande de miniatures cliquables en bas
 * Points d'attention pour le débogage :
 *   - les clics sur ces éléments sont stoppés (stopPropagation), sinon
 *     GLightbox les prend pour un clic à l'extérieur et ferme la fenêtre ;
 *   - le compteur est mis à jour dès 'slide_before_change' : 'slide_changed'
 *     n'arrive qu'à la fin de l'animation (et jamais si l'onglet est caché).
 */
function setupLightboxChrome(lightbox) {
  let title = '';
  let thumbs = [];

  // Avant l'ouverture : mémorise le nom du projet sur lequel on a cliqué
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.portfolio-lightbox');
    if (!link) return;
    const heading = link.closest('.portfolio-wrap')?.querySelector('h4');
    title = heading ? heading.textContent.trim() : '';
  }, true);

  // Met à jour le compteur et la miniature active, et centre celle-ci
  const update = (index) => {
    const container = document.querySelector('.glightbox-container');
    if (!container) return;
    const count = container.querySelector('.glb-count');
    if (count) count.textContent = `${index + 1} / ${lightbox.elements.length}`;
    thumbs.forEach((t, i) => t.classList.toggle('active', i === index));
    const active = thumbs[index];
    if (active) {
      const strip = active.parentElement;
      strip.scrollTo({
        left: active.offsetLeft - strip.clientWidth / 2 + active.clientWidth / 2,
        behavior: 'smooth'
      });
    }
  };

  // À l'ouverture : construit l'en-tête et la bande de miniatures
  lightbox.on('open', () => {
    const container = document.querySelector('.glightbox-container');
    if (!container) return;
    container.querySelectorAll('.glb-head, .glb-thumbs').forEach((n) => n.remove());

    const head = document.createElement('div');
    head.className = 'glb-head';
    const name = document.createElement('span');
    name.className = 'glb-title';
    name.textContent = title;
    const count = document.createElement('span');
    count.className = 'glb-count';
    head.append(name, count);
    head.addEventListener('click', (e) => e.stopPropagation());
    container.appendChild(head);

    thumbs = [];
    const elements = lightbox.elements || [];
    if (elements.length > 1) {
      const strip = document.createElement('div');
      strip.className = 'glb-thumbs';
      // Empêche GLightbox de prendre ce clic pour un clic extérieur (fermeture)
      strip.addEventListener('click', (e) => e.stopPropagation());
      elements.forEach((el, i) => {
        const src = el.href || (el.node && el.node.getAttribute('href'));
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'glb-thumb';
        btn.setAttribute('aria-label', `${i + 1} / ${elements.length}`);
        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        img.loading = 'lazy';
        btn.appendChild(img);
        btn.addEventListener('click', () => lightbox.goToSlide(i));
        strip.appendChild(btn);
        thumbs.push(btn);
      });
      container.appendChild(strip);
    } else {
      // Une seule photo : pas de compteur ni de miniatures
      count.hidden = true;
    }
    update(lightbox.getActiveSlideIndex());
  });

  // Changement de photo (flèches, clavier, glissement ou miniature)
  lightbox.on('slide_before_change', ({ current }) => update(current.index));
  lightbox.on('slide_changed', ({ current }) => update(current.index));
}

/* ===================================================================
 * 11. Thème clair / sombre
 * ===================================================================
 * Le thème est porté par l'attribut data-theme de <html> ("light" ou "dark").
 * - Au chargement, le petit script du <head> de index.html le pose déjà
 *   (choix enregistré, sinon réglage clair / sombre de l'appareil).
 * - Le bouton #theme-toggle bascule et enregistre le choix (localStorage).
 * - Tant que le visiteur n'a rien choisi, le site suit l'appareil en direct
 *   (ex. passage automatique en sombre le soir).
 * Les couleurs du thème sombre sont dans style.css, section « THÈME SOMBRE ».
 */
(function () {
  const root = document.documentElement;
  const button = document.getElementById('theme-toggle');
  const media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  const savedTheme = () => {
    try {
      const t = localStorage.getItem('theme');
      return t === 'dark' || t === 'light' ? t : null;
    } catch (e) {
      return null;
    }
  };

  const apply = (theme) => {
    root.setAttribute('data-theme', theme);
    // Couleur de la barre du navigateur / fond hors page = fond du site
    const meta = document.getElementById('theme-color-meta');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0f1620' : '#ffffff');
    if (button) button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  };

  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  if (button) {
    button.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
    });
  }

  if (media && media.addEventListener) {
    media.addEventListener('change', (e) => {
      if (!savedTheme()) apply(e.matches ? 'dark' : 'light');
    });
  }
})();
