"use client"

import actionForm from "./action";
import { useActionState, useEffect } from "react";
import styles from "./page.module.css";
import { toast } from "react-toastify";

export default function Form({diccionario}){
  const [state, formAction, pending] = useActionState(actionForm, {});
  useEffect(() => {
    console.log(pending)
    console.log("estoy debajo de pendiente")
    console.log(state)
    if (pending) {
      return
    } else {
      if (state.message === "debes llenar nombre, correo y mensaje") {
        toast.error(diccionario.form.error);
      } else if (state.message === "debes llenar nombre") {
        toast.error(diccionario.form.error_name);
      } else if (state.message === "debes llenar correo") {
        toast.error(diccionario.form.error_email);
      } else if (state.message === "debes llenar mensaje") {
        toast.error(diccionario.form.error_message);
      } else if (state.success === true && state.message === "Correo encolado exitosamente") {
        toast.success(diccionario.form.success);
      }
  }
  },[state, pending]);

  
  /* console.log("ya se ejecuto el useEffect") */
  return (
    <form action={formAction} className={`${styles.form} ${styles.common_styles}`}>
        <section className={styles.form_divisor}>
        <section className={styles.form_subSection}>
          <label className={styles.label} htmlFor="nombre">{diccionario.form.name_label}</label>
          <input className={styles.field} type="text" placeholder={diccionario.form.name_placeholder} name="nombre" id="nombre" disabled={pending}/>
        </section>
        <section className={styles.form_subSection}>
          <label className={styles.label} htmlFor="correo">{diccionario.form.email_label}</label>
          <input className={styles.field} type="email" placeholder={diccionario.form.email_placeholder} name="correo" id="correo" disabled={pending}/>
        </section>
        </section>
          <label className={styles.label} htmlFor="mensaje">{diccionario.form.textarea_label}</label>
          <textarea className={styles.textarea} name="mensaje" id="mensaje" placeholder={diccionario.form.textarea_placeholder} disabled={pending}></textarea>
          <section className={styles.button_section}>
          <button className={styles.button} disabled={pending}>{pending ? diccionario.form.submiting : diccionario.form.submit}</button>
          </section>
    </form>
);
}