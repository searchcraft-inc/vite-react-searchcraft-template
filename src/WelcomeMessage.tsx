import type { FC } from "react";

export const WelcomeMessage: FC = () => (
	<section style={{ maxWidth: 700 }}>
		<div className="welcome-placeholder">
			Search components will render here when .env variables are added.
		</div>

		<div className="welcome-message">
			<p className="welcome-title">
				🛰️ Welcome, pilot — we're glad to have you aboard.
			</p>
			<p className="welcome-body">
				To begin your mission, you'll need a search index. Head to{" "}
				<a
					href="https://vektron.searchcraft.io"
					target="_blank"
					rel="noopener noreferrer"
					className="welcome-link"
				>
					Vektron ↗︎
				</a>
				, your command center for creating and configuring indexes, managing
				settings, and navigating all things Searchcraft.
			</p>
			<p>
				Once your index is configured, add an .env file in this project's root
				with the variables from Vektron.
			</p>

			<pre
				style={{
					backgroundColor: "#1b1b1b",
					padding: "1rem",
					borderRadius: 10,
				}}
			>
				{"VITE_ENDPOINT_URL= \nVITE_INDEX_NAME= \nVITE_READ_KEY="}
			</pre>
			<p>Now, go forth and query!</p>
		</div>
	</section>
);
