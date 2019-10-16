import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Chart } from "react-google-charts";

const TraderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow:1;
  justify-content:center;
  width:90%;
`

export class Trader extends React.Component {
  constructor(props){
    super(props)
    this.state={
        statistics:[],
    }
  }

  componentDidMount(){
    this.getTrades(this.props.SelectedCoin, parseInt((new Date(this.props.InicialDate).getTime() / 1000).toFixed(0)), parseInt((new Date(this.props.FinalDate).getTime() / 1000).toFixed(0)))
  }

  getTrades = async (Coin, Inicial, Final)=>{
     const tradeInfos = await axios.get(`https://www.mercadobitcoin.net/api/${Coin}/trades/${Inicial}/${Final}/`,)
     this.setState({statistics:tradeInfos.data})
  }

    timeConverter=(UNIX_timestamp)=>{
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
 

  render(){
    console.log(this.state.statistics)
    const ListChart = [['y', this.props.SelectedCoin]]
    const lista = this.state.statistics.map((elem)=>{
        return ListChart.push([this.timeConverter(elem.date),elem.price])
    })

    console.log(lista)
    return (
      <TraderContainer>
          
        <Chart
          width={'100%'}
          height={'600px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={ListChart}
          options={{
            hAxis: {
              title: 'Dia',
            },
            vAxis: {
              title: 'Valor',
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </TraderContainer>
    );
  }
}



//1501871369