// import type { Metadata } from "next";
import { use } from "react";
import Background from "@/components/ui/Background";
import Share from "@/components/Share";
import MoreBlogs from "@/components/MoreBlogs";

interface BlogContent {
	type: "p" | "h" | "l"; // paragraph, heading, list item
	content: string;
}

interface BlogPost {
	title: string;
	img: string;
	author: string;
	date: string;
	description?: string; // Optional since not all posts have it
	content: BlogContent[];
}

const blogData: Record<string, BlogPost> = {
	"por-qu%C3%A9-ofrecemos-mermelada-de-frutos-rojos-como-acompa%C3%B1ante-de-nuestros-postres":
		{
			title: "¿Por qué ofrecemos mermelada de frutos rojos como acompañante de nuestros postres?",
			img: "/mermelada-de-frutos-rojos-sin-azucar.webp",
			author: "Miguel Forfui",
			date: "5 de junio de 2025",
			description:
				"Descubre por qué la mermelada de frutos rojos es el complemento perfecto para nuestros brownies de palta: sabor, contraste y equilibrio.",
			content: [
				{
					type: "p",
					content:
						"En <b>Healthy Life</b>, cada detalle cuenta. Por eso, además de crear postres saludables como nuestros brownies de palta, también pensamos en esos pequeños complementos que pueden transformar una buena experiencia en una extraordinaria. Y ahí entra nuestra <b>mermelada natural de frutos rojos:</b> un acompañante pensado para sumar sabor, color y beneficios a tus momentos dulces.",
				},
				{ type: "h", content: "1. Un contraste delicioso y natural" },
				{
					type: "p",
					content:
						"Los frutos rojos aportan un toque ácido y fresco que equilibra perfectamente la intensidad del cacao. No compiten entre sí: se complementan. La dulzura suave del brownie y la vivacidad de la mermelada se unen para ofrecer una experiencia más rica y armoniosa.",
				},
				{ type: "h", content: "1. Un contraste delicioso y natural" },
				{
					type: "p",
					content:
						"Los frutos rojos aportan un toque ácido y fresco que equilibra perfectamente la intensidad del cacao. No compiten entre sí: se complementan. La dulzura suave del brownie y la vivacidad de la mermelada se unen para ofrecer una experiencia más rica y armoniosa.",
				},
				{ type: "h", content: "2. Ingredientes limpios, sabor real" },
				{
					type: "p",
					content:
						"Nuestra mermelada está elaborada con frutos rojos seleccionados, sin azúcares refinados ni aditivos innecesarios. Solo fruta, un toque de dulzor natural y mucha dedicación. Es una opción deliciosa que respeta tu estilo de vida saludable.",
				},
				{ type: "h", content: "3. Visualmente irresistible" },
				{
					type: "p",
					content:
						"Más allá del sabor, también comemos con los ojos. El color intenso y brillante de los frutos rojos añade un toque visual atractivo a cualquier postre, haciéndolo más apetecible y especial.",
				},
				{
					type: "h",
					content: "4. Libertad para disfrutar a tu manera",
				},
				{
					type: "p",
					content:
						"No todos queremos lo mismo, y eso está bien. Por eso la mermelada se ofrece <b>por separado</b>, para que tú decidas si deseas disfrutarla y cómo hacerlo: sobre tu brownie, mezclada con yogur, en tostadas integrales o en un bowl de desayuno. Tú creas tu experiencia.",
				},
				{ type: "h", content: "En resumen:" },
				{
					type: "p",
					content:
						"Nuestra mermelada de frutos rojos no está dentro del brownie, pero puede ser su mejor compañera. Porque en Healthy Life creemos que el bienestar también se encuentra en esos pequeños placeres cotidianos… y acompañarlos bien es una forma de cuidarte.",
				},
			],
		},
	"7-tips-para-llevar-una-vida-saludable-y-disfrutar-el-proceso": {
		title: "7 Tips para Llevar una Vida Saludable (y Disfrutar el Proceso)",
		img: "/alimentos-saludables-y-deporte.webp",
		author: "Miguel Forfui",
		date: "4 de junio de 2025",
		content: [
			{
				type: "p",
				content:
					"Hoy más que nunca, muchas personas buscan mejorar su estilo de vida, alimentarse mejor y sentirse bien tanto por dentro como por fuera. En <b>Healthy Life</b> creemos que llevar una vida saludable no se trata de sacrificios extremos, sino de decisiones conscientes, sostenibles y placenteras. Aquí te compartimos 7 tips que te ayudarán a lograrlo:",
			},
			{ type: "h", content: "1. Empieza con pequeños cambios" },
			{
				type: "p",
				content:
					"No necesitas transformarlo todo de un día para otro. Comienza con acciones simples: tomar más agua, moverte 15 minutos diarios o elegir un snack natural en vez de uno procesado (como nuestros brownies de palta 😉).",
			},
			{ type: "h", content: "2. Elige alimentos reales" },
			{
				type: "p",
				content:
					"Opta por ingredientes frescos, sin procesar y ricos en nutrientes. Frutas, verduras, legumbres, cereales integrales, frutos secos y grasas saludables son la base de una alimentación equilibrada.",
			},
			{ type: "h", content: "3. Escucha a tu cuerpo" },
			{
				type: "p",
				content:
					"Come cuando tengas hambre real, descansa cuando lo necesites y presta atención a cómo reacciona tu cuerpo ante ciertos alimentos o rutinas. El bienestar empieza por conocerte y respetarte.",
			},
			{ type: "h", content: "4. Muévete de forma constante" },
			{
				type: "p",
				content:
					"No necesitas rutinas intensas. Actividades como caminar, bailar, hacer yoga o subir escaleras cuentan. La clave es moverse todos los días y disfrutarlo, no forzarse.",
			},
			{ type: "h", content: "5. Come bien, con atención y sin apuros" },
			{
				type: "p",
				content:
					"Alimentarse saludablemente también implica cuidar el momento de la comida. Comer despacio, masticar con calma y evitar distracciones ayuda a mejorar la digestión y a disfrutar verdaderamente de lo que comes.",
			},
			{ type: "h", content: "6. Cuida tu salud mental" },
			{
				type: "p",
				content:
					"Dormir bien, desconectarte del celular, pasar tiempo en la naturaleza o simplemente respirar profundo pueden mejorar tu bienestar. Tu salud emocional es igual de importante que la física.",
			},
			{ type: "h", content: "7. Sé constante, no perfecto" },
			{
				type: "p",
				content:
					"La perfección no es el objetivo. Se trata de crear hábitos sostenibles, permitirte momentos de disfrute y seguir avanzando sin culpas. Una vida saludable es la que se adapta a ti, no al revés.",
			},
			{
				type: "p",
				content:
					"En <b>Healthy Life</b>, te acompañamos con productos que buscan nutrir y conectar contigo. Porque cuidarte no tiene que ser complicado, sino real, consciente y delicioso. 🌿✨",
			},
		],
	},
	"brownie-de-palta-nutrici%C3%B3n-y-sabor-en-un-solo-postre": {
		title: "Brownie de Palta: nutrición y sabor en un solo postre",
		img: "/32752.jpg.webp",
		author: "Miguel Forfui",
		date: "2 de junio de 2025",
		content: [
			{
				type: "h",
				content: "¿Un brownie que cuida de ti? Sí, es posible.",
			},
			{
				type: "p",
				content:
					"En un mundo donde buscamos cada vez más alimentarnos mejor, aparecen nuevas formas de disfrutar sin dejar de cuidarnos. En nuestro caso, quisimos ir más allá y crear un postre que realmente combine lo mejor de dos mundos: <b>salud y sabor.</b> Así nace nuestro <b>brownie de palta</b>, una alternativa deliciosa, natural y diferente.",
			},
			{ type: "h", content: "¿Por qué elegimos la palta?" },
			{
				type: "p",
				content:
					"La palta no solo es nutritiva, es un superalimento. Rica en <b>grasas saludables</b>, fibra, <b>antioxidantes y vitamina E</b>, es ideal para mantener una alimentación equilibrada. En nuestro brownie, la usamos como base para lograr una textura suave, cremosa y húmeda —sin necesidad de mantequilla ni aditivos artificiales.",
			},
			{
				type: "p",
				content:
					"El resultado es un brownie más saludable, hecho con <b>ingredientes reales</b>, y con el sabor intenso que esperas de un buen postre.",
			},
			{
				type: "h",
				content: "Lo que hace único a nuestro brownie de palta:",
			},
			{
				type: "l",
				content:
					"Preparado con ingredientes naturales y sin conservantes",
			},
			{
				type: "l",
				content: "Bajo en grasas saturadas, alto en valor nutritivo",
			},
			{ type: "l", content: "Textura suave, sabor intenso a chocolate" },
			{
				type: "l",
				content:
					"Perfecto para quienes buscan comer mejor sin dejar de disfrutar",
			},
			{
				type: "h",
				content: "Ideal para acompañar tu estilo de vida saludable",
			},
			{
				type: "p",
				content: "Nuestro brownie de palta es perfecto para:",
			},
			{
				type: "l",
				content:
					"<b>Recargar energías después del ejercicio:</b> Una opción nutritiva para reponer fuerzas sin caer en azúcares procesados.",
			},
			{
				type: "l",
				content:
					"<b>Iniciar tu día con equilibrio:</b> Incorpóralo en tu rutina matutina como un snack natural y saciante.",
			},
			{
				type: "l",
				content:
					"<b>Sustituir postres convencionales:</b> Elige una alternativa más saludable, sin renunciar al sabor intenso del chocolate.",
			},
		],
	},
};

