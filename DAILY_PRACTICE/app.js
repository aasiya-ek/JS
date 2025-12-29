function myFunction() 
{
    console.log("Hello, World!");
}

myFunction();

function add(a, b) 
{
    return a + b;
}
add(3,2);

function findEven(x)
{
    if(x%2==0)
    {
        console.log("Even Number!");
    }
    else{
      console.log("Odd Number!");
        
    }
}

findEven(2);

function swap(num1,num2)
{
    let num3=num1;
    num1=num2;
    num2=num3;
    console.log(num1);
    console.log(num2);
}
swap(2,4);

function swapTwo(a,b)
{
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(a);
    console.log(b);
}

swapTwo(1,3);


let vowel=prompt("Enter the character : ");

function checkConstant(vowel)
{
    if(vowel==='a'|| vowel==='e' || vowel==="i" || vowel==='o'|| vowel==='u')
    {
        console.log(" It's a Vowel.");
        
    }
    else{
        console.log("It's a Constant.");
        
    }
}

checkConstant(vowel);