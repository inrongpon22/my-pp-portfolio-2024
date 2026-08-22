"use client"

import React from "react"

interface NavItem {
	key: string
	href: string
	title: string
}

const items: NavItem[] = [
	{ key: "tools", href: "#tools", title: "tools" },
	{ key: "work-experience", href: "#work-experience", title: "work-experience" },
	{ key: "projects", href: "#projects", title: "projects" },
	{ key: "contact", href: "#contact", title: "contact" },
]

const HeaderWrapper = () => {
	return (
		<header className="sticky top-0 z-20 border-b border-pf-line bg-pf-bg/90 backdrop-blur">
			<div className="max-w-[1160px] mx-auto flex items-center justify-between gap-5 py-[26px] px-4 font-mono">
				<a href="#home" className="text-[13px] tracking-[0.02em] text-pf-ink">
					phanupong<span className="text-pf-accent">.dev</span>
				</a>
				<nav className="hidden nav:flex gap-6 text-xs">
					{items.map((item) => (
						<a
							key={item.key}
							href={item.href}
							className="text-pf-muted hover:text-pf-ink transition-colors"
						>
							{item.title}
						</a>
					))}
				</nav>
			</div>
		</header>
	)
}

export default HeaderWrapper
