import FiftyFiftyCard from "../../../Components/FiftyFiftyCard";

const EstructuraJerarquica = () => {
  return (
    <>
      <h2>Sistemas Operativos con Estructura Jerarquica</h2>
      <br />
      <h3>¿Qué son?</h3>
      <p>
        En un sentido amplio, la estructura jerárquica se refiere a la
        organización de los diferentes componentes de un sistema operativo de
        manera jerárquica o en capas, donde cada capa tiene funciones
        específicas y se comunica con las capas adyacentes para lograr el
        funcionamiento global del sistema.
      </p>
      <br />
      <h3>Aspectos Clave</h3>
      <ul>
        <li>
          <b>Kernel en la Base: </b>
          La base de una estructura jerárquica generalmente consiste en el
          kernel del sistema operativo. Este kernel es responsable de las
          operaciones fundamentales del sistema, como la gestión de memoria, la
          programación de procesos y el acceso a los dispositivos de hardware.
        </li>
        <li>
          <b>Capas Funcionales: </b>La estructura jerárquica organiza las
          funciones del sistema operativo en capas, cada una con
          responsabilidades específicas. Estas capas pueden incluir, por
          ejemplo, servicios de entrada/salida, sistemas de archivos, manejo de
          procesos, y otros servicios fundamentales.
        </li>
        <li>
          <b>Comunicación entre Capas: </b>Las capas se comunican entre sí de
          manera estructurada. Por lo general, las capas más altas solicitan
          servicios a las capas inferiores, y estas últimas responden
          proporcionando los servicios necesarios. Esta comunicación jerárquica
          ayuda a mantener la modularidad y la flexibilidad del sistema
          operativo.
        </li>
        <li>
          <b>Abstracción de Recursos: </b>Cada capa en la jerarquía abstracta y
          simplifica los detalles de implementación de las capas inferiores.
          Esto permite que las capas superiores trabajen con interfaces y
          abstracciones, sin necesidad de conocer los detalles internos de cómo
          se implementan las funciones en las capas inferiores.
        </li>
        <li>
          <b>Flexibilidad y Mantenimiento: </b>La estructura jerárquica facilita
          la flexibilidad y el mantenimiento del sistema operativo. Puedes
          actualizar o cambiar una capa sin afectar directamente a las demás,
          siempre y cuando se mantengan las interfaces definidas.
        </li>
      </ul>
      <br />
      <FiftyFiftyCard
        text="Muchos sistemas operativos modernos, como Linux y Windows, siguen una
        estructura jerárquica. En estos sistemas, el kernel está en la base,
        seguido de capas que gestionan la administración de procesos, sistemas
        de archivos, controladores de dispositivos, interfaces gráficas de
        usuario, y otras capas especializadas."
        title="Ventajas y Desafios"
        textCard="Las ventajas incluyen una mayor modularidad, facilitando el desarrollo y
        mantenimiento del sistema. Sin embargo, la complejidad de la jerarquía
        también puede ser un desafío, y es importante diseñarla cuidadosamente
        para evitar posibles cuellos de botella."
      />
    </>
  );
};

export default EstructuraJerarquica;
