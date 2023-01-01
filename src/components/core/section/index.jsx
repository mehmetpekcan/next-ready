import styles from "./styles.module.scss";

function Section({ title, description, id, children }) {
  return (
    <section id={id} className={styles.section}>
      {title && description && (
        <span className={styles.heading}>
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </span>
      )}
      {children}
    </section>
  );
}

export default Section;
