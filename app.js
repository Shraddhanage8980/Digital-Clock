var key = document.querySelectorAll(".key")

key.forEach((k)=>{
    k.addEventListener("click",function(){
        var keyCode = k.getAttribute("data-key")
        // console.log(keyCode);
        playSound(keyCode)
    })
})

function playSound(keyCode){
    var audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    // console.log(audio);
    var key = document.querySelector(`div[data-key="${keyCode}"]`)
    // console.log(key);
  
    if(keyCode===65 || keyCode===83 || keyCode===68 || keyCode===70 || keyCode===71 || keyCode===72 || keyCode===74){
        audio.play()
        audio.currentTime = 0 //rewind 
    } else{
        alert("please enter valid key")
    }

    key.classList.add("key-animation")

}

key.forEach((k)=>{
    k.addEventListener("transitionend",function (){
        this.classList.remove("key-animation")
     })
})

window.addEventListener("keydown",function(e){
    console.log(e.keyCode);
    playSound(e.keyCode)
})