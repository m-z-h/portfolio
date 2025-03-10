import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoReact,  BiLogoTailwindCss } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { SiNextdotjs, SiClerk, SiMapbox } from "react-icons/si";
import { FaStripe } from "react-icons/fa";
import Apnacab from "../assets/Images/apnacab.png";
import Calc from "../assets/Images/Calculator.png";
import ECom from "../assets/Images/ECom.png";
import Portfolio from "../assets/Images/portfolio.png";


const ProjectsData = [
  {
    id: "1",
    name: "Cab Booking Platform",
    image: Apnacab, 
    icons: [ SiNextdotjs, BiLogoReact, BiLogoTailwindCss, SiClerk, SiMapbox, FaStripe],
    description: "A fast and intuitive cab booking web app where users can search for rides, book cabs, track their journey in real-time, and make secure payments—all in one place.",
    github: "https://github.com/m-z-h/apnacab",
    demo: "https://github.com/m-z-h/apnacab",
  },
  {
    id: "2",
    name: "Ecommerce Website (Frontend) ",
    image: ECom,
    icons: [BiLogoReact, BiLogoTailwindCss,],
    description: "A responsive frontend for an e-commerce platform, featuring product listings, filtering, and a modern UI using React and Tailwind CSS.",
    github: "https://github.com/m-z-h",
    demo: "https://mzh-store-e-com.vercel.app/",
  },
  {
    id: "3",
    name: "Simple Calculator",
    image: Calc,
    icons: [BiLogoJavascript, BiLogoHtml5, BiLogoCss3],
    description: "A simple online calculator built using HTML, CSS, and JavaScript.",
    github: "https://github.com/m-z-h/Calculator",
    demo: "https://m-z-h.github.io/Calculator/",
  },
  {
    id: "4",
    name: "Personal Portfolio Website",
    image: Portfolio,
    icons: [BiLogoJavascript, BiLogoHtml5, BiLogoCss3],
    description: "A simple online calculator built using HTML, CSS, and JavaScript.",
    github: "https://github.com/m-z-h/portfolio",
    demo: "https://portfolio-six-snowy-31.vercel.app/",
  },
];

export default ProjectsData;
