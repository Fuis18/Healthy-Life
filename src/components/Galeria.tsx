import "@/styles/galeria.css";
import Image from "next/image";
const Galeria = () => {
	const width = 400;
	const height = 180;
	return (
		<div className="wrapper">
			<Image
				src="/packj(1).webp"
				alt="Healthy Life"
				width={width}
				height={height}
				className="item item1"
				loading="lazy"
			></Image>
			<Image
				src="/packj(2).webp"
				alt="Healthy Life"
				width={width}
				height={height}
				className="item item2"
				loading="lazy"
			></Image>
			<Image
				src="/packj(3).webp"
				alt="Healthy Life"
				width={width}
				height={height}
				className="item item3"
				loading="lazy"
			></Image>
			<Image
				src="/packj(4).webp"
				alt="Healthy Life"
				width={width}
				height={height}
				className="item item4"
				loading="lazy"
			></Image>
			<Image
				src="/packj(5).webp"
				alt="Healthy Life"
				width={width}
				height={height}
				className="item item5"
				loading="lazy"
			></Image>
			<Image
				src="/packj(6).webp"
				alt="Healthy Life"
				width={width}
				height={height}
				className="item item6"
				loading="lazy"
			></Image>
		</div>
	);
};

export default Galeria;
