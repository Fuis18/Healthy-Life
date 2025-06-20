import Blog from "./ui/Blog";

const Blogs = () => {
	return (
		<div className="products blogs">
			<Blog
				src="/mermelada-de-frutos-rojos-sin-azucar.webp"
				link="blogs/por-qué-ofrecemos-mermelada-de-frutos-rojos-como-acompañante-de-nuestros-postres"
			>
				¿Por qué ofrecemos mermelada de frutos rojos como acompañante de
				nuestros postres?
			</Blog>
			<Blog
				src="/alimentos-saludables-y-deporte.webp"
				link="blogs/7-tips-para-llevar-una-vida-saludable-y-disfrutar-el-proceso"
			>
				7 Tips para Llevar una Vida Saludable (y Disfrutar el Proceso)
			</Blog>
			<Blog
				src="/32752.jpg.webp"
				link="blogs/brownie-de-palta-nutrición-y-sabor-en-un-solo-postre"
			>
				Brownie de Palta: nutrición y sabor en un solo postre
			</Blog>
		</div>
	);
};

export default Blogs;
