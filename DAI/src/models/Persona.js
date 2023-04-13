const EDAD_MINIMA=18;
export default class Persona{  
    constructor(nombre, edad)
    {
        // el this es porque estoy creando una variable en la fncion y le doy el valor que quiero
        this.nombre=nombre;
        this.edad=edad;
    }
    setNombre(nombre)
    {
        this.nombre=nombre;
    }
    setEdad(edad)
    {
        if (edad> EDAD_MINIMA) {
            this.edad=nombre;
        }
        
    }

    print()
    {
        console.log(`Soy ${this.nombre}`);
    }
}