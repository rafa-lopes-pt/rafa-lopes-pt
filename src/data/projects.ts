export interface Project {
	title: string;
	filename: string;
	description: string;
	tech: string[];
	github?: string;
	live?: string;
	npm?: string;
}

export const projects: Project[] = [
	{
		title: "Claude Instance Monitor",
		filename: "claude-monitor.ts",
		description:
			"A terminal UI (TUI) for Linux to monitor multiple Claude Code instances in real-time. Displays resource usage, session activity, and instance health at a glance -- built to scratch my own itch managing parallel AI-assisted workflows.",
		tech: ["TypeScript", "Node.js", "Linux", "TUI"],
		github: "https://github.com/rafa-lopes-pt/claude-instance-monitor",
	},
	{
		title: "AI Driving Project",
		filename: "ai-driving.ts",
		description:
			"Neural network that learns to drive through a simulated environment, built as part of the freeCodeCamp machine learning curriculum. Implements forward propagation, mutation, and a visual training loop -- a hands-on dive into ML fundamentals.",
		tech: ["TypeScript", "Neural Networks", "Canvas API"],
		github: "https://github.com/rafa-lopes-pt/ai-driving-project",
	},
	{
		title: "Tea Shop",
		filename: "tea-shop.tsx",
		description:
			"Full-stack MERN e-commerce app built in progressive stages (stage 0 through 2) to demonstrate growth from junior-level code to a production-ready, refactored project. Features Stripe payments, JWT auth, CI/CD pipeline, and comprehensive testing.",
		tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Jest"],
		github: "https://github.com/rafa-lopes-pt/tea-shop",
		live: "https://tea-shop-rafa-lopes-pt.netlify.app",
	},
	{
		title: "Simple HTTP Codes",
		filename: "http-codes.ts",
		description:
			"Published npm utility package that exports HTTP status codes organized by category with full JSDoc documentation, based on RFC 9110. A focus on developer experience, clean API design, and open-source contribution.",
		tech: ["TypeScript", "npm", "JSDoc", "RFC 9110"],
		github: "https://github.com/rafa-lopes-pt/simple-http-codes",
		npm: "https://www.npmjs.com/package/simple-http-codes",
	},
];
