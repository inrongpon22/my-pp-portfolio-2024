import React from "react"
import { cn } from "@/lib/utils"

interface TechIconProps {
	slug?: string
	src?: string
	className?: string
}

const TechIcon = ({ slug, src, className }: TechIconProps) => {
	const url = src ?? `https://cdn.jsdelivr.net/npm/simple-icons@13/icons/${slug}.svg`

	return (
		<span
			aria-hidden="true"
			className={cn("icon-mask inline-block w-3.5 h-3.5 bg-current shrink-0", className)}
			style={{
				WebkitMaskImage: `url(${url})`,
				maskImage: `url(${url})`,
			}}
		/>
	)
}

export default TechIcon
