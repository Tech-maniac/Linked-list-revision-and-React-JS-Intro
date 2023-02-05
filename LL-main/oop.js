class Students {
    constructor(){
        this.mssg = "Hi";
        console.log(this.mssg);
    }

    marks(data){
        console.log("marks are : "+data);
    }
}

let student=new Students()
let student1=new Students()

student.marks(30)