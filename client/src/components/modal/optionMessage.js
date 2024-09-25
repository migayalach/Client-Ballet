export const optionMessageModal = (option) => {
  // console.log(option);
  switch (option) {
    case "USER":
      return `Crear nuevo usuario`;
    case "HOURS":
      return `Crear nueva hora`;
    case "TYPE-CLASS":
      return `Crear nueva clase`;
    case "CLASS":
      return `Asignar nueva clase`;
    case "CLASS-STUDENT":
      return `Inscribir nuev@ alumno`;
    case "QUALIFICATION":
      return `Crear nueva evaluación`;
    case "LIST-ASSISTANCE-IDCLASS":
      return `Crear nuevo registro`;
    case "EVENTS":
      return `Crear nuevo evento`;
  }
};

export const infoMessageTitle = (render) => {
  switch (render) {
    case "USER":
      return "Información uso de filtros, crear, editar y eliminar usuarios";
    case "HOURS":
      return `Información uso de filtros, crear, editar y eliminar horas`;
    case "TYPE-CLASS":
      return `Información uso de filtros, crear, editar y eliminar clases`;
    case "CLASS":
      return `Información uso de filtros, crear, editar y eliminar nuevas clases`;
    case "CLASS-STUDENT":
      return `Información uso de filtros, crear, editar y eliminar nuev@s alumnos`;
    case "QUALIFICATION":
      return `Información uso de filtros, crear, editar y eliminar evaluaciónes`;
    case "EVENTS":
      return `Informacion uso de filtros, crear y editar eventos`;
  }
};

export const textInfoUser = (view) => {
  switch (view) {
    case "search":
      return (
        <div>
          <h2>Filtros de Búsqueda</h2>
          <p>
            En nuestra aplicación, puedes buscar y filtrar usuarios utilizando
            varios criterios. Los filtros disponibles son:
          </p>
          <p>
            <strong>Orden:</strong> Puedes ordenar los resultados en orden
            ascendente (asc) o descendente (desc).
          </p>
          <p>
            <strong>Nombre o Apellido:</strong> Filtra los usuarios por su
            nombre o apellido.
          </p>
          <p>
            <strong>Niveles:</strong> Selecciona el nivel de los usuarios.
          </p>
          <p>
            <strong>Carnet:</strong> Filtra usuarios por su número de carnet.
          </p>
          <p>
            <strong>Estado:</strong> Filtra usuarios según su estado, ya sea
            activo o desactivado.
          </p>
          <p>
            Es obligatorio seleccionar el <strong>orden</strong> (asc o desc) y
            el <strong>estado</strong> (activo o desactivado). Los otros filtros
            (<strong>nombre o apellido</strong>, <strong>niveles</strong>, y{" "}
            <strong>carnet</strong>) son opcionales y pueden combinarse según
            sea necesario. Puedes elegir uno, varios, o todos estos filtros para
            refinar tu búsqueda.
          </p>
          <p>
            También hay un botón de <strong>limpiar</strong> que elimina todos
            los filtros anteriores.
          </p>
        </div>
      );
    case "newUser":
      return (
        <div>
          <p>
            Para crear o editar un usuario en nuestra aplicación, debes
            proporcionar los siguientes datos:
          </p>
          <p>
            <strong>Datos Personales:</strong>
          </p>
          <p>Nombre Completo</p>
          <p>Apellido</p>
          <p>Fecha de Nacimiento</p>
          <p>Dirección de Correo Electrónico</p>
          <p>Número de Teléfono</p>
          <p>
            <strong>Asignación de Nivel de Acceso:</strong>
          </p>
          <p>Director</p>
          <p>Secretaria</p>
          <p>Docente</p>
          <p>Estudiante</p>
          <p>
            <strong>Foto de Perfil:</strong> Se debe cargar una foto de perfil.
          </p>
        </div>
      );
    case "deleteUser":
      return (
        <div>
          <h2>Eliminar Usuario</h2>
          <p>
            Para eliminar un usuario en nuestra aplicación, sigue estos pasos:
          </p>
          <p>
            1. Selecciona el <strong>icono de la papelera</strong>{" "}
            correspondiente al usuario que deseas eliminar.
          </p>
          <p>
            2. Se abrirá una ventana de confirmación. Debes hacer clic en el
            botón <strong>Eliminar</strong> para proceder.
          </p>
          <p>
            Ten en cuenta que el usuario solo será eliminado si no está asignado
            a ninguna clase u otra entidad dentro del sistema. Si el usuario
            está asociado con alguna clase u objeto, la eliminación no se
            llevará a cabo y se mostrará un mensaje informativo.
          </p>
        </div>
      );
    case "viewRecordUser":
      return (
        <div>
          <h2>Registro Académico</h2>
          <p>
            El <strong>registro académico</strong> proporciona información
            detallada sobre cada usuario, basado en su rol. A continuación, se
            detalla lo que se puede visualizar según el rol del usuario:
          </p>
          <p>
            <strong>Estudiantes:</strong> Puedes ver las clases en las que está
            inscrito el estudiante.
          </p>
          <p>
            <strong>Profesores:</strong> Puedes acceder a una lista de los
            estudiantes que tiene asignados, sus horarios y las clases que
            imparte.
          </p>
          <p>
            <strong>Secretarias y Directores:</strong> Tienen la capacidad de
            ver tanto el registro académico de los estudiantes como la
            información de los profesores, incluyendo las clases, horarios y
            lista de estudiantes asignados.
          </p>
          <p>
            Esta funcionalidad permite a cada rol obtener la información
            relevante para una gestión académica eficiente.
          </p>
        </div>
      );
  }
};

