"use client"

import React from "react"
import PfTag from "@/components/common/PfTag"

const SubHeaderWrapper = () => {
	return (
		<div id="home" className="scroll-mt-24">
			<PfTag name="html" className="pt-10" />
			<header className="pb-16 pt-10 border-b border-pf-line">
				<PfTag name="header" className="mb-11 block" />

				<div className="flex items-center gap-2.5 font-mono text-xs text-pf-accent mb-7">
					<span className="w-[7px] h-[7px] rounded-full bg-pf-accent animate-blink" />
					<span>open to new roles — Chiang Mai, Thailand.</span>
				</div>

				<h1 className="font-mono font-bold leading-[0.92] tracking-[-0.045em] text-[clamp(2.75rem,8.5vw,7.25rem)]">
					Phanupong
					<br />
					<span className="text-pf-dim">Inrongpon</span>
				</h1>

				<div className="flex flex-wrap gap-3 mt-12 font-mono text-sm">
					<a
						href="mailto:inrongpon.phanupong2@gmail.com"
						className="flex items-center min-h-[46px] px-5 border border-pf-accent text-pf-accent rounded-sm hover:bg-pf-accent hover:text-pf-bg transition-colors"
					>
						email me →
					</a>
					<a
						href="https://github.com/inrongpon22"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center min-h-[46px] px-5 border border-pf-lineSoft text-pf-body rounded-sm hover:border-pf-muted transition-colors"
					>
						github
					</a>
					<a
						href="https://www.linkedin.com/in/phanupong-inrongpon-6aa97b25a"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center min-h-[46px] px-5 border border-pf-lineSoft text-pf-body rounded-sm hover:border-pf-muted transition-colors"
					>
						linkedin
					</a>
				</div>

				<PfTag name="header" closing className="mt-14 block" />
			</header>
		</div>
	)
}

export default SubHeaderWrapper
