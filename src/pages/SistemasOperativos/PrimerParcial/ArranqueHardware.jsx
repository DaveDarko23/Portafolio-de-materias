import CardHorizontal from "../../../Components/CardHorizontal";

const ArranqueHardware = () => {
  return (
    <>
      <h2>Proceso de Arranque del Hardware:</h2>
      <p>
        El proceso de arranque del hardware, también conocido como "Power-On
        Self-Test" (POST) y arranque del firmware, es la secuencia de eventos
        que ocurre cuando enciendes una computadora. Este proceso verifica y
        prepara el hardware para cargar el sistema operativo. Aquí tienes una
        descripción general de las etapas típicas del arranque del hardware:
      </p>

      <p>
        <b>Encendido (Power On):</b>
        <br />
        Cuando enciendes la computadora o la reinicias, la energía eléctrica
        llega a los componentes de hardware, y el sistema se activa.
      </p>

      <p>
        <b>Activación del BIOS/UEFI:</b>
        <br />
        Inmediatamente después del encendido, el Basic Input/Output System
        (BIOS) o el Unified Extensible Firmware Interface (UEFI) se activa. El
        BIOS o UEFI está almacenado en un chip de la placa madre y proporciona
        la interfaz entre el hardware y el sistema operativo.
      </p>

      <p>
        <b>POST (Power-On Self-Test):</b>
        <br />
        El BIOS o UEFI realiza el POST, una serie de pruebas automáticas para
        verificar que los componentes de hardware esenciales estén funcionando
        correctamente. Esto incluye pruebas de la memoria RAM, el procesador, la
        tarjeta gráfica, los dispositivos de almacenamiento y otros periféricos
        conectados.
      </p>

      <p>
        <b>Inicialización de Hardware:</b>
        <br />
        Después de pasar las pruebas del POST, el BIOS o UEFI inicializa los
        componentes de hardware, configura los controladores y establece la
        configuración básica del sistema.
      </p>

      <p>
        <b>Búsqueda del Dispositivo de Arranque:</b>
        <br />
        El BIOS o UEFI busca un dispositivo de arranque válido. El dispositivo
        de arranque suele ser el disco duro, una unidad SSD, una unidad USB u
        otro dispositivo que contenga un sistema operativo válido.
      </p>

      <p>
        <b>Carga del Cargador de Arranque (Bootloader):</b>
        <br />
        Una vez que se ha encontrado un dispositivo de arranque válido, el BIOS
        o UEFI carga el cargador de arranque desde el sector de arranque del
        dispositivo seleccionado. El cargador de arranque es un pequeño programa
        que inicia el proceso de carga del sistema operativo.
      </p>

      <p>
        <b>Carga del Kernel del Sistema Operativo:</b>
        <br />
        El cargador de arranque carga el kernel del sistema operativo en la
        memoria RAM. El kernel es el núcleo del sistema operativo y es esencial
        para la interacción entre el software y el hardware.
      </p>

      <p>
        <b>Inicio del Sistema Operativo:</b>
        <br />
        Con el kernel cargado en la memoria, el sistema operativo inicia su
        proceso de arranque. Durante este proceso, el sistema operativo realiza
        tareas como la inicialización de controladores, la configuración de
        servicios esenciales y la preparación para el inicio de sesión del
        usuario.
      </p>

      <p>
        <b>Inicio del Usuario:</b>
        <br />
        Finalmente, el sistema operativo presenta la interfaz de inicio de
        sesión, donde los usuarios pueden ingresar sus credenciales para acceder
        al sistema y comenzar a utilizar la computadora.
      </p>

      <CardHorizontal
        text="
        Es importante destacar que el proceso de arranque del hardware puede
        variar ligeramente según el fabricante del hardware y el tipo de
        firmware (BIOS o UEFI). Además, algunas configuraciones avanzadas pueden
        agregar pasos adicionales, como la verificación segura (Secure Boot) en
        sistemas modernos."
      />
    </>
  );
};

export default ArranqueHardware;
