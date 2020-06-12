var Restaurant = function (
  id,
  nombre,
  rubro,
  ubicacion,
  horarios,
  imagen,
  calificaciones
) {
  this.id = id;
  this.nombre = nombre;
  this.rubro = rubro;
  this.ubicacion = ubicacion;
  this.horarios = horarios;
  this.imagen = imagen;
  this.calificaciones = calificaciones;
};

Restaurant.prototype.reservarHorario = function (horarioReservado) {
  this.horarios = this.horarios.filter(
    (elemento) => elemento != horarioReservado
  );
};

Restaurant.prototype.calificar = function (nuevaCalificacion) {
  if (
    Number.isInteger(nuevaCalificacion) &&
    nuevaCalificacion > 0 &&
    nuevaCalificacion < 10
  ) {
    this.calificaciones.push(nuevaCalificacion);
  }
};

Restaurant.prototype.obtenerPuntuacion = function () {
  if (this.calificaciones.length === 0) {
    return 0;
  } else {
    return this.promedio(this.calificaciones);
  }
};

Restaurant.prototype.sumatoria = function (array) {
  var suma = array.reduce((a, b) => a + b);
  return suma;
};

Restaurant.prototype.promedio = function (array) {
  var suma = this.sumatoria(array);
  var resultado = suma / array.length;
  return Math.round(resultado * 10) / 10;
};
