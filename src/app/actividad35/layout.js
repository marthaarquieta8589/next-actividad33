import Link from "next/link";
import styles from "./inicio.module.css";

export default function LayoutActividad35({ children }) {
  return (
    <>
      <nav className={styles.navegacion}>
        <Link href="/actividad35">Inicio</Link>
        <Link href="/actividad35/menu">Menú</Link>
        <Link href="/actividad35/nosotros">Nosotros</Link>
      </nav>

      {children}
    </>
  );
}
