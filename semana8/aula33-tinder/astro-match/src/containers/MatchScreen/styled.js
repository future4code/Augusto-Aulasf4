import styled, { keyframes } from 'styled-components'
import Icon from '@mdi/react'

export const MatchIcon = styled(Icon)`
	display: block;
	fill: #4AA397;
`

export const swipeRightToInit = keyframes`
  from {
    opacity: 0;
	  transform:scale(0) translate(0) rotate(0);
  }

  to {
    opacity: 1;
	  transform: scale(1) translate(0) rotate(360deg);
  }
`;
export const swipeLeftToClose = keyframes`
  from {
    opacity: 1;
	  transform:scale(1) translate(0) rotate(0);
  }

  to {
    opacity: 0;
	  transform: scale(0) translate(0) rotate(360deg);
  }
`;

export const MatchContainer = styled.div`
animation: ${props=>props.animation} 1s cubic-bezier(0.215, 0.61, 0.355, 1);
animation: ${props => props.closeWindowWithAnimation} 0.6s ;
`

export const List = styled.ul`
  padding: 0 10px;
`

export const DivOver = styled.div`
height:520px;
overflow-y:scroll;
`

export const ListItem = styled.li`
  position: relative;
  height: 70px;
  padding: 10px;
  display: flex;
  list-style: none;
  width: 100%;
  transition: 0.2s;
  cursor: pointer;
  
  :hover {
    background: #eee;
  }
  
  :last-child {
    border: unset;
  }
  
  :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.1);
    		content: "";
			}
   }
`

export const Avatar = styled.div`
  height: 100%;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  background: url(${props => props.src});
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
`

export const ListText = styled.p`
  user-select: none;
`
