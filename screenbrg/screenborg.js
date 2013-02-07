// esta es la funcion principal de screenborg
// rocks like ironman

function screenBorg(){
    var taskbr;
            var body = document.getElementsByTagName("body")[0];

    this.init = function(){
        console.log("starting...");
        taskBar();
   }
    var opens = new Array();
   this.Window = function(model){
       windo = document.createElement("div");
       model.window = windo;
       windo.style.backgroundColor = "#000";
       windo.style.color = "#03f";
       windo.style.width = model.width;
       windo.style.height = model.height;

       windo.style.position = "absolute";
       windo.style.top = model.top;
       windo.style.left = model.left;
       windo.style.border = "2px black solid";
       windo.style.backgroundColor = "#05f";
       text = document.createElement("div");
       text.style.color = "black";

       titlebar = document.createElement("div");
       titlebar.style.color = "white";
       text.innerHTML = model.text;
       titlebar.innerHTML = model.title;
       titlebar.style.backgroundColor = "#000";
       windo.appendChild(titlebar);
       windo.appendChild(text);
       windo.onclick = function(){
            autoMove(model);
       }
        var body = document.getElementsByTagName("body");
        body[0].appendChild(windo);
        console.log("starting... window : " + model.title);
}
   var autoMove = function(model){
       autom = function(){
       l = model.left;
       x = model.movel.x;
       if(l > x){
            model.left = model.left -1;
            model.window.style.left = model.left;
       }else if(l<x){
            console.log(l);
            model.left = model.left +1;
            model.window.style.left = model.left;
       }else {
            console.log("killing..." + calwin);
            window.clearInterval(calwin);
       }
       }
       calwin = window.setInterval(function(){autom()},model.movel.speed);
       console.log("starting..." + calwin)

   }

   var menu;
   var mainMenu = function(){
        menu = document.createElement("div");
        menu.style.border = "1px #03f solid";
        menu.style.position = "absolute";
        menu.style.bottom = 33;
        menu.style.left = 2;
        menu.style.width = 350 ;
        menu.style.height = 360;
        menu.style.backgroundColor = "#000" ;
        menu.style.color = "#fff";
        menu.style.opacity = 0.6;
        menu.style.display = "none";
        menu.style.zIndex = 100000;
        body.appendChild(menu);
   }
   var taskBar = function(){
        taskbr = document.createElement("div");
        menubr = document.createElement("div");
        menubr.style.border = "1px #03f solid";
        menubr.style.position = "absolute";
        menubr.style.bottom = 2;
        menubr.style.height = 26;
        menubr.style.left = 2;
        menubr.style.width = 60 ;
        menubr.onclick = function(){
        console.log(menu.style.display);
        if(menu.style.display=="" || menu.style.display=="none"){
            menu.style.display = "block";
        }else {
            menu.style.display = "none";
        }
        }
        taskbr.appendChild(menubr);
        taskbr.style.backgroundColor = "#000";
        taskbr.style.color = "#03f";
        taskbr.style.position = "absolute";
        taskbr.style.bottom = 0;
        taskbr.style.height = 32;
        taskbr.style.left = 0;
        taskbr.style.width = "100%";
        var body = document.getElementsByTagName("body");
        body[0].appendChild(taskbr);
        body[0].style.padding = 0;
        body[0].style.margin = 0;
        body[0].style.backgroundColor = "#aaa";
        console.log("starting... tb");
   }
    var refresh = function(){
        window.setInterval(function(){ alert(""); },100);
    }

   this.init = function(){
        console.log("starting...");
        mainMenu();
        taskBar();
        
   }
 
}
