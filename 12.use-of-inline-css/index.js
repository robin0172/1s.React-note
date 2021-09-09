import React from 'react'
import ReactDOM from 'react-dom'

let curDate=new Date(2021,5,5,14);
curDate=curDate.getHours();
let greating=''//dinamacly changing value
const cssStyle={}//dinamic css 
if(curDate>=1&& curDate<12){
    greating='Good Morning'
     cssStyle.color='green'
}else if(curDate>=12 &&curDate<19){
    greating="Good afternood"
    cssStyle.color='Orange'
}else{
    greating="Good night"
    cssStyle.color='black'
}


ReactDOM.render(
    <h1>hellow sir, <span style={cssStyle}> '{greating}'</span></h1>,
    document.getElementById('root')
)