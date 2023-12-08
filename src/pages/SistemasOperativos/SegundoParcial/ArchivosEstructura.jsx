import CardHorizontal from "../../../Components/CardHorizontal";

const ArchivosEstructura = () => {
  return (
    <>
      <h2>Estructura de Directorios en Sistemas de Archivos:</h2>
      <p>
        La estructura de directorios es un componente clave de los sistemas de
        archivos y proporciona una forma organizada y jerárquica de almacenar y
        acceder a archivos en un sistema operativo. Aquí te presento conceptos
        sobre la estructura de directorios y cómo se relaciona con los sistemas
        de archivos:
      </p>

      <section>
        <h3>Estructura de Directorios:</h3>
        <ul>
          <li>
            <b>Raíz (Root):</b> Es el directorio principal en el sistema de
            archivos. En sistemas basados en Unix/Linux, se representa como "/"
            (barra diagonal). En sistemas Windows, se representa como "C:" en la
            unidad C, por ejemplo.
          </li>
          <li>
            <b>Directorios Padre y Directorios Hijos:</b> Cada directorio puede
            tener un directorio padre y uno o más directorios hijos. El
            directorio padre contiene subdirectorios y archivos.
          </li>
          <li>
            <b>Rutas (Paths):</b> Una ruta especifica la ubicación de un archivo
            o directorio en la estructura jerárquica. Puede ser relativa al
            directorio actual o absoluta desde la raíz del sistema de archivos.
          </li>
          <li>
            <b>Jerarquía de Directorios:</b> Los directorios forman una
            jerarquía, lo que significa que pueden contener subdirectorios y
            archivos. Esto facilita la organización y la navegación de los datos
            almacenados.
          </li>
          <li>
            <b>Nombres de Archivos y Directorios:</b> Los nombres de archivos y
            directorios pueden contener caracteres alfanuméricos, así como
            caracteres especiales como espacios, guiones bajos y puntos. Sin
            embargo, algunos caracteres están reservados para funciones
            específicas.
          </li>
          <li>
            <b>Características Especiales:</b> Algunos sistemas de archivos
            permiten atributos especiales para directorios, como permisos de
            acceso, fechas de creación y modificación, y otros metadatos.
          </li>
        </ul>
      </section>

      <section>
        <h3>Sistemas de Archivos y Estructuras de Directorios Comunes:</h3>
        <ul>
          <li>
            <b>Unix/Linux:</b> En sistemas basados en Unix/Linux, la estructura
            de directorios sigue una convención estándar. Algunos directorios
            clave incluyen /bin (binarios), /home (hogar de usuarios), /etc
            (configuraciones), /var (datos variables), y otros.
          </li>
          <li>
            <b>Windows:</b> En sistemas Windows, cada unidad de almacenamiento
            tiene su propia estructura de directorios. La unidad C suele
            contener carpetas como Program Files, Users (Usuarios), y Windows.
          </li>
          <li>
            <b>macOS:</b> En sistemas macOS, se utiliza una estructura similar a
            Unix con carpetas como Applications (Aplicaciones), Users
            (Usuarios), y System (Sistema).
          </li>
        </ul>
      </section>

      <section>
        <h3>Operaciones en la Estructura de Directorios:</h3>
        <ul>
          <li>
            <b>Crear Directorios:</b> Permite la creación de nuevos directorios
            para organizar archivos.
          </li>
          <li>
            <b>Eliminar Directorios:</b> Permite la eliminación de directorios y
            su contenido.
          </li>
          <li>
            <b>Mover o Renombrar Directorios:</b> Facilita la reorganización de
            directorios cambiando su nombre o moviéndolos a una ubicación
            diferente.
          </li>
          <li>
            <b>Cambiar Directorio Actual:</b> Permite al usuario cambiar su
            ubicación actual en la estructura de directorios.
          </li>
          <li>
            <b>Listar Contenido del Directorio:</b> Muestra los archivos y
            subdirectorios presentes en un directorio.
          </li>
        </ul>
      </section>

      <section>
        <h3>Ejemplo Práctico:</h3>
        <p>
          En un sistema Unix/Linux, la estructura de directorios podría verse
          así:
        </p>
        <pre>
          <code>
            {`            / 
            |-- bin 
            |-- home 
            | |-- usuario1 
            | |-- usuario2 
            |-- etc 
            |-- var 
            |-- usr`}
          </code>
        </pre>
        <CardHorizontal
          title="Ejemplo"
          text="
          Aquí, '/' es el directorio raíz, y los directorios como 'home'
          contienen subdirectorios para usuarios individuales. Los archivos y
          subdirectorios se organizan en esta estructura para facilitar la
          administración y la navegación. Cada sistema operativo tiene su propia
          convención y estructura específica de directorios."
        />
      </section>
    </>
  );
};

export default ArchivosEstructura;
