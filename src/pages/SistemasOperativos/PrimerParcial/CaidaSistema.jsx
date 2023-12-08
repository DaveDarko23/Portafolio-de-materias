import CardHorizontal from "../../../Components/CardHorizontal";

const CaidaSistema = () => {
  return (
    <>
      <h3>Problemas de Arranque:</h3>
      <ul>
        <li>
          <b>Cargador de Arranque Dañado:</b>
          <br />
          Si el cargador de arranque está dañado, el sistema operativo puede
          tener dificultades para cargarse. Puedes intentar reparar el cargador
          de arranque utilizando herramientas integradas o reinstalándolo.
        </li>
        <li>
          <b>Corrupción del Sistema de Archivos:</b>
          <br />
          La corrupción en el sistema de archivos puede causar problemas de
          arranque. Herramientas como "chkdsk" en Windows o "fsck" en Linux
          pueden ayudar a reparar problemas en el sistema de archivos.
        </li>
        <li>
          <b>Problemas de Hardware:</b>
          <br />
          Fallos en el hardware, como un disco duro defectuoso o problemas de
          RAM, pueden afectar el proceso de arranque. Realizar pruebas de
          hardware y reemplazar componentes defectuosos puede ser necesario.
        </li>
        <li>
          <b>Configuración Incorrecta del BIOS/UEFI:</b>
          <br />
          Configuraciones incorrectas en el BIOS o UEFI pueden afectar el
          proceso de arranque. Asegúrate de que la configuración del dispositivo
          de arranque sea correcta y que no haya cambios inesperados.
        </li>
        <li>
          <b>Infección por Malware:</b>
          <br />
          La presencia de malware puede interferir con el arranque del sistema
          operativo. Escanea el sistema en busca de malware utilizando un
          software antivirus actualizado.
        </li>
      </ul>

      <h3>Caídas del Sistema Operativo:</h3>
      <ul>
        <li>
          <b>Actualizaciones Problemáticas:</b>
          <br />
          Algunas actualizaciones de software pueden causar conflictos y
          provocar caídas del sistema. Realizar actualizaciones periódicas y
          verificar la estabilidad del sistema después de cada actualización
          puede ayudar a evitar este problema.
        </li>
        <li>
          <b>Controladores Incompatibles o Obsoletos:</b>
          <br />
          Controladores de hardware incompatibles o desactualizados pueden
          causar caídas del sistema. Mantén los controladores actualizados y
          verifica la compatibilidad con nuevas versiones del sistema operativo.
        </li>
        <li>
          <b>Problemas de Software de Terceros:</b>
          <br />
          Aplicaciones de terceros mal diseñadas o incompatibles pueden causar
          caídas del sistema. Asegúrate de que todas las aplicaciones estén
          actualizadas y sean compatibles con la versión del sistema operativo.
        </li>
        <li>
          <b>Problemas de Memoria:</b>
          <br />
          Problemas con la memoria RAM, como módulos defectuosos o
          configuraciones incorrectas, pueden causar caídas del sistema. Realiza
          pruebas de memoria y reemplaza los módulos defectuosos si es
          necesario.
        </li>
        <li>
          <b>Errores del Sistema Operativo:</b>
          <br />
          Bugs o errores en el sistema operativo mismo pueden provocar caídas.
          Mantén tu sistema operativo actualizado con los últimos parches y
          actualizaciones de seguridad.
        </li>
        <li>
          <b>Sobrecalentamiento del Hardware:</b>
          <br />
          El sobrecalentamiento de componentes como la CPU puede provocar caídas
          del sistema. Monitoriza las temperaturas del hardware y asegúrate de
          que la refrigeración sea adecuada.
        </li>
      </ul>

      <CardHorizontal
        text="
        Cuando te enfrentas a problemas de arranque o caídas del sistema
        operativo, es recomendable realizar pasos de diagnóstico, como verificar
        la integridad del hardware y del sistema de archivos, y utilizar
        herramientas de recuperación del sistema. Si los problemas persisten,
        puede ser necesario buscar asistencia técnica para abordar problemas más
        complejos."
      />
    </>
  );
};

export default CaidaSistema;
