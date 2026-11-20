# Portfolio d'Anthony Bryckaert

Site personnel d'une seule page, publié avec GitHub Pages : https://abryckaert.github.io

Le site est fait en HTML, CSS et JavaScript « à la main », sans outil de compilation : ce qui est dans le dépôt est exactement ce qui est publié.

---

## 1. Lancer le site en local

Depuis le dossier du projet :

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

Il faut passer par un serveur : en ouvrant `index.html` directement (double-clic), certaines fonctions ne marchent pas.

---

## 2. Organisation des fichiers

| Fichier / dossier | Rôle |
|---|---|
| `index.html` | Tout le contenu de la page (sections, cartes, CV…) |
| `assets/css/style.css` | Tous nos styles (sommaire en tête du fichier) |
| `assets/js/i18n.js` | Traductions anglais / français / espagnol et choix de la langue |
| `assets/js/main.js` | Comportements : menu, accordéons du CV, diaporamas, fenêtre « Voir plus »… |
| `assets/vendor/` | Bibliothèques externes (Bootstrap, GLightbox, Swiper, AOS, Typed.js…). **Ne pas modifier.** |
| `assets/img/portfolio/` | Captures d'écran des projets |
| `assets/img/logos/` | Logos des écoles et entreprises du CV |
| `assets/img/testimonials/` | Photos des personnes qui témoignent |
| `assets/resume/` | CV en PDF (bouton « Télécharger le CV ») |
| `backups/` | Sauvegardes locales (ex. ancienne section Entreprise). Exclu de git, jamais publié. |

Ordre de la page : menu latéral, Accueil, À propos, CV, Compétences, Portfolio, Témoignages, Contact.

---

## 3. Les textes et les traductions

**Règle d'or : un texte visible se modifie dans `assets/js/i18n.js`, dans les trois langues.**

Dans `index.html`, chaque texte traduisible porte un attribut `data-i18n` :

```html
<h4 data-i18n="portfolio.lazone.title">LAZONE</h4>
```

Le texte écrit dans le HTML (ici « LAZONE ») n'est qu'un texte de secours en anglais. Au chargement, `i18n.js` le remplace par la valeur de la clé `portfolio.lazone.title` dans la langue choisie. Modifier seulement le HTML ne change donc rien à l'écran.

Dans `i18n.js`, l'objet `translations` contient trois blocs, repérés par les titres `ANGLAIS`, `FRANÇAIS` et `ESPAGNOL`. Une même clé doit exister dans les trois blocs.

### Ajouter un texte traduit

1. Dans `index.html`, mettre `data-i18n="ma.cle"` sur l'élément, avec le texte anglais dedans.
2. Dans `i18n.js`, ajouter `'ma.cle': '…',` dans les blocs `en`, `fr` et `es`.
3. Augmenter le numéro `?v=` de `i18n.js` dans `index.html` (voir la section 6).

Options utiles :
- `data-i18n-html` : la traduction peut contenir du HTML (`<b>`, `<br>`…). Un `\n` devient un retour à la ligne.
- Si l'élément a un attribut `title`, il est traduit lui aussi. Si l'élément contient d'autres balises (icône, `<span>`), seul le `title` est traduit ; mettre alors le `data-i18n` sur le `<span>` intérieur.

### Choix automatique de la langue

| Langue du navigateur du visiteur | Langue du site |
|---|---|
| français (`fr`, `fr-FR`, `fr-CA`…) | français |
| espagnol (`es`, `es-ES`, `es-AR`, `es-419`…) | espagnol |
| n'importe quelle langue d'un pays d'Amérique latine (`pt-BR`, `en-MX`…) | espagnol |
| tout le reste | anglais |

Si le visiteur change de langue avec le menu en haut à droite, son choix est gardé jusqu'à la fin de sa visite (fermeture de l'onglet). La liste des pays d'Amérique latine est la constante `LATAM_REGIONS` dans `i18n.js`.

---

## 3 bis. Thème clair / sombre

- Par défaut, le site suit le réglage clair / sombre de l'appareil du visiteur, et change en direct si ce réglage change.
- Le bouton soleil / lune, à côté du menu de langue, bascule le thème. Ce choix est enregistré dans le navigateur (`localStorage`, clé `theme`) et prime ensuite sur le réglage de l'appareil.
- Le thème est porté par l'attribut `data-theme="dark"` ou `"light"` de `<html>`. Un petit script dans le `<head>` de `index.html` le pose avant l'affichage, pour éviter un flash blanc.
- Toutes les couleurs sombres sont dans `style.css`, section « THÈME SOMBRE » (à la fin du fichier). Si on ajoute un élément avec une couleur de fond ou de texte fixe, penser à lui ajouter sa version sombre là.
- Pour tester : `localStorage.removeItem('theme')` dans la console revient au réglage de l'appareil.

