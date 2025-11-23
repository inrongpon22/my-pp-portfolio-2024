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
  source: string[]
}

const getProjectsData: ProjectProps[] = [
  {
    title: "Meet More",
    description:
      "Events management app, manage by organizer. Include ticket stock, payment system with Stripe, qr promptpay and slipt verification.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
    image: [],
    previewImg:
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/meet-more/root-page.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvbWVldC1tb3JlL3Jvb3QtcGFnZS5wbmciLCJpYXQiOjE3NjM5MTYzNDUsImV4cCI6MTc5NTQ1MjM0NX0.6XWY1g8Hon_SbXv4pDXlEmcTwzskHyvVyIB7xYmyiXM",
    view: "",
    source: ["https://app.meet.co.th"],
  },
  {
    title: "Piika",
    description:
      "Weekly delivery app for flowers. This service for customer who love flower to decorate their place, weekly delivery. The customer can skip the delivery if they don't want to receive the flowers. The challenge is manage the order for the drivers and tracking the order status.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
    image: [],
    previewImg:
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/piika/root-page.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvcGlpa2Evcm9vdC1wYWdlLnBuZyIsImlhdCI6MTc2MzkxNjQ4MiwiZXhwIjoxNzk1NDUyNDgyfQ.3Zk5m2QxWNya63h2wGBXv-RbUblm9vIj19tPSbZV6bs",
    view: "",
    source: ["https://piika.co/flowers"],
  },
  // {
  //   title: "Flowers",
  //   description:
  //     "Flowers shop app, manage by admin. Include product management, order management, payment system with Stripe, qr promptpay and slipt verification.",
  //   type: "Web design",
  //   responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
  //   image: [],
  //   previewImg: "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/combine-flowers-ai/flowers.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvY29tYmluZS1mbG93ZXJzLWFpL2Zsb3dlcnMucG5nIiwiaWF0IjoxNzYzOTE2NTIxLCJleHAiOjE3OTU0NTI1MjF9.Cvo42Q_MJq_QFbZrwFXugVhLM_uk1iFcq3MlvICgJsg",
  //   view: "",
  //   source: [""],
  // },
  {
    title: "John (Booking App)",
    description:
      "Reservation app for services. In massage, nail, salon, barber. Shop create their own service and booking by customer.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
    image: [],
    previewImg:
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/john/root-page.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvam9obi9yb290LXBhZ2UucG5nIiwiaWF0IjoxNzYzOTE2NTM5LCJleHAiOjE3OTU0NTI1Mzl9.ViMobI_Wm0qiA5Qmu9k1CS5efH8pmjt-KDRQzgg49Tk",
    view: "",
    source: ["https://b.ms.co.th"],
  },
  {
    title: "ItrendX",
    description:
      "Power monitoring for industry in each plant or site. Monitoring the consumption, power produce from powerplant or solarplant, separate in site. Role and permission management.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND],
    image: [],
    previewImg:
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/itrend/itrend_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvaXRyZW5kL2l0cmVuZF8xLnBuZyIsImlhdCI6MTc2MzkxNjU2NywiZXhwIjoxNzk1NDUyNTY3fQ.Kseep0cxXlES0oTx53mscNztdjlb5yH1Dx3hwNTGMzY",
    view: "",
    source: [],
  },
  {
    title: "FPPMS",
    description:
      "Industrail machine monitoring status, power consumption. Customer create application for testing produce their product that approve or reject by admin role.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND],
    image: [],
    previewImg:
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/fppms/fppms_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvZnBwbXMvZnBwbXNfMS5wbmciLCJpYXQiOjE3NjM5MTY1ODIsImV4cCI6MTc5NTQ1MjU4Mn0.9jMa-2abxbjxd3rKZozSDXvRncEZHonUnsVOaqUiTMo",
    view: "",
    source: [],
  },
  {
    title: "Portfolio 2022",
    description:
      "My first portfolio website. Display the personal information, passions, projects, contact.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND],
    image: [],
    previewImg:
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/portfolio-2022/port2022_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvcG9ydGZvbGlvLTIwMjIvcG9ydDIwMjJfMS5wbmciLCJpYXQiOjE3NjM5MTY1OTcsImV4cCI6MTc5NTQ1MjU5N30.Wrhl6JWJ1fbEq4zXYgrff89OfgCh_khbWNX9H4jz8hI",
    view: "",
    source: [],
  },
  {
    title: "E-commerce",
    description:
      "My first simple E-commerce when study about html, javascript, css, routing use free assets.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND],
    image: [],
    previewImg:
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/simple-e-commerce/active-states-basket-filled.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvc2ltcGxlLWUtY29tbWVyY2UvYWN0aXZlLXN0YXRlcy1iYXNrZXQtZmlsbGVkLmpwZyIsImlhdCI6MTc2MzkxNjYxOSwiZXhwIjoxNzk1NDUyNjE5fQ.C7LUlVYaSeBpPWUUAKwEmuInzFRwJVYiqJJF1ZSJpds",
    view: "",
    source: [],
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
