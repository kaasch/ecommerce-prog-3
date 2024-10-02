import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <Link href={`/`}>
          <div className={styles.logo_container}>
            <Image
              src="imgs/logos/kalu-cookies.svg"
              alt="logo"
              width={117}
              height={54}
            />
          </div>
        </Link>
        <div className={styles.social_media}>
        <nav>
          <ul className={styles.media}>
            <li>
              <a title="facebook" href="http://www.facebook.com" target="_blank">
                <Image
                  src="/imgs/icons/facebook.svg"
                  alt="fb"
                  width={15.75}
                  height={30}
                />
              </a>
            </li>
            <li>
              <a title="instagram" href="http://www.instagram.com" target="_blank">
                <Image
                  src="/imgs/icons/instagram.svg"
                  alt="ig"
                  width={30}
                  height={30}
                />
              </a>
            </li>
            <li>
              <a title="twitter" href="http://www.twitter.com" target="_blank">
                <Image
                  src="/imgs/icons/twitter.svg"
                  alt="tw"
                  width={31.38}
                  height={25.5}
                />
              </a>
            </li>
            <li>
              <a title="pinterest" href="http://www.pinterest.com" target="_blank">
                <Image
                  src="/imgs/icons/pinterest.svg"
                  alt="pnt"
                  width={30}
                  height={30}
                />
              </a>
            </li>
            <li>
              <a title="github" href="http://www.github.com" target="_blank">
                <Image
                  src="/imgs/icons/git.svg"
                  alt="gt"
                  width={30}
                  height={29.3}
                />
              </a>
            </li>
          </ul>
        </nav>
        </div>
        <nav>
          <ul className={styles.lista_palabras}>
            <li>
              <Link href={`/contact`}>Contactanos</Link>
            </li>
            <li>|</li>
            <li>
              <Link href={`/`}>Política de privacidad</Link>
            </li>
            <li>|</li>
            <li>
              <Link href={`/`}>Términos y condiciones</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.footer_bottom}>
          <p>
            Copyright &copy;2024 Karen Schnaider - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
