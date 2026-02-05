"use server"
import { POST } from "@/app/api/send/route";
/* import { client } from "@/app/lib/db"; */

export default async function formAction (ActualState, formData) {
  const nombre = formData.get("nombre");
  const correo = formData.get("correo");
  const mensaje = formData.get("mensaje");
  console.log("Formulario recibido:", { nombre, correo, mensaje });
  if (nombre === "" && correo === "" && mensaje === "") {
    return { success: false, message: 'debes llenar nombre, correo y mensaje' };
  } else if (nombre === "") {
    return { success: false, message: 'debes llenar nombre' };
  } else if (correo === "") {
    return { success: false, message: 'debes llenar correo' };
  } else if (mensaje === "") {
    return { success: false, message: 'debes llenar mensaje' };
  } else {
  try {
    POST([{ nombre, correo, mensaje }]);
/*     await emailQueue.add("send", {
      nombre: nombre,
      correo: correo,
      mensaje: mensaje
    }, {removeOnComplete: true}); */
    return { success: true, message: 'Correo encolado exitosamente' };
  } catch (error) {
    console.error('Error al encolar el correo:', error);
    return { success: false, message: 'Error al encolar el correo' };
  }
}
/*   const id = crypto.randomUUID();
  await client.hSet(`form:${id}`, {
    correo: formData.get("correo"),
    mensaje: formData.get("mensaje")
  }); */
    /* const correo = formData.get("correo");
    const mensaje = formData.get("mensaje");
    if (correo === "" && mensaje === "") {
      return "debes llenar correo y mensaje";
    } else if (correo === "") {
      return "debes llenar correo";
    } else if (mensaje === "") {
      return "debes llenar mensaje";
    } else {
      const data = await POST({correo: correo, mensaje: mensaje});
      console.log(data);
      return "formulario enviado exitosamente";
    } */
  }