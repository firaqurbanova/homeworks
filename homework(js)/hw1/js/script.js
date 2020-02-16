let input=null;
let name;
while(input===null || !isNaN(input)){
    input=prompt('enter your name',name);
    if(input===null || !isNaN(input)){
        alert('please enter again');
    } 
    else{
        name=input;
    }
}
//let name=prompt('enter your name');
//let age=+prompt('enter your age');
let age=null;
do{
    const value=+prompt('enter your age');
    const isError=((value==null) || (value=='') || (isNaN(value)));
    isError ?
    alert('enter a number')
    : 
    age=value;
}
while(age==null)


if(age<18){
    alert('You are not allowed to visit this website');
}
else if(age>=18 && age<=22){
    let cont = confirm('Are you sure you want to continue?');
        if (cont == true) {
        alert( `Hello, ${name}!` );
}   else {
        alert('You are not allowed to visit this website');
}  
}
if(age>22){
    alert('welcome, '+name);
}