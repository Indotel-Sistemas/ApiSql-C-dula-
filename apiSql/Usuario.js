class Usuario{
    constructor(Id,Cedula,Nombre,Apellido,FechaNac,Sexo){
        this.Id = Id;
        this.Cedula = Cedula;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.FechaNac = FechaNac;
        this.Sexo = Sexo;
    }
}

module.exports = Usuario;