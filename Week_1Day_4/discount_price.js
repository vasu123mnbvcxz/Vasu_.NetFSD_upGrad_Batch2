function discount(Amount){
    let discount=0;
    let finalAmount=Amount;
    if(Amount>=5000){
        discount=(Amount*20)/100;
        finalAmount=Amount-discount;
        console.log(`The discount Amount : ${discount} and finalAmount : ${finalAmount}`);
    }
    else if(Amount>=3000){
        discount=(Amount*10)/100;
        finalAmount=Amount-discount;
        console.log(`The discount Amount : ${discount} and finalAmount : ${finalAmount}`);
    }
    else{
        console.log(`${Amount}`);
    }
}

discount(2000);