// type Props = {
// 	params: { param: string };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
// 	const { param } = params;
// 	const post = blogData[param];

// 	if (!post) {
// 		return {
// 			title: "Artículo no encontrado",
// 			description: "Este artículo no existe o fue eliminado.",
// 		};
// 	}

// 	return {
// 		title: post.title,
// 		description: post.description,
// 		authors: [{ name: post.author }],
// 		openGraph: {
// 			title: post.title,
// 			description: post.description,
// 			images: [post.img],
// 		},
// 		twitter: {
// 			card: "summary_large_image",
// 			title: post.title,
// 			description: post.description,
// 			images: [post.img],
// 		},
// 	};
// }

export default function Page({
	params,
}: {
	params: Promise<{ param: string }>;
}) {
	const { param } = use(params);

	const post = blogData[param];

	return (
		<>
			<Background type="img" src={post.img}>
				{" "}
			</Background>
			<main>
				<div className="blog-main">
					<h1>{post.title}</h1>
					<div className="blog-meta">
						<div>{post.author}</div>
						<div>|</div>
						<div>{post.date}</div>
					</div>
					<article>
						{post.content.map(
							(
								{
									type,
									content,
								}: { type: string; content: string },
								i: number
							) => {
								const element = (
									<span
										dangerouslySetInnerHTML={{
											__html: content,
										}}
									/>
								);
								switch (type) {
									case "h":
										return <h2 key={i}>{element}</h2>;
									case "l":
										return (
											<ul key={i}>
												<li>{element}</li>
											</ul>
										);
									default:
										return <p key={i}>{element}</p>;
								}
							}
						)}
					</article>
					<Share href={param}></Share>
					<MoreBlogs hiddenArticle={param}></MoreBlogs>
				</div>
			</main>
		</>
	);
}
