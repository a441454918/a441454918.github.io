
var xxx = 50,yyy = 60
var xin = true, yin = true
var step = 1 
var delay = 10
var obj=document.getElementById("ad") 
function floatAD() {
var LLL=TTT=0
var RRR= document.body.clientWidth-obj.offsetWidth
var BBB = document.body.clientHeight-obj.offsetHeight
obj.style.left = xxx + document.body.scrollLeft
obj.style.top = yyy + document.body.scrollTop
xxx = xxx + step*(xin?1:-1) 
if (xxx < LLL) { xin = true; xxx = LLL} 
if (xxx > RRR){ xin = false; xxx = RRR} 
yyy = yyy + step*(yin?1:-1) 
if (yyy < TTT) { yin = true; yyy = TTT } 
if (yyy > BBB) { yin = false; yyy = BBB } 
}
var itl= setInterval("floatAD()", delay) 
obj.onmouseover=function(){clearInterval(itl)} 
obj.onmouseout=function(){itl=setInterval("floatAD()", delay)}
