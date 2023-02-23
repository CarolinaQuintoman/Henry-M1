var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio de Rosa cuanndo le ejecuto aca usa el prop

var test = obj.prop.getFullname;

console.log(test());  // Juan Perez lo usa en el entorno global corta la funcion en fullname el this fullname el valor usa en el contexto global