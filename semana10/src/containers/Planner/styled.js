import styled from 'styled-components'

export const PlannerContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(7,1fr);
  min-height:100vh;
`

export const IncludeButton = styled.button`
background: lightgreen;
`

export const InputsContainer = styled.div`
  grid-column:1/-1;
  height:5vh;
  display:flex;
  width:100%;
  background: lightpink;
  justify-content:space-evenly;
`

export const Title = styled.h3`
  background: lightsteelblue;
  color:white;
  text-align:center;
  margin:0;
  border: 2px black solid; 
  height:5vh; 
`

export const Day = styled.h3`
  background: lightcyan;
  color:gray;
  text-align:center;
  margin:0;
  padding:20px;
  border: 1px black solid;
  min-height:90vh;
`

export const Activity = styled.span`
  border: 1px black solid;
  display:flex;
  flex-direction:column;
  margin:10px;
`