export const textInfoTypeClass = (view) => {
  switch (view) {
    case "search":
      return (
        <div>
          <p>
            <strong>Filtros:</strong> La búsqueda dentro de esta vista solo
            puede realizarse en <strong>orden ascendente</strong> o
            <strong>orden descendente</strong>. Puedes aplicar filtros para
            organizar la información según tus necesidades.
          </p>
          <p>
            <strong>Botón de Limpiar:</strong> Hay un botón de
            <strong>limpiar</strong> que elimina todos los filtros aplicados y
            restablece la vista a su estado predeterminado.
          </p>
        </div>
      );
    case "newOrUpdate":
      return (
        <div>
          <p>
            Para <strong>crear</strong> un nuevo elemento, sigue estos pasos:
          </p>
          <ol>
            <li>
              Haz clic en la opción <strong>"Crear"</strong> que se encuentra en
              el botón flotante.
            </li>
            <li>
              Asigna un <strong>nombre</strong> al nuevo elemento.
            </li>
            <li>
              La <strong>descripción</strong> es opcional y puede dejarse en
              blanco si no es necesaria.
            </li>
          </ol>
          <p>
            Para <strong>editar</strong> un elemento existente:
          </p>
          <ol>
            <li>
              Presiona el <strong>logo de lápiz</strong> asociado con el
              elemento que deseas modificar.
            </li>
          </ol>
        </div>
      );
    case "delete":
      return (
        <div>
          <p>
            Para <strong>eliminar</strong> un elemento, sigue estos pasos:
          </p>
          <ol>
            <li>
              Presiona el <strong>logo de basurero</strong> asociado con el
              elemento que deseas eliminar.
            </li>
            <li>
              La eliminación se llevará a cabo solo si el elemento no está
              asignado a ningún docente para impartirlo.
            </li>
          </ol>
          <p>
            Si el elemento está asignado a un docente, no podrás eliminarlo
            hasta que se desasigne.
          </p>
        </div>
      );
  }
};

