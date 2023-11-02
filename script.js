var leftbox = document.querySelector("#leftbox")
var cli = document.querySelector(".cli")
var right = document.querySelector("#rightbox")
    flag = 0;

cli.addEventListener("click",function(){
    

    if(flag == 0 ){
        leftbox.style.transform = "translate(-100%,0)",
        cli.style.transform = "translate(-80px,0) rotate(-180deg)"
        right.style.width = "95%";
        
        flag = 1;
    }else{
        leftbox.style.transform = "translate(0,0)",
        cli.style.transform = "translate(0,0)"
        right.style.width = "80%";


        
        
        flag = 0;
    }
})

// falg = 0;

// cli.addEventListener("click",function(){

//     if(falg == 0){
//         gsap.to(leftbox,{
//             x:-250,

//         })
//          gsap.to(cli,{
//             x:80,
//             rotate:0,

//         })
//         // gsap.to(right,{
//         //     width:"100%"
//         // })
//         falg =1
        
//     }else{
//         gsap.to(leftbox,{
//             x:0,

//         })
//          gsap.to(cli,{
//             x:0,
//             rotate:180,

//         })
//         // gsap.to(right,{
//         //     width:"80%"
//         // })
//         falg =0

//     }
// })