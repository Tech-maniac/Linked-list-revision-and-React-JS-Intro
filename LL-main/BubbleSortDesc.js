//let data = [30,20,10,50,40];
//let data = [9,3,7,10,2,5];
let data = [50,20,60,40,30,10];
let swapped = false;
let iterations=0;

// 5 * 5 = 25 times loop will run
for(i=0;i<data.length;i++)
{
    swapped = false;
    for(j=0;j<data.length;j++)
    {
        iterations=iterations+1;
        //console.log(j);
        if(data[j]<data[j+1])
        {
            console.log(data);
            //Swapping Values : 
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
            
            swapped = true;
            console.log(swapped);
        }
    }
    if(!swapped)
    {
        console.log("Broke loop : ");
        break;
    }
    
}

console.log(data);
console.log(iterations);