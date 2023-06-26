// Crear un objeto para almacenar el menú principal y el menú de acompañamiento
var menu = {
    main: [
      {name: "Hamburguesa", price: 10, comment: "Una clásica y deliciosa hamburguesa con queso, lechuga, tomate y cebolla."},
      {name: "Ensalada César", price: 8, comment: "Una ensalada fresca y saludable con lechuga romana, queso parmesano, croutons y salsa césar."},
      {name: "Sándwich de pollo", price: 9, comment: "Un sándwich jugoso y tierno de pollo a la parrilla con mayonesa, lechuga y tomate."},
      {name: "Pasta carbonara", price: 11, comment: "Una pasta cremosa y sabrosa con bacon, queso, huevo y pimienta negra."}
    ],
    sides: [
      {name: "Patatas fritas", price: 3, comment: "Unas crujientes y saladas patatas fritas con salsa de tomate."},
      {name: "Ensalada verde", price: 4, comment: "Una ensalada ligera y refrescante con lechuga, tomate, pepino y zanahoria."},
      {name: "Aros de cebolla", price: 3.5, comment: "Unos aros de cebolla dorados y tiernos con salsa ranchera."},
      {name: "Pan de ajo", price: 2.5, comment: "Un pan tostado y aromático con ajo y mantequilla."}
    ]
  };
  
  // Crear una función para mostrar todo el menú
  function showMenu() {
    console.log("Bienvenido a Bottega Diner. Aquí está nuestro menú:");
    console.log("Menú principal:");
    // Recorrer el menú principal y mostrar el nombre y el precio de cada plato
    for (var i = 0; i < menu.main.length; i++) {
      console.log(menu.main[i].name + " - $" + menu.main[i].price);
    }
    console.log("Menú de acompañamientos:");
    // Recorrer el menú de acompañamientos y mostrar el nombre y el precio de cada opción
    for (var i = 0; i < menu.sides.length; i++) {
      console.log(menu.sides[i].name + " - $" + menu.sides[i].price);
    }
  }
  
  // Crear una función para pedir al usuario que seleccione un plato principal
  function selectMain() {
    // Pedir al usuario que diga el número del plato principal que desea
    var mainChoice = prompt("Por favor, inserte el número del plato principal que desea (1-4):");
    var mainIndex = mainChoice - 1;
    if (mainIndex >= 0 && mainIndex < menu.main.length) {
      var mainSelected = menu.main[mainIndex];
      // Mostrar el nombre, el precio y el comentario del plato principal seleccionado
      console.log("Ha seleccionado el plato principal: " + mainSelected.name + " - $" + mainSelected.price);
      console.log(mainSelected.comment);
      return mainSelected;
    } else {
      // Mostrar un mensaje de error si el índice no es válido
      console.log("Lo siento, esa no es una opción válida. Por favor, intente de nuevo.");
      return selectMain();
    }
  }
  
  // Crear una función para pedir al usuario que seleccione dos opciones de acompañamiento
  function selectSides() {
    var sidesSelected = [];
    var sidesChoice = prompt("Por favor, inserte los números de las dos opciones de acompañamiento que desea separados por una coma (1-4):");
    var sidesArray = sidesChoice.split(",").map(Number);
    if (sidesArray.length === 2 && sidesArray.every(function(n) {return n >=1 && n <=4;})) {
      for (var i = 0; i < sidesArray.length; i++) {
        var sideIndex = sidesArray[i] -1;
        var sideSelected = menu.sides[sideIndex];
        sidesSelected.push(sideSelected);
        console.log("Ha seleccionado la opción de acompañamiento: " + sideSelected.name + " - $" + sideSelected.price);
        console.log(sideSelected.comment);
      }
      
      return sidesSelected;
    } else {
      console.log("Lo siento, esa no es una opción válida. Por favor, intente de nuevo.");
      return selectSides();
    }
  }
  
  // Crear una función para calcular y mostrar el precio total del pedido
  function showTotal(mainSelected, sidesSelected) {
    var total = 0;
    total += mainSelected.price;
    // Recorrer el arreglo de opciones de acompañamiento seleccionadas y sumar sus precios al precio total
    for (var i =0; i < sidesSelected.length; i++) {
      total += sidesSelected[i].price;
    }
    // Mostrar el precio total con dos decimales
  console.log("El precio total de su pedido es: $" + total.toFixed(2));
}

// Llamar a la función para mostrar todo el menú
showMenu();
// Llamar a la función para pedir al usuario que seleccione un plato principal y almacenar el resultado en una variable
var mainSelected = selectMain();
// Llamar a la función para pedir al usuario que seleccione dos opciones de acompañamiento y almacenar el resultado en una variable
var sidesSelected = selectSides();
// Llamar a la función para calcular y mostrar el precio total del pedido con el plato principal y las opciones de acompañamiento seleccionadas
showTotal(mainSelected, sidesSelected);
