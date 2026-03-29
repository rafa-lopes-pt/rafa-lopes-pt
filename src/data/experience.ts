export interface TimelineEntry {
	type: "work" | "education" | "certification";
	title: string;
	organization: string;
	period: string;
	color: string;
	description?: string;
	tags?: string[];
}

export const timeline: TimelineEntry[] = [
	{
		type: "education",
		title: "Computer Science & Engineering Degree",
		organization: "Instituto Superior Tecnico, Lisbon",
		period: "September 2026",
		color: "accent-purple",
		description:
			"Next step in strengthening my computer science fundamentals and bridging the gap between hands-on industry work and formal academic training.",
		tags: ["Mathematics", "Algorithms & Data Structures", "Machine Learning", "Computer Graphics"],
	},
	{
		type: "work",
		title: "Software Developer Consultant",
		organization: "UMN Solutions",
		period: "Present",
		color: "accent-blue",
		description:
			"Building internal tools and client-facing applications at UMN Solutions, currently delivering projects for BNP Paribas. Started freelancing in 2023 and transitioned into consultancy.",
		tags: ["TypeScript", "Node.js", "Azure", "SharePoint", "Rust", "Project Management", "Stakeholder Communication"],
	},
	{
		type: "education",
		title: "CS50's Introduction to Computer Science",
		organization: "Harvard Online",
		period: "2024",
		color: "accent-red",
		description:
			"Rigorous introduction to computer science covering algorithms, data structures, C, SQL, and web development.",
		tags: ["Data Structures", "C", "SQL"],
	},
	{
		type: "certification",
		title: "Courses & Certifications",
		organization: "Boolean UK, Udemy, freeCodeCamp",
		period: "2022 - Present",
		color: "accent-yellow",
		description:
			"Intensive full-stack bootcamp (Boolean UK), advanced React patterns, Node.js APIs, neural networks and machine learning fundamentals -- continuously learning across platforms.",
	},
];
