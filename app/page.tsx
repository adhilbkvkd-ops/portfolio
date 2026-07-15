import Image from "next/image";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Navigation Header */}
        <header className={styles.navbar}>
          <div className={styles.logo}>© Mohammed Adil BK</div>
          <nav className={styles.navLinks}>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="https://wa.me/qr/F6JLFZZICZA7P1" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Contact</a>
          </nav>
        </header>

        {/* Hero Central Content */}
        <div className={styles.heroContent}>
          {/* Background Name Text (Filled Layer) */}
          <div className={`${styles.titleWrapper} ${styles.titleBg}`}>
            <h1 className={styles.titleFilled}>ai.adhil</h1>
          </div>

          {/* Transparent Portrait Layer */}
          <div className={styles.portraitWrapper}>
            <Image
              src="/photo.png"
              alt="Mohammed Adil BK"
              fill
              priority
              quality={100}
              className={styles.portrait}
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>

        {/* Footer Area */}
        <footer className={styles.footer}>
          {/* Social Icons (Bottom Left) */}
          <div className={styles.socialLinks}>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="Twitter / X"
            >
              <Twitter size={20} strokeWidth={2} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} strokeWidth={2} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={2} />
            </a>
          </div>

          {/* Roles (Bottom Right) */}
          <div className={styles.roles}>
            <span className={styles.role}>AI Content Creator</span>
            <span className={styles.role}>Visual Storyteller</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
