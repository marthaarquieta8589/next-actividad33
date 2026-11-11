"use client";

import { useState } from "react";
import styles from "../inicio.module.css";

export default function TarjetaPlatillo({
  nombre,
  descripcion
}) {
  const [seleccionado, setSeleccionado] = useState(false);

  function cambiarSeleccion() {
    setSeleccionado(!seleccionado);
  }

  return (
    <article className={styles.platillo}>
      <h3>{nombre}</h3>

      <p>{descripcion}</p>

      <button
        type="button"
        onClick={cambiarSeleccion}
        className={
          seleccionado
            ? styles.botonSeleccionado
            : styles.botonPlatillo
        }
      >
        {seleccionado
          ? "✓ Seleccionado"
          : "Seleccionar platillo"}
      </button>
    </article>
  );
}
