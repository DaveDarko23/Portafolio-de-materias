import CardHorizontal from "../../../Components/CardHorizontal";

const ArranqueSO = () => {
  return (
    <>
      <h2>Proceso de Arranque del Sistema Operativo:</h2>
      <p>
        <b>Encendido de la Computadora:</b>
        <br />
        Cuando enciendes o reinicias la computadora, se proporciona energía
        eléctrica a los componentes del hardware, y la CPU comienza a ejecutar
        instrucciones almacenadas en el firmware del sistema, como el BIOS o
        UEFI.
      </p>

      <p>
        <b>POST (Power-On Self-Test):</b>
        <br />
        El firmware del sistema realiza un conjunto de pruebas automáticas
        conocidas como POST para verificar la integridad de los componentes de
        hardware esenciales, como la memoria RAM, el procesador, la tarjeta
        gráfica y los dispositivos de almacenamiento. Si se detecta un problema
        durante el POST, se pueden generar códigos de error o mensajes para
        indicar la naturaleza del problema.
      </p>

      <p>
        <b>Inicialización del Hardware:</b>
        <br />
        Después de pasar el POST con éxito, el firmware del sistema inicializa
        los componentes de hardware, configura los controladores necesarios y
        establece la configuración básica del sistema.
      </p>

      <p>
        <b>Selección del Dispositivo de Arranque:</b>
        <br />
        El firmware del sistema busca un dispositivo de arranque válido. Este
        dispositivo suele ser el disco duro o una unidad de estado sólido (SSD)
        que contiene el sistema operativo instalado. También podría ser una
        unidad USB, un CD/DVD, o incluso una red en el caso de arranque en red
        (PXE boot).
      </p>

      <p>
        <b>Carga del Cargador de Arranque (Bootloader):</b>
        <br />
        Una vez que se selecciona el dispositivo de arranque, el firmware del
        sistema carga el cargador de arranque desde el sector de arranque del
        dispositivo. El cargador de arranque es un programa que tiene la
        responsabilidad de cargar el sistema operativo en la memoria RAM.
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
        proceso de arranque. Durante esta fase, el sistema operativo realiza
        tareas esenciales, como la inicialización de controladores de
        dispositivos, la configuración de servicios y la preparación para la
        interacción con el usuario.
      </p>

      <p>
        <b>Presentación de la Interfaz de Inicio de Sesión:</b>
        <br />
        Finalmente, el sistema operativo presenta la interfaz de inicio de
        sesión. Aquí, los usuarios pueden ingresar sus credenciales para
        autenticarse y acceder al escritorio o entorno de trabajo.
      </p>

      <CardHorizontal
        text="
        Este proceso puede variar ligeramente dependiendo del sistema operativo
        específico, la configuración del firmware y cualquier personalización
        realizada por el usuario. Además, en sistemas más modernos, el firmware
        UEFI ha reemplazado en gran medida al BIOS, proporcionando nuevas
        características y capacidades de arranque seguro."
      />
    </>
  );
};

export default ArranqueSO;
