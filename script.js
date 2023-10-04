const body = document.querySelector('body')
const text = document.getElementById('#text')

const bg_colors = ['red', 'yellow', 'green', 'blue', 'pink', 'purple', 'black']


function changeColor(){
    let num = Math.floor(Math.random()* bg_colors.length)
    console.log(num)
    body.style.backgroundColor= bg_colors[num]
}

const text_colors = ['red', 'yellow', 'green', 'blue', 'pink', 'purple', 'black']



function changeTextColor(){

    let color_num = Math.floor(Math.random()* text_colors.length)
    body.style.color= text_colors[color_num]
    console.log(text_colors)
}
