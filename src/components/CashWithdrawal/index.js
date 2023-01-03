// Write your code here

import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const chooseValue = denominationsList.filter(eachValue => eachValue.value)

    const {balance} = this.state
    const name = 'Sara William'
    const val = name.slice(0, 1)

    return (
      <div className="container">
        <div className="bg-container">
          <div className="name-container">
            <h1 className="heading-s">{val}</h1>
            <p className="sarah-heading">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance-para">Your Balance</p>
            <div className="rupees-container">
              <p className="amount-heading">{balance}</p>
              <h1 className="rupees-description">In Rupees</h1>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="sum-description">CHOOSE SUM (IN RUPEES)</p>
            <div className="lists-container">
              <ul className="under-container">
                {chooseValue.map(eachValue => (
                  <DenominationItem
                    key={eachValue.id}
                    values={eachValue}
                    updateBalance={this.updateBalance}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