export const textInfoClass = (view) => {
  switch (view) {
    case "search":
      return (
        <div>
          <h2>Filtros de Asignación de Clases</h2>
          <p>
            En nuestra aplicación, puedes filtrar las clases asignadas
            utilizando varios criterios. Los filtros disponibles son:
          </p>
          <p>
            <strong>Orden:</strong> Puedes ordenar los resultados en orden
            ascendente (asc) o descendente (desc).
          </p>
          <p>
            <strong>Profesor:</strong> Filtra las clases por el nombre del
            profesor asignado.
          </p>
          <p>
            <strong>Extensión de Carnet de Identidad:</strong> Filtra las clases
            por la extensión del carnet de identidad del profesor.
          </p>
          <p>
            <strong>Tipo de Clase:</strong> Filtra las clases por su tipo.
          </p>
          <p>
            <strong>Estado:</strong> Filtra las clases según su estado, ya sea
            habilitado o deshabilitado.
          </p>
          <p>
            Para realizar una búsqueda, debes seleccionar <strong>orden</strong>{" "}
            (asc o desc) y <strong>estado</strong> (habilitado o deshabilitado).
            Además, debes seleccionar al menos uno de los filtros adicionales:{" "}
            <strong>profesor</strong>, <strong>extensión de carnet</strong>, o{" "}
            <strong>tipo de clase</strong>. Puedes combinar estos filtros según
            sea necesario.
          </p>
          <p>
            También hay un botón de <strong>limpiar</strong> que restablece
            todos los filtros a su estado inicial.
          </p>
        </div>
      );
    case "newOrUpdate":
      return (
        <div>
          <h2>Asignar y Editar Clases para un Docente</h2>

          <h3>Asignar una Clase:</h3>
          <ol>
            <li>
              <strong>Seleccionar Nuevo:</strong> Haz clic en la opción para
              añadir una nueva asignación de clase.
            </li>
            <li>
              <strong>Elegir el Profesor:</strong> Selecciona el profesor al que
              se le asignará la clase.
            </li>
            <li>
              <strong>Seleccionar la Danza:</strong> Elige la danza que el
              profesor enseñará.
            </li>
            <li>
              <strong>Elegir el Horario:</strong> Asigna el horario en el cual
              se impartirá la clase.
            </li>
            <li>
              <strong>Asignar Paralelo:</strong> Define el paralelo
              correspondiente para la clase.
            </li>
          </ol>

          <h3>Editar una Clase:</h3>
          <ol>
            <li>
              <strong>Hacer Click en el Icono del Lápiz:</strong> Localiza la
              clase que deseas modificar y haz clic en el icono del lápiz para
              editarla.
            </li>
            <li>
              <strong>Modificar los Datos:</strong> Realiza los cambios
              necesarios en la asignación, como el profesor, la danza, el
              horario o el paralelo, según sea necesario.
            </li>
          </ol>
        </div>
      );
    case "delete":
      return (
        <div>
          <h2>Eliminar una Clase</h2>
          <ol>
            <li>
              <strong>Hacer Click en el Icono de la Papelera:</strong> Localiza
              la clase que deseas eliminar y haz clic en el icono de la
              papelera.
            </li>
            <li>
              <strong>Verificación de Inscritos:</strong> Si la clase ya tiene
              alumnos registrados, no se podrá eliminar. Si no hay alumnos
              inscritos, la clase podrá ser eliminada.
            </li>
          </ol>
        </div>
      );
    case "viewTeacher":
      return (
        <div>
          <h2>Ver Lista de Alumnos</h2>
          <ol>
            <li>
              <strong>Hacer Click en "Listado":</strong> Para ver la lista de
              alumnos de una clase impartida por un docente, haz clic en la
              opción "Listado" correspondiente a la clase.
            </li>
            <li>
              <strong>Visualización de la Lista:</strong> Se mostrará una lista
              con todos los alumnos inscritos en la clase seleccionada. Puedes
              revisar los nombres y otros detalles relevantes de los alumnos.
            </li>
          </ol>
        </div>
      );
  }
};

export const textInfoHours = (view) => {
  switch (view) {
    case "search":
      return (
        <div>
          <h2>Filtros de Horarios</h2>
          <p>
            En la sección de horarios, puedes aplicar varios filtros para
            encontrar la información que necesitas:
          </p>
          <p>
            <strong>Orden:</strong> Puedes ordenar los resultados en orden
            ascendente (asc) o descendente (desc).
          </p>
          <p>
            <strong>Duración:</strong> Filtra los horarios según la duración.
          </p>
          <p>
            <strong>Estado:</strong> Filtra los horarios por su estado, ya sea
            habilitado o deshabilitado.
          </p>
          <p>
            Es obligatorio seleccionar el <strong>orden</strong> (asc o desc).
            Los filtros de <strong>duración</strong> y <strong>estado</strong>{" "}
            son opcionales y pueden combinarse con el orden para refinar la
            búsqueda.
          </p>
          <p>
            También hay un botón de <strong>limpiar</strong> que restablece
            todos los filtros y devuelve la vista a su estado inicial.
          </p>
        </div>
      );

    case "newOrUpdate":
      return (
        <div>
          <p>Para crear o editar un horario, sigue estos pasos:</p>
          <ol>
            <li>
              Haz clic en el botón <strong>"Nuevo" / "Editar"</strong>.
            </li>
            <li>
              Ingresa la <strong>hora de inicio</strong> de la clase.
            </li>
            <li>
              Ingresa la <strong>hora de finalización</strong> de la clase.
            </li>
            <li>
              La duración del horario se calculará automáticamente en base a las
              horas de inicio y finalización proporcionadas.
            </li>
          </ol>
        </div>
      );

    case "delete":
      return (
        <div>
          <p>Para eliminar un horario, sigue estos pasos:</p>
          <ol>
            <li>
              Haz clic en el ícono de <strong>"Eliminar"</strong>.
            </li>
            <li>
              El horario solo podrá ser eliminado si no está asociado a ninguna
              clase registrada. Si el horario ya se encuentra en uso, no se
              podrá eliminar.
            </li>
          </ol>
        </div>
      );
  }
};

