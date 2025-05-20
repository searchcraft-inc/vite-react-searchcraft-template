import { useEffect, useMemo } from "react";
import {
	Searchcraft,
	SearchcraftSearchResults,
	SearchcraftInputForm,
	SearchcraftTheme,
} from "@searchcraft/react-sdk";

import reactLogo from "./assets/react.svg";
import searchcraftLogo from "./assets/searchcraft.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ExampleSearchResultTemplate } from "./ExampleSearchResultTemplate";

const INDEX_NAME = import.meta.env.VITE_INDEX_NAME;
const READ_KEY = import.meta.env.VITE_READ_KEY;
const ENDPOINT_URL = import.meta.env.VITE_ENDPOINT_URL;

function App() {
	const hasEnvVars = useMemo(() => INDEX_NAME && READ_KEY && ENDPOINT_URL, []);

	useEffect(() => {
		if (hasEnvVars) {
			new Searchcraft({
				readKey: READ_KEY,
				endpointURL: ENDPOINT_URL,
				index: [INDEX_NAME],
			});
		}
	}, [hasEnvVars]);

	return (
		<>
			<header className="top">
				<div>
					<a href="https://vite.dev" target="_blank">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
					<a href="https://searchcraft.io" target="_blank">
						<img
							src={searchcraftLogo}
							className="logo react"
							alt="React logo"
						/>
					</a>
				</div>
				<h1>Vite + React + Searchcraft</h1>
			</header>

			{hasEnvVars && (
				<section style={{ maxWidth: 700 }}>
					<div style={{ marginBottom: 20 }}>
						<SearchcraftInputForm
							autoSearch={true}
							placeholderValue={"Search"}
						/>
					</div>
					<SearchcraftSearchResults template={ExampleSearchResultTemplate} />
					<p className="read-the-docs">Enter a search to get started.</p>
					<SearchcraftTheme />
				</section>
			)}
			{!hasEnvVars && (
				<section style={{ maxWidth: 700 }}>
					<div>
						Please add your `.env` variables from Vektron to get started. Once
						your env is added, a text input and search results will be rendered
						here.
					</div>
					<pre>{"VITE_ENDPOINT_URL= \nVITE_INDEX_NAME= \nVITE_READ_KEY="}</pre>
				</section>
			)}
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
		</>
	);
}

export default App;
