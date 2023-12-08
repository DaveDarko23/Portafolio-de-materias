import CardHorizontal from "../../../Components/CardHorizontal";

const IOAlmacenamiento = () => {
  return (
    <section>
      <h2>Almacenamiento Intermedio de Entrada/Salida (I/O):</h2>

      <section>
        <h3>Características Principales:</h3>
        <ul>
          <li>
            <b>Buffers y Cachés:</b>
            <ul>
              <li>
                <b>Buffer de E/S:</b> Un área de almacenamiento temporal que
                almacena datos durante las operaciones de entrada/salida. Evita
                que el procesador tenga que esperar activamente a que se
                complete la transferencia de datos antes de continuar con otras
                tareas.
              </li>
              <li>
                <b>Caché de Disco:</b> Un área de almacenamiento temporal que
                almacena bloques de datos frecuentemente accedidos desde
                dispositivos de almacenamiento, como discos duros. Mejora la
                velocidad de acceso a datos comunes.
              </li>
            </ul>
          </li>
          <li>
            <b>Gestión de Tiempos de Latencia:</b>
            <ul>
              <li>
                Reduce los tiempos de latencia al permitir que las operaciones
                de E/S se realicen en segundo plano mientras el procesador
                continúa con otras tareas.
              </li>
            </ul>
          </li>
          <li>
            <b>Minimización de Esperas:</b>
            <ul>
              <li>
                Evita que el procesador se quede inactivo mientras espera que se
                complete una operación de entrada/salida. Los datos pueden
                transferirse al buffer o caché, permitiendo que el procesador
                continúe ejecutando otras instrucciones.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h3>Ventajas del Almacenamiento Intermedio de E/S:</h3>
        <ul>
          <li>
            <b>Aumento de la Eficiencia:</b>
            <ul>
              <li>
                Permite que el procesador continúe ejecutando instrucciones
                mientras se llevan a cabo las operaciones de entrada/salida en
                segundo plano.
              </li>
            </ul>
          </li>
          <li>
            <b>Minimización de Esperas:</b>
            <ul>
              <li>
                Reduce el tiempo que el procesador pasa inactivo mientras espera
                la finalización de operaciones de E/S.
              </li>
            </ul>
          </li>
          <li>
            <b>Optimización de Acceso a Datos:</b>
            <ul>
              <li>
                La caché de disco mejora el acceso a datos comúnmente utilizados
                al almacenar bloques de datos frecuentemente accedidos en una
                ubicación de acceso más rápido.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h3>Funcionamiento en Operaciones de E/S:</h3>
        <ul>
          <li>
            <b>Almacenamiento de Datos Entrantes:</b>
            <ul>
              <li>
                Los datos provenientes de dispositivos de entrada se almacenan
                temporalmente en buffers de entrada.
              </li>
            </ul>
          </li>
          <li>
            <b>Transferencia Eficiente:</b>
            <ul>
              <li>
                Los datos almacenados en buffers pueden transferirse de manera
                eficiente a la memoria principal o a otras áreas del sistema.
              </li>
            </ul>
          </li>
          <li>
            <b>Acceso a Datos de Salida:</b>
            <ul>
              <li>
                Los datos a ser enviados a dispositivos de salida se almacenan
                temporalmente en buffers de salida.
              </li>
            </ul>
          </li>
          <li>
            <b>Gestión de Tiempos de Latencia:</b>
            <ul>
              <li>
                Durante la transferencia de datos, el procesador no se ve
                obligado a esperar activamente, ya que las operaciones de E/S se
                realizan de manera concurrente.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h3>Desventajas Potenciales:</h3>
        <ul>
          <li>
            <b>Posible Pérdida de Datos en Caso de Falla:</b>
            <ul>
              <li>
                Si se produce un fallo del sistema antes de que los datos en el
                buffer se transfieran correctamente, puede haber una pérdida de
                datos.
              </li>
            </ul>
          </li>
          <li>
            <b>Necesidad de Mantenimiento:</b>
            <ul>
              <li>
                Los algoritmos de gestión de buffers y cachés deben ser
                eficientes y requieren mantenimiento para garantizar un
                rendimiento óptimo.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <CardHorizontal
        text="
        El almacenamiento intermedio de E/S es una estrategia crucial para
        mejorar la eficiencia de las operaciones de entrada/salida y maximizar
        el rendimiento del sistema, especialmente en entornos donde las
        operaciones de E/S pueden ser más lentas en comparación con la velocidad
        del procesador."
      />
    </section>
  );
};

export default IOAlmacenamiento;
