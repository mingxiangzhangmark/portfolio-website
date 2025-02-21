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
];

export const testimonials = [
  {
    quote:
      "Working with Mark was a fantastic experience. His expertise as a full-stack developer shines through in every aspect of his work. From backend logic to frontend finesse, he delivers seamless, high-quality solutions with efficiency and precision. Mark’s problem-solving skills, adaptability, and commitment to excellence make him an invaluable asset to any project. If you're looking for a developer who can bring your vision to life, Mark is the perfect choice.",
    name: "Gina Santos",
    title: "Lead Developer at Company",
  },
  {
    quote:
      "Working with Mark was a fantastic experience. His expertise as a full-stack developer shines through in every aspect of his work. From backend logic to frontend finesse, he delivers seamless, high-quality solutions with efficiency and precision. Mark’s problem-solving skills, adaptability, and commitment to excellence make him an invaluable asset to any project. If you're looking for a developer who can bring your vision to life, Mark is the perfect choice.",
    name: "Gina Santos",
    title: "Lead Developer at Company",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Working with Mark was a fantastic experience. His expertise as a full-stack developer shines through in every aspect of his work. From backend logic to frontend finesse, he delivers seamless, high-quality solutions with efficiency and precision. Mark’s problem-solving skills, adaptability, and commitment to excellence make him an invaluable asset to any project. If you're looking for a developer who can bring your vision to life, Mark is the perfect choice.",
    name: "Gina Santos",
    title: "Lead Developer at Company",
  },
  {
    quote:
      "Working with Mark was a fantastic experience. His expertise as a full-stack developer shines through in every aspect of his work. From backend logic to frontend finesse, he delivers seamless, high-quality solutions with efficiency and precision. Mark’s problem-solving skills, adaptability, and commitment to excellence make him an invaluable asset to any project. If you're looking for a developer who can bring your vision to life, Mark is the perfect choice.",
    name: "Gina Santos",
    title: "Lead Developer at Company",
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
    desc: "(1/2025 - 3/2025)- Worked on the frontend team to develop and maintain user-facing features. Used Next.js, Tailwind CSS, and TypeScript.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: ".NET App Dev Project",
    desc: "Led the dev of a C# web app, finish initial concept to deployment on Azure.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
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
