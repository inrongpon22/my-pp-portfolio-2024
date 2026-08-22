import React from "react"
import { ChartColumn } from "lucide-react"
import PfTag from "@/components/common/PfTag"
import TechIcon from "@/components/common/TechIcon"

interface ToolItem {
	name: string
	slug?: string
	src?: string
	icon?: React.ComponentType<{ className?: string }>
}

interface ToolCategory {
	title: string
	items: ToolItem[]
}

const categories: ToolCategory[] = [
	{
		title: "Core",
		items: [
			{ name: "TypeScript", slug: "typescript" },
			{ name: "JavaScript", slug: "javascript" },
			{ name: "HTML", slug: "html5" },
			{ name: "CSS", slug: "css3" },
		],
	},
	{
		title: "Frameworks",
		items: [
			{ name: "React", slug: "react" },
			{ name: "Next.js", slug: "nextdotjs" },
			{ name: "Vue 2", slug: "vuedotjs" },
			{ name: "Vuetify", slug: "vuetify" },
			{ name: "Vite", slug: "vite" },
			{ name: "React Router", slug: "reactrouter" },
		],
	},
	{
		title: "Styling & UI",
		items: [
			{ name: "Tailwind", slug: "tailwindcss" },
			{ name: "shadcn/ui", slug: "shadcnui" },
			{ name: "Material UI", slug: "mui" },
			{ name: "Ant Design", slug: "antdesign" },
			{ name: "daisyUI", slug: "daisyui" },
		],
	},
	{
		title: "State & data",
		items: [
			{ name: "Redux", slug: "redux" },
			{ name: "Axios", slug: "axios" },
			{ name: "Socket.io", slug: "socketdotio" },
			{ name: "React Hook Form", slug: "reacthookform" },
			{ name: "Zod", slug: "zod" },
		],
	},
	{
		title: "Backend & infra",
		items: [
			{ name: "Node.js", slug: "nodedotjs" },
			{ name: "Express", slug: "express" },
			{ name: "PostgreSQL", slug: "postgresql" },
			{ name: "Kafka", slug: "apachekafka" },
			{ name: "Redis", slug: "redis" },
			{ name: "Docker", slug: "docker" },
			{ name: "Supabase", slug: "supabase" },
			{ name: "Cloudflare", slug: "cloudflare" },
			{ name: "Stripe", slug: "stripe" },
		],
	},
	{
		title: "Visualisation",
		items: [
			{ name: "ApexCharts", icon: ChartColumn },
			{ name: "Highcharts", src: "/media/framework-logos/highcharts.svg" },
		],
	},
]

const Tools = () => {
	return (
		<div id="tools" className="scroll-mt-24 flex flex-col items-start w-full">
			<PfTag name="tools" className="mb-11 block" />
			<h2 className="mb-8 font-mono font-bold tracking-[-0.035em] text-[clamp(2rem,4vw,3rem)]">
				What I build with
			</h2>
			<div className="w-full grid grid-cols-1 nav:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px bg-pf-line border border-pf-line">
				{categories.map((category) => (
					<div key={category.title} className="bg-pf-bg px-7 pt-7 pb-8">
						<div className="font-mono text-[11px] tracking-[0.14em] uppercase text-pf-accent mb-5">
							{category.title}
						</div>
						<div className="flex flex-wrap gap-2">
							{category.items.map((item) => {
								const Icon = item.icon
								return (
									<span
										key={item.name}
										className="inline-flex items-center gap-2 px-3 py-[7px] border border-pf-line rounded-sm font-mono text-xs text-pf-body hover:border-pf-lineSoft hover:bg-pf-raise transition-colors"
									>
										{(item.slug || item.src) && (
											<TechIcon slug={item.slug} src={item.src} />
										)}
										{Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
										{item.name}
									</span>
								)
							})}
						</div>
					</div>
				))}
			</div>
			<PfTag name="tools" closing className="mt-12 block" />
		</div>
	)
}

export default Tools
