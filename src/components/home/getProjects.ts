// import pro1 from "../assets/project1.png";
// import pro2 from '../assets/project2-new.png';
// import pro3 from '../assets/project3.png';
// import pro4 from '../assets/project4.png';
// import pro5 from '../assets/project5.png';
// import pro6 from '../assets/project6.png';
// import pro7 from '../assets/project7.png';
// import pro8 from '../assets/project8.png';

export enum Responsibilities {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  FULLSTACK = "Fullstack",
  DESIGN = "Design",
  UI_UX = "UI/UX",
  SEO = "SEO",
  CONTENT = "Content",
  MARKETING = "Marketing",
  OTHER = "Other",
}

export interface ProjectProps {
  title: string
  description: string
  type: string
  image: string[]
  responsibilities: Responsibilities[]
  previewImg: string
  view: string
  source: string
}

const getProjectsData: ProjectProps[] = [
  {
    title: "Piika",
    description: "Description",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
    image: [],
    previewImg: "/media/product-demos/piika/piika.png",
    view: "",
    source: "",
  },
  {
    title: "Flowers",
    description: "Description",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
    image: [],
    previewImg: "/media/product-demos/flowers/flowers.png",
    view: "",
    source: "",
  },
  {
    title: "Meet More",
    description: "Description",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
    image: [],
    previewImg: "/media/product-demos/meet-more/meetmore.png",
    view: "",
    source: "",
  },
  {
    title: "John (Booking App)",
    description: "Description",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
    image: [],
    previewImg: "/media/product-demos/john/booking.png",
    view: "",
    source: "",
  },
  {
    title: "ItrendX",
    description: "Description",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND],
    image: [],
    previewImg: "/media/product-demos/Itrend/itrend_1.png",
    view: "",
    source: "",
  },
  {
    title: "FPPMS",
    description: "Description",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND],
    image: [],
    previewImg: "/media/product-demos/FPPMS/fppms_1.png",
    view: "",
    source: "",
  },
  {
    title: "Portfolio 2022",
    description: "Description",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND],
    image: [],
    previewImg: "/media/product-demos/2022portfolio/port2022_1.png",
    view: "",
    source: "",
  },
  {
    title: "E-commerce",
    description: "Description",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND],
    image: [],
    previewImg: "/media/product-demos/ecommerce-shirt/ecommerce_shirt_2.png",
    view: "",
    source: "",
  },
  //   {
  //     imgsrc: pro1,
  //     title: "Ecommerce Website Design",
  //     text: "Html + CSS + Javascript",
  //     view: "https://my1stecommercewebsite.netlify.app/",
  //     source: "https://github.com/inrongpon22/myecommercewebsite1.git"
  // },
  //   {
  //     imgsrc: pro2,
  //     title: "React Admin Dashboard",
  //     text: "ReactJs with syncfusion",
  //     view: "https://react-admindashboard-syncfusion.netlify.app/",
  //     source: "https://github.com/inrongpon22/React-admin-dashboard-with-synfusion"
  // },
  //   {
  //     imgsrc: pro3,
  //     title: "E-commerce product page",
  //     text: "ReactJs + TailwindCSS",
  //     view: "https://cerulean-paprenjak-15abc3.netlify.app/",
  //     source: "https://github.com/inrongpon22/frontendMentor-ecommerce-product-page"
  // },
  //   {
  //     imgsrc: pro4,
  //     title: "Simple Animate Web Page",
  //     text: "HTML + CSS + Javascript + GSAP(TweenMax)",
  //     view: "https://classy-kangaroo-65bb8f.netlify.app/",
  //     source: "https://github.com/inrongpon22/Simple-animate-product-page-with-TweenMax"
  // },
  //   {
  //     imgsrc: pro5,
  //     title: "Advice Generator",
  //     text: "ReactJs + Typescript + TailwindCSS + RestAPI",
  //     view: "https://lighthearted-tulumba-cb5378.netlify.app/",
  //     source: "https://github.com/inrongpon22/frontendMentor-advice-generator-app"
  // },
  //   {
  //     imgsrc: pro6,
  //     title: "Simple Page with Responsive Design",
  //     text: "ReactJs + TailwindCSS",
  //     view: "https://reliable-kangaroo-76fb5f.netlify.app/",
  //     source: "https://github.com/inrongpon22/frontendMentor-sunnyside-agency-landing-page"
  // },
  //   {
  //     imgsrc: pro7,
  //     title: "Simple Page with Validate E-mail and Responsive Design",
  //     text: "ReactJs+ Typescript + TailwindCSS",
  //     view: "https://bejewelled-crepe-a32cdf.netlify.app/",
  //     source: "https://github.com/inrongpon22/frontendMentor-fylo-dark-theme-landing-page"
  // },
  //   {
  //     imgsrc: pro8,
  //     title: "Simple Page Handle with Grid and Responsive Design",
  //     text: "ReactJs+ Typescript + TailwindCSS",
  //     view: "https://cheerful-kleicha-1099a5.netlify.app/",
  //     source: "https://github.com/inrongpon22/frontendMentor-testimonials-grid-section"
  // },
]

export default getProjectsData
