import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";


export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

function Nosotros() {


  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen de nosotros" />
        <div>
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            suscipit dolore eum minima iure est, non reprehenderit, aperiam
            asperiores, odio ipsum optio. Consectetur harum voluptate similique
            et, velit non laudantium?
          </p>

          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            suscipit dolore eum minima iure est, non reprehenderit, aperiam
            asperiores, odio ipsum optio. Consectetur harum voluptate similique
            et, velit non laudantium?
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
