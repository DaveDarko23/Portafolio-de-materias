const Estructura = () => {
  return (
    <>
      <h2>Estructuras Monoliticas</h2>
      <h3>¿Qué son?</h3>
      <p>
        La estructura monolítica es una arquitectura de diseño de sistemas
        operativos que se caracteriza por tener todos sus componentes esenciales
        y servicios ejecutándose en el mismo espacio de memoria y privilegios.
        En un sistema operativo monolítico, el kernel, los controladores de
        dispositivos, los servicios del sistema y las aplicaciones comparten un
        solo espacio de direcciones y pueden ejecutarse en modo kernel, lo que
        significa que tienen acceso directo a todo el hardware y recursos del
        sistema.
      </p>
      <br />
      <h3>Características:</h3>
      <ul>
        <li>
          <b>Kérnel único: </b>
          En un sistema monolítico, el kernel es el componente central que
          gestiona los recursos del sistema, como la memoria, los procesos y los
          dispositivos de hardware. Este kernel único tiene control total sobre
          el sistema y se ejecuta en modo kernel, lo que le otorga privilegios
          elevados.
        </li>
        <li>
          <b>Especio de Direcciones único: </b>Todos los componentes del
          sistema, incluyendo los controladores de dispositivos y los servicios
          del sistema, comparten el mismo espacio de direcciones. Esto implica
          que pueden comunicarse entre sí de manera más directa, pero también
          puede generar ciertos desafíos en términos de aislamiento y seguridad.
        </li>
        <li>
          <b>Coordinación Interna: </b> Debido a que todos los componentes
          comparten el mismo espacio de memoria y privilegios, la coordinación
          entre ellos es más sencilla en comparación con otras arquitecturas más
          modulares. Sin embargo, esto también significa que un error en un
          componente puede afectar a todo el sistema.
        </li>
        <li>
          <b>Eficiencia en el Accesso a Recursos: </b>
          Al tener acceso directo a los recursos del sistema, los componentes en
          un sistema operativo monolítico pueden ser más eficientes en términos
          de rendimiento, ya que no hay capas adicionales de comunicación entre
          ellos.
        </li>
      </ul>
      <br />
      <h3>Ejemplos</h3>
      <p>
        Ejemplos clásicos de sistemas operativos monolíticos incluyen versiones
        antiguas de Microsoft Windows y sistemas basados en UNIX como Linux en
        sus configuraciones más básicas.
      </p>
      <br />
      <h3>Inconvenientes</h3>
      <p>
        A pesar de sus ventajas en eficiencia y simplicidad interna, los
        sistemas operativos monolíticos también tienen desafíos, como la
        dificultad de mantenimiento y actualización, así como la falta de
        aislamiento entre componentes, lo que puede afectar la estabilidad y
        seguridad del sistema. A lo largo del tiempo, han surgido otras
        arquitecturas, como los microkernels y los sistemas híbridos, para
        abordar algunas de estas limitaciones.
      </p>
    </>
  );
};

export default Estructura;
