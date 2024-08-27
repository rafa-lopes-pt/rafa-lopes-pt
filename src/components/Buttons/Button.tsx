import { ReactNode } from "react";

const ICONS = {
	linkedin: "fa-brands fa-linkedin",
	github: "fa-brands fa-github",
	email: "fa-solid fa-envelope",
	stackoverflow: "fa-brands fa-stack-overflow",
	website: "fa-solid fa-globe",
} as const;

export default function Button({
	link,
	className = "",
	children,
	icon,
	variant = "primary",
}: {
	link?: string;
	className?: string;
	children: ReactNode;
	icon?: keyof typeof ICONS;
	variant?: "primary" | "link";
}) {
	return (
		<a
			className={`link link--${variant} ${className}`}
			href={link}
			target="_blank">
			{icon && <i className={ICONS[icon]} />}

			<span>{children}</span>
		</a>
	);
}
