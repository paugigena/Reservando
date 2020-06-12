var Reserva = function(horario, cantidadDePersonas, precioPorPersona, CodDescuento){
    this.horario = horario,
    this.cantidadDePersonas = cantidadDePersonas,
    this.precioPorPersona = precioPorPersona,
    this.CodDescuento = CodDescuento
}

Reserva.prototype.calcularPrecioBase = function(){
    return this.cantidadDePersonas * this.precioPorPersona;
}

Reserva.prototype.calcularPrecioTotal = function(){

    var precioFinal= this.calcularPrecioBase()+ this.calcularAdicionales()- this.calcularDescuento();
    return precioFinal;
}

Reserva.prototype.calcularDescuento= function(){
    var precioBase = this.calcularPrecioBase();
    var descuentoGrupos = 0; 
    var descuentoCodigo = 0;

    if(this.cantidadDePersonas >= 4 && this.cantidadDePersonas <= 6){
        descuentoGrupos = precioBase * 0.05;

    } else if(this.cantidadDePersonas == 7 || this.cantidadDePersonas == 8){
        descuentoGrupos = precioBase * 0.10;

    } else if(this.cantidadDePersonas > 8){
        descuentoGrupos = precioBase * 0.15;
    }
    
    if(this.CodDescuento == "DES15"){
        descuentoCodigo = precioBase * 0.15;
    }
    else if(this.CodDescuento == "DES200"){
        descuentoCodigo = 200;
    }
    else if(this.CodDescuento == "DES1"){
        descuentoCodigo = this.precioPorPersona;
    }
    else{
        descuentoCodigo = 0;
    }
    
    return descuentoGrupos += descuentoCodigo;

}

Reserva.prototype.calcularAdicionales = function(){
    var precioBase = this.calcularPrecioBase();
    var horaReserva = this.horario.getHours();
    var diaReserva = this.horario.getDay();
    var adicionalHorario = 0;
    var adicionalDiaSemana = 0;

    if(horaReserva >= 13 && horaReserva <= 14 || horaReserva >= 20 && horaReserva <= 21 ){
        adicionalHorario = precioBase* 0.05;
    }

    if(diaReserva == 5 || diaReserva == 6 || diaReserva == 0){
        adicionalDiaSemana = precioBase* 0.10;
    }

    return adicionalHorario += adicionalDiaSemana; 
}
