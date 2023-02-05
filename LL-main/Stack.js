// Creating an empty array
let data = [];
let currentSize = data.length;
let max = 5;

// Push function : 
function push(newVal) 
{
    if (currentSize >= max) 
    {
      alert("Stack is full you can not add" + newVal);
    }
    data[currentSize] = newVal;
    currentSize += 1;
}

// Pop function
function pop() 
{
    if (currentSize > 0) 
    {
      currentSize -= 1;
      data.length = currentSize;
    } 
    else 
    {
      alert("stack is already empty");
    }
}

push(20);
push(30);
push(10);
push(2);
pop();
pop();
pop();
push(25);
push(23);
push(67);
// pop()
// pop()

console.log(data);