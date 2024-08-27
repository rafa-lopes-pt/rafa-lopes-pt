import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Background({
	containerRef,
}: {
	containerRef: React.RefObject<HTMLDivElement>;
}) {
	const { scrollY, scrollYProgress } = useScroll({ container: containerRef });

	const [imgPos, setImgPos] = useState({ x: "0", y: "0" });

	useMotionValueEvent(scrollY, "change", (latest) => {
		const val = -latest / 300;
		console.log(val);
		setImgPos({
			//x: (val % 5 === 0 ? Math.cos(val) / 10 : Math.cos(val) / 5) + "%",
			x: "0",
			y: -val + "%",
		});
	});

	return (
		<motion.img
			className={`bg `}
			src="./bg.jpg"
			style={{
				translateX: imgPos.x,
				translateY: imgPos.y,
			}}
		/>
	);
}
