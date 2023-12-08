import CardHorizontal from "../../../Components/CardHorizontal";

const AdHilos = () => {
  return (
    <>
      <h2>Hilos (Subprocesos) y Concurrencia</h2>
      <section>
        <h3>Hilos (Subprocesos):</h3>
        <p>
          Los hilos, también conocidos como subprocesos, son unidades más
          pequeñas de ejecución dentro de un proceso. Mientras que un proceso
          tiene su propio espacio de direcciones y recursos, los hilos comparten
          el mismo espacio de direcciones y recursos del proceso padre. Cada
          hilo dentro de un proceso tiene su propia secuencia de ejecución, pero
          comparte datos y recursos con otros hilos del mismo proceso.
        </p>
      </section>

      <section>
        <h3>Beneficios de los Hilos:</h3>
        <ul>
          <li>
            <b>Concurrencia:</b> Los hilos permiten la ejecución concurrente de
            tareas dentro de un mismo proceso, lo que puede mejorar la
            eficiencia y la capacidad de respuesta de una aplicación.
          </li>
          <li>
            <b>Eficiencia en el Uso de Recursos:</b> Como los hilos comparten
            recursos, como memoria y archivos, la creación y el cambio entre
            hilos son más eficientes que la creación y el cambio entre procesos.
          </li>
          <li>
            <b>Mejora de la Responsividad:</b> La concurrencia mediante hilos
            puede mejorar la capacidad de respuesta de una aplicación, ya que
            permite que partes independientes de la aplicación se ejecuten
            simultáneamente.
          </li>
          <li>
            <b>Programación más Sencilla:</b> En algunos casos, programar
            utilizando hilos puede ser más sencillo que utilizar múltiples
            procesos, ya que los hilos comparten el mismo espacio de
            direcciones.
          </li>
        </ul>
      </section>

      <section>
        <h3>Concurrencia:</h3>
        <p>
          La concurrencia se refiere a la ejecución simultánea de varias tareas
          o procesos aparentemente al mismo tiempo. En el contexto de hilos, la
          concurrencia se logra mediante la ejecución simultánea de múltiples
          hilos dentro de un proceso.
        </p>
      </section>

      <section>
        <h3>Aspectos Clave de la Concurrencia con Hilos:</h3>
        <ul>
          <li>
            <b>División de Tareas:</b> Los hilos permiten dividir una tarea en
            partes más pequeñas y ejecutarlas de manera concurrente, lo que
            puede mejorar el rendimiento general del sistema.
          </li>
          <li>
            <b>Sincronización:</b> Dado que los hilos comparten recursos, es
            necesario sincronizar el acceso a estos recursos para evitar
            conflictos y condiciones de carrera, donde dos o más hilos intentan
            modificar el mismo recurso simultáneamente.
          </li>
          <li>
            <b>Problemas de Concurrencia:</b> La concurrencia también introduce
            desafíos, como condiciones de carrera, deadlocks y problemas de
            sincronización. Los programadores deben tener cuidado al diseñar
            aplicaciones concurrentes para evitar estos problemas.
          </li>
          <li>
            <b>Modelos de Concurrencia:</b> Los modelos de concurrencia, como el
            modelo de hilos, el modelo de actores y otros, ofrecen formas
            diferentes de abordar la concurrencia en el diseño de sistemas.
          </li>
        </ul>
      </section>

      <CardHorizontal
        text="
      
        En resumen, los hilos permiten la ejecución concurrente de tareas dentro
        de un proceso, lo que puede mejorar la eficiencia y la capacidad de
        respuesta de las aplicaciones. Sin embargo, su uso requiere una
        cuidadosa gestión y sincronización para evitar problemas de
        concurrencia.
      "
      />
    </>
  );
};

export default AdHilos;
