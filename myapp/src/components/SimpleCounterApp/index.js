// Write your code here
import {Component} from 'react'
import './index.css'

class SimpleCounterApp extends Component {
state = {
  count:0,
}

onClickDecrementBtn = () => {
  this.setState(prevState =>({count:prevState.count - 1}))
}

onClickIncrementBtn = () => {
  this.setState(prevState =>({count:prevState.count + 1}))
}


  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="white-card-container">
            <h1 className='heading'>Counter</h1>
            <p className='count'>{count}</p>
            <div className='buttons-container'>
            <button type='button' className='decrement-btn' onClick={this.onClickDecrementBtn}>Decrement</button>
              <button type='button' className='increment-btn'  onClick={this.onClickIncrementBtn}>Increment</button>
            </div>
        </div>
      </div>
    )
  }
}

export default SimpleCounterApp
