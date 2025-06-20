import Product from "./ui/Product";

const Products = () => {
	return (
		<div className="products">
			<Product
				title="Brownie de Plátano"
				foto="/image(1).webp"
				link="/FICHA_TECNICA_BROWNIE_DE_PLATANO.webp"
			>
				Dulzura natural y textura esponjosa. El sabor del plátano se
				mezcla con el cacao y la palta para crear un brownie delicioso y
				nutritivo.
			</Product>
			<Product
				title="Brownie de Frutos Rojos"
				foto="/image(2).webp"
				link="/FICHA TECNICA BROWNIE DE FRUTOS ROJOS.webp"
			>
				Una fusión deliciosa entre lo dulce y lo ácido. Brownie de palta
				con un toque de frutos rojos que aporta frescura, antioxidantes
				y un sabor único que sorprende.
			</Product>
			<Product
				title="Brownie de Frutos Secos"
				foto="/image(3).webp"
				link="/FICHA TECNICA BROWNIE DE FRUTOS SECOS.webp"
			>
				Nuestro brownie de palta con frutos secos combina el cacao con
				nueces, almendras y más, para darte energía saludable en cada
				bocado.
			</Product>
		</div>
	);
};

export default Products;
