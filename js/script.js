// var markMass,markHeight,johnMass,johnHeight;
// markMass=150
// markHeight=25
// johnMass =200
// johnHeight =30

// var markBmi= markMass/(markHeight *2);
// var johnBmi = johnMass/(johnHeight * 2);
// console.log(markBmi)
// console.log(johnBmi)

// var compareBmi = markBmi > johnBmi
// console.log('is mark bmi is higher than john?' + compareBmi)



// var john,mike;
// johnScore=[89,120,103];
// mikeScore=[116,94,103];
// maryScore=[100,120,130];

// mikeAverageScore=(116+94+103)/3;
// johnAverageScore=(60+120+103)/3;
// maryAverageScore=(20+120+130)/3;

// console.log(mikeAverageScore);
// console.log(johnAverageScore);
// console.log(maryAverageScore);

// if(johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore){
//     console.log('the winner is john and the score is' + ''+ Math.round(johnAverageScore));
// }
// else if(johnAverageScore == mikeAverageScore == maryAverageScore){
//         console.log('the match is drawn');
    
// }else if(johnAverageScore < mikeAverageScore && mikeAverageScore > maryAverageScore){
//     console.log('the winner is mike and the score is' + '' + Math.round(mikeAverageScore));
// }else{
//     console.log('the winner is mary and the score is' + '' + Math.round(maryAverageScore));
// }


//  

// var mark ={
//     fullName:'mark',
//     mass:150,
//     height:5.5,
//     bmi:function(){
//        this.bmi= this.mass/(this.height *2)
//         return this.bmi;
//     }
// }
// var john ={
//     fullName:'john',
//     mass:120,
//     height:4.5,
//     bmi:function(){
//        this.bmi=this.mass/(this.height *2)
//         return this.bmi;
//     }
// }
// mark.bmi();
// john.bmi();
// console.log(john);
// console.log(mark);
// if(mark.bmi> john.bmi){
//     console.log('mark has the highest bmi and the bmi is ' + mark.bmi);  
// }else if(mark.bmi < john.bmi){
//     console.log('mark has the highest bmi and the bmi is ' + john.bmi); 
// }else{
//     console.log('they have equal bmi');
// }





// var john =['john','student',1998,true,'single'];
//  for(i=john.length-1;i>=0;i--){
//      console.log(john[i]);
//  }



// var john={
//     bills:[124,48,268,180,42],
//     tip:function(){
//          this.tips=[];
//          this.finalValue=[];

//          for(i=0;i<this.bills.length;i++){

//             var percentage;
//             bill=this.bills[i];
//             if(bill <50){ percentage=.2}
//             else if(bill >50 && bill < 200){ percentage=.15}
//             else {percentage=.1}
//             this.tips[i]=bill*percentage;
//         this.finalValue[i]=bill + bill*percentage
//        }}     }


//        var mark={
//          bills:[124,478,68,100,32],
//          tip:function(){
//               this.tips=[];
//               this.finalValue=[];
     
//               for(i=0;i<this.bills.length;i++){
     
//                  var percentage;
//                  bill=this.bills[i];
//                  if(bill <100){ percentage=.2}
//                  else if(bill >=100 && bill < 300){ percentage=.1}
//                  else {percentage=.25}
//                  this.tips[i]=bill*percentage;
//              this.finalValue[i]=bill + bill*percentage
//             }}     }


//             function calcAversge(tips){
//                var sum = 0;
//                for(i=0;i<tips.length;i++){
//                      sum = sum + tips[i]
//                      return sum/tips.length;
//                }
//             }
//        john.tip()
//        mark.tip()
//     console.log(john,mark);

//     john.average= calcAversge(john.tips);
//     mark.average=calcAversge(mark.tips);
//     console.log(john.average);
//     console.log(mark.average);
//     if(john.average > mark.average){
//        console.log('john has higher average,with an average of $'+john.average);

//     }else{
//       console.log('mark has higher average,with an average of $'+mark.average);

//     }

// OBJECTS AND FUNCTIONS

// var Friends = function(name,age,dep,passion){
//     this.name = name;
//     this.age = age;
//     this.dep = dep;
//     this.passion = passion;
// }
// Friends.prototype.calculateAge=function(){
//     console.log(2019-this.age);
// }



// var mani = new Friends('mani',20,'it','programming');
// var dinesh = new Friends('dinesh',19,'it','export')

// console.log(mani);
// console.log(dinesh);
// mani.calculateAge();
// dinesh.calculateAge();

//  
  

//function returning as function
   

// function myAim(aim){
//     if(aim==='entreprenuer'){
//         return function(name){
//             console.log(name + ',congragulation for becoming' + aim);
//         }
//     }else if(aim==='journalist') {
//             return function(name){
//                 console.log(name + ',congragulation for becoming' + aim) 
//         }
//     }
// }

// var aim=myAim('journalist')
// aim('mani')
// aim('harri')
// aim('siva')



// closure

// function retirement(retirementAge){
//     var a= 'years until retirement'
//     return function(yearOfBirth){
//         var age=2018-yearOfBirth
//         console.log((retirementAge-age) + a );
//     }
// }

// var retirementIndia=retirement(56)
// retirementIndia(1990)
// retirement(56)(2000)

// function myAim(aim){
//     if(aim==='entreprenuer'){
//         return function(name){
//             console.log(name + ',congragulation for becoming' + aim);
//         }
//     }else if(aim==='journalist') {
//             return function(name){
//                 console.log(name + ',congragulation for becoming' + aim) 
//         }
//     }
// }


// function myAim(aim){
//     return function(name){
//         if(aim==='journal'){
//             console.log(name + ',congragulation for becoming' + aim);
//         }else if(aim==='runner'){
//             console.log(name + ',congragulation for becoming' + aim) 
//         }else {
//             console.log(name + ',congragulation for becoming' + aim) 
//         }
        

//     }
// }
// var a=myAim('journal')
// a('mani')
// var b=myAim('runner')
// b('siva')



// challenge

var question = function (que,ans,correctAns){
    this.que=que;
    this.ans=ans;
    this.correctAns=correctAns;
}

var q1=new question('1.is javascript is a cool language',['yes','no'],0);
var q2=new question('2.i am a programmer',['yes','no'],0)
// console.log(q1.que)
// console.log(q1.ans)
arr=[q1,q2];
console.log(arr)

 console.log(q2.que)
// console.log(q2.ans)
prompt('enter the correct answer')















