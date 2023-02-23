var instructor = 'Tony'; // tony
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony