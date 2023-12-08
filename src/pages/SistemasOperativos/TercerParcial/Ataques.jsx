import CardHorizontal from "../../../Components/CardHorizontal";

const Ataques = () => {
  return (
    <>
      <h2>Ataques</h2>
      <p>
        Los sistemas operativos son constantemente blanco de diversos ataques,
        ya que son una parte fundamental de cualquier sistema informático. Aquí
        te hablaré sobre algunos de los ataques más comunes dirigidos a los
        sistemas operativos:
      </p>
      <section>
        <h3>1. Malware:</h3>
        <ul>
          <li>
            <b>Virus:</b> Programas maliciosos que se adjuntan a archivos
            ejecutables y se replican al ejecutarse.
          </li>
          <li>
            <b>Gusanos:</b> Programas que se replican y propagan a través de
            redes, a menudo explotando vulnerabilidades.
          </li>
          <li>
            <b>Troyanos:</b> Software malicioso que parece legítimo pero que, al
            ejecutarse, realiza acciones no deseadas sin el conocimiento del
            usuario.
          </li>
        </ul>
      </section>

      <section>
        <h3>2. Ataques de Ingeniería Social:</h3>
        <ul>
          <li>
            <b>Phishing:</b> Intentos de engañar a los usuarios para que revelen
            información confidencial, como contraseñas, a menudo a través de
            correos electrónicos falsos.
          </li>
          <li>
            <b>Spear Phishing:</b> Variantes más específicas de phishing que se
            dirigen a individuos específicos, a menudo utilizando información
            personal para aumentar la credibilidad.
          </li>
        </ul>
      </section>

      <section>
        <h3>3. Ataques de Fuerza Bruta:</h3>
        <ul>
          <li>
            <b>Ataques a Contraseñas:</b> Intentos repetidos de adivinar
            contraseñas mediante la prueba de diferentes combinaciones hasta
            encontrar la correcta.
          </li>
        </ul>
      </section>

      <section>
        <h3>4. Exploits y Vulnerabilidades:</h3>
        <ul>
          <li>
            <b>Desbordamientos de Búfer:</b> Explotación de errores de
            programación que permiten a un atacante escribir más datos en un
            área de memoria de la que debería tener acceso.
          </li>
          <li>
            <b>Inyección de Código:</b> Introducción de código malicioso en
            aplicaciones a través de datos de entrada, como inyección SQL o
            inyección de comandos.
          </li>
        </ul>
      </section>
      <section>
        <h3>
          5. Ataques de Denegación de Servicio (DoS) y Distribuidos (DDoS):
        </h3>
        <ul>
          <li>
            <b>DoS:</b> Sobrecarga de recursos, como ancho de banda o capacidad
            de procesamiento, para hacer que un servicio o sistema sea
            inaccesible.
          </li>
          <li>
            <b>DDoS:</b> Ataque de Denegación de Servicio distribuido que
            utiliza múltiples sistemas para amplificar y coordinar el ataque.
          </li>
        </ul>
      </section>

      <section>
        <h3>6. Ataques a la Capa de Red:</h3>
        <ul>
          <li>
            <b>Man-in-the-Middle (MitM):</b> Un atacante intercepta y
            potencialmente altera la comunicación entre dos partes sin que
            ninguna de ellas lo sepa.
          </li>
          <li>
            <b>Spoofing de Direcciones IP:</b> Suplantación de la dirección IP
            para engañar a otros sistemas sobre la identidad del remitente.
          </li>
        </ul>
      </section>

      <section>
        <h3>7. Ataques a la Capa de Aplicación:</h3>
        <ul>
          <li>
            <b>Cross-Site Scripting (XSS):</b> Inserción de scripts maliciosos
            en páginas web visitadas por otros usuarios.
          </li>
          <li>
            <b>Cross-Site Request Forgery (CSRF):</b> Realización de acciones no
            autorizadas en nombre de un usuario sin su conocimiento.
          </li>
        </ul>
      </section>

      <section>
        <h3>8. Rootkits:</h3>
        <ul>
          <li>
            <b>Infección del Núcleo del Sistema:</b> Programas maliciosos
            diseñados para ocultar la presencia de otras amenazas al nivel más
            profundo del sistema operativo.
          </li>
        </ul>
      </section>

      <section>
        <h3>9. Ataques a la Capa de Enlace:</h3>
        <ul>
          <li>
            <b>Ataques ARP Poisoning:</b> Manipulación de las tablas ARP para
            asociar direcciones IP con direcciones MAC falsas.
          </li>
        </ul>
      </section>

      <CardHorizontal text="Estos son solo algunos ejemplos de los muchos tipos de ataques que los sistemas operativos pueden enfrentar. La seguridad de un sistema operativo implica la implementación de medidas preventivas y la respuesta efectiva a posibles incidentes para proteger la integridad y la confidencialidad de la información." />
    </>
  );
};

export default Ataques;
