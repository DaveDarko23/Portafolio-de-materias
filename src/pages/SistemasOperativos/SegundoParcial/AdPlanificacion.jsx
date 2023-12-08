import CardHorizontal from "../../../Components/CardHorizontal";

const AdPlanificacion = () => {
  return (
    <>
      <h2>Planificación de Procesos y sus Tipos</h2>

      <p>
        La planificación de procesos es una función clave del sistema operativo
        que determina el orden en que los procesos se ejecutan en la CPU. El
        objetivo es optimizar el rendimiento del sistema operativo, maximizando
        la utilización de los recursos y proporcionando una respuesta rápida a
        los usuarios. Aquí están los conceptos clave y los tipos de
        planificación de procesos:
      </p>

      <section>
        <h3>1. Conceptos Clave:</h3>
        <ul>
          <li>
            <b>Proceso de Planificación:</b> La selección de qué proceso
            ejecutar a continuación se llama planificación de procesos.
          </li>
          <li>
            <b>Estado de un Proceso:</b> Los procesos pueden estar en distintos
            estados como listo, en ejecución, bloqueado, etc.
          </li>
        </ul>
      </section>

      <section>
        <h3>2. Criterios de Planificación:</h3>
        <ul>
          <li>
            <b>Criterios de Planificación:</b> Los sistemas operativos pueden
            utilizar diferentes criterios para planificar procesos, como
            prioridad, tiempo de ejecución, tiempos de espera, etc.
          </li>
          <li>
            <b>Algoritmo de Planificación:</b> Es el conjunto de reglas que
            determina cómo se seleccionará el próximo proceso para ejecutarse.
          </li>
        </ul>
      </section>

      <section>
        <h3>3. Tipos de Planificación:</h3>
        <p>
          <b>a. Planificación a Corto Plazo (Scheduling de CPU):</b>
        </p>
        <ul>
          <li>Selecciona qué proceso se ejecutará a continuación en la CPU.</li>
          <li>Debe ser rápido y eficiente.</li>
          <li>Algoritmos comunes: FCFS, SJF, Round Robin, Prioridad, etc.</li>
        </ul>

        <p>
          <b>b. Planificación a Mediano Plazo (Scheduling de Listos):</b>
        </p>
        <ul>
          <li>
            Decide qué procesos se mantendrán en memoria y cuáles se enviarán al
            almacenamiento secundario.
          </li>
          <li>
            Involucra la carga y descarga de procesos desde el almacenamiento
            secundario.
          </li>
          <li>Afecta la eficiencia de la memoria.</li>
        </ul>

        <p>
          <b>c. Planificación a Largo Plazo (Scheduling de Admisión):</b>
        </p>
        <ul>
          <li>
            Decide cuándo y cuántos nuevos procesos pueden ser admitidos en el
            sistema.
          </li>
          <li>Afecta la utilización general de recursos del sistema.</li>
        </ul>
      </section>

      <section>
        <h3>4. Algoritmos Comunes:</h3>
        <p>
          <b>a. First-Come, First-Served (FCFS):</b>
        </p>
        <ul>
          <li>Procesos se ejecutan en el orden en que llegan.</li>
          <li>
            Fácil de entender, pero puede llevar a la espera prolongada (efecto
            de convoy).
          </li>
        </ul>

        <p>
          <b>b. Shortest Job Next (SJN) o Shortest Job First (SJF):</b>
        </p>
        <ul>
          <li>
            Ejecuta el proceso con el tiempo de ejecución más corto primero.
          </li>
          <li>
            Minimiza el tiempo de espera, pero requiere información precisa
            sobre el tiempo de ejecución.
          </li>
        </ul>

        <p>
          <b>c. Round Robin (RR):</b>
        </p>
        <ul>
          <li>Asigna un tiempo fijo a cada proceso en turnos.</li>
          <li>
            Evita la espera prolongada, pero puede tener un alto tiempo de
            respuesta para procesos largos.
          </li>
        </ul>

        <p>
          <b>d. Prioridad:</b>
        </p>
        <ul>
          <li>
            Asigna prioridades a los procesos y ejecuta el de mayor prioridad
            primero.
          </li>
          <li>
            Puede resultar en inanición si los procesos de baja prioridad nunca
            se ejecutan.
          </li>
        </ul>

        <p>
          <b>e. Multinivel (Multilevel Queue):</b>
        </p>
        <ul>
          <li>Divide los procesos en colas basadas en la prioridad.</li>
          <li>
            Los procesos pueden moverse entre colas según su comportamiento.
          </li>
        </ul>

        <p>
          <b>f. Multinivel Retroalimentada (Multilevel Feedback Queue):</b>
        </p>
        <ul>
          <li>
            Similar a la cola multinivel, pero los procesos pueden moverse entre
            colas según su comportamiento de ejecución.
          </li>
        </ul>
      </section>

      <section>
        <h3>5. Factores a Considerar:</h3>
        <ul>
          <li>
            <b>Tiempo de Respuesta:</b> Tiempo que tarda el sistema en responder
            a una solicitud del usuario.
          </li>
          <li>
            <b>Utilización de la CPU:</b> Cuánto tiempo se utiliza la CPU en
            comparación con el tiempo total.
          </li>
          <li>
            <b>Espera Promedio:</b> Promedio de tiempo que un proceso pasa
            esperando en la cola de listos.
          </li>
        </ul>
      </section>

      <CardHorizontal
        text="
        La elección del algoritmo de planificación depende de la naturaleza y
        los requisitos del sistema, y cada algoritmo tiene sus propias ventajas
        y desventajas en términos de rendimiento y complejidad."
      />
    </>
  );
};

export default AdPlanificacion;
