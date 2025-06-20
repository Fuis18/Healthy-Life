import "@/styles/galeria.css";
import Image from "next/image";
const Galeria = () => {
	const width = 400;
	const height = 200;
	return (
		<div className="wrapper">
			<Image
				src="/packj(1).webp"
				alt="Healthy Life"
				width={width}
				height={height}
				className="item item1"
			></Image>
			<Image
				src="/packj(2).webp"
				alt="Healthy Life"
				width={width}
				height={height}
				className="item item2"
			></Image>
			<Image
				src="/packj(3).webp"
				alt="Healthy Life"
				width={width}
				height={height}
				className="item item3"
			></Image>
			<Image
				src="/packj(4).webp"
				alt="Healthy Life"
				width={width}
				height={height}
				className="item item4"
			></Image>
			<Image
				src="/packj(5).webp"
				alt="Healthy Life"
				width={width}
				height={height}
				className="item item5"
			></Image>
			<Image
				src="/packj(6).webp"
				alt="Healthy Life"
				width={width}
				height={height}
				className="item item6"
			></Image>
		</div>
	);
};

export default Galeria;
