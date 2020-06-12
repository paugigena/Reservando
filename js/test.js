var expect = chai.expect;
var restaurante1 = new Restaurant(
  1,
  "TAO Uptown",
  "Asiática",
  "Nueva York",
  ["13:00", "15:30", "18:00"],
  "../img/asiatica1.jpg",
  [6, 7, 9, 10, 5]
);
var restHorario = restaurante1.horarios.length;
var restaurantCero = new Restaurant(
  1,
  "TAO Uptown",
  "Asiática",
  "Nueva York",
  ["13:00", "15:30", "18:00"],
  "../img/asiatica1.jpg",
  []
);
var lista = [
  new Restaurant(
    5,
    "Jolly",
    "Asiática",
    "Berlín",
    ["12:00", "13:30", "16:00"],
    "../img/asiatica3.jpg",
    [8, 3, 9, 5, 6, 7]
  ),
  new Restaurant(
    6,
    "Green salad",
    "Ensalada",
    "Berlín",
    ["17:00", "19:00", "20:30"],
    "../img/ensalada2.jpg",
    [8, 3, 2, 1, 8, 7]
  ),
  new Restaurant(
    7,
    "Osteria Da Fortunata",
    "Pasta",
    "Roma",
    ["13:00", "15:30", "18:00"],
    "../img/pasta2.jpg",
    [7, 7, 7, 7, 3, 9]
  ),
  new Restaurant(
    8,
    "Cafe Francoeur",
    "Desayuno",
    "París",
    ["14:30", "15:30", "19:00"],
    "../img/desayuno1.jpg",
    [4, 7, 9, 8, 10]
  ),
  new Restaurant(
    9,
    "La Trottinette",
    "Pasta",
    "París",
    ["16:00", "18:00", "21:30"],
    "../img/pasta5.jpg",
    [8, 8, 7, 7, 7, 7]
  ),
  new Restaurant(
    10,
    "New London Cafe",
    "Desayuno",
    "Londres",
    ["12:00", "13:00", "14:30"],
    "../img/desayuno3.jpg",
    [9, 4, 6, 5, 6]
  ),
  new Restaurant(
    11,
    "Frogburguer",
    "Hamburguesa",
    "París",
    ["12:00", "15:00", "17:30"],
    "../img/hamburguesa1.jpg",
    [9, 8, 5, 2, 9]
  ),
  new Restaurant(
    12,
    "Just Salad",
    "Ensalada",
    "Nueva York",
    ["12:00", "15:00", "17:30"],
    "../img/ensalada3.jpg",
    [8, 1, 4, 5, 5, 7]
  ),
  new Restaurant(
    13,
    "The Counter",
    "Hamburguesa",
    "Nueva York",
    ["17:00", "18:00", "19:30"],
    "../img/hamburguesa2.jpg",
    [6, 9, 7, 6, 7]
  ),
  new Restaurant(
    14,
    "TGood Seed Salads & Market",
    "Ensalada",
    "Nueva York",
    ["17:00", "19:00", "22:30"],
    "../img/ensalada4.jpg",
    [8, 8, 8, 8, 5, 7]
  ),
  new Restaurant(
    15,
    "Carmine's",
    "Pasta",
    "Nueva York",
    ["14:30", "16:30", "19:00"],
    "../img/pasta1.jpg",
    [9, 8, 5, 5, 9]
  ),
  new Restaurant(
    16,
    "Pastasciutta",
    "Pasta",
    "Roma",
    ["14:30", "15:30", "19:00"],
    "../img/pasta3.jpg",
    [4, 9, 10, 9, 4, 6]
  ),
  new Restaurant(
    17,
    "Vapiano",
    "Pasta",
    "Berlín",
    ["12:00", "15:00", "17:30"],
    "../img/pasta4.jpg",
    [8, 4, 6, 7, 4, 7]
  ),
  new Restaurant(
    18,
    "Pizza Union Spitalfields",
    "Pizza",
    "Londres",
    ["12:00", "15:00", "17:30"],
    "../img/pizza1.jpg",
    [8, 8, 8, 4, 6, 7]
  ),
  new Restaurant(
    19,
    "Les Deux Magots",
    "Desayuno",
    "París",
    ["17:00", "19:00", "22:30"],
    "../img/desayuno4.jpg",
    [8, 4, 6, 6, 7]
  ),
  new Restaurant(
    20,
    "Pappelli",
    "Pizza",
    "París",
    ["12:00", "15:00", "17:30"],
    "../img/pizza3.jpg",
    [8, 4, 6, 7, 7, 9, 1]
  ),
  new Restaurant(
    21,
    "Trattoria La Cenetta",
    "Pizza",
    "Berlín",
    ["12:00", "15:00", "17:30"],
    "../img/pizza4.jpg",
    [8, 4, 6, 2, 5, 7]
  ),
  new Restaurant(
    22,
    "Byron Hoxton",
    "Hamburguesa",
    "Londres",
    ["14:00", "16:00", "21:30"],
    "../img/hamburguesa3.jpg",
    [4, 9, 10, 10, 6]
  ),
  new Restaurant(
    23,
    "Chez Moi",
    "Ensalada",
    "París",
    ["11:00", "12:00", "14:30"],
    "../img/ensalada1.jpg",
    [8, 4, 5, 5, 5, 5]
  ),
  new Restaurant(
    24,
    "Maison Kayser",
    "Desayuno",
    "Nueva York",
    ["21:00", "22:30", "15:00"],
    "../img/desayuno2.jpg",
    [9, 5, 7, 6, 7]
  ),
];
var instaciaLista = new Listado(lista);
var resultado = lista[0];
var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");

var reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");

describe("Testeo funcion reservarHorario()", function () {
  it("No posee horario, array se mantiene igual", function () {
    restaurante1.reservarHorario("16:00");
    expect(restaurante1.horarios.length).to.eql(restHorario);
  });
  it("Reservar un horario pero no se le pasa ningún parámetro", function () {
    restaurante1.reservarHorario("");
    expect(restaurante1.horarios.length).to.eql(restHorario);
  });
  it("El horario correspondiente se elimina del arreglo", function () {
    restaurante1.reservarHorario("18:00");
    expect(restaurante1.horarios.length).to.eql(restHorario - 1);
  });
});

describe("Testeo funcion obtenerPuntuacion()", function () {
  it("La puntuacion se calcula correctamente", function () {
    var promedioOk = restaurante1.obtenerPuntuacion();
    expect(promedioOk).to.equal(7.4);
  });
  it("Restaurant sin calificacion", function () {
    var promedioCero = restaurantCero.obtenerPuntuacion();
    expect(promedioCero).to.equal(0);
  });
});

describe("Testeo funcion calificar()", function () {
  it("Funciona pusheo", function () {
    var tamanioArray = restaurante1.calificaciones.length;
    restaurante1.calificar(8);
    expect(restaurante1.calificaciones.length).to.eql(tamanioArray + 1);
  });
  it("Se le pasa un numero con coma flotante", function () {
    var tamanioArray = restaurante1.calificaciones.length;
    restaurante1.calificar(8.5);
    expect(restaurante1.calificaciones.length).to.eql(tamanioArray);
  });
});

describe("Testeo funcion buscarRestaurantes(id)", function () {
  it("Verifico busqueda ok", function () {
    var idOk = instaciaLista.buscarRestaurante(5);
    expect(resultado).to.eql(idOk);
  });
});

describe("Testeo funcion obtenerRestaurantes()", function () {
  it("Verifico con tres parametros ok", function () {
    var result = instaciaLista.obtenerRestaurantes(
      "Ensalada",
      "Berlín",
      "17:00"
    );
    expect(result.length).to.equal(1);
  });
  it("Verifico con un parametro ok", function () {
    var result = instaciaLista.obtenerRestaurantes(null, "Berlín", null);
    expect(result.length).to.equal(4);
  });
  it("Verifico con parametros de rubro ok", function () {
    var result = instaciaLista.obtenerRestaurantes("Ensalada", null, null);
    expect(result.length).to.equal(4);
  });
});

describe("Testear funcion calcularPrecioBase()", function () {
  it("Testeo de correcto calculo del precio base con reserva1", function () {
    var result = reserva1.calcularPrecioBase();
    expect(result).to.equal(2800);
    expect(result).to.be.a("number");
  });
  it("Testeo de calcular precio con reserva2", function () {
    var result = reserva2.calcularPrecioBase();
    expect(result).to.equal(300);
    expect(result).to.be.a("number");
  });
});

describe("Testeo de funcion de calcularPrecioFinal()", function () {
  it("Testeo de correcto cálculo del precio final con reserva1", function () {
    let result = reserva1.calcularPrecioTotal();
    expect(result).to.equal(2450);
    expect(result).to.be.a("number");
  });

  it("Testeo de cálculo del precio final con reserva2", function () {
    let result = reserva2.calcularPrecioTotal();
    expect(result).to.equal(100);
    expect(result).to.be.a("number");
  });
});
