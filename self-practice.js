// while loop 

// No.1 -----------------------------------------------------------------------
// let i = 0;
// while(i<=5){
//     console.log('hello javascript')
//     i++
// }


// while increment 
// let i = 0; 
// while(i<5){
//     i++;
//     console.log(i)
// }

// while decriment
// let i= 5;
// while(i>0){
//     i--;
//     console.log(i)
// }



// get even numbers in two way
// way one 
// let i= 0;
// while(i<10){
//     i+=2;
//     console.log(i)
// }

// way two     /* THIS METHOD IS GOOD TO FOLLOW! */
// let i = 0;
// while(i<10){
//     i++;

//     if(i%2 == 0){
//         console.log('even num',i)
//     }
// }


// two way to get odds num 
// one 
// let i = 1;
// while (i<10){
//     i+=2;
//     console.log(i)
// }

// way two   /* THIS METHOD IS GOOD TO FOLLOW! */
// let i = 0;
// while (i < 10) {
//     i++;
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }


// HOW TO GET SUM 
// let i = 0;
// let sum=0;
// while(i<10){
//     i++;
//     console.log(i);
//     sum = sum +i ;
//     console.log('the sum',sum)
// }
// console.log('total sum', sum)


// sum of even sumbers
// let num = 0;
// let sum = 0;
// while(num<10){
//     num++;
//     console.log(num)
//     if(num % 2 === 0){
//         sum = sum + num
//     }
// }
// console.log('total sum', sum)

// sum of odds numbers
// let i = 0;
// let sum= 0;
// while (i<10){
//     i++;
//     // console.log(i)
//     if(i%2 !==0){
//         console.log(i)
//         sum = sum + i

//     }
// }
// console.log('total sum ', sum)


// break -------------
// let i = 0;
// while(i< 100){
//     i++;
//     console.log(i)
//     if(i> 50){
//         break
//     }
// }


// continue ------------
// let i = 0;
// while (i <= 10) {
//     i++;

//     if (i < 6) {
//         continue
//     }
//     console.log(i)
// }


// No.2--------------------------------------------------------------------------
// for loop


// Infinity loop
// for(let i = 0; i>= 0; i++){
//     console.log(i)
// }

// increment loop
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// decriment loop
// for(let i = 10; i> 0; i--){
//     console.log(i)
// }


// HOW TO DO SUM IN FOR LOOP
// let sum = 0;
// for(let i = 0; i < 50; i++){
//     console.log(i)
//     sum = sum + i;

// }
// console.log('total sum', sum)


// how to get even Number sum 
// sum = 0;
// for(let i = 0; i <= 10; i++){
//     console.log(i)
//     if(i%2 == 0){
//         sum = sum + i
//     }

// }
// console.log('sum',sum)


// MULTIPLICATION TALBEL OF 5

//  for(let i = 0; i <= 50; i++){
//     if(i % 5 === 0){
//         console.log(i)
//     }
//  }


// break 
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
//     if (i >= 5) {
//         break
//     }
// }

// continue
for(let i = 0; i <= 10; i++){
    console.log(i)
    if(i>3){
        continue
    }
}