export const textInfoEvent = (view) => {
  switch (view) {
    case "search":
      return (
        <div>
          Puedes filtrar los eventos ordenados por fecha y por su estado,
          indicando si el evento ya ha pasado o si está por realizarse. Esto te
          permite visualizar de manera organizada los eventos próximos o los que
          ya ocurrieron.
        </div>
      );
    case "newOrUpdate":
      return (
        <div>
          Puedes crear un nuevo evento introduciendo todos los datos requeridos,
          como el nombre, fecha, hora y ubicación. Asimismo, para actualizar un
          evento existente, es necesario completar todos los campos con la
          información actualizada.
        </div>
      );
    case "delete":
      return (
        <div>
          Solo es posible eliminar un evento si este aún no ha pasado. Si el
          evento ya se llevó a cabo o se realiza el mismo día, no será posible
          eliminarlo para mantener el registro histórico.
        </div>
      );
    case "detail":
      return (
        <div>
          Al hacer clic en "Saber más", serás redirigido a una nueva ventana
          donde podrás obtener información detallada sobre el evento, incluyendo
          la ubicación, horario y descripción completa.
        </div>
      );
  }
};

export const textInfoQualification = (view) => {
  switch (view) {
    case "search":
      return (
        <diV>
          <p>
            Para refinar tu búsqueda de evaluaciones, puedes aplicar los
            siguientes filtros:
          </p>
          <p>
            <strong>Fecha:</strong> Filtra las evaluaciones según la fecha en la
            que se realizaron.
          </p>
          <p>
            <strong>Promedio:</strong> Filtra las evaluaciones basadas en el
            promedio de calificaciones.
          </p>
          <p>
            <strong>Profesor:</strong> Filtra las evaluaciones según el profesor
            que las realizó.
          </p>
          <p>
            <strong>Todos:</strong> Si eliges esta opción, se mostrarán todas
            las evaluaciones sin aplicar filtros específicos.
          </p>
          <p>
            Puedes combinar estos filtros según tus necesidades. Para limpiar
            los filtros y volver a la vista predeterminada, utiliza el botón de{" "}
            <strong>limpiar</strong>.
          </p>
        </diV>
      );

    case "new":
      return (
        <div>
          <h2>Crear Nueva Evaluación</h2>
          <p>Para crear una nueva evaluación, sigue estos pasos:</p>
          <ol>
            <li>
              <strong>Hacer clic en "Nuevo":</strong> Esto iniciará el proceso
              de creación de una evaluación.
            </li>
            <li>
              <strong>Asignar un título:</strong> Introduce un título
              descriptivo para la evaluación.
            </li>
            <li>
              <strong>Seleccionar la clase:</strong> Elige la clase que será
              evaluada de la lista disponible.
            </li>
            <li>
              <strong>Establecer la fecha:</strong> Selecciona la fecha en la
              que se llevará a cabo la evaluación.
            </li>
            <li>
              <strong>Agregar parámetros de evaluación:</strong> Introduce los
              parámetros que serán evaluados, indicando el valor total de la
              evaluación para cada parámetro.
            </li>
            <li>
              <strong>Agregar una descripción:</strong> Proporciona una
              descripción detallada de lo que se evaluará.
            </li>
          </ol>
        </div>
      );

    case "qualification":
      return (
        <div>
          <p>Para calificar una evaluación, sigue estos pasos:</p>
          <p>
            <strong>Haz clic en el ícono de calificación</strong>{" "}
            correspondiente a la evaluación que deseas calificar.
          </p>
          <p>
            Serás redirigido a la página de la clase donde podrás ingresar las
            calificaciones.
          </p>
          <p>
            En esta página, podrás revisar los parámetros de la evaluación y
            completar las calificaciones necesarias.
          </p>
          <p>
            Asegúrate de guardar los cambios una vez que hayas ingresado todas
            las calificaciones. Esto garantizará que los resultados se
            actualicen correctamente.
          </p>
        </div>
      );

    case "download":
      return (
        <div>
          <p>Para descargar las notas, sigue estos pasos:</p>
          <p>
            <strong>Haz clic en el ícono de descarga</strong> situado en la
            interfaz de notas.
          </p>
          <p>
            Este clic generará un archivo Excel con las notas correspondientes.
          </p>
          <p>
            El archivo Excel será descargado automáticamente a tu dispositivo.
          </p>
          <p>
            Asegúrate de tener una aplicación compatible con archivos Excel para
            poder abrir y revisar las notas descargadas.
          </p>
        </div>
      );

    case "delete":
      return (
        <div>
          <p>Para eliminar un examen asignado, sigue estos pasos:</p>
          <p>
            <strong>Asegúrate de que el promedio del curso sea 0</strong>. La
            eliminación del examen solo es posible si el promedio general del
            curso está en 0.
          </p>
          <p>
            <strong>Haz clic en el ícono de la papelera</strong> junto al examen
            que deseas eliminar.
          </p>
          <p>Confirma la acción de eliminación cuando se te solicite.</p>
          <p>Una vez confirmado, el examen será eliminado del sistema.</p>
          <p>
            Si el promedio del curso no es 0, no podrás eliminar el examen.
            Asegúrate de revisar y ajustar las calificaciones antes de intentar
            eliminar el examen.
          </p>
        </div>
      );
  }
};

