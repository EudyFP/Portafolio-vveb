import GitHubLogo from "../components/GithubLogo";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Form from "./form";
import ThemedButtons from "../components/ThemedButtons";

export default async function Home({ params }) {
  const valorIdioma = await params;
  const diccionario = await import(`@/app/diccionarios/${valorIdioma.idioma}.json`).then(m => m.default);
  console.log(diccionario);
/* console.log("Hola") */
  return (<>
      <section className={styles.section_navar}>
        <section className={styles.section_idiomas}>
      <Link href="/es">{diccionario.idioma.es}</Link>
      <Link href="/en">{diccionario.idioma.en}</Link>
      <Link href="https://github.com/EudyFP" target="_blank">
      <GitHubLogo />
      </Link>
      <Link href="https://www.linkedin.com/in/eudy-f-p%C3%A9rez-644a4a2aa/" target="_blank">
      <Image src="/assets/icons8-linkedin.svg" alt="LinkedIn logo" title="LinkedIn" width={50} height={50} priority/>
      </Link>
        </section>
      <ThemedButtons />
      </section>
    <main id={styles.main}>
      <section className={styles.section}>
        <h1>
          {diccionario.acerca}
        </h1>
        <section className={`${styles.about_me} ${styles.common_styles}`}>
          <section>
          <Image style={{objectFit: "cover", borderRadius: "100px",
          }} id={styles.about_me_image}src="/assets/WhatsApp Image 2025-02-23 at 2.17.59 PM copy.jpeg" alt="Profile picture" width={200} height={200} priority/>
          </section>
          <section className={styles.about_me_text}>
            <p>
              {diccionario.descripcion}
            </p>
          </section>
        </section>
      </section>
      <section className={`${styles.section} ${styles.common_styles}`}>
        <h1>
          {diccionario.proyectos}
        </h1>
        <section className={styles.grid}>
          <Link href={diccionario.proyectos_desc.proyecto1.link} target="_blank">
          <section className={styles.grid_item}>
          <Image src="/assets/primerProyecto.png" className={styles.project_image} alt="Image of the project 1" width={200} height={200} priority sizes="100vw"/>
          <h2>{diccionario.proyectos_desc.proyecto1.titulo}</h2>
          <p>{diccionario.proyectos_desc.proyecto1.descripcion}</p>
          <p>{diccionario.herramientas_proyectos}</p>
            <section className={styles.herramientas_section}>
            <Image className={styles.reactImage}src="/assets/react_original_logo_icon_146374.svg" alt="React.js logo" title="React.js" width={50} height={50} priority />
          {/*<Image className={styles.nextImage} src="/assets/1.svg" alt="Next.js logo" title="Next.Js" width={50} height={50} priority/>*/}
            </section>
          </section>
          </Link>
          <Link href={diccionario.proyectos_desc.proyecto2.link} target="_blank">
          <section className={styles.grid_item}>
          <Image src="/assets/segundoProyecto.PNG" className={styles.project_image} alt="Image of the project 2" width={200} height={200} priority sizes="100vw"/>
          <h2>{diccionario.proyectos_desc.proyecto2.titulo}</h2>
          <p>{diccionario.proyectos_desc.proyecto2.descripcion}</p>
          <p>{diccionario.herramientas_proyectos}</p>
            <section className={styles.herramientas_section}>
            <Image className={styles.jsImage}src="/assets/javascript_original_logo_icon_146455.svg" alt="JavaScript logo" title="ES6+" width={50} height={50} priority/>
            </section>
          </section>
          </Link>
        </section>
      </section>
      <section className={styles.section_form}>
        <h1>{diccionario.contacto}</h1>
          <Form diccionario={diccionario}/>
      </section>
    </main>
    </>
  );
}
