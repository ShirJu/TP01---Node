export default class Alumno{  
    constructor(username, DNI)
    {
        this.username=username;
        this.DNI=DNI;
    }
    mostrar(username, DNI)
    {
        console.log(`El nombre del alumno es:  ${this.username}`);
        console.log(`El DNI del alumno es:  ${this.DNI}`);
    }
}