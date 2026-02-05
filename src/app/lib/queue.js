/* require('dotenv').config(); */
const {emailQueue, client} = require('./db.js')
const {POST} = require('../api/send/route.js');

const BATCH_SIZE = 17; // Tamaño del lote

/* 864000 14 minutos con 24 segundos a milisegundos*/
// Función para procesar el lote
/* 12 minutos a mili segundos 720000 */
setInterval(processBatch, 720000);
async function processBatch() {
    const batch = [];
  
    while (batch.length < BATCH_SIZE) {
      const task = await client.rPop('emailBatchBuffer');
      if (!task) break; // Sale si no hay más tareas en el buffer
      batch.push(JSON.parse(task));
    }
  
    if (batch.length > 0) {
      console.log('Procesando lote de correos:', batch);
      // Aquí puedes implementar el envío de correos
      try {
        const { data, error } = await POST(batch);
        if (error) {
          throw new Error(error);
        }
        console.log('Correos enviados:', data);
      } catch (error) {
        console.error('Error al enviar los correos:', error);
    }
    } else {
    console.log('No hay correos para enviar');
    }
}

// Procesador de la cola
emailQueue.process("send", async (job) => {
  const { nombre, correo, mensaje } = job.data;
  await client.lPush('emailBatchBuffer', JSON.stringify({ nombre, correo, mensaje, id: job.id }));

  const batchSize = await client.lLen('emailBatchBuffer');
  if (batchSize >= BATCH_SIZE) {
    await processBatch();
  }
});
console.log('Procesador de la cola de correos está en ejecución...');



/* emailQueue.process("send", (job) => {
  const intervalo = setTimeout(async () => {
  const { correo, mensaje } = job.data;
    let arrayMail = []
    for (let i = 0; i < 16; i++) {
      arrayMail = [...arrayMail, {correo, mensaje, id: job.id}]
    }
    try {
      if (arrayMail.length === 0) {
        throw new Error('No hay correos para enviar');
      }
      const { data, error } = await POST(arrayMail);
      if (error) {
        throw new Error(error);
      }
      console.log(`Correo enviado a ${correo}`);
      return data;
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      throw new Error('Error al enviar el correo');
      }
    }, 15000);
    console.log(`El trabajo ${job.id} ha sido completado y eliminado exitosamente`)
    console.log("este es el intervalo" + intervalo)
  }
); */
/* esto es cada tanto se va a mandar, si mal no me acuerdo son 14 minutos con 24 segundos */
/* 864000 */


/*   console.log("***************************************** tarea:")
  console.log(job)
  console.log("***************************************** ID:")
  console.log(job.id)
  console.log("***************************************** DATA:")
  console.log(job.data) */

/*   const { correo, mensaje } = job.data;
console.log(job)
  try {
    const { data, error } = await POST({correo, mensaje});
    if (error) {
      throw new Error(error);
    }
    console.log(`Correo enviado a ${correo}`);
    return data;
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw new Error('Error al enviar el correo');
    } */
console.log('Procesador de la cola de correos está en ejecución...');

