var images = ["/domEventHandlerOnclickevent/images/image1.png","/domEventHandlerOnclickevent/images/image2.png","/domEventHandlerOnclickevent/images/images3.jpeg","/domEventHandlerOnclickevent/images/images4.jpeg"];
var imgTag = document.querySelector("img");
var count = 0;
function Next(){
    count++;
    if(count>=images.length){
        count = 0;
        imgTag.src=images[count];
    }
    else{
    imgTag.src=images[count];
    }
}
function prev(){
    count--;
    if(count < 0){
        count = images.length-1;
        imgTag.src=images[count];
    }
    else{
    imgTag.src=images[count];
    }
}
