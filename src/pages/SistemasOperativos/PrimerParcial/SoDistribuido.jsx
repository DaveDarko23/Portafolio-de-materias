import CardHorizontal from "../../../Components/CardHorizontal";

const SoDistribuido = () => {
  return (
    <>
      <h2>Sistemas Operativos Distribuidos:</h2>
      <p>
        <b>Definición:</b>
        <br /> Los sistemas operativos distribuidos son un tipo especial de
        sistemas operativos diseñados para gestionar y coordinar recursos y
        procesos en entornos distribuidos, donde múltiples computadoras
        interactúan para lograr un objetivo común.
      </p>
      <br />
      <b>Características Principales:</b>
      <ul>
        <li>
          Transparencia de Distribución: Los usuarios y las aplicaciones pueden
          percibir el sistema como una entidad única, independientemente de la
          ubicación física de los recursos.
        </li>
        <li>
          Coordinación y Comunicación: La coordinación y comunicación entre
          nodos son fundamentales para el funcionamiento eficiente del sistema
          distribuido.
        </li>
        <li>
          Escalabilidad: Debe ser escalable para adaptarse a cambios en el
          tamaño y la complejidad del sistema distribuido.
        </li>
      </ul>
      <br />

      <p>
        <b>Objetivos:</b>
        <br /> Los sistemas operativos distribuidos buscan proporcionar a los
        usuarios y aplicaciones la ilusión de un único sistema coherente,
        incluso si los recursos subyacentes están distribuidos geográficamente.
      </p>
      <p>
        <b>Gestión de Recursos:</b>
        <br /> Coordinan el acceso y la gestión de recursos distribuidos, como
        archivos, impresoras, y servicios, entre nodos en la red.
      </p>
      <p>
        <b>Tolerancia a Fallos:</b>
        <br /> Integran estrategias para manejar fallos, lo que implica
        garantizar que el sistema continúe funcionando incluso si uno o varios
        nodos fallan.
      </p>
      <p>
        <b>Alta Disponibilidad:</b>
        <br /> Buscan ofrecer alta disponibilidad y rendimiento, permitiendo que
        las tareas se realicen eficientemente y con tiempos de respuesta
        aceptables.
      </p>
      <p>
        <b>Ejemplos de Aplicación:</b>
        <br /> Sistemas de gestión de bases de datos distribuidas, sistemas de
        almacenamiento en la nube, y entornos de cómputo en clúster son ejemplos
        de aplicaciones de sistemas operativos distribuidos.
      </p>
      <p>
        <b>Middleware:</b>
        <br /> Utilizan middleware, que es un conjunto de software que actúa
        como un puente entre las aplicaciones distribuidas y el sistema
        operativo subyacente, facilitando la comunicación y la coordinación.
      </p>
      <p>
        <b>Desafíos:</b>
        <br /> Los sistemas operativos distribuidos enfrentan desafíos como la
        sincronización, la consistencia de datos, la gestión de recursos
        compartidos y la seguridad, que deben abordarse para garantizar un
        funcionamiento eficiente y confiable.
      </p>
      <p>
        <b>Ejemplos de Sistemas Operativos Distribuidos:</b>
        <br /> Distributed UNIX, Plan 9 from Bell Labs, y Linux con soporte para
        clústeres son ejemplos de sistemas operativos distribuidos.
      </p>
      <CardHorizontal
        text="los sistemas operativos distribuidos se centran en la coordinación
        eficiente de recursos y procesos en entornos donde múltiples nodos
        interactúan. Estos sistemas permiten la creación de sistemas complejos y
        escalables que pueden abordar tareas significativas y proporcionar
        servicios coherentes a través de redes distribuidas."
      />
    </>
  );
};

export default SoDistribuido;