export const textInformationAddStudent = (view) => {
  switch (view) {
    case "add":
      return (
        <div>
          <p>Para inscribir un nuevo alumno en una clase, sigue estos pasos:</p>
          <ol>
            <li>
              <strong>Selecciona el alumno</strong> de la lista disponible.
              Puedes buscar el nombre del alumno en el campo de búsqueda para
              facilitar la selección.
            </li>
            <li>
              <strong>Haz clic en "Añadir"</strong> para inscribir al alumno en
              la clase seleccionada.
            </li>
            <li>Confirma la inscripción si se te solicita.</li>
            <li>
              El alumno será inscrito en la clase y aparecerá en la lista de
              alumnos de la clase.
            </li>
          </ol>
          <p>
            Asegúrate de revisar los detalles antes de confirmar la inscripción
            para evitar errores.
          </p>
        </div>
      );

    case "edit":
      return (
        <div>
          <p>
            Para cambiar el estado de un alumno de activo a desactivo, sigue
            estos pasos:
          </p>
          <ol>
            <li>
              <strong>Selecciona el alumno</strong> cuyo estado deseas cambiar
              de la lista de alumnos.
            </li>
            <li>
              <strong>Elige la opción para cambiar el estado</strong>, que puede
              ser un botón o una opción en el menú.
            </li>
            <li>
              <strong>Selecciona el nuevo estado</strong> para el alumno (activo
              o desactivo).
            </li>
            <li>
              <strong>Confirma el cambio</strong> si se te solicita.
            </li>
          </ol>
          <p>
            Asegúrate de revisar los detalles antes de confirmar el cambio para
            garantizar que se actualice el estado correctamente.
          </p>
        </div>
      );

    case "delete":
      return (
        <div>
          <h2>Eliminar Alumno</h2>
          <p>Para eliminar un alumno de una clase, sigue estos pasos:</p>
          <ol>
            <li>
              <strong>Selecciona el alumno</strong> que deseas eliminar de la
              lista de alumnos de la clase.
            </li>
            <li>
              <strong>Haz clic en el icono de la papelera</strong> para eliminar
              al alumno.
            </li>
            <li>
              Si el alumno <strong>no tiene notas</strong> registradas, la
              eliminación se llevará a cabo de inmediato.
            </li>
            <li>
              Si el alumno tiene notas registradas, la eliminación no será
              posible. Debes eliminar primero las notas asociadas al alumno
              antes de proceder con la eliminación.
            </li>
            <li>Confirma la eliminación si se te solicita.</li>
          </ol>
          <p>
            Asegúrate de revisar los detalles antes de confirmar la eliminación
            para evitar errores.
          </p>
        </div>
      );
  }
};
