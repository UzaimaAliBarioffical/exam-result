
function result(){
    let number=750
    let userNumber =document.getElementById("examnumber").value
    console.log(userNumber);
    let percentage =userNumber/number*100
    console.log(percentage)
    if(percentage>=80){
        alert("A+one")
    }else if(percentage>=70){
        alert("A")
    }else if(percentage>=60){
        alert("B")
    
    }else if(percentage>=50){
        alert("C")
    }else if(percentage>=40){
        alert("fail")
    }
    
    }