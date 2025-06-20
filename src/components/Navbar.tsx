import Image from "next/image";
import Link from "next/link";
import Reserve from "../components/ui/Reserve";
import Nav from "../components/ui/Nav";
import "@/styles/header.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<Link href="/" className="navbar-logo">
				<Image
					src="/logo.webp"
					priority={true}
					alt="Healthy Life"
					width={80}
					height={80}
				></Image>
			</Link>
			<Reserve mode={false} />
			<Nav></Nav>
		</div>
	);
};

export default Navbar;
