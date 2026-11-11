import styles from "./inicio.module.css";
import TarjetaPlatillo from "./components/TarjetaPlatillo";

const platillos = [
  {
    id: 1,
    nombre: "Enchiladas suizas",
    descripcion: "Enchiladas con pollo, salsa cremosa y queso."
  },
  {
    id: 2,
    nombre: "Carne en su jugo",
    descripcion: "Un platillo tradicional lleno de sabor."
  },
  {
    id: 3,
    nombre: "Milanesa napolitana",
    descripcion: "Milanesa preparada con salsa de tomate y queso."
  }
];

export default function InicioPrototipo() {
  return (
    <main className={styles.principal}>

      <p className={styles.etiqueta}>
        Sabor casero y tradición
      </p>

      <h1 className={styles.titulo}>
        La Casa de Monchita
      </h1>

      <h2 className={styles.subtitulo}>
        ¡Bienvenidos a nuestro menú digital!
      </h2>

      <div className={styles.tarjeta}>
        <p className={styles.descripcion}>
          Descubre nuestra variedad de platillos
          preparados con el sabor de casa.
        </p>
      </div>

      <h2 className={styles.subtitulo}>
        Nuestras especialidades
      </h2>

      <section className={styles.listaPlatillos}>
        {platillos.map((platillo) => (
          <TarjetaPlatillo
            key={platillo.id}
            nombre={platillo.nombre}
            descripcion={platillo.descripcion}
          />
        ))}
      </section>

    </main>
  );
}
