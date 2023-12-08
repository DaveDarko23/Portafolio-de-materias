import CardHorizontal from "../../../Components/CardHorizontal";

const MemoriaAsignacion = () => {
  return (
    <>
      <h2>Asignación de Memoria Contigua:</h2>

      <section>
        <h3>Características de la Asignación de Memoria Contigua:</h3>
        <ul>
          <li>
            <b>Bloques Contiguos:</b> En este método, un proceso recibe un
            bloque de memoria contiguo que abarca desde una dirección inicial
            hasta una dirección final. Los bloques adyacentes a menudo se
            asignan a otros procesos.
          </li>
          <li>
            <b>Ubicación Física Continua:</b> La memoria asignada a un proceso
            está físicamente ubicada en direcciones de memoria consecutivas, lo
            que facilita la referencia a las ubicaciones de memoria mediante
            direcciones relativas.
          </li>
          <li>
            <b>Fragmentación Interna:</b> La asignación contigua puede sufrir de
            fragmentación interna, donde se asigna más memoria de la necesaria.
            Esto puede ocurrir cuando un proceso solicita una cantidad
            específica de memoria, pero se le asigna un bloque más grande.
          </li>
        </ul>
      </section>

      <section>
        <h3>Métodos Comunes de Asignación Contigua:</h3>
        <ul>
          <li>
            <b>Primer Ajuste (First Fit):</b> Asigna el primer bloque de memoria
            contiguo que sea lo suficientemente grande para satisfacer las
            necesidades del proceso. Es simple pero puede generar fragmentación.
          </li>
          <li>
            <b>Mejor Ajuste (Best Fit):</b> Busca el bloque más pequeño que sea
            suficientemente grande. Reduce la fragmentación, pero puede llevar a
            un uso ineficiente del espacio.
          </li>
          <li>
            <b>Peor Ajuste (Worst Fit):</b> Asigna el bloque más grande
            disponible. Puede dejar fragmentación, pero a veces resulta en una
            fragmentación más pequeña en comparación con el mejor ajuste.
          </li>
        </ul>
      </section>

      <section>
        <h3>Ventajas de la Asignación de Memoria Contigua:</h3>
        <ul>
          <li>
            <b>Acceso Rápido:</b> La asignación contigua permite un acceso
            rápido a los datos almacenados en memoria, ya que las ubicaciones
            son consecutivas.
          </li>
          <li>
            <b>Implementación Sencilla:</b> Es más fácil de implementar en
            comparación con métodos no contiguos, ya que no hay necesidad de
            mantener tablas de asignación complejas.
          </li>
        </ul>
      </section>

      <section>
        <h3>Desventajas de la Asignación de Memoria Contigua:</h3>
        <ul>
          <li>
            <b>Fragmentación Interna:</b> Puede haber desperdicio de memoria
            debido a la fragmentación interna, especialmente si los bloques de
            memoria son más grandes que lo necesario para un proceso.
          </li>
          <li>
            <b>Problemas de Tamaño de Proceso:</b> Puede ser difícil asignar
            memoria a procesos de tamaños no estándar, ya que los bloques deben
            ser contiguos.
          </li>
          <li>
            <b>Problemas de Concurrencia:</b> Puede haber problemas de
            concurrencia si varios procesos compiten por la misma área de
            memoria contigua.
          </li>
        </ul>
      </section>

      <CardHorizontal
        title="Implementación Practica"
        text="
          La asignación de memoria contigua se utiliza en sistemas operativos y
          lenguajes de programación donde la gestión de la memoria es más
          directa, como en sistemas embebidos o en algunos sistemas de tiempo
          real. Sin embargo, en sistemas más complejos y modernos, como sistemas
          operativos de propósito general, se utilizan técnicas de asignación no
          contigua para abordar problemas de fragmentación y mejorar la
          flexibilidad de asignación de memoria."
      />
    </>
  );
};

export default MemoriaAsignacion;
