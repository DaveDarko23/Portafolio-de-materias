import CardHorizontal from "../../../Components/CardHorizontal";

const AdLlamadas = () => {
  return (
    <>
      <h2>Llamadas al Sistema para la Administración de Procesos</h2>
      <p>
        Las llamadas al sistema para la administración de procesos son
        interfaces que proporcionan los sistemas operativos para permitir a los
        programas de usuario interactuar con funciones específicas del sistema
        operativo relacionadas con la creación, ejecución y gestión de procesos.
        Estas llamadas al sistema son esenciales para que los programas de
        usuario utilicen los servicios del sistema operativo de manera segura y
        eficiente. Aquí hay algunas llamadas al sistema comunes relacionadas con
        la administración de procesos:
      </p>

      <section>
        <h3>1. fork() - Crear un Proceso:</h3>
        <p>
          <b>Descripción:</b> La llamada al sistema fork() se utiliza para crear
          un nuevo proceso que es una copia exacta del proceso que realiza la
          llamada.
        </p>
        <p>
          <b>Uso Típico:</b> Un nuevo proceso (hijo) se crea a partir del
          proceso existente (padre).
        </p>
        <p>
          <b>Ejemplo (en Unix/Linux):</b>
        </p>
        <br />
        <pre>
          <code>
            {`              pid_t child_pid = fork();
              if (child_pid === 0) {
                // Código ejecutado por el proceso hijo
              } else if (child_pid > 0) {
                // Código ejecutado por el proceso padre
              } else {
                // Error en la creación del proceso
              }`}
          </code>
        </pre>
      </section>

      <section>
        <h3>2. exec() - Reemplazar el Código de un Proceso:</h3>
        <p>
          <b>Descripción:</b> Las llamadas al sistema exec() se utilizan para
          reemplazar el código del proceso actual con un nuevo programa.
        </p>
        <p>
          <b>Uso Típico:</b> Después de un fork(), el proceso hijo utiliza
          exec() para cargar un programa diferente en su espacio de direcciones.
        </p>
        <p>
          <b>Ejemplo (en Unix/Linux):</b>
        </p>
        <pre>
          <code>execl("/bin/ls", "ls", "-l", NULL);</code>
        </pre>
      </section>

      <section>
        <h3>
          3. wait() y waitpid() - Esperar la Finalización de un Proceso Hijo:
        </h3>
        <p>
          <b>Descripción:</b> Las llamadas al sistema wait() y waitpid() se
          utilizan para que un proceso padre espere a que su proceso hijo
          termine.
        </p>
        <p>
          <b>Uso Típico:</b> El proceso padre utiliza wait() o waitpid() para
          esperar a que el proceso hijo complete su ejecución.
        </p>
        <p>
          <b>Ejemplo (en Unix/Linux):</b>
        </p>
        <pre>
          <code>int status; pid_t terminated_child_pid = wait(&status);</code>
        </pre>
      </section>

      <section>
        <h3>4. exit() - Terminar un Proceso:</h3>
        <p>
          <b>Descripción:</b> La llamada al sistema exit() se utiliza para
          finalizar la ejecución de un proceso.
        </p>
        <p>
          <b>Uso Típico:</b> El proceso utiliza exit() para salir de manera
          ordenada, devolviendo un código de salida al sistema operativo.
        </p>
        <p>
          <b>Ejemplo (en Unix/Linux):</b>
        </p>
        <pre>
          <code>exit(0); // Salir sin errores</code>
        </pre>
      </section>

      <section>
        <h3>5. getpid() y getppid() - Obtener Identificadores de Procesos:</h3>
        <p>
          <b>Descripción:</b> Las llamadas al sistema getpid() y getppid() se
          utilizan para obtener el identificador de proceso (PID) y el
          identificador de proceso padre (PPID) respectivamente.
        </p>
        <p>
          <b>Uso Típico:</b> Para conocer la identificación única de un proceso
          y la identificación de su proceso padre.
        </p>
        <p>
          <b>Ejemplo (en Unix/Linux):</b>
        </p>
        <pre>
          <code>pid_t my_pid = getpid(); pid_t parent_pid = getppid();</code>
        </pre>
      </section>

      <section>
        <h3>6. kill() - Enviar Señales a Procesos:</h3>
        <p>
          <b>Descripción:</b> La llamada al sistema kill() se utiliza para
          enviar señales a un proceso o grupo de procesos.
        </p>
        <p>
          <b>Uso Típico:</b> Puede utilizarse para interrumpir un proceso,
          enviar una señal de finalización, etc.
        </p>
        <p>
          <b>Ejemplo (en Unix/Linux):</b>
        </p>
        <pre>
          <code>kill(process_id, SIGTERM); // Enviar señal de terminación</code>
        </pre>
      </section>

      <CardHorizontal
        text="
        Estas llamadas al sistema proporcionan a los programadores las
        herramientas necesarias para administrar la creación, ejecución y
        finalización de procesos, así como para interactuar entre procesos en
        sistemas operativos. Es importante tener en cuenta que la disponibilidad
        y la sintaxis exacta de estas llamadas al sistema pueden variar según el
        sistema operativo específico."
      />
    </>
  );
};

export default AdLlamadas;
