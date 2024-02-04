const age = 25;
const price = 500;
if (age <= 18){
    console.log("tomar khabar free")
}

else if(age >= 50){
    const ammountKombe = price * 40/100;
    const ditehbe = price - ammountKombe;
    console.log(ditehbe);
}

else if (age >= 25 ){
    const discount = price * 15/100;
    const ditehbe = price - discount;
    console.log(ditehbe);

}

