"use client";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
	const [isModal, setModal] = useState(false);

	return (
		<div className="nav">
			<div
				className={
					isModal ? "navbar__links-block" : "navbar__links-hidden"
				}
			>
				<svg
					viewBox="0 0 24 24"
					width="30"
					height="30"
					className="nav-svg close"
					onClick={() => setModal(false)}
				>
					<path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
				</svg>
				<div className="nav-pages">
					<Link href="/#Productos" onClick={() => setModal(false)}>
						Productos
					</Link>
					<Link href="/#Galeria" onClick={() => setModal(false)}>
						Galería
					</Link>
					<Link href="/#Blog" onClick={() => setModal(false)}>
						Blog
					</Link>
					<Link
						onClick={() => setModal(false)}
						href="/#Sobre Nosotros"
					>
						Sobre Nosotros
					</Link>
				</div>
			</div>
			<div className="navbar_responsive" onClick={() => setModal(true)}>
				<svg
					viewBox="0 0 24 24"
					width="30"
					height="30"
					className="nav-svg mode"
				>
					<path d="M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"></path>
				</svg>
			</div>
		</div>
	);
};

export default Nav;
