export default {
  data() {
    return {
      myStory: `At 2017 I started a self taught career and I have been working on independent projects in order to level up my understanding as well as learn new tools, methods, libraries, frameworks, and programming languages.
      My favorite programming language is Javascript.`,
      projects: [
      {
        title:'Crypto',
        description: 'Landing Page, Vuejs, Quasar Framework',
        imgSrc:'crypto.png',
      },
      {
        title:'Vespi',
        description: 'Landing Page, Vue.js, Quasar Framework',
        imgSrc:'vespi-mobile.png',
      },
      {
        title:'Dinodev',
        description: 'Landing Page, i18n, Vue.js, Quasar Framework',
        imgSrc:'dinodev.png',
      },
      {
        title:'Simple Pomodoro',
        description:'A Progressive Web Application. Vue.js, Quasar Framework',
        imgSrc:'simplepomodoro.png',
      },
      {
        title: 'Cardfolder',
        description: 'Trade and invertory your magic cards. Vue.js',
        imgSrc:'cardfolder.png',
      },
      // {
      //   title: 'Dematec',
      //   description: 'Landing Page. HTML, CSS',
      //   imgSrc: 'landingdematec.png',
      // },
      ],
      workExperiences: [
        {
          position: 'Fullstack Developer',
          place:'Litebox | JUL 2021 - Present',
          responsibilities: [
            'Tech lead',
            'Worked in several projects including a whitelabel application',
            'Aiming to implement Nest.js and Next.js at new projects'
          ]
        },
        {
          position: 'Fullstack Developer',
          place:'Ibisdev | OCT 2020 - JUN 2021',
          responsibilities: [
            'Develop a Ecommerce store',
            'Backend Developer using Node, Typescript and GraphQL',
            'Frontend Developer using React, Typescript and GraphQL'
          ]
        },
      {
        position:'FullStack Developer',
        place:'Lanera PRC | JUL 2020 - OCT 2020',
        responsibilities: [
          'Wool analysis and weighing system.',
          'Backend developer using Spring Framework',
          'Frontend developer using Angular Framework'
        ]
      },

      ],
      contacts: [
      "me@danibarria.com.ar",
      "(+54) 2804617904",
      "Trelew, Chubut, Argentina"
      ],
      technologies: [
        "Nodejs, Express, Nest.js",
        "React, Next.js and basic Vue.js and Angular experience",
        "HTML, CSS, JS, JQuery, Progressive Web Applications (PWA)",
        "Git and Bash Scripting",
        "Basic AWS knowledge",
        "Relational and no-relational databases",
      ],
      socialNetworks: [
      'platzi.com/@danibarria',
      'github.com/danibarria',
      'linkedin.com/in/danibarria',
      'probacodigos.com.ar',
      'twitter.com/danibarria'

      ],
      educations: [
        {
          place:'Software Developer | Platzi',
          duration: '2017 - Present',
          learnings: [
            'Backend developer courses',
            'Frontend developer courses',
            'Linux server administration'
          ]
        },
        {
          place:'Software Developer | UNPSJB',
          duration: '2014 - Present',
          learnings: [
            'Relational Databases',
            'Software Engineering',
            'Computer Science',
            'Maths'
          ]
        }
      ]
    }
  },

}
