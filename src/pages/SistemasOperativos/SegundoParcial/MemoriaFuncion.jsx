const MemoriaFuncion = () => {
  return (
    <>
      <h2>Funciones del Administrador de Memoria:</h2>

      <section>
        <h3>Asignación de Memoria:</h3>
        <p>
          <b>Descripción:</b> Consiste en asignar porciones de memoria a
          procesos y aplicaciones que lo requieran.
        </p>
        <p>
          <b>Operación:</b>
          Al inicio de un programa, se asigna la cantidad de memoria necesaria.
          Durante la ejecución, el administrador de memoria puede asignar más
          memoria si es necesario.
        </p>
      </section>

      <section>
        <h3>Liberación de Memoria:</h3>
        <p>
          <b>Descripción:</b> Libera la memoria que ya no es necesaria para su
          reutilización.
        </p>
        <p>
          <b>Operación:</b>
          Cuando un programa termina o ya no necesita ciertas porciones de
          memoria, se libera para otros usos.
        </p>
      </section>

      <section>
        <h3>Protección de Memoria:</h3>
        <p>
          <b>Descripción:</b> Evita que un proceso acceda o modifique áreas de
          memoria de otros procesos.
        </p>
        <p>
          <b>Operación:</b>
          Establece permisos de acceso y protección para cada región de memoria
          asignada a un proceso.
        </p>
      </section>

      <section>
        <h3>Mapeo de Memoria:</h3>
        <p>
          <b>Descripción:</b> Asocia direcciones virtuales de memoria con
          direcciones físicas.
        </p>
        <p>
          <b>Operación:</b>
          Traduce direcciones virtuales utilizadas por un programa a direcciones
          físicas reales en el hardware.
        </p>
      </section>

      <section>
        <h3>Administración de Fragmentación:</h3>
        <p>
          <b>Descripción:</b> Mitiga la fragmentación de la memoria, tanto
          interna como externa.
        </p>
        <p>
          <b>Operación:</b>
          Combate la fragmentación interna (espacios no utilizados dentro de
          bloques asignados) y la fragmentación externa (fragmentación del
          espacio libre entre bloques asignados).
        </p>
      </section>

      <section>
        <h3>Swap y Paginación:</h3>
        <p>
          <b>Descripción:</b> Permite la transferencia de datos entre la memoria
          principal y el almacenamiento secundario (swap) o divide la memoria en
          páginas.
        </p>
        <p>
          <b>Operación:</b>
          Cuando la memoria principal se llena, se pueden transferir procesos o
          datos a la memoria secundaria.
        </p>
      </section>

      <br />
      <h2>Operaciones Específicas:</h2>

      <section>
        <h3>Compresión de Memoria:</h3>
        <p>
          <b>Descripción:</b> Comprime datos en la memoria para ahorrar espacio.
        </p>
        <p>
          <b>Operación:</b>
          Comprime datos que no se están utilizando activamente para liberar
          espacio.
        </p>
      </section>

      <section>
        <h3>Administración de Memoria Compartida:</h3>
        <p>
          <b>Descripción:</b> Permite que varios procesos compartan la misma
          región de memoria.
        </p>
        <p>
          <b>Operación:</b>
          Facilita la colaboración y comunicación entre procesos al compartir
          datos directamente en la memoria.
        </p>
      </section>

      <section>
        <h3>Paginación y Segmentación:</h3>
        <p>
          <b>Descripción:</b> Divide la memoria en páginas o segmentos para
          gestionar de manera eficiente la asignación de memoria.
        </p>
        <p>
          <b>Operación:</b>
          Dividir la memoria en unidades más pequeñas (páginas o segmentos) para
          simplificar la administración.
        </p>
      </section>

      <section>
        <h3>Algoritmos de Reemplazo de Página:</h3>
        <p>
          <b>Descripción:</b> Define cómo se seleccionan las páginas para ser
          reemplazadas cuando la memoria está llena.
        </p>
        <p>
          <b>Operación:</b>
          Utiliza algoritmos como FIFO (primero en entrar, primero en salir) o
          LRU (menos recientemente utilizado) para decidir qué páginas deben ser
          enviadas al almacenamiento secundario.
        </p>
      </section>
    </>
  );
};

export default MemoriaFuncion;
