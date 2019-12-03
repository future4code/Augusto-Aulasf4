import React from 'react'
import styled from 'styled-components'

const RegisterContainer = styled.div`
    border: 2px solid #9DADCC;
    border-radius:20px;
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    padding: 30px;
`

const InputStyles = styled.input`
    border:none;
    border-bottom:1px solid #9DADCC;
    background:transparent;
    width:90%;
    color: #9DADCC;
    margin:10px 0 ;
    ::-webkit-input-placeholder {
        color: #806F49;
    }

    :Focus{
        outline:none;
    }
`

const SelectStyles = styled.select`
    border:none;
    border-bottom:1px solid #9DADCC;
    background:transparent;
    width:90%;
    color: #9DADCC;
    margin:10px 0 ;
    :Focus{
        outline:none;
    }
`

const ButtonStyles = styled.button`
    background:#4C3999;
    padding:10px;
    border:none;
    margin:10px;
    border-radius:20px;
    color:#9DADCC;
    box-shadow: 1px 2px 3px #626C80;

    :Focus{
        outline:none;
    }
`

export class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    ChangeMoneyValue = (event) =>{
        const ChangedValue = {moneyValue: Number(event.target.value)}
        this.props.ReceiveData(ChangedValue)
    }

    ChangeExpense = (event) =>{
        const ChangedExpense =({expense: event.target.value})
        this.props.ReceiveData(ChangedExpense)
    }

    ChangeDescription = (event) =>{
        const ChangedDescription =({description: event.target.value})
        this.props.ReceiveData(ChangedDescription)
    }

    ButtonList =()=>{
        const ChangeWindow =({window: 2})
        this.props.ReceiveData(ChangeWindow)
    }

    SendForm = () =>{

        this.props.ButtonAdvanced()
    }

    render(){
        return(
            <RegisterContainer>
            <InputStyles onChange={this.ChangeMoneyValue} value={this.props.ValueState.moneyValue} type="number" placeholder="...Valor"/>
            <SelectStyles onChange={this.ChangeExpense} value={this.props.ValueState.expense}>
                <option value="Bobeira">Despesa com Bobeira</option>
                <option value="Fixa">Despesa Fixa</option>
                <option value="Outra">Outra Despesa</option>    
            </SelectStyles> 
            <InputStyles onChange={this.ChangeDescription} value={this.props.ValueState.description} placeholder="...Descrição"/>
            <div>
                <ButtonStyles onClick={this.SendForm}>Cadastrar</ButtonStyles>
                <ButtonStyles onClick={this.ButtonList}>Despesas</ButtonStyles>
            </div>
            </RegisterContainer>
        )
    }
}