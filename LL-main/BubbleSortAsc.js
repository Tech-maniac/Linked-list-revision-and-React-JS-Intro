//let data = [30,20,10,50,40];
let data = [50,10,20,40,30];
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
        if(data[j]>data[j+1])
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
console.log("The iterations are "+iterations);