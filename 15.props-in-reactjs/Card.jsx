import React from 'react'

function Card(props){
    return(
        <div className='cards'>
      <div className="card">
     <img src="" alt="" className='card__img' />
     <div className='card__info'>
     <span className="card__category">{props.name}</span>
     <h3 className="card__title"></h3> 
     <a href={props.link}>
         <button>{props. btn_name}</button>
     </a></div>
      </div>
  </div>
    )
    // NOTE:you have to use carlibrecess for  calling props
 //NOTE:
}

export default Card