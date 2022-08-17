function oddishOrEvenish(a) {
    let sum = 0;
    while(a>0){
        let digit = a%10;
        sum = sum + digit;
        a = Math.floor(a/10);
    }
    if(sum%2===0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

oddishOrEvenish(43);
oddishOrEvenish(373);
oddishOrEvenish(4433);