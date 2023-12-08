import CardHorizontal from "../../../Components/CardHorizontal";

const MemoriaVirtual = () => {
  return (
    <>
      <h2>Memoria Virtual:</h2>

      <section>
        <h3>Características de la Memoria Virtual:</h3>
        <ul>
          <li>
            <b>Espacio de Direcciones Lógicas y Físicas:</b> La memoria virtual
            utiliza un espacio de direcciones lógicas más grande que el espacio
            de direcciones físicas de la memoria RAM. Los programas se ejecutan
            en el espacio de direcciones lógicas, y la memoria virtual se
            encarga de traducir estas direcciones lógicas a direcciones físicas
            reales.
          </li>
          <li>
            <b>Paginación y Segmentación:</b> La implementación de la memoria
            virtual puede incluir técnicas como paginación (dividir la memoria
            en páginas) y segmentación (dividir la memoria en segmentos). Estas
            técnicas permiten un manejo más eficiente de la memoria.
          </li>
          <li>
            <b>Archivo de Intercambio o Página de Intercambio:</b> Cuando la
            memoria física se llena, partes de los programas o datos en la
            memoria pueden ser transferidos al almacenamiento secundario y luego
            devueltos a la memoria cuando sea necesario. Esto se realiza a
            través del archivo de intercambio o página de intercambio.
          </li>
          <li>
            <b>Algoritmos de Reemplazo de Página:</b> Los algoritmos determinan
            qué página de memoria debe ser transferida al almacenamiento
            secundario cuando se necesita espacio. Algunos algoritmos comunes
            son FIFO (Primero en Entrar, Primero en Salir) y LRU (Menos
            Recientemente Utilizado).
          </li>
          <li>
            <b>Protección y Aislamiento:</b> La memoria virtual proporciona
            aislamiento entre procesos, ya que cada proceso tiene su propio
            espacio de direcciones lógicas independiente. También facilita la
            protección de la memoria, ya que un proceso no puede acceder
            directamente a la memoria de otro proceso.
          </li>
        </ul>
      </section>

      <section>
        <h3>Ventajas de la Memoria Virtual:</h3>
        <ul>
          <li>
            <b>Ejecución de Programas Más Grandes:</b> Permite ejecutar
            programas que son más grandes que la cantidad de memoria física
            disponible.
          </li>
          <li>
            <b>Manejo Eficiente de Recursos:</b> Optimiza el uso de la memoria
            física y permite ejecutar múltiples procesos simultáneamente.
          </li>
          <li>
            <b>Aislamiento y Protección:</b> Proporciona un espacio de
            direcciones lógicas aislado para cada proceso, mejorando la
            seguridad y la estabilidad del sistema.
          </li>
        </ul>
      </section>

      <section>
        <h3>Desventajas de la Memoria Virtual:</h3>
        <ul>
          <li>
            <b>Pérdida de Rendimiento:</b> Puede haber una pérdida de
            rendimiento cuando se utilizan técnicas de memoria virtual debido a
            la necesidad de acceder al almacenamiento secundario.
          </li>
          <li>
            <b>Complejidad en la Implementación:</b> La implementación de la
            memoria virtual agrega complejidad al sistema operativo y a los
            algoritmos de administración de memoria.
          </li>
          <li>
            <b>Posibles Problemas de Fragmentación:</b> Aunque la memoria
            virtual aborda algunos problemas de fragmentación, puede introducir
            sus propios problemas, como la fragmentación externa en el disco.
          </li>
        </ul>
      </section>

      <CardHorizontal
        text="La memoria virtual es una característica fundamental en sistemas
        operativos modernos y ha permitido ejecutar aplicaciones más grandes y
        complejas. La gestión eficiente de la memoria virtual es esencial para
        el rendimiento y la estabilidad de los sistemas operativos
        contemporáneos."
      />
    </>
  );
};

export default MemoriaVirtual;
