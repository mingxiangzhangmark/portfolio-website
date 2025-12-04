import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I truly value teamwork, always ensuring clear and open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm adaptable to global collaboration across time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building More Projects",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to get in touch with me?",
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
    title: "Aussienest- Real Estate Website",
    des: "A dynamic website with React framework and deployed on Vercel",
    img: "/p1-picture.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.png",
      "/vercel.svg",
      "/firebase.png",
    ],
    link: "https://aussienest.vercel.app/",
  },
  {
    id: 2,
    title: "Mark's Blog - Blog Website",
    des: "A MERN stack(Mongodb, Express.js, React, Node.js) based personal blog project. Deployed on Render.",
    img: "/p2-picture.png",
    iconLists: [
      "/re.svg",
      "/mongodb.png",
      "/nodejs.png",
      "/expressjs.png",
      "/render.png",
    ],
    link: "https://mark-blog-mern.onrender.com/",
  },
  {
    id: 3,
    title: "GEN-AI - AI text generator",
    des: "A user-friendly platform powered by Gmini API, generating custom content from user input. Whether it's blog posts, emails, or code snippets, GEN-AI provides a seamless AI-driven experience for your content needs.",
    img: "/p3-picture.png",
    iconLists: [
      "/next.svg",
      "/mongodb.png",
      "/tail.svg",
      "/stripe.png",
      "/c.svg",
    ],
    link: "https://genai-livid.vercel.app/",
  },
  {
    id: 4,
    title: "NeighbourLink-Car Sharing Website",
    des: "NeighbourLink is a car sharing website, write by pure html, css and javascript",
    img: "/p4-picture.png",
    iconLists: ["/html.png", "/css.png", "/js.png"],
    link: "https://neighbour-link-car-sharing-website.vercel.app/",
  },
  {
    id: 5,
    title: "TechPath Blog Website",
    des: "TechPath Blog is a technical knowledge-sharing platform where users can create, tag, and interact with posts through likes and comments. It also integrates AI-powered content recommendations and provides an admin dashboard for platform management.",
    img: "/p5-picture.png",
    iconLists: ["/re.svg", "/tail.svg", "/dj.svg", "/py.svg"],
    link: "https://github.com/mingxiangzhangmark/TechPath_blog/",
  },
  {
    id: 6,
    title: "Spendwise Website",
    des: "Spendwise provides a unified and intuitive platform for managing personal finances by bringing together all accounts, budgets, and spending insights in one place. Users can track expenses in real time, set personalized goals, and receive AI-powered recommendations tailored to their financial habits. The system aims to make financial management clearer, more proactive, and easier for users to build long-term healthy spending habits.",
    img: "/p6-picture.png",
    iconLists: ["/re.svg", "/tail.svg", "/java.svg", "/spring.svg"],
    link: "https://github.com/mingxiangzhangmark/Spendwise",
  },
];

export const testimonials = [
  {
    quote:
      "Mingxiang consistently demonstrated a high level of technical competence, reliability, and adaptability. His contributions made a significant impact on the ongoing development of our platform.",
    name: "Zakhele Shongwe",
    title: "Lead Developer at Wastedump Limitied",
  },
  {
    quote:
      "Mingxiang consistently demonstrated a high level of technical competence, reliability, and adaptability. His contributions made a significant impact on the ongoing development of our platform.",
    name: "Zakhele Shongwe",
    title: "Lead Developer at Wastedump Limitied",
  },
  {
    quote:
      "Mingxiang consistently demonstrated a high level of technical competence, reliability, and adaptability. His contributions made a significant impact on the ongoing development of our platform.",
    name: "Zakhele Shongwe",
    title: "Lead Developer at Wastedump Limitied",
  },
  {
    quote:
      "Mingxiang consistently demonstrated a high level of technical competence, reliability, and adaptability. His contributions made a significant impact on the ongoing development of our platform.",
    name: "Zakhele Shongwe",
    title: "Lead Developer at Wastedump Limitied",
  },
  {
    quote:
      "Mingxiang consistently demonstrated a high level of technical competence, reliability, and adaptability. His contributions made a significant impact on the ongoing development of our platform.",
    name: "Zakhele Shongwe",
    title: "Lead Developer at Wastedump Limitied",
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
    title: "Full Stack developing Intern",
    desc: "(1/2025 - 6/2025) Westedump Ltd - ● Built user-facing interfaces using React, Next.js, and Tailwind CSS for responsive and modern frontend design. ● Developed backend services and business logic using Node.js, Express, and NestJS. ● Integrated and created RESTful APIs to connect frontend and backend systems. ● Managed data using PostgreSQL, and connected backend services. ● Deployed components in Microsoft Azure.",
    className: "md:col-span-2",
    thumbnail: "wastedump.png",
  },
  {
    id: 2,
    title: "Frontend Intern",
    desc: "(7/2025 - 11/2025) Carbonetrix- ● Developed and maintained key modules of the company website using Next.js (App Router), React, TypeScript, and Tailwind CSS, ensuring clean, modular, and scalable code. ● Implemented SEO optimisation, including metadata configuration, structured data, performance tuning, and improved Lighthouse scores to enhance search visibility. ● Integrated reusable UI components and responsive layouts to deliver a consistent user experience across desktop and mobile. ● Collaborated with team members to review code, refine requirements, and deploy updates through modern development workflows and Git-based version control.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/carbon.svg",
  },
  {
    id: 3,
    title: "Full Stack developing Intern",
    desc: "(6/2025 - 11/2025)Job search works ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/JobSearchWork.png",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mingxiangzhangmark",
  },
  {
    id: 2,
    img: "/email48.png",
    link: "mailto:mingxiangzhang_mark@outlook.com",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mingxiang-zhang-04b3722b7/",
  },
];
