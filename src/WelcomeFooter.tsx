import type { FC } from "react";

export const WelcomeFooter: FC = () => (
	<footer
		style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.9rem" }}
	>
		<nav style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
			<a
				href="https://docs.searchcraft.io"
				target="_blank"
				rel="noopener noreferrer"
			>
				📘 Docs
			</a>
			<a
				href="https://vektron.searchcraft.io"
				target="_blank"
				rel="noopener noreferrer"
			>
				🛰️ Vektron
			</a>
			<a
				href="https://discord.gg/WteTxPBM"
				target="_blank"
				rel="noopener noreferrer"
			>
				💬 Discord
			</a>
			<a
				href="https://www.npmjs.com/package/@searchcraft/react-sdk"
				target="_blank"
				rel="noopener noreferrer"
			>
				🧪 SDK on npm
			</a>
		</nav>
	</footer>
);
