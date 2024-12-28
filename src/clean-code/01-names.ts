(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, tagged: false },
        { id: 2, tagged: false },
        { id: 3, tagged: true },
        { id: 4, tagged: false },
        { id: 5, tagged: false },
        { id: 7, tagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = filesToEvaluate.map( file => file.tagged );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const todayDate = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const filesInDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const masClassesPerStudent = 6;


})();