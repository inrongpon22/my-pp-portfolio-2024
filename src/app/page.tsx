"use client"

import React, { Suspense } from "react"
// components
import HeaderWrapper from "@/components/layout/header/HeaderWrapper"
import FooterWrapper from "@/components/layout/footer/FooterWrapper"
import SubHeaderWrapper from "@/components/home/SubHeaderWrapper"
import ProjectsWrapper from "@/components/home/ProjectsWrapper"
import WorkExperience from "@/components/home/WorkExperience"
import Tools from "@/components/home/Tools"
import FloatingActionButtons from "@/components/common/FloatingActionButtons"
import FadeInOnScroll from "@/components/common/FadeInOnScroll"
import PfTag from "@/components/common/PfTag"

const LoadingSpinner = () => (
	<div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
		<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-400"></div>
	</div>
)

export default function Home() {
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<div className="relative w-full h-full bg-pf-bg text-pf-ink min-h-screen">
				<HeaderWrapper />
				<div className="max-w-[1160px] mx-auto px-4">
					<div className="flex flex-col gap-16 sm:gap-20">
						<FadeInOnScroll>
							<SubHeaderWrapper />
						</FadeInOnScroll>

						<FadeInOnScroll>
							<Tools />
						</FadeInOnScroll>

						<FadeInOnScroll>
							<WorkExperience />
						</FadeInOnScroll>

						<FadeInOnScroll>
							<ProjectsWrapper />
						</FadeInOnScroll>

						<FadeInOnScroll>
							<FooterWrapper />
						</FadeInOnScroll>
					</div>
					<PfTag name="html" closing className="block py-14" />
				</div>
				<FloatingActionButtons />
			</div>
		</Suspense>
	)
}
