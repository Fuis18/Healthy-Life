import Background from "@/components/ui/Background";
import Reserve from "@/components/ui/Reserve";
import Products from "@/components/Products";
import Blogs from "@/components/Blogs";
import Galeria from "@/components/Galeria";
import Team from "@/components/Team";
function Page() {
	return (
		<>
			<Background type="img" src="/image-1.webp" classname="home">
				<Reserve mode={true} />
			</Background>
			<main>
				<div>
					<h1>Descubre el Placer de Comer Saludable</h1>
					<p>
						En Healthy Life, transformamos la manera en que
						disfrutas los postres. Nuestro enfoque está en ofrecerte
						delicias saludables que no comprometen el sabor. Nuestro
						producto estrella, el Brownie con palta, es la
						combinación perfecta de indulgencia y nutrición.
						Atrévete a transformar tu estilo de vida con opciones
						que cuidan de ti.
					</p>
				</div>
				<div id="Productos">
					<h2>Nuestros Deliciosos Postres Saludables</h2>
					<p>
						En Healthy Life te ofrecemos postres que cuidan de ti.
						Nuestros brownies con palta combinan sabor y nutrición
						en cada bocado, para que disfrutes sin culpa y con
						bienestar.
					</p>
					<Products />
				</div>
				<div id="Galeria">
					<h2>Publicaciones</h2>
					<Galeria></Galeria>
				</div>
				<div id="Blog">
					<Blogs></Blogs>
				</div>
				<div className="team__group" id="Sobre Nosotros">
					<h2>Sobre Nosotros</h2>
					<p>
						En Healthy Life, trabajamos con pasión para ofrecerte
						postres saludables y deliciosos. Cada miembro de nuestro
						equipo aporta su talento para crear brownies con palta
						que promueven un estilo de vida equilibrado. 💚
					</p>
					<Team></Team>
				</div>
			</main>
			<div className="team__link">
				<h2>Contáctanos</h2>
				<p>
					Si tienes preguntas sobre nuestros productos saludables o
					deseas realizar un pedido especial, por favor completa el
					siguiente formulario. Estamos aquí para ayudarte a disfrutar
					de una vida más saludable con nuestros deliciosos postres.
				</p>
				<Reserve mode={true} />
			</div>
		</>
	);
}

export default Page;
