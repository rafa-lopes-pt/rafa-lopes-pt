import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import Button from "../components/Buttons/Button";
import data from "./projects_data.json";

export default function Projects() {
	const ref = useRef<HTMLDivElement>(null);

	const [current, setCurrent] = useState(0);

	const { scrollX } = useScroll({ container: ref });

	useMotionValueEvent(scrollX, "change", (latest) => {
		const projectWidth = ref.current
			? ref.current?.clientWidth / data.length
			: null;
		if (!projectWidth) return;
		for (let i = 0; i < data.length; i++) {
			if (latest >= projectWidth * i && latest < projectWidth * (i + 1)) {
				setCurrent(i);
				return;
			}
		}
	});

	function handleScroll(i: number) {
		ref.current?.querySelectorAll("div")[i].scrollIntoView({
			behavior: "smooth",
			inline: "center",
			block: "center",
		});
	}

	return (
		<>
			<div
				className="projects__container"
				ref={ref}>
				{data.map((e, i) => (
					<div
						className="project"
						key={"personal-project-" + i}>
						<h1 id={e.title}>{e.title}</h1>

						<img
							src={e.img}
							alt="screenshot"
							className="project__screenshot"
						/>

						{e.description.map((e, j) => (
							<p
								className=""
								key={"personal-project-description-p-" + j}>
								{e}
							</p>
						))}

						<footer>
							<Button
								link={e.link}
								icon="website">
								Live Website
							</Button>
							<Button
								link={e.repo}
								icon="github">
								Github
							</Button>
						</footer>
					</div>
				))}
			</div>
			<nav>
				{data.map((e, i) => (
					<Button
						onClick={() => handleScroll(i)}
						variant={current === i ? "secondary" : "primary"}>
						{e.title}
					</Button>
				))}
			</nav>
		</>
	);
}
