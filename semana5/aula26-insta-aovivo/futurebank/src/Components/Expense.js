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
    grid-template-columns: repeat(3, 1fr) 50px;
`

const FlexDiv = styled.div`
    display:flex;
    
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

const ButtonStyles = styled.button`
    background:#4C3999;
    padding:10px;
    border:none;
    margin-top:10px;
    border-radius:20px;
    color:#9DADCC;
    box-shadow: 1px 2px 3px #626C80;
    grid-column-start: 2;

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

const InputStyles = styled.input`
    border:none;
    border-bottom:1px solid #9DADCC;
    background:transparent;
    width:90%;
    color: #9DADCC;
    margin:10px 0 ;
    ::-webkit-input-placeholder {
        color: #4C3999;
    }

    :Focus{
        outline:none;
    }
`

const ImgStyle = styled.img`
    margin:2px;
    width:30px;
    height:30px;
`

export class Expense extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filter:"nenhum",
            valueInput:"",
            filterExpense:"Bobeira",
        }
    }

    ChangeExpense = (event) =>{
        const ChangedValue = {filterExpense: event.target.value}
        this.setState(ChangedValue)
    }

    ChangedFilterValue = (event) =>{
        const ChangedValue = {filter: event.target.value}
        this.setState(ChangedValue)
    }

    ChangedInputValue = (event) =>{
        const ChangedValue = {valueInput: event.target.value}
        this.setState(ChangedValue)
    }

    BackForm = () =>{
        this.props.ReceiveData({window:1})
    }

    RenderFilter = () =>{
        if(this.state.filter==="type"){
            return <SelectStyles onChange={this.ChangeExpense} value={this.state.filterExpense}>
            <option value="Bobeira">Despesa com Bobeira</option>
            <option value="Fixa">Despesa Fixa</option>
            <option value="Outra">Outra Despesa</option>   
            </SelectStyles>
        }else{
            return <InputStyles placeholder="...Filtrar..." onChange={this.ChangedInputValue} value={this.state.valueInput} type="text"/>
        }
    }

    DeleteItem=(Payment)=>{
        const PaymentsList = [...this.props.Payments]
        const id = PaymentsList.indexOf(Payment)
        PaymentsList.splice(id, 1)
        const UpdatedList = {payments: PaymentsList}
        this.props.ReceiveData(UpdatedList)
    }

    EditItemList = (Payment) =>{
        this.props.ReceiveData({objectTarget:Payment, window:3})
    }

    render(){

        const Filtered = this.props.Payments.filter((Payment)=>{
            if(this.state.filter === "max"){
                return Payment.value < this.state.valueInput
            }else if(this.state.filter === "min"){
                return Payment.value > this.state.valueInput
            }else if(this.state.filter === "type"){
                return Payment.type === this.state.filterExpense
            }else{
                return Payment
            }
            
        })

        const RenderPayments = Filtered.map((Payment,Index)=>{
           return <Griddiv key={Index}><Items onDoubleClick={()=>this.EditItemList(Payment)} >{Payment.value}</Items><Items onDoubleClick={()=>this.EditItemList(Payment)}>{Payment.type}</Items><Items onDoubleClick={()=>this.EditItemList(Payment)}>{Payment.desc}</Items><Items><ImgStyle onClick={()=>this.DeleteItem(Payment)} src="https://image.flaticon.com/icons/svg/1632/1632602.svg" alt=""/></Items></Griddiv>
        })

        const sumExpenses = this.props.Payments.reduce( function (prev, Payment){
            return prev + Payment.value
        },0)

        return(
            <ExpenseContainer>
                <FlexDiv>
                <SelectStyles onChange={this.ChangedFilterValue} value={this.state.filter}>
                    <option value="nenhum">Não Filtrar</option>
                    <option value="max">Valor Máximo</option>
                    <option value="min">Menor Valor</option>
                    <option value="type">Tipo de Despesa</option>
                </SelectStyles>
                {this.RenderFilter()}
                </FlexDiv>
                <Title>Total de Despesas: R$ {sumExpenses}</Title>
                <Griddiv>
                    <Title>Valor (R$)</Title>
                    <Title>Tipo de Gasto</Title>
                    <Title>Descrição</Title>
                    <Title></Title>
                </Griddiv>
                {RenderPayments}
                <Griddiv>
                    <ButtonStyles onClick={this.BackForm}>Voltar</ButtonStyles>
                </Griddiv>
            </ExpenseContainer>
        )
    }
}