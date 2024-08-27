import { useRef } from "react";
import Background from "./components/misc/Background";
import ScrollSection from "./components/containers/ScrollSection";

function App() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<Background containerRef={containerRef} />

			<div
				className="scrollable"
				ref={containerRef}>
				<ScrollSection className="hero">
					<h1>Hero</h1>
				</ScrollSection>

				<ScrollSection className="about">
					<h1>About</h1>
				</ScrollSection>

				<ScrollSection className="tech-stack">
					<h1>Prev Work</h1>
				</ScrollSection>
				<ScrollSection className="Contacts">
					<h1>Contacts</h1>
				</ScrollSection>
			</div>
		</>
	);
}

export default App;
