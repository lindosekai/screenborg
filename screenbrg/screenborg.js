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
        var body = document.getElementsByTagName("body");
        body[0].appendChild(taskbr);
        console.log("starting... tb");
   }

   this.init = function(){
        console.log("starting...");
        taskBar();
   }
 
}
