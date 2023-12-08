import CardHorizontal from "../../../Components/CardHorizontal";
import FiftyFiftyCard from "../../../Components/FiftyFiftyCard";

const PrimerSeccion = () => {
  return (
    <>
      <h2>Definición de un Sistema Operativo</h2>
      <FiftyFiftyCard
        text="
Un sistema operativo (SO) es un software esencial que actúa como intermediario entre el hardware de una computadora y las aplicaciones de software. Su función principal es proporcionar una interfaz consistente y eficiente para que los usuarios y las aplicaciones interactúen con el hardware del sistema. Aquí hay una definición más detallada de lo que es un sistema operativo:"
        title="Definición de Sistema Operativo"
        textCard="Un sistema operativo es un conjunto de programas y servicios que gestionan los recursos y permiten el funcionamiento eficiente de una computadora o dispositivo informático. Actúa como una capa de abstracción entre el hardware y el software, facilitando la ejecución de aplicaciones y la gestión de recursos, como la memoria, el procesador, el almacenamiento y los dispositivos de entrada/salida."
      />

      <section>
        <h3>Tipos de Sistemas Operativos:</h3>
        <ul>
          <li>
            <b>Sistemas Operativos de Escritorio:</b> Diseñados para
            computadoras personales y estaciones de trabajo.
          </li>
          <li>
            <b>Sistemas Operativos de Servidores:</b> Orientados a gestionar
            recursos y servicios en servidores para atender a múltiples usuarios
            o aplicaciones.
          </li>
          <li>
            <b>Sistemas Operativos Móviles:</b> Diseñados para dispositivos
            móviles como teléfonos inteligentes y tabletas.
          </li>
          <li>
            <b>Sistemas Operativos Empotrados:</b> Integrados en dispositivos
            específicos, como electrodomésticos, automóviles y dispositivos IoT
            (Internet de las cosas).
          </li>
        </ul>
      </section>
      <CardHorizontal
        title="Importancia del Sistema Operativo"
        text="El sistema operativo es esencial para la funcionalidad y usabilidad de cualquier sistema informático. Permite a los usuarios ejecutar aplicaciones, gestionar archivos, acceder a recursos de hardware y garantiza que las operaciones informáticas se realicen de manera coherente y eficiente. En resumen, el sistema operativo sirve como el núcleo fundamental que coordina todas las actividades en una computadora o dispositivo similar."
      />
    </>
  );
};

export default PrimerSeccion;
