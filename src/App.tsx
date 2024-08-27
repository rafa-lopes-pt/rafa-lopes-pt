import { useRef } from "react";
import Background from "./components/misc/Background";
import ScrollSection from "./components/containers/ScrollSection";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";

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
					className="projects"
					backdrop>
					<Projects />
				</ScrollSection>

				<ScrollSection className="contacts">
					<Contacts />
				</ScrollSection>
			</div>
		</>
	);
}

export default App;
