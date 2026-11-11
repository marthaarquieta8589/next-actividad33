
import styles from "../inicio.module.css";
import TarjetaPlatillo from "../components/TarjetaPlatillo";

const platillos = [
  {
    id: 1,
    nombre: "Enchiladas suizas",
    descripcion: "Pollo, salsa cremosa y queso."
  },
  {
    id: 2,
    nombre: "Carne en su jugo",
    descripcion: "Un platillo tradicional lleno de sabor."
  },
  {
    id: 3,
    nombre: "Milanesa napolitana",
    descripcion: "Milanesa con salsa de tomate y queso."
  }
];

export default function Menu() {
  return (
    <main className={styles.principal}>
      <h1 className={styles.titulo}>Nuestro menú</h1>

      <p className={styles.descripcion}>
        Conoce algunas de nuestras especialidades.
      </p>

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

