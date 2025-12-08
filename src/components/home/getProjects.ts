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
      "Events management platform for organizers, featuring ticket stock, Stripe and QR payment systems, and slip verification.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
    image: [
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/meet-more/image.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvbWVldC1tb3JlL2ltYWdlLnBuZyIsImlhdCI6MTc2NTE4MjUzMSwiZXhwIjoxNzk2NzE4NTMxfQ.vM4U8ccWfjmSAEArIjR73wpmq1sYXeeSub4So-3OTNc",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/meet-more/meetmore.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvbWVldC1tb3JlL21lZXRtb3JlLnBuZyIsImlhdCI6MTc2NTE4MjU0NiwiZXhwIjoxNzk2NzE4NTQ2fQ.sYHPjDQsT2JmcfrIKhmdwDYINpPfodOXpujXTEwkRTw",
    ],
    previewImg:
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/meet-more/root-page.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvbWVldC1tb3JlL3Jvb3QtcGFnZS5wbmciLCJpYXQiOjE3NjM5MTYzNDUsImV4cCI6MTc5NTQ1MjM0NX0.6XWY1g8Hon_SbXv4pDXlEmcTwzskHyvVyIB7xYmyiXM",
    view: "",
    source: ["https://app.meet.co.th"],
  },
  {
    title: "Piika",
    description:
      "Weekly flower delivery service enabling customers to manage subscriptions, skip deliveries, and track orders, with a focus on efficient driver logistics.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
    image: [
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/piika/image.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvcGlpa2EvaW1hZ2UucG5nIiwiaWF0IjoxNzY1MTg0NzMyLCJleHAiOjE3OTY3MjA3MzJ9.ooXQ91NSqGqJssN4_WZqMYejD7N5JFaMN1_cEJ9eHYY",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/piika/piika.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvcGlpa2EvcGlpa2EucG5nIiwiaWF0IjoxNzY1MTg0NzUwLCJleHAiOjE3OTY3MjA3NTB9.2maxflJlTlvkkqqXO9lbjdXkavxSbfOcu7hQpjjyIl4",
    ],
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
      "Service reservation application for businesses like massage, nail, salon, and barber shops, allowing businesses to create services, manage their own open hours and customers to book appointments.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
    image: [
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/john/root-page.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvam9obi9yb290LXBhZ2UucG5nIiwiaWF0IjoxNzYzOTE2NTM5LCJleHAiOjE3OTU0NTI1Mzl9.ViMobI_Wm0qiA5Qmu9k1CS5efH8pmjt-KDRQzgg49Tk",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/john/booking.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvam9obi9ib29raW5nLnBuZyIsImlhdCI6MTc2NTE4NDg4MSwiZXhwIjoxNzk2NzIwODgxfQ.KNUmfMhN9vwnHOhrJ3Ewu0x7yU5Gxqhh6lrU31pPIoI",
    ],
    previewImg:
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/john/root-page.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvam9obi9yb290LXBhZ2UucG5nIiwiaWF0IjoxNzYzOTE2NTM5LCJleHAiOjE3OTU0NTI1Mzl9.ViMobI_Wm0qiA5Qmu9k1CS5efH8pmjt-KDRQzgg49Tk",
    view: "",
    source: ["https://b.ms.co.th"],
  },
  {
    title: "ItrendX",
    description:
      "Industrial power monitoring system for plants and sites, tracking consumption and production from power plants or solar, with role and permission management.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND],
    image: [
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/itrend/itrend_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvaXRyZW5kL2l0cmVuZF8xLnBuZyIsImlhdCI6MTc2NTE4NDkxNCwiZXhwIjoxNzk2NzIwOTE0fQ.Ag_QQ8FM-BVXkmLKOy6asYhf64onhjY97wfo0b8fD2A",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/itrend/itrend_2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvaXRyZW5kL2l0cmVuZF8yLnBuZyIsImlhdCI6MTc2NTE4NDkzMiwiZXhwIjoxNzk2NzIwOTMyfQ._lgt_UVHy42BFFQULIqE9Z9DxoPgNsg9TJLQCEETB4s",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/itrend/itrend_3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvaXRyZW5kL2l0cmVuZF8zLnBuZyIsImlhdCI6MTc2NTE4NDkzOCwiZXhwIjoxNzk2NzIwOTM4fQ.t9g2IWJI63hTEaayrTTxXkcNOm1ICo5E6X7Pn-MR8_Y",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/itrend/itrend_4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvaXRyZW5kL2l0cmVuZF80LnBuZyIsImlhdCI6MTc2NTE4NDk0NiwiZXhwIjoxNzk2NzIwOTQ2fQ.oYW3BqsGJMAjGhJsuLMgS0SFirVi8vSnZqxeGWIAuOg",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/itrend/itrend_5.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvaXRyZW5kL2l0cmVuZF81LnBuZyIsImlhdCI6MTc2NTE4NDk1NiwiZXhwIjoxNzk2NzIwOTU2fQ.5vOkwGwFoXoIckiCsR_-gCDqFpcHDSjRHTOKmoElgws",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/itrend/itrend_6.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvaXRyZW5kL2l0cmVuZF82LnBuZyIsImlhdCI6MTc2NTE4NDk2NCwiZXhwIjoxNzk2NzIwOTY0fQ.7Lnn--XXT8f017P1BM48zEo1zUJZrTKt-dG7s5rvrck",
    ],
    previewImg:
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/itrend/itrend_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvaXRyZW5kL2l0cmVuZF8xLnBuZyIsImlhdCI6MTc2MzkxNjU2NywiZXhwIjoxNzk1NDUyNTY3fQ.Kseep0cxXlES0oTx53mscNztdjlb5yH1Dx3hwNTGMzY",
    view: "",
    source: [],
  },
  {
    title: "FPPMS",
    description:
      "Industrial machine monitoring system tracking status and power consumption. Includes a customer application for product testing with admin approval.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND],
    image: [
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/fppms/fppms_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvZnBwbXMvZnBwbXNfMS5wbmciLCJpYXQiOjE3NjUxODQ5ODIsImV4cCI6MTc5NjcyMDk4Mn0.WTWZ5Jdo9Vh8yIBRilIzbVLTB-JzuitqeowYQukROyc",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/fppms/fppms_2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvZnBwbXMvZnBwbXNfMi5wbmciLCJpYXQiOjE3NjUxODQ5OTIsImV4cCI6MTc5NjcyMDk5Mn0.Jgj4ctY0tPNzOQfHNVKZJB8lL9B7YKnmiE-CrWqpy78",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/fppms/fppms_3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvZnBwbXMvZnBwbXNfMy5wbmciLCJpYXQiOjE3NjUxODQ5OTYsImV4cCI6MTc5NjcyMDk5Nn0.heQEkeg3jzKJ5ZB9Up6751qa5k_qd0U-AUMsaMezW1A",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/fppms/fppms_4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvZnBwbXMvZnBwbXNfNC5wbmciLCJpYXQiOjE3NjUxODUwMDIsImV4cCI6MTc5NjcyMTAwMn0.LT92e2pxGpDpTI93kthUvjvDFU0omelDB_yUBQaFfqM",
    ],
    previewImg:
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/fppms/fppms_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvZnBwbXMvZnBwbXNfMS5wbmciLCJpYXQiOjE3NjM5MTY1ODIsImV4cCI6MTc5NTQ1MjU4Mn0.9jMa-2abxbjxd3rKZozSDXvRncEZHonUnsVOaqUiTMo",
    view: "",
    source: [],
  },
  {
    title: "Portfolio 2022",
    description:
      "First personal portfolio website showcasing personal information, passions, projects, and contact details.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND],
    image: [],
    previewImg:
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/portfolio-2022/port2022_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvcG9ydGZvbGlvLTIwMjIvcG9ydDIwMjJfMS5wbmciLCJpYXQiOjE3NjM5MTY1OTcsImV4cCI6MTc5NTQ1MjU5N30.Wrhl6JWJ1fbEq4zXYgrff89OfgCh_khbWNX9H4jz8hI",
    view: "",
    source: ["https://github.com/inrongpon22/my-pp-portfolio-2022"],
  },
  {
    title: "E-commerce",
    description:
      "A foundational e-commerce project built with HTML, CSS, JavaScript, and routing, utilizing free assets for a simple shopping experience.",
    type: "Web design",
    responsibilities: [Responsibilities.FRONTEND],
    image: [
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/simple-e-commerce/mobile-design.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvc2ltcGxlLWUtY29tbWVyY2UvbW9iaWxlLWRlc2lnbi5qcGciLCJpYXQiOjE3NjUxODUwODgsImV4cCI6MTc5NjcyMTA4OH0.a4joxlrEN6e1q0UvlMVY2KiPMhUUlfwOf4G-_WYkPTc",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/simple-e-commerce/active-states-basket-filled.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvc2ltcGxlLWUtY29tbWVyY2UvYWN0aXZlLXN0YXRlcy1iYXNrZXQtZmlsbGVkLmpwZyIsImlhdCI6MTc2NTE4NTAyNSwiZXhwIjoxNzk2NzIxMDI1fQ.cVUlssOCiO2FR6jRcwILDRb4fCwcIfl77BL_GK3AZH0",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/simple-e-commerce/active-states-lightbox.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvc2ltcGxlLWUtY29tbWVyY2UvYWN0aXZlLXN0YXRlcy1saWdodGJveC5qcGciLCJpYXQiOjE3NjUxODUwMzcsImV4cCI6MTc5NjcyMTAzN30.qcre7CfAvFGD-XjTvwp0Zd5bH5mBMiGLBM2QqyzA0Gs",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/simple-e-commerce/mobile-design-basket-filled.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvc2ltcGxlLWUtY29tbWVyY2UvbW9iaWxlLWRlc2lnbi1iYXNrZXQtZmlsbGVkLmpwZyIsImlhdCI6MTc2NTE4NTA3MCwiZXhwIjoxNzk2NzIxMDcwfQ.wUMauzZT9gB4rCwrvuuLUyyVKdNL7JGDtJIyqJu0o-M",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/simple-e-commerce/ecommerce_shirt_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvc2ltcGxlLWUtY29tbWVyY2UvZWNvbW1lcmNlX3NoaXJ0XzEucG5nIiwiaWF0IjoxNzY1MTg1MDQ0LCJleHAiOjE3OTY3MjEwNDR9.iguk036R4DEieeEYmYu42XwXE8LoSBkH6KSVdVc1ioM",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/simple-e-commerce/ecommerce_shirt_2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvc2ltcGxlLWUtY29tbWVyY2UvZWNvbW1lcmNlX3NoaXJ0XzIucG5nIiwiaWF0IjoxNzY1MTg1MDUxLCJleHAiOjE3OTY3MjEwNTF9.e2kxVqYLfIw_I0M2Y9SY1OYrivc5dLHEtxbZbn6dIQ8",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/simple-e-commerce/ecommerce_shirt_3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvc2ltcGxlLWUtY29tbWVyY2UvZWNvbW1lcmNlX3NoaXJ0XzMucG5nIiwiaWF0IjoxNzY1MTg1MDU2LCJleHAiOjE3OTY3MjEwNTZ9.Dnz4ktdGu7PTTtiyiTbczeUuczrortzG0-2pbFLnmYA",
      "https://qavdigrfstszklsrdjsy.supabase.co/storage/v1/object/sign/my-bucket/project_images/simple-e-commerce/ecommerce_shirt_4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YzQ5OWYzMi0xOGM0LTRhOTQtYmNmMC1kYzkxMGY2MjQ1ZGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteS1idWNrZXQvcHJvamVjdF9pbWFnZXMvc2ltcGxlLWUtY29tbWVyY2UvZWNvbW1lcmNlX3NoaXJ0XzQucG5nIiwiaWF0IjoxNzY1MTg1MDYwLCJleHAiOjE3OTY3MjEwNjB9.36-aM3_GZ2sEFITmBxriWRzXl2AavJgwCmrEXdscP0o",
    ],
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
