import React, { Component, useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Disliked } from './styled'


export function DislikeZone (props){

  
      const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item,monitor){
          console.log('deu dislike')
          props.wrapLike('dislike')
        }
      })
  


  
      return (
        <Disliked ref={dropRef}/>
        )
    
  }
  
  export default DislikeZone