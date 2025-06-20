import Blog from "./ui/Blog";

const articles: string[] = [
	"por-qu%C3%A9-ofrecemos-mermelada-de-frutos-rojos-como-acompa%C3%B1ante-de-nuestros-postres",
	"7-tips-para-llevar-una-vida-saludable-y-disfrutar-el-proceso",
	"brownie-de-palta-nutrici%C3%B3n-y-sabor-en-un-solo-postre",
];

interface BlogPost {
	src: string;
	link: string;
	content: string;
}

const blogData: Record<string, BlogPost> = {
	"por-qu%C3%A9-ofrecemos-mermelada-de-frutos-rojos-como-acompa%C3%B1ante-de-nuestros-postres":
		{
			src: "/mermelada-de-frutos-rojos-sin-azucar.webp",
			link: "blogs/por-qué-ofrecemos-mermelada-de-frutos-rojos-como-acompañante-de-nuestros-postres",
			content:
				"¿Por qué ofrecemos mermelada de frutos rojos como acompañante de nuestros postres?",
		},
	"7-tips-para-llevar-una-vida-saludable-y-disfrutar-el-proceso": {
		src: "/alimentos-saludables-y-deporte.webp",
		link: "blogs/7-tips-para-llevar-una-vida-saludable-y-disfrutar-el-proceso",
		content:
			"7 Tips para Llevar una Vida Saludable (y Disfrutar el Proceso)",
	},
	"brownie-de-palta-nutrici%C3%B3n-y-sabor-en-un-solo-postre": {
		src: "/32752.jpg.webp",
		link: "blogs/brownie-de-palta-nutrición-y-sabor-en-un-solo-postre",
		content: "Brownie de Palta: nutrición y sabor en un solo postre",
	},
};

const MoreBlogs = ({ hiddenArticle }: { hiddenArticle: string }) => {
	const missing: string[] = articles.filter((e) => e != hiddenArticle);
	return (
		<div className="products blogs">
			{missing.map((e, i) => {
				const post = blogData[e];
				return (
					<Blog key={i} src={post.src} link={post.link}>
						{post.content}
					</Blog>
				);
			})}
		</div>
	);
};

export default MoreBlogs;
