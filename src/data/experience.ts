export interface TimelineEntry {
	type: "work" | "education" | "certification";
	title: string;
	organization: string;
	period: string;
	description?: string;
	tags?: string[];
}

export const timeline: TimelineEntry[] = [
	{
		type: "work",
		title: "Software Developer Consultant",
		organization: "UMN Solutions",
		period: "Present",
		description:
			"Building internal tools and client-facing applications at UMN Solutions, currently delivering projects for BNP Paribas. Started freelancing in 2023 and transitioned into consultancy.",
		tags: ["React", "Node.js", "TypeScript"],
	},
	{
		type: "education",
		title: "CS50's Introduction to Computer Science",
		organization: "Harvard Online",
		period: "2024",
		description:
			"Rigorous introduction to computer science covering algorithms, data structures, C, Python, SQL, and web development.",
	},
	{
		type: "certification",
		title: "Courses & Certifications",
		organization: "Boolean UK, Udemy, freeCodeCamp",
		period: "2022 - Present",
		description:
			"Intensive full-stack bootcamp (Boolean UK), advanced React patterns, Node.js APIs, neural networks and machine learning fundamentals -- continuously learning across platforms.",
	},
];
