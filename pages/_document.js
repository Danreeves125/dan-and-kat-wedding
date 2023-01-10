import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Balthazar&family=Great+Vibes&family=Open+Sans:wght@400;500;600;700;900&display=swap" rel="stylesheet" />

				<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByRJclZNrgSoheegP3cACOQD8HWCjerqk"></script>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
