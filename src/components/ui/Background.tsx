import Image from "next/image";

export default function Background({
	src,
	type,
	classname,
	children,
}: {
	src: string;
	type: "img" | "vid";
	classname?: string;
	children: React.ReactNode;
}) {
	return (
		<div className={`${classname} background`}>
			{type === "vid" ? (
				<video muted autoPlay loop playsInline>
					<source src={src as string} type="video/mp4" />
				</video>
			) : (
				<Image src={src} alt="background" priority />
			)}
			{children}
		</div>
	);
}
