import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
	title: "Healthy Life",
	description: "Healthy Life",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<head></head>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
