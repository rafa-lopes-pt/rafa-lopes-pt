import { useRef } from "react";
import Background from "./components/misc/Background";
import ScrollSection from "./components/containers/ScrollSection";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<Background containerRef={containerRef} />

			<div
				className="scrollable"
				ref={containerRef}>
				<ScrollSection className="hero">
					<Hero />
				</ScrollSection>

				<ScrollSection
					className="about"
					backdrop>
					<About />
				</ScrollSection>

				<ScrollSection
					className="tech-stack"
					backdrop>
					<h1 id="projects">Projects</h1>
				</ScrollSection>

				<ScrollSection className="Contacts" >
					<Contacts />
				</ScrollSection>
			</div>
		</>
	);
}

export default App;
