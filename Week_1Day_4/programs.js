function integer(num){
    var num=num;
    console.log(num>0?"positive":"Negative");

    if(num%2==0){
        console.log("Even");
    }
    else{
        console.log("odd");
    }

    for(var i=1;i<=num;i++){
        console.log(i);
    }
}

integer(20);