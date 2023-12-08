import CardHorizontal from "../../../Components/CardHorizontal";

const Evolucion = () => {
  return (
    <div>
      <h2>Evolución historica de los Sistemas Operativos</h2>
      <h3>Sistemas BATCH o por Lotes</h3>
      <CardHorizontal
        title="70's - 80's"
        text="En las primeras épocas los sistemas operativos eran grandes y costosos.
        Constaban de una entrada de trabajos y una salida impresa, por lo cual
        la interacción con el usuario era prácticamente nula. Las principales
        características eran que el sistema soportaba de un único trabajo a la
        vez, y que las tareas relacionadas se agrupaban en conjuntos o lotes,
        para su procesamiento más eficiente. A comienzos de los 80’, utilizando
        las técnicas de Spooling (proceso mediante el cual la computadora
        introduce trabajos en un buffer, de manera que un dispositivo pueda
        acceder a ellos cuando esté listo) y multiprogramación (ejecución de
        múltiples tareas compartiendo recursos) se pudo comenzar a desarrollar
        técnicas de planificación de despacho. Esta técnica consistía en
        seleccionar un lote de trabajos que estaban en memoria secundaria para
        cargarlos en memoria principal. Luego, el SO seleccionaba uno de ellos
        para ejecutar, y si este debía esperar por alguna tarea (por ejemplo
        ejecución de E/S) el sistema elegía otro del lote para utilizar el
        procesador. Esto, incrementó el uso del procesador."
      />
      <h3>Sistemas de tiempo compartido</h3>
      <CardHorizontal
        title="80's"
        text="Estos Sistemas eran multiusuarios. Ejecutaban programas de forma
        concurrente con una elevada tasa de despacho de procesador (cambio de
        contexto), de forma tal de permitir a los usuarios que interactúen
        directamente con el sistema como si fueran su único usuario. La
        necesidad de acceder y actualizar datos de forma concurrente, creo la
        necesidad de evolucionar el sistema de archivos a uno multiusuario,
        incorporando técnicas de protección de accesos"
      />
      <h3>Sistemas para computadores personales</h3>
      <CardHorizontal
        title="80's"
        text="Con costos de hardware decrecientes, fue posible el diseño y uso de
        computadores personales. Los Sistemas fueron diseñados en base a que
        serían utilizados por un único usuario, y todo el énfasis en el
        desarrollo estuvo en mejorar la interacción con el usuario. Se
        desarrolló la interfaz de ventanas que conocemos hoy."
      />

      <br />
      <h3>Sistemas paralelos</h3>
      <p>90's</p>
      <p>
        Son Sistemas donde se dispone de más de un procesador, permitiendo
        ejecución simultánea y sincronizada de procesos. Se Clasifican en:
      </p>
      <ul>
        <li>
          <b>Altamente integrados:</b> “tightly coupled”. Son sistemas en donde
          los canales de interconexión son de alta velocidad. (bus común o
          memoria compartida)
        </li>
        <li>
          <b>Poco Integrados:</b> “closely coupled”. Son sistemas en donde los
          canales de interconexión son de baja velocidad (sistemas en red){" "}
        </li>
      </ul>
      <br />
      <CardHorizontal
        title="Sistemas de Tiempo Real"
        text="
        Son sistemas en los cuales todo resultado debe producirse en un cierto
        tiempo. De lo contrario se considera que el sistema ha fallado"
      />
    </div>
  );
};

export default Evolucion;
