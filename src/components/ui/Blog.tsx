import Link from "next/link";
import Image from "next/image";

export default function Blog({
	src,
	link,
	children,
}: {
	src: string;
	link: string;
	children: React.ReactNode;
}) {
	return (
		<Link href={`/${link}`} className="blog-card">
			<Image
				className="blog-img"
				src={src}
				alt=""
				width={960}
				height={640}
			/>
			<h3>{children}</h3>
		</Link>
	);
}
