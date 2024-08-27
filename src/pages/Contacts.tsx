import Button from "../components/Buttons/Button";

export default function Contacts() {
	return (
		<>
			<ul className="contacts__list">
				<li>
					<Button
						icon="linkedin"
						link="https://www.linkedin.com/in/rafael-lopes-software-developer/">
						LinkedIn
					</Button>
				</li>
				<li>
					<Button
						icon="github"
						link="https://github.com/rafa-lopes-pt">
						Github
					</Button>
				</li>
				<li>
					<Button
						icon="email"
						link="mailto:rafalopessecond@gmail.com">
						Email
					</Button>
				</li>
				<li>
					<Button
						icon="stackoverflow"
						link="https://stackoverflow.com/users/22510505/rafa-lopes">
						Stack Overflow
					</Button>
				</li>
				<li>
					<Button
						icon="download"
						link="./Rafael_Lopes_Fullstack_Developer_CV.pdf">
						Download CV
					</Button>
				</li>
			</ul>
		</>
	);
}
