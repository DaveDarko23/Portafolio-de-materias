import CardHorizontal from "../../../Components/CardHorizontal";

const AdProcesos = () => {
  return (
    <>
      <h2>Proceso en un Sistema Operativo:</h2>
      <p>
        Un proceso en el contexto de un sistema operativo es una instancia de un
        programa en ejecución. Incluye el código ejecutable, datos, espacio de
        direcciones y otros recursos del sistema asignados para su ejecución.
        Los sistemas operativos gestionan múltiples procesos concurrentes.
      </p>

      <section>
        <h3>Estados de un Proceso:</h3>
        <ul>
          <li>
            <b>Listo (Ready):</b> El proceso está preparado para ejecutarse y
            espera su turno para ser asignado a la CPU.
          </li>
          <li>
            <b>En Ejecución (Running):</b> El proceso está ocupando la CPU y
            ejecutando sus instrucciones.
          </li>
          <li>
            <b>Bloqueado (Blocked):</b> El proceso está temporalmente detenido,
            por ejemplo, esperando la finalización de una operación de
            entrada/salida.
          </li>
          <li>
            <b>Terminado (Terminated):</b> El proceso ha completado su
            ejecución.
          </li>
        </ul>
      </section>

      <CardHorizontal
        text="
        Estos conceptos son fundamentales para entender cómo los sistemas
        operativos gestionan y coordinan la ejecución de múltiples procesos de
        manera eficiente, permitiendo la concurrencia y la multitarea en un
        entorno de computación."
      />
    </>
  );
};

export default AdProcesos;
