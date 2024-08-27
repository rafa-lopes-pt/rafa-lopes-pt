import { ReactNode } from "react";

const ICONS = {
	linkedin: "fa-brands fa-linkedin",
	github: "fa-brands fa-github",
	email: "fa-solid fa-envelope",
	stackoverflow: "fa-brands fa-stack-overflow",
	website: "fa-solid fa-globe",
	download: "fa-solid fa-download",
} as const;

export default function Button({
	link,
	className = "",
	children,
	icon,
	variant = "primary",
	onClick,
}: {
	link?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
	children: ReactNode;
	icon?: keyof typeof ICONS;
	variant?: "primary" | "secondary" | "link";
}) {
	if (onClick) {
		return (
			<button
				className={`link link--${variant} ${className}`}
				onClick={(e) => onClick(e)}>
				{icon && <i className={ICONS[icon]} />}

				<span>{children}</span>
			</button>
		);
	}

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
