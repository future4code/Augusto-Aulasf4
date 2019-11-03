import PropTypes from 'prop-types'
import React, { Component, useRef } from 'react'
import {
  swipeRight,
  swipeLeft,
  BlurredBackground,
  InfoWrapper,
  ProfilePicture,
  TitleWrapper,
  UserAge,
  UserCardWrapper,
  UserName,
} from './styled'
import { useDrag, useDrop } from 'react-dnd'
import {getProfiles, choosePerson} from '../../actions'
import {connect} from 'react-redux'

 function UserSwipeCard (props){

  const ref = useRef()

    const [{isDragging}, dragRef]= useDrag({
      item: { type: 'CARD', id: props.userToSwipe.id },
      collect: monitor=> ({
        isDragging: monitor.isDragging(),
      }),
    })

    const [, dropRef] = useDrop({
      accept: 'CARD',
      drop(item,monitor){
        const targetSize = ref.current.getBoundingClientRect();
        const targetCenter = (targetSize.right- targetSize.left) / 2
        
        const draggedOffset = monitor.getClientOffset();
        const draggedLeft = draggedOffset.x - targetSize.left
        
        if (draggedLeft>targetCenter){
          props.chooseProfile(props.userToSwipe.id, 'dislike')
          props.saveFatherState(swipeLeft)
        }else{
          props.chooseProfile(props.userToSwipe.id, 'like')
          props.saveFatherState(swipeRight)

        }
      }
    })

    dragRef(dropRef(ref))

    const { userToSwipe, animationDirection: animation } = props

    return (
      <UserCardWrapper animation={animation} ref={ref} isDragging={isDragging}>
        <BlurredBackground photo={userToSwipe.photo}/>
        <ProfilePicture src={userToSwipe.photo}/>
        <InfoWrapper>
          <TitleWrapper>
            <UserName>{userToSwipe.name},</UserName>
            <UserAge>{userToSwipe.age}</UserAge>
          </TitleWrapper>
        </InfoWrapper>
      </UserCardWrapper>)
  
}

const mapStateToProps = (state) => ({
	profileToSwipe: state.profiles.profileToSwipe
})

const mapDispatchToProps = (dispatch) => {
	return {
		chooseProfile: (id,op) => dispatch(choosePerson(id,op)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSwipeCard)

UserSwipeCard.propTypes = {
  userToSwipe: PropTypes.object
}

