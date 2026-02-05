import { redirect } from "next/navigation";

function ping() {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get`) // Ruta interna para mantener la app activa
        .then(response => response.json())
        .then(json => console.log("Este es la respuesta de la api local", json.message))
        .catch(error => console.error("Error en la llamada a la api local", error));
}

// Ejecuta el fetch cada 13 minutos (780000 ms)
setInterval(ping, 780000);
export default function page(){
    redirect("/en");
    return (
        <div>

        </div>
    );
}