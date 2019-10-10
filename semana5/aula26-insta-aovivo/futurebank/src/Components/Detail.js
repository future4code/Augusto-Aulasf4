import React from 'react'
import styled from 'styled-components'

const ExpenseContainer = styled.div`
    border: 2px solid #9DADCC;
    border-radius:20px;
    width:50%;
    padding: 30px;
    margin-top:20px;
    background: #6F7480;
`

const Griddiv = styled.div`
    display:grid;
    grid-template-rows: repeat(3, 1fr) 50px;
`

const FlexDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const Title = styled.h4`
    background:#4C3999;
    border: 2px solid #9DADCC;
    text-align:center;
    margin:0;
`

const ButtonStyles = styled.button`
    background:#4C3999;
    padding:10px;
    border:none;
    margin:5px;
    border-radius:20px;
    color:#9DADCC;
    box-shadow: 1px 2px 3px #626C80;
    grid-column-start: 2;

    :Focus{
        outline:none;
    }
`

const InputStyles = styled.input`
    border:none;
    background:white;
    color: #9DADCC;
    text-align:center;
    padding: 20px 0;
    font-weight:bold;
    ::-webkit-input-placeholder {
        color: #4C3999;
    }

    :Focus{
        outline:none;
        color:green;
    }
`

const ImgStyle = styled.img`
    margin:5px;
    width:30px;
    height:30px;
`

export class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            disbleInput: true
        }
    }

    ChangedInputValue = (event) =>{
        const ListObj = this.props.Payments
        const id = this.props.Payments.indexOf(this.props.PaymentObject)
        ListObj[id].value = event.target.value
        this.props.ReceiveData({payments: ListObj})
    }
    ChangedInputType = (event) =>{
        const ListObj = this.props.Payments
        const id = this.props.Payments.indexOf(this.props.PaymentObject)
        ListObj[id].type = event.target.value
        this.props.ReceiveData({payments: ListObj})
    }
    ChangedInputDesc = (event) =>{
        const ListObj = this.props.Payments
        const id = this.props.Payments.indexOf(this.props.PaymentObject)
        ListObj[id].desc = event.target.value
        this.props.ReceiveData({payments: ListObj})
    }

    BackForm = () =>{
        this.props.ReceiveData({window:2})
    }

    ChangeStateDisable = () =>{
        const ChangedValue = {disbleInput: false}
        this.setState(ChangedValue)
    }

    DeleteItem=(Payment)=>{
        const PaymentsList = [...this.props.Payments]
        const id = PaymentsList.indexOf(Payment)
        PaymentsList.splice(id, 1)
        const UpdatedList = {payments: PaymentsList}
        this.props.ReceiveData(UpdatedList)
    }

    EditItem = (Payment) =>{

        this.props.ReceiveData({window:3, objectTarget: Payment})
    }

    render(){

        return(
            <ExpenseContainer>
                
                <Title>Detalhes da Despesa:</Title>
                <Griddiv>
                    <Title>Valor (R$)</Title>
                    <InputStyles value={this.props.PaymentObject.value} onChange={this.ChangedInputValue} disabled={this.state.disbleInput}/>
                    <Title>Tipo de Gasto</Title>
                    <InputStyles value={this.props.PaymentObject.type} onChange={this.ChangedInputType} disabled={this.state.disbleInput}/>
                    <Title>Descrição</Title>
                    <InputStyles value={this.props.PaymentObject.desc} onChange={this.ChangedInputDesc} disabled={this.state.disbleInput}/>
                </Griddiv>
                <FlexDiv>
                    <ImgStyle onClick={this.ChangeStateDisable} src="https://image.flaticon.com/icons/svg/1160/1160119.svg" alt=""/>
                    <ButtonStyles onClick={this.BackForm}>Voltar</ButtonStyles>
                </FlexDiv>   
            </ExpenseContainer>
        )
    }
}