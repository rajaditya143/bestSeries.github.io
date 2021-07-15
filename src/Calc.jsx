

function add(a,b){
    let sum =a+b;
    return sum;
}

function sub(a,b)
{
    let sub=a-b;
    return sub;
}

function mult(a,b)
{
    let mult =a*b;
    return mult;
}

function div(a,b)
{
    let div =a/b;
    div=div.toFixed(2);
    return div;
}

export {add,sub,mult,div};


// function App(){
//     return(
//         <>
//         <ul>
//           <li> Sum of two nos. is {add(40,5)}</li>
//           <li> Diff of two nos. is {sub(40,4)}</li>
//           <li> Multiplication of two nos. is {mult(40,4)}</li>
//           <li> Divison of two nos. is {div(40,3)}</li>
//         </ul>
//         </>
//     );
// }