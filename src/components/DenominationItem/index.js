// Write your code here

import './index.css'

const DenominationItem = props => {
  const {values, updateBalance} = props

  const {value} = values

  const onClickButton = () => {
    updateBalance(value)
  }

  return (
    <li className="listItem-container">
      <div className="btn-container">
        <button type="button" className="btn-ele" onClick={onClickButton}>
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
