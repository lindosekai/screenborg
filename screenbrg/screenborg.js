// esta es la funcion principal de screenborg
// rocks like ironman

function screenBorg(){
    var taskbr;
    this.init = function(){
        console.log("starting...");
        taskBar();
   }
   var taskBar = function(){
        taskbr = document.createElement("div");
        taskbr.innerHTML = "the task";
        taskbr.style.backgroundColor = "#000";
        taskbr.style.color = "#03f";
        taskbr.style.position = "absolute";
        taskbr.style.bottom = 0;
        taskbr.style.left = 0;
        taskbr.style.width = "100%";
        var body = document.getElementsByTagName("body");
        body[0].appendChild(taskbr);
        body[0].style.padding = 0;
        body[0].style.margin = 0;
        body[0].style.backgroundColor = "#aaa";
        console.log("starting... tb");
   }

   this.init = function(){
        console.log("starting...");
        taskBar();
   }
 
}
