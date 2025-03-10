import { BiLogoCss3, BiLogoFirebase, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";
import Apnacab from "../assets/Images/apnacab.png";
import Calc from "../assets/Images/Calculator.png";
import ECom from "../assets/Images/ECom.png";
import Pr1 from "../assets/Images/css.png";



const ProjectsData = [
  {
    id: "1",
    name: "Cab Booking",
    image: Apnacab, 
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase, BiLogoTailwindCss],
    description: "This website provides information about popular , top-rated and upcoming movies.",
    github: "https://github.com/m-z-h",
    demo: "https://m-z-h.github.io/Calculator/",
  },
  {
    id: "2",
    name: "Ecommerce Website",
    image: ECom,
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "This website provides users with all the basic kinds of shopping items.",
    github: "https://github.com/m-z-h",
    demo: "https://m-z-h.github.io/Calculator/",
  },
  {
    id: "3",
    name: "Calculator",
    image: Calc,
    icons: [BiLogoJavascript, BiLogoHtml5, BiLogoCss3],
    description: "A simple online calculator built using HTML, CSS, and JavaScript.",
    github: "https://github.com/m-z-h/Calculator",
    demo: "https://m-z-h.github.io/Calculator/",
  },
];

export default ProjectsData;
