import React from 'react'
import styled from 'styled-components'

const ExpenseContainer = styled.div`
    border: 2px solid #9DADCC;
    border-radius:20px;
    width:50%;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px;
    margin-top:20px;
    background: #6F7480;
`

const Title = styled.h4`
    background:#4C3999;
    border: 2px solid #9DADCC;
    text-align:center;
    margin:0;
`

const Items = styled.p`
    color:#4C3999;
    background:white;
    border: 2px solid #9DADCC;
    text-align:center;
    margin:0;
`

export class Expense extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const RenderPayments = this.props.Payments.map((Payment,Index)=>{
           return <Items key={Index}>{Payment}</Items>
        })
        return(
            <ExpenseContainer>
                <Title>Valor</Title>
                <Title>Tipo de Gasto</Title>
                <Title>Descrição</Title>
                {RenderPayments}
            </ExpenseContainer>
        )
    }
}