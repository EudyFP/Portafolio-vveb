"use client"

import { useTheme } from 'next-themes';
import styles from './ThemedButtons.module.css';
export default function ThemedButtons({ diccionario }) {
  const { theme, setTheme } = useTheme();
  console.log("Current theme:", theme);
    return (
        <section className={styles.themed_switch_section}>
{/*             <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button> */}
            <p>{theme === 'dark' ? diccionario.modo_o : diccionario.modo_c}</p>
            <label className={styles.switch}>
            <input type="checkbox" checked={theme === 'dark' ? true : false} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}/>
            <span className={styles.slider}></span>
            </label>
        </section>
    );
}