import CardHorizontal from "../../../Components/CardHorizontal";

const AdJerarquia = () => {
  return (
    <>
      <h2>Jerarquía de Procesos</h2>
      <p>
        La jerarquía de procesos en sistemas operativos se refiere a la
        organización estructurada de procesos en diferentes niveles o capas, lo
        que permite una gestión más eficiente de las tareas y recursos del
        sistema. Aquí te presento una descripción general de la jerarquía de
        procesos comúnmente encontrada en sistemas operativos:
      </p>

      <section>
        <h3>Nivel 1: Proceso Padre</h3>
        <p>
          <b>Definición:</b> El proceso padre es el proceso inicial que se crea
          cuando se inicia un sistema operativo.
        </p>
        <p>
          <b>Características:</b>
        </p>
        <ul>
          <li>Suele ser un proceso de sistema esencial.</li>
          <li>Puede crear procesos hijos para delegar tareas específicas.</li>
        </ul>
      </section>

      <section>
        <h3>Nivel 2: Procesos Hijos</h3>
        <p>
          <b>Definición:</b> Los procesos hijos son creados por el proceso padre
          para realizar tareas específicas.
        </p>
        <p>
          <b>Características:</b>
        </p>
        <ul>
          <li>Pueden heredar recursos del proceso padre.</li>
          <li>Pueden tener sus propios subprocesos y procesos hijos.</li>
        </ul>
      </section>

      <section>
        <h3>Nivel 3: Subprocesos (Hilos)</h3>
        <p>
          <b>Definición:</b> Los subprocesos, o hilos, son unidades de ejecución
          más pequeñas dentro de un proceso.
        </p>
        <p>
          <b>Características:</b>
        </p>
        <ul>
          <li>
            Comparten recursos y espacio de direcciones con otros subprocesos
            del mismo proceso.
          </li>
          <li>Pueden ejecutarse de manera independiente y simultánea.</li>
        </ul>
      </section>

      <section>
        <h3>Ventajas de la Jerarquía de Procesos:</h3>
        <ul>
          <li>
            <b>Gestión Eficiente de Recursos:</b> La jerarquía permite una
            gestión más eficiente de los recursos del sistema al organizar
            tareas en diferentes niveles de complejidad.
          </li>
          <li>
            <b>Escalabilidad:</b> Permite la creación y gestión de múltiples
            procesos y subprocesos, lo que facilita la escalabilidad de las
            aplicaciones y del sistema operativo.
          </li>
          <li>
            <b>Aislamiento de Tareas:</b> Los procesos hijos pueden realizar
            tareas específicas de manera aislada, lo que mejora la modularidad y
            la mantenibilidad del sistema.
          </li>
          <li>
            <b>Paralelismo:</b> La jerarquía de procesos y subprocesos facilita
            la ejecución paralela de tareas, lo que puede mejorar el rendimiento
            del sistema en sistemas con múltiples núcleos de CPU.
          </li>
        </ul>
      </section>

      <section>
        <CardHorizontal
          title="Ejemplo Practico"
          text="
          En un sistema operativo, el proceso padre puede ser el kernel del
          sistema, que crea procesos hijos para gestionar servicios específicos
          (por ejemplo, servicios de red, servicios de impresión). Cada proceso
          hijo puede, a su vez, crear subprocesos para manejar operaciones más
          detalladas."
        />
      </section>
    </>
  );
};

export default AdJerarquia;
