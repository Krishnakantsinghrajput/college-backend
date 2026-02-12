const fun=(a,b)=>{
    console.log("A");
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


