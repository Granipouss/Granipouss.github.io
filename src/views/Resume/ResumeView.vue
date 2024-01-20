<script lang="tsx" setup>
import type { FunctionalComponent as FC } from 'vue'

const aboutMe = {
  firstname: 'Brendan',
  lastname: 'Daoud',
  job: 'Ingénieur Logiciel',
  description: `
    En tant qu'ingénieur, mon métier est de résoudre des problèmes ;
    et l'informatique est mon principal outil pour cela. Lors de mon
    parcours professionnel, j'ai pu expérimenter de nombreux
    environnements et de nombreuses organisations, avec comme fil
    rouge mon pragmatisme et ma capacité d'adaptation. Si j'ai choisi
    le JavaScript comme langage de prédilection, je souhaite avant
    tout utiliser l'outil qui répond le mieux aux problématiques de
    chaque projet. Mon expertise n'est pas que technique, je
    suis également très volontaire pour fluidifier le développement
    et m'assurer de la pertinence fonctionnelle de la solution
    proposée.
  `,
}
const contacts = [
  {
    icon: 'call',
    name: 'Téléphone',
    value: '06 65 48 26 07',
  },
  {
    icon: 'alternate_email',
    name: 'Mail',
    value: 'brendan.daoud@laposte.net',
    link: 'mailto:brendan.daoud@laposte.net',
  },
  {
    icon: 'language',
    name: 'Website',
    value: 'https://granipouss.github.io/about',
    link: 'https://granipouss.github.io/about',
  },
  {
    icon: 'home_pin',
    name: 'Adresse',
    value: 'Paris, France',
  },
]
const education = {
  year: 2018,
  name: 'ENSTA ParisTech',
  kind: "École d'ingénieur",
  description: `
    Voie Signal, Informatique et Systèmes & Parcours
    Architecture et Sécurité des Systèmes d’Information - Profils Entrepreneuriat et Intrapreneuriat
  `,
}
const languages = [
  {
    flag: '🇨🇵',
    name: 'Français',
    description: `Langue maternelle. Ecrit et parlé depuis presque 30 ans.`,
  },
  {
    flag: '🇬🇧',
    name: 'Anglais',
    description: `Couramment écrit et parlé. J'ai effectué mon stage de fin d'étude à Berlin et un emploi de 2 ans dans une équipe bilingue.`,
  },
]
const skills = [
  {
    name: 'Javascript/Typescript',
    description: `
      Expert. Je pratique le JS sous diverses formes depuis le début
      de mon parcours de développement. J'en ai fait mon langage
      de prédilection. Lors de ma carrière, j'ai pu construire des
      applications dans les trois principaux frameworks que sont
      Angular, React et Vue ; j'ai également construit des serveurs
      et des micro services en NodeJS. Je suis également compétent
      en Typescript.
    `,
  },
  {
    name: 'C++',
    description: `
      Le langage de script que j'utilise lorsque le projet a de
      fortes contraintes de performances.
    `,
  },
  {
    name: 'PHP',
    description: `
      Utilisé sur d'anciens projets, j'ai travaillé en PHP avec
      Code Igniter et un framework interne à l'entreprise.
    `,
  },
  {
    name: 'Logiciels divers',
    description: `
      Microsoft Office (Excel, PowerPoint),
      Adobe Creative (Photoshop, Illsutrator), autres.
    `,
  },
]
const jobs = [
  {
    date: 'Depuis Juillet 2023',
    label: 'Développeur pour la start-up Capte',
    content: (
      <>
        <p>Start-up de 6 personnes proposant un assistant en ligne pour la création de contenu vidéo.</p>
        <p>
          J'ai travaillé sur l'ensemble des composants de l'application : du rendu vidéo sur le serveur, à l'édition de
          la mise en page et des sous-titres côté client. En plus des exigences techniques pour arriver à une solution
          fonctionnelle et ergonomique, j'ai apporté mon expérience pour contribuer à la structuration du travail et à
          une gestion de projet.
        </p>
        <small>
          Utlisation de nombreuses librairies : ffmpeg, puppeteer, canvas, redis. Framework Vue 3 et FeatherJs.
        </small>
      </>
    ),
  },
  {
    date: 'De Janvier 2021 à Juin 2023',
    label: 'Programmeur Outils pour Ubisoft France puis International',
    content: (
      <>
        <p>Au sein du Data Office de la plus grande entreprise de jeu vidéo français.</p>
        <p>
          J'ai participé à la production d'outils pour aider les data analystes dans leur travail. Mon rôle était
          principalement de produire des interfaces intuitives et d'anticiper les demandes de nos utilisateurs afin de
          réduire le support. Le mode de fonctionnement consistait à produire des solutions sur mesure à chaque demande,
          nous sommes passé à la création de produits disponibles pour toutes les productions de l'entreprise.
        </p>
        <small>Utilisation de Angular et de NestJs.</small>
      </>
    ),
  },
  {
    date: 'De Octobre 2018 à Décembre 2021',
    label: 'Ingénieur Logiciel à Theodo',
    content: (
      <>
        <p>Cabinet de conseil spécialisé en développement informatique.</p>
        <p class="no-print">J'y ai effectué plusieurs missions chez divers clients, notamment :</p>
        <ul class="no-print">
          <li>
            AFP - Création d'un fil d'information en temps réel à destination des journalistes. J'étais le principal
            développeur backend sur une architecture AWS consistuée de microservices.
          </li>
          <li>
            Vestiaire Collective - Conception d'un CRM permettant aux équipes d'envoyer des mails, sms et notifications
            personalisés à leurs clients. Solution en React avec un serveur tirant parti de files d'attente pour gérer
            le volume de messages à traiter.
          </li>
          <li>
            PMU - Refonte du formulaire d'inscription et passage d'un site en JQuery à l'usage d'un framework moderne,
            React.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'De Avril à Septembre 2018',
    label: "Stage de fin d'étude chez CardMarket à Berlin",
    content: (
      <>
        <p>Leader européen de la vente de cartes à jouer et à collectionner.</p>
        <p class="no-print">
          En tant que développeur front-end junior, j'ai développé des composants visuels, aidé à l'intégration de
          maquettes et participé à une migration de nombreuses pages vers un nouveau design.
        </p>
        <small>Utilisation de PHP principalement</small>
      </>
    ),
  },
  {
    date: 'De Juin à Août 2017',
    label: 'Stage de Recherche au laboratoire U2IS de l’ENSTA',
    content: (
      <>
        <p>
          Projet de recherche sur les statistiques des images naturelles dans l’Unité d’Informatique et d’Ingénierie
          Système de l’ENSTA ParisTech
        </p>
        <p class="no-print">
          Mise en pratique de mes connaissances en traitement d'images, statistiques et calcul en parallèle dans le but
          d'en apprendre plus sur les caractéristiques des images dites naturelles.
        </p>
        <small>Utilisation de Python et C++ pour le traitement d'un grand nombre d'images en parallèle</small>
      </>
    ),
  },
  {
    date: 'De Mai à Août 2016',
    label: 'Stage de développeur chez Soixante circuits',
    content: (
      <>
        <p>Agence parisienne de design interactif.</p>
        <ul class="no-print">
          <li>
            J'ai aidé à la création des écrans interactifs (jeux et publicités) utilisés par Coca-Cola pour la
            couverture de l'UEFA en France et en Belgique.
            <small>
              (Video du projet{' '}
              <a href="https://vimeo.com/270059933" target="_blank">
                https://vimeo.com/270059933
              </a>
              )
            </small>
          </li>
          <li>J'ai également créé un écran pour une exposition pour Tiffany & Co en Chine.</li>
        </ul>
        <small>Découverte de Vue.js</small>
      </>
    ),
  },
  {
    date: 'De 2015 à 2017',
    label: "Site de MLVA pour l'Université Paris Sud",
    content: (
      <>
        <p class="no-print">
          Avec un camarade de mon école, j'ai recodé un site participatif de séquençage du génome de microbes. Le site
          est à la fois une base de données et un outil de visualisation utilisé par des biologistes à travers le monde.
          Le développement a eu lieu sur 3 ans en relation constante avec les chercheurs de l'université Paris Saclay.
        </p>
        <small class="no-print">
          Site disponible à{' '}
          <a href="http://microbesgenotyping.i2bc.paris-saclay.fr/" target="_blank">
            http://microbesgenotyping.i2bc.paris-saclay.fr/
          </a>
        </small>
        <small>Serveur en PHP (Code Igniter) et Client en JS sans framework</small>
      </>
    ),
  },
]

const Icon: FC<{ name: string }> = ({ name }) => <i class="icon material-symbols-outlined">{name}</i>
</script>

<template>
  <div class="page">
    <main>
      <section class="title">
        <h1>
          <span class="name">{{ aboutMe.firstname }}</span> <span class="surname">{{ aboutMe.lastname }}</span>
        </h1>
        <div class="job">{{ aboutMe.job }}</div>
      </section>

      <section class="about-me no-print">
        <h2><Icon name="account_circle" /> Profil</h2>
        <p>{{ aboutMe.description }}</p>
      </section>

      <section class="history">
        <h2><Icon name="work" /> Expériences</h2>
        <article v-for="job of jobs" :key="job.label" class="job">
          <div class="date">{{ job.date }}</div>
          <h3>{{ job.label }}</h3>
          <component :is="job.content" />
        </article>
      </section>
    </main>

    <aside>
      <figure class="mugshot">
        <img src="@/assets/face.jpg" alt="Brendan's Face" />
      </figure>

      <section class="contacts">
        <h2><Icon name="chat_bubble" /> Contact</h2>
        <dl>
          <template v-for="contact of contacts" :key="contact.name">
            <dt class="label">
              <span class="material-symbols-outlined">{{ contact.icon }}</span> {{ contact.name }}
            </dt>
            <dd class="description">
              <a v-if="contact.link" :href="contact.link" target="_blank">{{ contact.value }}</a>
              <template v-else>{{ contact.value }}</template>
            </dd>
          </template>
        </dl>
      </section>

      <section class="education">
        <h2><Icon name="school" /> Diplôme</h2>
        <p class="year">{{ education.year }}</p>
        <h3 class="label">{{ education.name }}</h3>
        <p class="description">{{ education.kind }} - {{ education.description }}</p>
      </section>

      <section class="skills">
        <h2><Icon name="code" /> Compétences</h2>
        <dl>
          <template v-for="skill of skills" :key="skill.name">
            <dt class="label">{{ skill.name }}</dt>
            <dd class="description no-print">{{ skill.description }}</dd>
          </template>
        </dl>
      </section>

      <section class="langs">
        <h2><Icon name="translate" /> Langues</h2>
        <dl>
          <template v-for="lang of languages" :key="lang.name">
            <dt class="label">
              <span class="flag no-print">{{ lang.flag }}</span> {{ lang.name }}
            </dt>
            <dd class="description no-print">{{ lang.description }}</dd>
          </template>
        </dl>
      </section>
    </aside>
  </div>

  <div class="backdrop"></div>
</template>

<style lang="scss">
@use '@material/elevation';
@use '../../assets/variables' as vars;

$color-light: #f2f2f2;
$color-grey: #666666;
$color-dark: #0d0d0d;
$color-red: #d92323;
$color-wine: #732424;
$color-spice: #8c6723;
$color-yellow: #f2e852;
$color-electrik: #1efdfc;

$font-header: 'Quicksand', sans-serif;
$font-body: 'Roboto', sans-serif;

$breakpoint-mobile: 50rem;
$breakpoint-screen: 72rem;

$side-width: 24rem;

%header-with-icon {
  gap: 0.25em;
  display: flex;
  align-items: center;
}

.material-symbols-outlined {
  font-size: 1em;
}

// = Layout ===

.page {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  max-width: $breakpoint-screen;
  gap: 2rem;
  padding-bottom: 4rem;

  color: $color-dark;
  background: $color-light;

  main,
  aside {
    display: contents;
  }

  section {
    margin: 0 2rem;
  }

  @media (min-width: $breakpoint-mobile), print {
    flex-direction: row-reverse;
    padding-bottom: 0;
    margin: 0 auto;
    gap: 0;

    section {
      margin: 3rem;
    }

    aside {
      display: block;
      width: $side-width;
      color: $color-light;
      background: $color-dark;
    }

    main {
      display: block;
      flex: 1;
      color: $color-dark;
      background: $color-light;

      section {
        margin-right: 5rem;
      }
    }
  }

  @media (min-width: $breakpoint-screen) {
    margin: 3rem auto;
    @include elevation.elevation(15);
  }
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: $color-grey;
}

// = Elements ===

.material-symbols-outlined {
  font-size: 1em;
}

p {
  font-size: 1rem;
}
small {
  font-size: 0.8rem;
}

h2 {
  @extend %header-with-icon;
  font-size: 2rem;
  font-family: $font-header;
  border-bottom: thin solid $color-red;
  margin-bottom: 1rem;

  .icon {
    color: $color-red;
  }

  @media (min-width: $breakpoint-mobile), print {
    main & {
      font-size: 2.5rem;
    }

    aside & {
      color: $color-red;
      border-color: $color-wine;
    }
  }
}

// = Sections ===

.mugshot {
  position: relative;
  z-index: 1;
  display: block;
  width: 18rem;
  height: 18rem;
  margin: 3rem;

  img {
    border-radius: 50%;
    background: $color-grey;
    width: 100%;
    height: 100%;
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    border-radius: 50%;
    border: 0.5rem solid $color-light;
    box-sizing: content-box;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.title {
  .page & {
    margin: 0;
    padding: 2rem;
  }

  background: $color-red;
  color: $color-light;
  text-transform: uppercase;

  h1 {
    line-height: 1;
    font-family: 'Hammersmith One', sans-serif;
    font-size: 3.5rem;
    letter-spacing: -0.1rem;
    line-height: 0.8;
    margin-bottom: 1rem;
  }

  .job {
    font-family: $font-header;
    margin-top: -0.5rem;
    font-size: 1.75rem;
  }

  @media (min-width: $breakpoint-mobile), print {
    .page & {
      margin: 0;
      position: relative;
      margin-left: -$side-width;
      padding: 2rem;
      margin-top: 5rem;
      padding-left: $side-width + 5rem;
    }

    h1 {
      line-height: unset;
      margin-bottom: 0;
    }
  }
}

aside {
  section {
    margin: 3rem;
  }

  .label {
    @extend %header-with-icon;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }

  .description {
    text-align: justify;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  a {
    color: $color-yellow;
    text-decoration: none;
    font-weight: bold;

    @media (max-width: $breakpoint-mobile) {
      color: $color-spice;
    }
  }
}

.education {
  .year {
    margin-bottom: 0.25rem;
  }
}

.about-me {
  p {
    text-align: justify;
  }
}

.history {
  .job {
    position: relative;
    margin-bottom: 2rem;
    margin-left: 1rem;
    padding-left: 2rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem;
      bottom: -2.5rem;
      border-left: thin solid $color-red;
    }
    &:last-child::before {
      bottom: 0;
    }
  }

  .date::before {
    content: '';
    position: absolute;
    left: -0.5rem;
    top: 0.25rem;
    width: 1rem;
    height: 1rem;
    background: $color-grey;
    border-radius: 50%;
    outline: 0.4rem solid $color-light;
  }

  @media (min-width: $breakpoint-mobile) {
    $date-column: 10rem;

    .job {
      margin-left: $date-column;
    }

    .date {
      position: absolute;
      left: -$date-column;
      width: $date-column;
      padding-right: 2rem;

      &::before {
        right: -0.5rem;
        left: unset;
      }
    }

    .page main & {
      margin-bottom: 6rem;
    }
  }

  .date {
    font-family: $font-header;
    font-weight: 600;
    font-size: 1.2rem;
    color: $color-grey;
    margin-bottom: 0.25rem;
  }

  h3 {
    font-family: $font-header;
    font-weight: 600;
    font-size: 1.2rem;
    color: $color-red;
    margin-bottom: 0.5rem;
  }
  a {
    color: $color-spice;
    text-decoration: none;
    font-weight: bold;
  }
  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    text-align: justify;
  }
  li {
    font-size: 1rem;
    margin-left: 2rem;
    margin-bottom: 0.5rem;
    text-align: justify;
    list-style: disc;
  }
  small {
    font-size: 0.8rem;
    color: $color-grey;
    display: block;
  }
}

// = Section Orders ===

@media not print {
  @media (max-width: $breakpoint-mobile) {
    .title {
      order: 1;
    }
    .mugshot {
      display: none;
    }
    .about-me {
      order: 2;
    }
    .contacts {
      order: 3;
    }
    .skills {
      order: 4;
    }
    .langs {
      order: 5;
    }
    .history {
      order: 6;
    }
    .education {
      order: 7;
    }
  }
}

// = Print ===

@page {
  size: A4;
}

@media print {
  html {
    font-size: 9pt;
  }

  .no-print {
    display: none !important;
  }

  .page {
    min-height: 100vh;
    section {
      margin: 2rem;
    }
    aside section {
      margin-left: 4rem;
    }
    main section {
      margin-right: 4rem;
    }
    .history .job {
      margin-bottom: 1.5rem;
    }
  }

  .history a,
  aside a {
    font-weight: normal;
    color: inherit;
  }

  .page main {
    background: white;
  }
  .page aside {
    color: white;
  }
  .title {
    color: white;
  }
  .mugshot::before {
    border-color: white;
  }
  .history .date::before {
    outline-color: white;
  }
}
</style>
