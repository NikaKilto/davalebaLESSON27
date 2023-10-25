// 1. შექმენით ალგორითმი რომელიც კონსოლში დალოგაბს გამრავლების ტაბულას

// var index1 = 1;
// var index2 = 1;
// while(index1 <= 9){
//     console.log(`${index1} x ${index2} = ${index1*index2}`);
//     while(index2 < 9){
//         index2++;
//         console.log(`${index1} x ${index2} = ${index1*index2}`);
//     }
//     index1++;
//     index2=1;
// }



// 2. შექმენით ალგორითმი რომელიც კონსოლში დაბეჭდავს ყველა ლუწ რიცხვს 0 დან
// 20 მდე

// var index=0;
// while(index<=20){
//     if(index%2==0 && index!=0){
//         console.log(index);
//     }
//     index++;
// }


// 3. შექმენით ალგორითმი რომელიც დაითვლის თუ რამდენი 4 ის ჯეადი რიცხვია
// მოთავსებული 0 დან 120 მდე

// var index = 0;
// var count = 0;
// while(index<=120){
//     index++;
//     if(index%4==0){
//         count++;
//     }
// }
// console.log(`0-120-მდე არის ${count} ცალი 4-ის ჯერადი`);


// 4. შექმენით ალგორითმი რომელიც დაითვლის თუ რამდენი გამყოფი აქვს
// მომხმარებლის მიერ შემოტანილ რიცხვს

// var number = Number(prompt("enter number"));
// var index = 0;
// var count = 0;
// if(isNaN(number) || number==undefined){
//     while(index<=number){
//         index++;
//         if(number%index==0 && number!=0){
//             count++;
//         }
//     }
//     console.log(`შენს შემოტანილ რიცხვს ${number} აქვს ${count} გამყოფი`);
// }


// 5. შექმენით ალგორითმი რომელიც დაბეჭდავს რიცხვებს მომხმარებლის მიერ
// შემოყვანილ რიცხვებს შორის

// var inputNum1 = prompt("შეიყვანე რიცხვი1");
// var inputNum2 = prompt("შეიყვანე რიცხვი2");
// while(inputNum1<=inputNum2){
//     console.log(inputNum1);
//     inputNum1++;
// }