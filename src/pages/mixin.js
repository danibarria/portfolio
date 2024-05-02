export default {
  data() {
    return {
      myStory: `I lead two projects at Litebox, we are building an ecommerce at zonazero.com.ar, and for motherduck we are in charge of the development of duckdbsnippets.com and motherduck.com`,
      projects: [
        {
          title: "Crypto",
          description: "Landing Page, Vuejs, Quasar Framework",
          imgSrc: "crypto.png"
        },
        {
          title: "Vespi",
          description: "Landing Page, Vue.js, Quasar Framework",
          imgSrc: "vespi-mobile.png"
        },
        {
          title: "Dinodev",
          description: "Landing Page, i18n, Vue.js, Quasar Framework",
          imgSrc: "dinodev.png"
        },
        {
          title: "Simple Pomodoro",
          description:
            "A Progressive Web Application. Vue.js, Quasar Framework",
          imgSrc: "simplepomodoro.png"
        },
        {
          title: "Cardfolder",
          description: "Trade and invertory your magic cards. Vue.js",
          imgSrc: "cardfolder.png"
        }
        // {
        //   title: 'Dematec',
        //   description: 'Landing Page. HTML, CSS',
        //   imgSrc: 'landingdematec.png',
        // },
      ],
      workExperiences: [
        {
          position: "Fullstack Developer",
          place: "Litebox | JUL 2021 - Present",
          responsibilities: [
            "Tech lead",
            "Worked in several projects including a whitelabel application",
            "Aiming to implement Nest.js and Next.js at new projects"
          ]
        },
        {
          position: "Fullstack Developer",
          place: "Ibisdev | OCT 2020 - JUN 2021",
          responsibilities: [
            "Develop a Ecommerce store",
            "Backend Developer using Node, Typescript and GraphQL",
            "Frontend Developer using React, Typescript and GraphQL"
          ]
        },
        {
          position: "FullStack Developer",
          place: "Lanera PRC | JUL 2020 - OCT 2020",
          responsibilities: [
            "Wool analysis and weighing system.",
            "Backend developer using Spring Framework",
            "Frontend developer using Angular Framework"
          ]
        }
      ],
      contacts: ["barriareyesjosedaniel@gmail.com"],
      technologies: [
        "Nodejs, Express, Nest.js",
        "React, Next.js and basic Vue.js and Angular experience",
        "HTML, CSS, JS, JQuery, Progressive Web Applications (PWA)",
        "Git and Bash Scripting",
        "Basic AWS knowledge",
        "Relational and no-relational databases"
      ],
      socialNetworks: [
        "platzi.com/@danibarria",
        "github.com/danibarria",
        "linkedin.com/in/danibarria"
      ],
      educations: [
        {
          place: "Software Developer | Platzi",
          duration: "2017 - Present",
          learnings: [
            "Backend developer courses",
            "Frontend developer courses",
            "Linux server administration"
          ]
        },
        {
          place: "Software Developer | UNPSJB",
          duration: "2014 - 2020",
          learnings: [
            "Relational Databases",
            "Software Engineering",
            "Computer Science"
          ]
        }
      ]
    };
  }
};