---

## 4. Recettes courantes

### Ajouter un projet au portfolio

1. Mettre les captures dans `assets/img/portfolio/`, nommées `monprojet-1.webp`, `monprojet-2.webp`… (le format `.webp` est plus léger).
2. Dans `index.html`, section `#portfolio`, copier une carte existante (`<div class="col-lg-4 col-md-6 portfolio-item filter-web">` jusqu'à sa fermeture). La position de la carte dans le HTML est sa position sur la page.
3. Dans la copie :
   - `<img src="…">` : la 1re photo, affichée sur la carte ;
   - `<h4 data-i18n="portfolio.monprojet.title">` : le titre ;
   - 1er lien `portfolio-lightbox portfolio-more` : le bouton « Voir plus », avec `href` = la 1re photo ;
   - un lien caché (`style="display: none"`) par photo supplémentaire ;
   - le **même** `data-gallery="monprojetGallery"` sur tous les liens du projet ;
   - `filter-web` ou `filter-app` selon la catégorie.
4. Ajouter `portfolio.monprojet.title` et `portfolio.monprojet.lightbox` dans les 3 langues de `i18n.js`.

Le diaporama au survol et la fenêtre « Voir plus » (titre, compteur, miniatures) fonctionnent tout seuls à partir de ces liens : il n'y a rien à ajouter en JavaScript.

### Ajouter un diplôme ou une expérience au CV

1. Mettre le logo dans `assets/img/logos/` (PNG ou SVG, fond blanc ou transparent).
2. Dans `index.html`, section `#resume`, copier un bloc `<div class="resume-item resume-collapsible">` existant, dans la bonne colonne (Diplômes à gauche, Expérience à droite). L'ordre du HTML est l'ordre affiché.
3. Changer le logo, puis les clés `data-i18n` (`resume.monitem.title`, `.period`, `.location`, `.description`…).
4. Ajouter ces clés dans les 3 langues de `i18n.js`.

L'ouverture et la fermeture de l'accordéon sont gérées automatiquement par `main.js`.

### Changer le CV en PDF

Remplacer le fichier dans `assets/resume/` en gardant exactement le même nom.

### Changer la vitesse du diaporama au survol

Dans `main.js`, section 9, modifier `900` (en millisecondes) dans `setInterval(…, 900)`.

---

## 5. Où chercher en cas de problème

| Symptôme | Piste |
|---|---|
| Un texte ne change pas de langue | Clé `data-i18n` absente du HTML, ou clé manquante dans un des 3 blocs de `i18n.js` |
| Un texte modifié dans le HTML ne s'affiche pas | Normal : le texte vient de `i18n.js`, c'est là qu'il faut le modifier |
| Une modification CSS ou JS ne s'affiche pas en ligne | Le navigateur garde l'ancienne version : augmenter le `?v=` dans `index.html` |
| La fenêtre « Voir plus » montre les photos d'un autre projet | Les liens n'ont pas tous le même `data-gallery`, ou deux projets partagent le même |
| Pas de diaporama au survol | La carte n'a qu'une seule photo, ou un `href` ne finit pas par `.webp`, `.png`, `.jpg`, `.gif` ou `.avif` |
| Un accordéon du CV ne s'ouvre pas | Structure du bloc modifiée : il faut `.resume-collapsible` > `.resume-header` + `.resume-body` > `.resume-body-inner` |
| Erreur JavaScript | Ouvrir la console du navigateur (F12, onglet « Console ») |

Commandes utiles dans la console du navigateur :

```js
window.i18n.setLanguage('es')     // affiche le site en espagnol
window.i18n.getBrowserLanguage()  // langue détectée pour ce navigateur
sessionStorage.clear()            // oublie le choix de langue fait avec le menu
```

---

## 6. Avant de publier

1. Tester en local dans les 3 langues (menu en haut à droite).
2. Si `style.css`, `i18n.js` ou `main.js` a changé, augmenter son numéro `?v=` à la fin de `index.html` (ou dans le `<head>` pour le CSS). Sans ça, les visiteurs déjà venus peuvent garder l'ancienne version.
3. Ajouter les nouvelles images à git (`git add assets/img/...`), puis commiter et pousser sur `main`. GitHub Pages republie le site en une ou deux minutes.

---

## 7. Section désactivée

La section « Services » est toujours dans `index.html`, mais en commentaire, donc invisible. Ses textes n'ont pas encore de traductions dans `i18n.js` : à ajouter si on la réactive.

L'ancienne section « Entreprise » a été retirée du site. Une sauvegarde complète, avec les instructions pour la remettre, est dans `backups/section-entreprise.zip` (uniquement sur l'ordinateur local).
