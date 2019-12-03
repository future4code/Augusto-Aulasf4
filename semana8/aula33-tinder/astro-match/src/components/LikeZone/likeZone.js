import React, { Component, useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Liked } from './styled'


export function LikeZone (props){

  
      const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item,monitor){
            console.log('deu like')
            props.wrapLike('like')
        }
      })
  


  
      return (
        <Liked ref={dropRef}/>
        )
    
  }
  
  export default LikeZone