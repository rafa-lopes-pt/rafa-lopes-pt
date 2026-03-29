export interface Skill {
	name: string;
	color: string;
}

export interface SkillCategory {
	label: string;
	skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
	{
		label: "Top Languages/Frameworks",
		skills: [
			{ name: "TypeScript", color: "accent-blue" },
			{ name: "Node.js", color: "accent-green" },
			{ name: "C", color: "accent-purple" },
			{ name: "Rust", color: "accent-orange" },
		],
	},
	{
		label: "Tools",
		skills: [
			{ name: "Git", color: "text-body" },
			{ name: "Docker", color: "accent-cyan" },
			{ name: "tmux", color: "accent-green" },
			{ name: "Claude", color: "accent-orange" },
		],
	},
	{
		label: "Databases",
		skills: [
			{ name: "PostgreSQL", color: "accent-blue" },
			{ name: "MongoDB", color: "accent-green" },
			{ name: "Redis", color: "accent-red" },
		],
	},
];
