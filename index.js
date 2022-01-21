var ar=[];
var k = 1;
var j = 0;
var i = 0;
var play=1;
$(document).keypress(function (e) {
    play=1;
    ar=[];
    i=0;
    k=1
    NewNumber();
    $("h1").html("Level "+ k);
});
$("button").click(function (e) {
    play=1;
    ar=[];
    i=0;
    k=1
    NewNumber();
    $("h1").html("Level "+ k);
});
   function NewNumber()
   {
    var num = Math.random();
    num = num * 4;
    num = Math.floor(num) + 1;
    ar.push(num);
    console.log(ar);
    console.log(num);
    if (num===1)
       {
        $("#green").addClass("pressed");
        const tinee=setTimeout(removals,200);
         function removals()
         { 
             $("#green").removeClass("pressed");
         }
           var audio= new Audio("sounds/green.mp3");
           audio.play();
        }
        if (num===2)
       {
        $("#red").addClass("pressed");
        const tinee=setTimeout(removals,200);
         function removals()
         { 
             $("#red").removeClass("pressed");
         }    
           var audio= new Audio("sounds/red.mp3");
           audio.play();
        }
        if (num===3)
       {
        $("#yellow").addClass("pressed");
        const tinee=setTimeout(removals,200);
         function removals()
         { 
             $("#yellow").removeClass("pressed");
         }  
           var audio= new Audio("sounds/yellow.mp3");
           audio.play();
        }
        if (num===4)
       {
        $("#blue").addClass("pressed");
        
        const tinee=setTimeout(removals,200);
         function removals()
         { 
             $("#blue").removeClass("pressed");
         } 
           var audio= new Audio("sounds/blue.mp3");
           audio.play();
        }  
   }
   function increaseLevel()
   {
    k++;
    $("h1").html("Level "+ k);
    NewNumber();
   }

   $(".btn").click(function () {
       if (this.classList.contains("green"))
       {

           j = 1;
           var audio= new Audio("sounds/green.mp3");
           audio.play();
        }
       if (this.classList.contains("red"))
       {

           j = 2;
           var audio= new Audio("sounds/red.mp3");
           audio.play();
        }
       if (this.classList.contains("yellow"))
       {

           j = 3;
           var audio= new Audio("sounds/yellow.mp3");
           audio.play();
        }
       if (this.classList.contains("blue"))
       {

           j = 4;
           var audio= new Audio("sounds/blue.mp3");
           audio.play();
        }
           var path=$(this);
           $(this).addClass("pressed");
           const tinee=setTimeout(removals,200);
            function removals()
            { 
                $(path).removeClass("pressed");
            }
           

           if(ar[i]===j)
           {
               i++;
           }
           else
           {
            $("h1").html("Game Over !<br> Press Any Key To Restart"); 
            $("body").addClass("game-over");
            const tinsdl=setTimeout(removal,200);
            function removal()
            {
                $("body").removeClass("game-over");   
            }
            k=1;
            a=[];
            play=0;
            i=0;
            var audio= new Audio("sounds/wrong.mp3");
            audio.play();
            
           }
           if(i===ar.length && play===1)
           {
            const tinsdl=setTimeout(removal,800);
            function removal()
            {
                increaseLevel();
                i=0;  
            }
           }

   });
    // var flag = 1;
    // var flag2 = 1;
    // var ar = [];
    // while (flag === 1) {
       
    

    //                 if (j !== ar[i]) {
    //                     $("h1").html("Game Over !<br> Press Any Key To Restart");
    //                     ar.clear;
    //                     flag = 0;
    //                     flag2=0;
    //                 }
    //             });
    //             if(flag2===0)
    //             break;
    //         if (j + 1 === ar.length) {
    //             k++;
    //             break;
    //         }
    //         i++;

    //     }
    // }


