'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { DuckMark } from '../freddy';
import styles from './component.module.css';

const links = [
  ['About', '/#about'],
  ['Schedule', '/#schedule'],
  ['FAQ', '/#faq'],
  ['Sponsors', '/#sponsors'],
  ['Team', '/#team'],
  ['Timeline', '/timeline'],
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);

  function closeOnEscape(event) {
    if (event.key === 'Escape') {
      setOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <header className={styles.header} onKeyDown={closeOnEscape}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav className={styles.navbar} aria-label="Main navigation">
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <DuckMark />
          <span>QuHacks</span>
        </Link>
        <button ref={menuButton} className={styles.menuButton} aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>
          {open ? 'Close ×' : 'Menu ☰'}
        </button>
        <div className={`${styles.links} ${open ? styles.open : ''}`} id="navigation-links">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <a href="https://quhacks-2026.devpost.com/project-gallery" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Gallery</a>
          <a href="https://discord.gg/qYND4HeAdH" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Discord</a>
        </div>
      </nav>
    </header>
  );
}
