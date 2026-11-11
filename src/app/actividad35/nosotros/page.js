import styles from "../inicio.module.css";

export default function Nosotros() {
  return (
    <main className={styles.principal}>
      <p className={styles.etiqueta}>
        Nuestra esencia
      </p>

      <h1 className={styles.titulo}>
        La Casa de Monchita
      </h1>

      <div className={styles.tarjeta}>
        <h2>¿Quiénes somos?</h2>

        <p className={styles.descripcion}>
          Somos un negocio dedicado a preparar
          comida mexicana con sabor casero.
        </p>

        <p className={styles.descripcion}>
          Buscamos ofrecer variedad, calidad
          y una buena experiencia a nuestros clientes.
        </p>
      </div>
    </main>
  );
}
