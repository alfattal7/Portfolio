export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize collaborating with clients and fostering open communication. ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm highly flexible with communication across different time zones.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My technology stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "I'm a tech enthusiast with a passion for development..",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on developing a JavaScript animation library.",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Would you like to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Women World Blog",
      des: "Explore the wonders of the Women World with 3D simulation of many projects using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 2,
      title: "Alphaio - Video Conferencing App",
      des: "Simplify your video conferencing experience with Alphaio. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "AI Photo - Canavas",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/adrianhajdin/iphone",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Herr Al Fattal hat sich schnell und sicher in das Aufgabengebiet eingearbeitet und seine Tätigkeiten selbständig und gewissenhaft durchgeführt. Er hat seine Position zu unserer Zufriedenheit ausgeübt und unseren Erwartungen entsprochen. Seine Arbeitsweise zeichnete sich bei der Erledigung aller seiner Aufgaben durch Gewissenhaftigkeit, Fleiß und Selbständigkeit aus. Sein Verhalten gegenüber Vorgesetzten und Kollegen war stets einwandfrei.",
      name: "Dieter Sorowka",
      title: "Dipl.-Ing. SEO IBS Ingenieurbüro",
    },
    {
      quote:
        "Herr Al Fattal zeigte nach der ersten Einweisung in die in unserem Unternehmen wahrzunehmenden Aufgaben, dass er über solide Kenntnisse verfügt. Arbeitsabläufe und Arbeitsanweisungen erfasste er rasch. Veränderten Arbeitsbedingungen und neuen Gegebenheiten passte er sich aufgrund seiner guten Auffassungsgabe flexibel an.",
      name: "Phillipp Nagel-Grzebiela",
      title: "Leiter IT by Diehl Metal Applications",
    },
    {
      quote:
        "Wir danken Herrn Al Fattal für die angenehme Zusammenarbeit und wünschen ihm auf seinem weiteren Berufs- und Lebensweg alles Gute und weiterhin viel Erfolg.",
      name: "Marc Feilke",
      title: "Leiter lT Phorms Education SE",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Contributed to the development of a web-based platform utilizing React.js, enriching interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Created and engineered a mobile application for both iOS and Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the development of a mobile application for a client, overseeing the project from its initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Built and maintained user-facing features utilizing contemporary frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      href:"https://github.com/BasahRius",
    },
    {
      id: 2,
      img: "/link.svg",
      href:"https://www.linkedin.com/in/mhd-bashar-al-fattal-478b39251/"
    },
  ];