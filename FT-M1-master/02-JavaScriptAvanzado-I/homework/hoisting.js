function test() {
    console.log(a); // undefined    
    console.log(foo()); // 2 
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();