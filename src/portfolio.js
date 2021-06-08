// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Jordan Caroleo",
  logo_name: "JCNY.dev( )",
  nickname: "J$",
  full_name: "Jordan Caroleo",
  subTitle: "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink: "#",
  mail: "mailto:jordan.caroleo91@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/jordar411",
  linkedin: "https://www.linkedin.com/in/jordan-caroleo",
  gmail: "mailto:jordan.caroleo91@gmail.com",
  twitter: "https://twitter.com/JCNY411",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS & RDS / Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with managing CI/CD",
        "⚡ Experience with managing development lifecycle with JIRA",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "simple-icons:bitbucket",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Excelsior College ",
      subtitle: "Bachelor of Science in Information Technology",
      logo_path: "excelsior.png",
      alt_name: "Excelsior",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects.",
      ],
      website_link:
        "https://www.excelsior.edu/program/bachelor-of-science-in-information-technology/",
    },
    {
      title: "Springboard",
      subtitle: "Software Engineering Certification",
      logo_path: "SB.png",
      alt_name: "Springboard",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ 800+ hour hands-on curriculum with 1:1 industry expert mentor oversight, and completion of 4 portfolio projects covering front-end web development, back-end web development, and full-stack development.",
      ],
      website_link:
        "https://www.excelsior.edu/program/bachelor-of-science-in-information-technology/",
    },
    {
      title: "State University of New York at Stony Brook",
      subtitle: "Bachelor of Science in Economics",
      logo_path: "SBU.png",
      alt_name: "SUNY Stony Brook",
      duration: "2009 - 2013",
      descriptions: [],
      website_link: "https://www.stonybrook.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Amazon Web Services Cloud Practitioner Essentials",
      subtitle: "AWS Cloud Practitioner",
      logo_path: "aws.png",
      certificate_link: "#",
      alt_name: "AWS",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link: "#",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "J.P. Morgan Chase Software Engineering Virtual Experience",
      subtitle: "J.P. Morgan Chase",
      logo_path: "jpm.png",
      certificate_link: "#",
      alt_name: "J.P. Morgan",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "See below for a list of selected technology-related experiences I've been fortunate enough to learn from. For full list of experiences and work history, please download my resume.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Jr Software Developer",
          company: "FINRA",
          company_url: "https://www.finra.org/#/",
          logo_path: "finra.png",
          duration: "April 2021 - Present",
          location: "NYC / Remote",
          description: "",
          color: "#0071C5",
        },
        {
          title: "Coding / Career Coach",
          company: "Career Karma",
          company_url: "https://careerkarma.com/",
          logo_path: "ck.png",
          duration: "January 2021 - Present",
          location: "Remote",
          description:
            "Directs 5+ person workshops offering introduction to Java, Python, and other programming languages, while preparing tailored curriculums for all proficiency levels and performing one-on-one mentorship for optimal skill development.",
          color: "#0071C5",
        },
        {
          title: "Software Engineer",
          company: "Mind School",
          company_url: "https://www.linkedin.com/company/wearemindschool/",
          logo_path: "mind-school.jpg",
          duration: "Oct 2020 - April 2021",
          location: "NYC / Remote",
          description:
            "Developed a viable application prototype within 3-month period for this EdTech startup, preparing product demonstration, and securing a $50K production grant from New York University.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Technology & Coding Mentor / Advisory Board Member",
          company: "Kids Clubhouse of Suffolk",
          company_url: "http://kidsclubhousesuffolk.com/",
          logo_path: "clubhouse.png",
          duration: "Jan 2019 - Present",
          location: "Long Island, NY",
          description:
            "As a board member and mentor of this 501c3 after-school program, I assist by serving our youth at the elementary, junior high, and high school age levels within our local communities. Our mission is to help empower our kids by offering activities in the arts, sciences, math, health & wellness, physical education, technology, recreation, and many more areas. As a member of the board, I have the responsibility of planning special events, fundraisers, and contributing to our education plans. As a mentor, I assist with the education program through my knowledge of technology, teaching basic topics as an introduction to coding and building projects using the python and the Raspberry Pi coding kit.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS or Spring Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",

    description: "Please don't hesitate to reach out to me anytime!",
  },
  blogSection: {
    title: "Resume",
    subtitle:
      "Please download my resume for full details on experience and work history.",
    link:
      "https://www.dropbox.com/s/2kld62kb8wzq0ur/JordanCaroleo_Resume.pdf?dl=0",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "6",
      name: "Stock-Tracker-App",
      url: "https://cw-stock-tracker.herokuapp.com/",
      description:
        "Portfolio application to allow for the review and tracking of stock data.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "EasyTrade-Robinhood-Clone",
      url: "https://github.com/jordar411/Robinhood-React-Clone",
      description: "Created a Robinhood interface clone using React",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "0",
      name: "AutomateInstaPyBot",
      url: "https://github.com/jordar411/AutomateInstaPyBot",
      description:
        "This is Instagram Bot. This will login to your Instagram account. Follow Users, Unfollow Users, Remove Profile Photo",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "1",
      name: "react-twitter-clone",
      url: "https://github.com/jordar411/react-twitter-clone",
      description:
        "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "top-crypto-gainers",
      url: "https://github.com/jordar411/jc-crypto-tracker",
      description:
        "A cryptocurrency price tracking app built with Next.js, with usage of the react-parallax-tilt npm package.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Next",
          iconifyClass: "logos-nextjs",
        },
      ],
    },
    {
      id: "3",
      name: "Flask Blog",
      url: "https://github.com/harikanani/flask_blog",
      description: "A Simple Blog Web Application made using Flask Framework",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
