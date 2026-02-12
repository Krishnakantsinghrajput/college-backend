const fun=(a,b)=>{

    setTimeout(() => {
  console.log("Hello after 2 seconds  async fun1");
}, 2000);

 setTimeout(() => {
  console.log("Hello after 2 seconds  async fun2");
}, 2000);
    console.log("A");
     Promise.resolve().then(()=>{
        console.log("fun4");
    });
    Promise.resolve().then(()=>{
        console.log("fun5");  // promise function have more priority  
    })
}
const fun2=(a,b)=>{
    console.log("B");
    fun();
}
const fun3=(a,b)=>{
    console.log("C");
    fun2();


   
}

fun3();



//c is in stack
//c is executed
//b in stack 
// b is executed
//a is in stack 
// a executed
// a popped
//b popeed
// c popped


