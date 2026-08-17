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
		title: "DIRT",
		description:
			"Scientific data analysis platform for advertisement research, featuring WebSocket-based real-time status updates.",
		type: "Web design",
		responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
		image: [
		],
		previewImg:
			"",
		view: "",
		source: [],
	},
	{
		title: "Charley Legal",
		description:
			"AI-powered platform that generates B2B legal contracts compliant with regional and national regulations.",
		type: "Web design",
		responsibilities: [Responsibilities.UI_UX, Responsibilities.FRONTEND],
		image: [
		],
		previewImg:
			"",
		view: "",
		source: [],
	},
	{
		title: "Crew recovery",
		description:
			"Platform for airlines to recover unavailable crew members, with diagrams illustrating the relationship between pre-flight and post-flight routines.",
		type: "Web design",
		responsibilities: [Responsibilities.FRONTEND],
		image: [
		],
		previewImg:
			"",
		view: "",
		source: [],
	},
	{
		title: "Meet More",
		description:
			"Events management platform for organizers, featuring ticket stock, Stripe and QR payment systems, and slip verification.",
		type: "Web design",
		responsibilities: [Responsibilities.FRONTEND, Responsibilities.BACKEND],
		image: [
			"/media/product-demos/meet-more/image-1.png",
			"/media/product-demos/meet-more/meetmore.png",
		],
		previewImg: "/media/product-demos/meet-more/root-page.png",
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
			"/media/product-demos/piika/image-1.png",
			"/media/product-demos/piika/piika.png",
		],
		previewImg: "/media/product-demos/piika/root-page.png",
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
			"/media/product-demos/john/root-page.png",
			"/media/product-demos/john/booking.png",
		],
		previewImg: "/media/product-demos/john/root-page.png",
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
			"/media/product-demos/trend/itrend_1.png",
			"/media/product-demos/trend/itrend_2.png",
			"/media/product-demos/trend/itrend_3.png",
			"/media/product-demos/trend/itrend_4.png",
			"/media/product-demos/trend/itrend_5.png",
			"/media/product-demos/trend/itrend_6.png",
		],
		previewImg: "/media/product-demos/trend/itrend_overview.png",
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
			"/media/product-demos/fppms/fppms_1.png",
			"/media/product-demos/fppms/fppms_2.png",
			"/media/product-demos/fppms/fppms_3.png",
			"/media/product-demos/fppms/fppms_4.png",
		],
		previewImg: "/media/product-demos/fppms/fppms_overview.png",
		view: "",
		source: [],
	},
	{
		title: "Portfolio 2022",
		description:
			"First personal portfolio website showcasing personal information, passions, projects, and contact details.",
		type: "Web design",
		responsibilities: [Responsibilities.FRONTEND],
		image: [
			"/media/product-demos/portfolio2022/port2022_1.png",
			"/media/product-demos/portfolio2022/port2022_2.png",
		],
		previewImg: "/media/product-demos/portfolio2022/port2022_1.png",
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
			"/media/product-demos/ecommerce-shirt/ecommerce_shirt_1.png",
			"/media/product-demos/ecommerce-shirt/ecommerce_shirt_2.png",
			"/media/product-demos/ecommerce-shirt/ecommerce_shirt_3.png",
			"/media/product-demos/ecommerce-shirt/ecommerce_shirt_4.png",
		],
		previewImg:
			"/media/product-demos/ecommerce-shirt/ecommerce_shirt_1.png",
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
