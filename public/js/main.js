let images =['❄️','🎅','🎁','⛄','🎅','❄️','🎁','⛄','❄️','⛄','🎁',]


document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let emoji = document.createElement('span');
    let x = e.offsetX
    let y = e.offsetY

    emoji.style.left = x+'px'
    emoji.style.top = y+'px'

    let icon = images[Math.floor(Math.random()* images.length)]
    emoji.innerText = icon

    let size = Math.random() * 25
    emoji.style.fontSize = 3 +size+'px'

    // get random calue fot transform
    let max = 0 
    let min = 100
    let randomValue = Math.floor((Math.random()* ((max + 1 ) - min )) + min)

    emoji.style.transform = 'translateX('+ randomValue + 'px)'

    body.appendChild(emoji)

    setTimeout(function(){
        emoji.remove();
    },1000)
})