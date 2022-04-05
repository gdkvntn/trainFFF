

import React from 'react'
import Ccomponent from './Ccomponent'

export default function Card(props) {
   
    return (
      <div style={styleCard}>
          <Ccomponent item={props.item}/>
      </div>
      )
}


let styleCard ={
   
   maxWidth: '800px',
    background: 'green',
    border : 'solid 2px black',
    borderRadius: '30px',
    padding:'40px',
    marginBottom : '50px'
}