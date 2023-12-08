const EstructuraServidor = () => {
  return (
    <>
      <h2>Estructura Cliente - Servidor</h2>
      <p>
        La arquitectura cliente-servidor es un modelo de diseño de software que
        divide las funciones de una aplicación en dos partes principales: el
        cliente y el servidor. Estos dos componentes se comunican entre sí para
        realizar tareas y proporcionar servicios.
      </p>
      <br />
      <h3>Cliente:</h3>
      <p>
        <b>Definición:</b> El cliente es la parte de la aplicación que
        interactúa directamente con el usuario. Puede ser un programa de
        software, una aplicación web, o incluso un dispositivo físico.
      </p>
      <br />
      <h3>Funciones Principales:</h3>
      <ul>
        <li>
          <b>Interfaz de Usuario (UI):</b> Proporciona la interfaz gráfica o la
          experiencia de usuario con la que los usuarios interactúan.
        </li>
        <li>
          <b>Procesamiento Local:</b> Realiza ciertas operaciones y
          procesamientos en el lado del cliente antes de enviar solicitudes al
          servidor.
        </li>
        <li>
          <b>Interactúa con el Usuario:</b> Recoge la entrada del usuario,
          presenta resultados y gestiona la interacción general con el usuario.
        </li>
      </ul>

      <br />
      <h3>Servidor:</h3>
      <p>
        <b>Definición:</b> El servidor es la parte de la aplicación que gestiona
        recursos, procesos y proporciona servicios. Generalmente, se encuentra
        en una ubicación remota y está conectado a través de una red.
      </p>

      <br />
      <h3>Funciones Principales:</h3>
      <ul>
        <li>
          <b>Procesamiento de Datos:</b> Realiza el procesamiento principal y
          lleva a cabo las operaciones críticas de la aplicación.
        </li>
        <li>
          <b>Gestión de Recursos:</b> Controla y administra los recursos, como
          bases de datos, archivos, y otros, necesarios para la aplicación.
        </li>
        <li>
          <b>Recibe y Procesa Solicitudes:</b> Espera solicitudes del cliente,
          las procesa y devuelve los resultados.
        </li>
      </ul>
      <br />
      <h3>Comunicación Cliente-Servidor:</h3>
      <p>
        La comunicación entre el cliente y el servidor se realiza a través de
        protocolos de red, como HTTP para aplicaciones web, o mediante
        protocolos personalizados en aplicaciones más especializadas.
      </p>
      <p>
        El cliente envía solicitudes al servidor, y el servidor responde
        proporcionando los datos solicitados o realizando la acción requerida.
      </p>
      <p>
        La separación de las funciones del cliente y el servidor permite una
        mayor flexibilidad y escalabilidad en el diseño y la implementación de
        aplicaciones.
      </p>

      <br />
      <h3>Ventajas de la Arquitectura Cliente-Servidor:</h3>
      <ul>
        <li>
          <b>Escalabilidad:</b> Puede escalar el rendimiento y la capacidad del
          servidor sin afectar directamente al cliente.
        </li>
        <li>
          <b>Distribución de Recursos:</b> Permite distribuir y administrar
          eficientemente los recursos de la aplicación.
        </li>
        <li>
          <b>Mantenimiento Centralizado:</b> Las actualizaciones y el
          mantenimiento se pueden realizar centralmente en el servidor sin
          afectar a todos los clientes.
        </li>
      </ul>

      <br />
      <h3>Desafíos:</h3>
      <ul>
        <li>
          <b>Seguridad:</b> La comunicación entre el cliente y el servidor puede
          ser vulnerable a problemas de seguridad, y se deben implementar
          medidas para proteger los datos transmitidos.
        </li>
        <li>
          <b>Dependencia de la Red:</b> La eficacia de la aplicación a menudo
          depende de la calidad y disponibilidad de la red.
        </li>
      </ul>
    </>
  );
};

export default EstructuraServidor;
