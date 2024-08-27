import { motion } from "framer-motion";
import { ReactNode, RefObject } from "react";
export default function ScrollSection({
	children,
	className = "",
	root,
	backdrop,
}: {
	children: ReactNode;
	className?: string;
	root?: RefObject<Element>;
	backdrop?: boolean;
}) {
	return (
		<motion.section
			className={`scroll-section ${
				backdrop ? "scroll-section--backdrop" : ""
			} ${className} `}
			whileInView={{ opacity: 1, scale: 1 }}
			initial={{ opacity: 0, scale: 0.85 }}
			transition={{ ease: "easeInOut" }}
			exit={{ opacity: 0, scale: 0.85 }}
			viewport={{ amount: 0.95, root, margin: "0px" }}>
			{children}
		</motion.section>
	);
}
