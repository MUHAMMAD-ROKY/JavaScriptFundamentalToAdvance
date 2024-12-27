const video = document.querySelector("video");
video.addEventListener("canPlay",function(){
    console.log("canPlay");
});
video.addEventListener("play",function(){
    console.log("play");
});
video.addEventListener("pause",function(){
    console.log("pause");
});
video.addEventListener("playing",function(){
    console.log("playing");
});

video.addEventListener("ended",function(){
    console.log("Thanks for watching");
});

video.addEventListener("volumechange",function(){
    console.log("volumechange");
});