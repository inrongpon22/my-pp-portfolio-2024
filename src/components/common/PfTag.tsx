import React from "react"
import { cn } from "@/lib/utils"

interface PfTagProps {
	name: string
	closing?: boolean
	className?: string
}

const PfTag = ({ name, closing, className }: PfTagProps) => {
	return (
		<h1 className={cn("html-tag text-pf-accent", className)}>
			<span className="text-pf-faint">{closing ? "</" : "<"}</span>
			{name}
			<span className="text-pf-faint">{">"}</span>
		</h1>
	)
}

export default PfTag
