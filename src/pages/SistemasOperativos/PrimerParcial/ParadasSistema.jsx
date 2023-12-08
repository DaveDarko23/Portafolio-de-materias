import CardHorizontal from "../../../Components/CardHorizontal";

const ParadasSistema = () => {
  return (
    <>
      <h2>Parada del Sistema Operativo:</h2>
      <p>
        <b>Cierre de Aplicaciones y Procesos:</b>
        <br />
        Antes de apagar el sistema operativo, se solicita a todas las
        aplicaciones y procesos en ejecución que cierren sus operaciones de
        manera ordenada. Esto implica guardar cualquier trabajo no guardado y
        liberar los recursos utilizados.
      </p>

      <p>
        <b>Cierre de Sesiones de Usuario:</b>
        <br />
        Si hay varias sesiones de usuario abiertas, el sistema operativo cierra
        cada sesión individualmente, lo que significa que se terminan las
        actividades asociadas con cada cuenta de usuario.
      </p>

      <p>
        <b>Desmontaje de Sistemas de Archivos:</b>
        <br />
        Los sistemas operativos utilizan sistemas de archivos para organizar y
        almacenar datos. Antes de apagar, el sistema operativo desmonta o
        desconecta los sistemas de archivos, asegurándose de que no haya datos
        en uso y que todos los cambios pendientes se hayan guardado
        correctamente.
      </p>

      <p>
        <b>Finalización de Servicios y Procesos del Sistema:</b>
        <br />
        Los servicios del sistema operativo, como servicios de red, impresión,
        actualizaciones automáticas, etc., se detienen para evitar la
        realización de operaciones innecesarias después del apagado.
      </p>

      <p>
        <b>Liberación de Recursos del Hardware:</b>
        <br />
        El sistema operativo realiza un proceso de liberación de recursos,
        asegurándose de que todos los recursos del hardware, como la memoria
        RAM, se hayan liberado adecuadamente y estén disponibles para otros
        sistemas operativos o aplicaciones si es necesario.
      </p>

      <p>
        <b>Envío de Señal de Apagado:</b>
        <br />
        Una vez que todos los procesos y servicios han finalizado correctamente,
        el sistema operativo envía una señal al hardware indicando que puede
        apagarse.
      </p>

      <p>
        <b>Cierre del Kernel:</b>
        <br />
        El kernel del sistema operativo, que es el núcleo esencial que controla
        las operaciones del sistema, se apaga. Esto marca el final del
        funcionamiento del sistema operativo.
      </p>

      <p>
        <b>Apagado del Hardware:</b>
        <br />
        Finalmente, después de que todas las operaciones se han completado, el
        hardware se apaga completamente. Esto puede implicar cortar la energía
        eléctrica o poner en modo de bajo consumo, según la configuración del
        sistema.
      </p>

      <CardHorizontal
        text="
        Es importante seguir el proceso de apagado adecuado para evitar pérdida
        de datos y posibles problemas de corrupción del sistema operativo. En
        entornos empresariales y de servidor, a menudo se utilizan
        procedimientos más elaborados para garantizar la integridad de los datos
        y la disponibilidad del sistema. En sistemas más modernos, también
        existe la opción de hibernar o suspender, donde el sistema operativo
        guarda el estado actual en el disco y se apaga, permitiendo una
        reanudación más rápida en el futuro."
      />
    </>
  );
};

export default ParadasSistema;
