import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,

    wordporess,
    personalsite,
    react3fibersite,

    revature,
    cxstudios,
    logo2,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "FullStack Java/React Developer",
      company_name: "Revature",
      icon: revature,
      iconBg: "white",
      date: "November 2021 - Feburary 20223",
      points: [
        "P1: Expense Reimbursement App",
        "Created a Java backend server and utilized Javalin and Javascript to communicate between the front end and back end of an expense reimbursement app.",
        "Designed front end pages using HTML and CSS, and utilized JDBC to communicate with the database.",
        "Implemented the use of DAO to provide an abstract interface to the database, utilizing technologies such as SQL, Maven, Git, Hibernate, AWS EC2, and AWS S3",
        
      ],
    },
    {
      title: "Full Stack React Developer",
      company_name: "CXstudios",
      icon: cxstudios,
      iconBg: "white",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developed and deployed dynamic web components to enhance the user experience and streamline website functionality.",
        "Integrated front-end page components with a headless CMS, enabling a fully dynamic website capable of content updates through the CMS.",
        "Leveraged graph database technology to connect dynamic data to a visual graph, empowering users to visualize complex information in an intuitive way",
        "implemented a drop-down menu to select different states, updating real time information displayed on the graph in response to user input.",
      ],
    },
    {
      title: "UX Design",
      company_name: "CXStudios",
      icon: cxstudios,
      iconBg: "white",
      date: "Jan 2022 - Jan 2023",
      points: [
        "As Proficient in creating low fidelity wireframes to translate design concepts into tangible solutions. I have a keen eye for detail and can create wireframes that communicate design ideas effectively while maintaining the user-centric approach",
        "Skilled in conducting user testing and observation to evaluate the usability and effectiveness of designs.",
        "I am experienced in running usability tests, surveys, and interviews to gather insights from users and improve the overall design.",
        "I can quickly analyze the feedback and suggest design changes that align with the user's needs and business objectives.",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "CXStudios",
      icon: cxstudios,
      iconBg: "white",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Created a Search Query Report that helped identify the top search queries leading users to CX Studios, allowing the company to optimize their digital marketing efforts and improve their online presence.",
        "Prepared and presented a comprehensive Data Acquisition and Behavior report that analyzed patterns, trends, and anomalies in data, providing key insights into the behavior of the system or group being studied and enabling the development of strategic interventions.",
        "Developed and implemented custom embedded links in email campaigns to track user engagement, enabling real-time monitoring of open rates and click-through rates to inform data-driven decision-making and enhance campaign effectiveness.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "These are place holer names and companies until I recieve actual testamonials! Images radomly generated",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "These are place holer names and companies until I recieve actual testamonials! Images radomly generated",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "These are place holer names and companies until I recieve actual testamonials! Images radomly generated",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Wordpress",
      description:
        "Wordpress I created to showcase my skillsets and link project together in one easily accessible place.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "sendblue",
          color: "green-text-gradient",
        },
        {
          name: "hosting",
          color: "pink-text-gradient",
        },
      ],
      image: wordporess,
      source_code_link: "https://github.com/",
    },
    {
      name: "Personal React Portfolio",
      description:
        "Web application demonstrate thematic styling components and some simple site functionality. Along with some custom animations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "styledcomponents",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: personalsite,
      source_code_link: "https://github.com/cprice2work/CC-Portfolio",
    },
    {
      name: "React#Fiber",
      description:
        "The 3D experience you are currently enjoying",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: react3fibersite,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };