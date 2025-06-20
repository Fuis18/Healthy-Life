import Link from "next/link";
import Image from "next/image";

interface ProductProps {
	title: string;
	foto: string;
	link: string;
	children: React.ReactNode;
}

const Product = ({ title, foto, link, children }: ProductProps) => {
	return (
		<div className="product">
			<Image
				src={foto}
				alt={title}
				width={400}
				height={300}
				className="product-img"
				priority={false}
			/>
			<h3 className="product-h3">{title}</h3>
			<div className="product-div">{children}</div>
			<Link className="product-link" href={link}>
				Información Nutricional
			</Link>
		</div>
	);
};

export default Product;
