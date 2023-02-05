class Cars
{
    //methods
    //default method
    //parameter => placeholder
    constructor(A,C){
        console.log("The num is : "+A+"and"+C)
        //property inside class
        this.val = 10;

    }

    getMilage(B){
        console.log("Mileage"+B);
    }   

    getSpeed(){
        console.log("speed");
    }

}

//Creating an object :
// actual => argument
let car1 = new Cars(20,100);
console.log(car1.val);
// car1.getMilage(30);
// car1.getSpeed();


 let car2 = new Cars();
 console.log(car2.val);
// car2.getMilage();
// car2.getSpeed();




//let car1 = new Cars();



// function getMilage(){
//     console.log("Mileage");
// }






