var manejador = {
  id: "123",
  init: function () {
      //utilizando ecmascript5
      /*document.addEventListener("click",(function (event) {
          this.clickEnPagina( event.type );
      }).bind(this),false);*/

      //utilizando ecmascript6
      document.addEventListener("click",
          event => this.clickEnPagina( event.type ));
  }, //fin del init

    clickEnPagina: function (type) {
        console.log( "Manejando " + type + " para el id: " + this.id );
    }
};

manejador.init();