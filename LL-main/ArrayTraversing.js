let num = [10,20,30,40,50];

//For loop : 
for(i=0;i<num.length-1;i++)
{
    console.log(num[i]);
}

//For Each loop :
num.forEach((element)=>{
    console.log(element);
})

// Reversing an Array without inbuilt function :

for(i=num.length-1;i>=0;i--)
{
    console.log(num[i]);
}

// Reversing an Array with inbuilt function :
console.log(num.reverse());


