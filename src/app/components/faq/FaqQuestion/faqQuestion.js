import styles from './component.module.css';
export default function FaqQuestion({ question, answer }) {
  return <details className={styles.card}><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details>;
}
