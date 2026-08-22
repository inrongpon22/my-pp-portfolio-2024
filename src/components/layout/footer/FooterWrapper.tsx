"use client"
import React from "react"
import moment from "moment"
import Contact from "@/components/home/Contact"
import PfTag from "@/components/common/PfTag"

const FooterWrapper = () => {
	return (
		<div id="footer">
			<PfTag name="footer" className="mb-11 block" />
			<Contact />
			<div className="flex items-baseline justify-between flex-wrap gap-4 mt-20 pt-8 border-t border-pf-line">
				<PfTag name="footer" closing />
				<span className="text-[13px] text-pf-dim">
					{moment().year()} © made by Phanupong
				</span>
			</div>
		</div>
	)
}

export default FooterWrapper
