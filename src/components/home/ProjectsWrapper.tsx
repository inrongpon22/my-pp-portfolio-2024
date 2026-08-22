"use client"

import React from "react"
import Image from "next/image"
import getProjectsData, { ProjectProps, Responsibilities } from "./getProjects"
import PfTag from "@/components/common/PfTag"

const ProjectCard = ({ item }: { item: ProjectProps }) => {
	const hasShot = Boolean(item.previewImg)
	const link = item.source.length > 0 ? item.source[0] : undefined
	const linkLabel = link?.includes("github.com") ? "github" : "visit"

	return (
		<article className="flex flex-col border border-pf-line rounded-sm overflow-hidden bg-pf-panel hover:border-pf-muted transition-colors">
			<div className="relative aspect-[16/10] border-b border-pf-line overflow-hidden bg-pf-raise">
				{hasShot ? (
					<Image
						src={item.previewImg}
						alt={item.title}
						fill
						loading="lazy"
						className="object-cover object-left-top"
					/>
				) : (
					<div className="pf-stripe absolute inset-0 flex items-center justify-center">
						<span className="font-mono text-[11px] text-pf-muted bg-pf-bg px-3 py-1.5 rounded-sm">
							under NDA
						</span>
					</div>
				)}
			</div>
			<div className="flex flex-col gap-3 flex-1 px-6 pt-6 pb-[26px]">
				<div className="flex flex-wrap gap-1.5">
					{item.responsibilities.map((responsibility: Responsibilities) => (
						<span
							key={responsibility}
							className="font-mono text-[10px] tracking-[0.1em] uppercase text-pf-amber border border-pf-lineSoft rounded-sm px-2 py-1"
						>
							{responsibility}
						</span>
					))}
				</div>
				<h3 className="mt-0.5 text-[22px] tracking-[-0.02em] font-bold">
					{item.title}
				</h3>
				<p className="text-[14.5px] leading-[1.6] text-pf-muted flex-1">
					{item.description}
				</p>
				{link && (
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="font-mono text-xs text-pf-accent hover:text-pf-accentHi mt-1.5"
					>
						{linkLabel} ↗
					</a>
				)}
			</div>
		</article>
	)
}

const ProjectsWrapper = () => {
	return (
		<div id="projects" className="scroll-mt-24">
			<PfTag name="projects" className="mb-11 block" />
			<div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
				<h2 className="font-mono font-bold tracking-[-0.035em] text-[clamp(2rem,4vw,3rem)]">
					Selected work
				</h2>
				<p className="font-mono text-xs text-pf-dim">
					{getProjectsData.length} products
				</p>
			</div>
			<div className="grid grid-cols-1 nav:grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-7">
				{getProjectsData.map((item: ProjectProps, index: number) => (
					<ProjectCard key={index} item={item} />
				))}
			</div>
			<PfTag name="projects" closing className="mt-12 block" />
		</div>
	)
}

export default ProjectsWrapper
