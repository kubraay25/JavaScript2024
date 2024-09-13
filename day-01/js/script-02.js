console.log("Hello Worl");

let finalNotu = 12; //camelCase 

/*
JavaScript kodunu yazmak için bir .js dosyası oluşturabilirsiniz, 
fakat bu dosyanın tarayıcıda çalışabilmesi için HTML dosyasında çağrılması gerekir. 
JavaScript, tarayıcıda çalışırken, genellikle bir HTML belgesine gömülü olarak kullanılır 
veya harici bir .js dosyası olarak HTML dosyasına eklenir.
*/

const age1 = 12;
const age2 = "12";
const age3 = "asdft";
console.log(age1+age2);//1212
console.log(age1==age2);//true
console.log(age1===age2);//false
console.log(age1-age2);//0
console.log(Number(age3));//NaN


// let input = prompt("How old are you?");
// console.log(input+"123");//32123
// console.log(typeof(input),input);
// console.log(Number(input)+12);//44

let two = 2;
console.log(two++);//konsol çıktısı 2 olur ama two'nun değeri 3 olur
console.log(two++);//konsol çıktısı 3 olur ama two'nun değeri 4 olur

b = two++;
c = two--;
d = ++two;
x = --two;
console.log(b);//2
console.log(c);//2
console.log(d);//3
console.log(x);//1