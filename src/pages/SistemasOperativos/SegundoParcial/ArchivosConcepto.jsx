import CardHorizontal from "../../../Components/CardHorizontal";

const ArchivosConcepto = () => {
  return (
    <>
      <h2>Concepto de Archivo:</h2>
      <p>
        Un archivo es una colección de información almacenada bajo un nombre
        identificador en un sistema de archivos. Puede contener datos legibles
        por humanos, como texto, o datos binarios, como programas ejecutables y
        archivos multimedia. Los archivos son la unidad básica de almacenamiento
        en un sistema de archivos y se organizan en directorios para facilitar
        la gestión.
      </p>

      <section>
        <h3>Tipos de Archivos:</h3>
        <ul>
          <li>
            <b>Archivo de Texto:</b>
            Contiene datos legibles por humanos en formato de texto simple.
            Pueden incluir documentos, scripts, configuraciones, etc.
          </li>

          <li>
            <b>Archivo Binario:</b>
            Contiene datos en formato binario, no legible directamente por
            humanos. Pueden ser ejecutables, imágenes, videos, o cualquier tipo
            de datos codificados.
          </li>

          <li>
            <b>Archivo Ejecutable:</b>
            Contiene instrucciones ejecutables para la computadora. Pueden ser
            programas, scripts, o bibliotecas compartidas.
          </li>

          <li>
            <b>Archivo de Imagen:</b>
            Almacena datos de imágenes. Pueden ser formatos como JPEG, PNG, GIF,
            entre otros.
          </li>

          <li>
            <b>Archivo de Audio:</b>
            Contiene datos de audio. Ejemplos incluyen archivos MP3, WAV, y
            otros formatos de audio.
          </li>

          <li>
            <b>Archivo de Video:</b>
            Almacena datos de video. Pueden ser archivos en formatos como MP4,
            AVI, entre otros.
          </li>

          <li>
            <b>Archivo Comprimido:</b>
            Agrupa uno o más archivos en un solo archivo para ahorrar espacio y
            facilitar la transferencia. Ejemplos incluyen archivos ZIP, TAR,
            RAR.
          </li>

          <li>
            <b>Archivo de Sistema:</b>
            Almacena datos esenciales para el funcionamiento del sistema
            operativo. Ejemplos son los archivos del sistema en sistemas Windows
            (por ejemplo, DLL, EXE) o los archivos de configuración en sistemas
            Unix/Linux.
          </li>

          <li>
            <b>Archivo de Configuración:</b>
            Contiene datos de configuración utilizados por programas y el
            sistema operativo para personalizar su comportamiento.
          </li>

          <li>
            <b>Archivo de Datos:</b>
            Almacena datos específicos de una aplicación o usuario, como una
            base de datos o un archivo de hoja de cálculo.
          </li>

          <li>
            <b>Archivo de Registro (Log File):</b>
            Registra eventos y actividades del sistema o de una aplicación para
            fines de diagnóstico y seguimiento.
          </li>
        </ul>
      </section>
      <CardHorizontal
        text="
        Estos son solo algunos ejemplos de tipos de archivos. La diversidad de
        formatos de archivos permite a los sistemas operativos y aplicaciones
        gestionar una amplia gama de datos de manera eficiente y organizada.
        Cada tipo de archivo tiene su propósito y características específicas."
      />
    </>
  );
};

export default ArchivosConcepto;
