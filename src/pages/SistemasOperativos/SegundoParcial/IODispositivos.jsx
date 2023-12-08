import CardHorizontal from "../../../Components/CardHorizontal";

const IODispositivos = () => {
  return (
    <>
      <h2>Dispositivos de Entrada/Salida (E/S):</h2>

      <section>
        <h3>Dispositivos de Entrada:</h3>
        <ul>
          <li>
            <b>Teclado:</b> Permite la entrada de datos mediante la pulsación de
            teclas.
          </li>
          <li>
            <b>Ratón o Dispositivo Apuntador:</b> Facilita la interacción con la
            interfaz gráfica del usuario (GUI) mediante movimientos y clics.
          </li>
          <li>
            <b>Escáner:</b> Convierte documentos o imágenes en formato digital
            para su procesamiento.
          </li>
          <li>
            <b>Cámaras Web:</b> Capturan video e imágenes para
            videoconferencias, fotografías, etc.
          </li>
          <li>
            <b>Micrófono:</b> Convierte señales de sonido en datos digitales
            para aplicaciones de grabación o comunicación.
          </li>
          <li>
            <b>Sensores de Movimiento:</b> Detectan movimientos físicos y los
            convierten en datos digitales, utilizados en juegos y aplicaciones
            de realidad virtual.
          </li>
        </ul>
      </section>

      <section>
        <h3>Dispositivos de Salida:</h3>
        <ul>
          <li>
            <b>Monitor o Pantalla:</b> Muestra información visual generada por
            la computadora.
          </li>
          <li>
            <b>Impresora:</b> Produce copias impresas de documentos o imágenes.
          </li>
          <li>
            <b>Altavoces o Auriculares:</b> Producen sonido basado en datos
            digitales, utilizados para la salida de audio.
          </li>
          <li>
            <b>Pantallas Táctiles:</b> Permiten la entrada y salida de datos
            mediante toques y gestos directos en la pantalla.
          </li>
          <li>
            <b>Luces Indicadoras:</b> Muestran estados o condiciones específicas
            mediante luces LED.
          </li>
        </ul>
      </section>

      <p>
        <b>Funcionamiento en el Contexto de un Sistema Operativo:</b>
      </p>

      <section>
        <h3>Controlador de Dispositivos:</h3>
        <p>
          El sistema operativo utiliza controladores de dispositivos para
          interactuar con hardware específico. Estos controladores actúan como
          intermediarios entre el sistema operativo y los dispositivos.
        </p>
      </section>

      <section>
        <h3>Gestión de Interrupciones:</h3>
        <p>
          Los dispositivos pueden generar interrupciones para alertar al sistema
          operativo sobre eventos importantes, como la pulsación de una tecla o
          la finalización de una tarea de impresión.
        </p>
      </section>

      <section>
        <h3>Acceso a Dispositivos:</h3>
        <p>
          El sistema operativo facilita el acceso a dispositivos a través de
          llamadas al sistema y proporciona una interfaz estándar para
          aplicaciones.
        </p>
      </section>

      <section>
        <h3>Manejo de Buffer y Caché:</h3>
        <p>
          Para mejorar la eficiencia, el sistema operativo puede utilizar
          buffers y cachés para almacenar temporalmente datos de entrada/salida.
        </p>
      </section>

      <p>
        <b>Comunicación Síncrona y Asíncrona:</b>
      </p>

      <section>
        <h3>Síncrona:</h3>
        <p>
          El proceso espera activamente que se complete la operación de E/S
          antes de continuar.
        </p>
      </section>

      <section>
        <h3>Asíncrona:</h3>
        <p>
          El proceso envía la solicitud de E/S y continúa con otras tareas sin
          esperar la finalización. Recibe una notificación o interrumpe cuando
          la operación se completa.
        </p>
      </section>

      <section>
        <h3>Dispositivos de Almacenamiento como E/S:</h3>
        <ul>
          <li>
            <b>Discos Duros y SSD:</b> Almacenan y recuperan datos de manera no
            volátil.
          </li>
          <li>
            <b>Unidades Flash:</b> Proporcionan almacenamiento portátil de
            estado sólido.
          </li>
          <li>
            <b>CD/DVD/Blu-ray:</b> Permiten la lectura y escritura de datos
            ópticos.
          </li>
        </ul>
      </section>
      <CardHorizontal
        text="
        Los sistemas operativos manejan la complejidad de la E/S al proporcionar
        abstracciones y servicios que permiten a las aplicaciones interactuar
        con diversos dispositivos de manera eficiente y coherente. La gestión
        efectiva de la E/S es crucial para el rendimiento y la usabilidad de los
        sistemas informáticos."
      />
    </>
  );
};

export default IODispositivos;
