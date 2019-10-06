var video=document.querySelector(".video");
var juice=document.querySelector(".orange-juice");
var btn=document.getElementById("play-pause");
var curtimetext=document.getElementById("curtimetext");
var durtimetext=document.getElementById("durtimetext");
var juiceorange=document.querySelector(".orange-bar");
//var seeks=document.getElementById("seeks");
var barsize=800;
var bar=document.querySelector(".cover");
var progress=document.getElementById("progress");




function togglePlayPause(){

if(video.paused)
{
btn.className="pause";
video.play();

}
else{
    btn.className="play";
video.pause();

}
}
btn.onclick=function(){
    togglePlayPause();
}
video.addEventListener("timeupdate",function(){
var juicePos=video.currentTime/video.duration;
//console.log(video.currentTime);
//console.log(video.duration);
//console.log(juicePos);
juice.style.width=juicePos*100+"%";
var curmins = Math.floor(video.currentTime / 60);
	var cursecs = Math.floor(video.currentTime - curmins * 60);
	var durmins = Math.floor(video.duration / 60);
	var dursecs = Math.floor(video.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs+"/";
    durtimetext.innerHTML = durmins+":"+dursecs;
   
    if(video.ended)
{
    btn.className='play';
}
});
/*
seeks.addEventListener("change",function(){
    var seekto = video.duration * (seeks.value / 100);
    video.currentTime = seekto;
    console.log("HI");
});*/
bar.addEventListener("click",function(e)
{
if(!video.ended){
    //var div = document.getElementById('progress');
    var divOffset = offset(bar);
    //console.log(divOffset.left, divOffset.top);
    var mouseX= e.pageX - divOffset.left;
    var newtime=mouseX*video.duration/barsize;
    //var barleft= $(".cover").position().left; 
    console.log(e.pageX);
    //console.log(video.duration);
    console.log(divOffset.left);
    //console.log(mouseX);
    //var by=document.querySelector(".orange-bar").offsetLeft;
   //console.log(e);
    video.currentTime=newtime;
    juice.style.width=mouseX+"px";
   
}

});
function getElementOffset(el) {
    const rect = el.getBoundingClientRect();
  
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset,
    };
  }
  
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// example use
