import Link from "next/link";

const Share = ({ href }: { href: string }) => {
	return (
		<div className="social-share">
			<h3>Compartir esta publicación</h3>
			<div className="social-share-links">
				<Link
					aria-label="Compartir en Pinterest"
					href={`https://pinterest.com/pin/create/button/?url=https%3A%2F%2F49729097.hs-sites.com%2F${href}`}
				>
					<svg aria-hidden="true" viewBox="0 0 496 512">
						<path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
					</svg>
				</Link>
				<Link
					href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F49729097.hs-sites.com%2F${href}`}
				>
					<svg
						aria-hidden="true"
						version="1.0"
						viewBox="0 0 320 512"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
					</svg>
				</Link>
				<Link
					aria-label="Compartir en LinkedIn"
					href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2F49729097.hs-sites.com%2F${href}`}
				>
					<svg aria-hidden="true" viewBox="0 0 448 512">
						<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
					</svg>
				</Link>
				<Link
					aria-label="Compartir en X"
					href={`https://x.com/intent/tweet?url=https%3A%2F%2F49729097.hs-sites.com%2F${href}`}
				>
					<svg aria-hidden="true" viewBox="0 0 512 512">
						<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
					</svg>
				</Link>
				<Link
					aria-label="Compartir a través de correo electrónico"
					href={`mailto:https%3A%2F%2F49729097.hs-sites.com%2F${href}`}
				>
					<svg aria-hidden="true" viewBox="0 0 512 512">
						<path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default Share;
