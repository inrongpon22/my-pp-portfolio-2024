"use client"

import React from "react"

const contactLinks = [
	{
		label: "email",
		href: "mailto:inrongpon.phanupong2@gmail.com",
		value: "inrongpon.phanupong2@gmail.com",
	},
	{
		label: "github",
		href: "https://github.com/inrongpon22",
		value: "@inrongpon22",
	},
	{
		label: "linkedin",
		href: "https://www.linkedin.com/in/phanupong-inrongpon-6aa97b25a",
		value: "phanupong-inrongpon",
	},
]

const Contact = () => {
	return (
		<section id="contact" className="scroll-mt-24 grid grid-cols-1 nav:grid-cols-2 gap-14">
			<div>
				<h2 className="mb-6 font-mono font-bold tracking-[-0.035em] leading-[1.1] text-[clamp(1.875rem,3.6vw,2.625rem)]">
					I develop websites and web applications.
				</h2>
				<p className="max-w-[480px] text-base leading-[1.7] text-pf-muted">
					Based in Chiang Mai, I design and code clean, reliable apps from front to back. I love picking up new tools and building things that actually last in the real world.
				</p>
			</div>
			<div className="flex flex-col gap-0.5 font-mono text-sm">
				<div className="text-[11px] tracking-[0.14em] uppercase text-pf-dim mb-[18px]">
					Contact
				</div>
				{contactLinks.map((item) => (
					<a
						key={item.label}
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex justify-between gap-4 py-3.5 border-b border-pf-line text-pf-ink hover:text-pf-accent transition-colors"
					>
						<span>{item.label}</span>
						<span className="text-pf-dim">{item.value}</span>
					</a>
				))}
			</div>
		</section>
	)
}

export default Contact
