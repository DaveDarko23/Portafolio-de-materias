import FiftyFiftyCard from "../../../Components/FiftyFiftyCard";

const EstructuraVirtual = () => {
  return (
    <>
      <h2>Máquinas Virtuales</h2>
      <FiftyFiftyCard
        text="Las máquinas virtuales (VM, por sus siglas en inglés) son una tecnología
        que permite la creación de entornos virtuales independientes dentro de
        un sistema físico. Estas máquinas virtuales actúan como sistemas
        computacionales completos con su propio sistema operativo y
        aplicaciones, pero comparten los recursos físicos de la máquina
        anfitriona."
        title="Definición"
        textCard="Una máquina virtual es una representación software de una máquina
        física, ejecutándose como un proceso aislado en el sistema anfitrión.
        Puede tener su propio sistema operativo y aplicaciones, todo
        virtualizado y separado del sistema operativo principal."
      />

      <br />
      <h3>Tipos de Máquinas Virtuales</h3>
      <ul>
        <li>
          <b>Sistema Completo: </b>Estas emulan sistemas completos y pueden
          ejecutar cualquier sistema operativo. Ejemplos incluyen Oracle
          VirtualBox y VMware Workstation.
        </li>
        <li>
          <b>Contenedor: </b>Estas son más ligeras y comparten el kernel del
          sistema operativo anfitrión. Ejemplos incluyen Docker y Kubernetes.
        </li>
      </ul>
      <br />
      <h3>Puntos Clave</h3>
      <ul>
        <li>
          <b>Hipervisor: </b>Para crear y gestionar máquinas virtuales, se
          utiliza un software llamado hipervisor o monitor de máquina virtual.
          El hipervisor se encarga de asignar recursos físicos a las máquinas
          virtuales y garantizar su aislamiento.
        </li>
        <li>
          <b>Aislamiento y Seguridad: </b>Cada máquina virtual está aislada de
          las demás y del sistema anfitrión. Esto proporciona un nivel de
          seguridad, ya que los fallos en una máquina virtual no afectan a las
          demás ni al sistema físico.
        </li>
        <li>
          <b>Portabilidad: </b>Las máquinas virtuales son portátiles y pueden
          ejecutarse en cualquier sistema que tenga un hipervisor compatible.
          Esto facilita la migración y distribución de entornos de desarrollo,
          pruebas y producción.
        </li>
        <li>
          <b>Eficiencia de Recursos: </b>
          El hipervisor gestiona la asignación de recursos, permitiendo que
          varias máquinas virtuales compartan eficientemente los recursos
          físicos, como CPU, memoria RAM y almacenamiento.
        </li>
        <li>
          <b>Instantáneas: </b>Las máquinas virtuales a menudo ofrecen la
          capacidad de tomar instantáneas, lo que permite guardar el estado
          actual de una VM y revertir a ese estado en caso de problemas o para
          realizar pruebas.
        </li>
      </ul>
      <br />
      <h3>Usos de las Maquinas Virtuales</h3>
      <p>
        Las máquinas virtuales son ampliamente utilizadas en entornos de
        desarrollo y pruebas. Los desarrolladores pueden probar software en
        diferentes configuraciones y sistemas operativos sin necesidad de
        hardware adicional.
      </p>
      <p>
        En entornos empresariales, la virtualización se utiliza para consolidar
        varios servidores físicos en un solo servidor físico que aloja varias
        máquinas virtuales. Esto mejora la eficiencia y reduce los costos de
        hardware.
      </p>
    </>
  );
};

export default EstructuraVirtual;
