"use client"

import React from "react"
import PfTag from "@/components/common/PfTag"

interface ExperienceItem {
	period: string
	title: string
	org?: string
	stack?: string
}

const roles: ExperienceItem[] = [
	{
		period: "January 2026 - August 2026",
		title: "Software Engineer",
		org: "NCNXLABS, Chiang Mai, Thailand",
		stack: "React · Vue2 · Vuetify · Node.js · OOP · DDD · EDA · Event Sourcing · Kafka · PostgreSQL · Redis  · Docker",
	},
	{
		period: "April 2024 - December 2025",
		title: "Front-End Developer (+ Back-End)",
		org: "MEET SOFTWARE, Chiang Mai, Thailand",
		stack: "React · Tailwind · Node.js · Express · SQL · PostgreSQL · Docker",
	},
	{
		period: "January 2023 - March 2024",
		title: "Front-End Developer",
		org: "ITTHIRIT TECHNOLOGY, Chiang Mai, Thailand",
		stack: "React · Tailwind · Node.js · Express · SQL · PostgreSQL · Docker",
	},
	{
		period: "March 2022 - December 2022",
		title: "Practicing by myself",
	},
	{
		period: "March 2022",
		title: "Graduated in Faculty of Education, English",
		org: "Chiang Mai Rajabhat University, Thailand",
	},
]

const WorkExperience = () => {
	return (
		<div id="work-experience" className="scroll-mt-24">
			<PfTag name="work-experience" className="mb-11 block" />
			<h2 className="mb-8 font-mono font-bold tracking-[-0.035em] text-[clamp(2rem,4vw,3rem)]">
				Where I&apos;ve worked
			</h2>
			<ul className="border-t border-pf-line">
				{roles.map((role, index) => (
					<li
						key={index}
						className="grid grid-cols-1 nav:grid-cols-[210px_1fr] gap-2 nav:gap-8 py-8 px-1 border-b border-pf-line hover:bg-pf-panel transition-colors"
					>
						<div className="font-mono text-xs text-pf-dim leading-[1.7] nav:pl-3">
							{role.period}
						</div>
						<div className="nav:pr-3">
							<h3 className="text-2xl tracking-[-0.02em] font-bold mb-1.5">
								{role.title}
							</h3>
							{role.org && (
								<div className="text-[15px] text-pf-muted mb-4">{role.org}</div>
							)}
							{role.stack && (
								<div className="font-mono text-xs text-pf-muted leading-[1.9]">
									{role.stack}
								</div>
							)}
						</div>
					</li>
				))}
			</ul>
			<PfTag name="work-experience" closing className="mt-12 block" />
		</div>
	)
}

export default WorkExperience
