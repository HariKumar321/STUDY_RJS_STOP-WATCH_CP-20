// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {initialSeconds: 0, isTimerRunning: false}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  renderMinutes = () => {
    const {initialSeconds} = this.state
    const minutes = Math.floor(initialSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return `${minutes}`
  }

  renderSeconds = () => {
    const {initialSeconds} = this.state
    const seconds = Math.floor(initialSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return `${seconds}`
  }

  runClock = () => {
    this.setState(prevState => ({initialSeconds: prevState.initialSeconds + 1}))
  }

  startBtn = () => {
    this.timerId = setInterval(this.runClock, 1000)

    this.setState({isTimerRunning: true})
  }

  stopBtn = () => {
    clearInterval(this.timerId)

    this.setState({isTimerRunning: false})
  }

  resetBtn = () => {
    clearInterval(this.timerId)

    this.setState({initialSeconds: 0, isTimerRunning: false})
  }

  render() {
    const {isTimerRunning} = this.state

    const countdown = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading"> Stopwatch </h1>
          <div className="timer-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
            />
            <span className="timer-text"> Timer </span>
          </div>
          <h1 className="countdown">{countdown}</h1>
          <div className="btns-container">
            <button
              className="button green-btn"
              type="button"
              disabled={isTimerRunning}
              onClick={this.startBtn}
            >
              Start
            </button>
            <button
              className="button red-btn"
              type="button"
              onClick={this.stopBtn}
            >
              Stop
            </button>
            <button
              className="button yellow-btn"
              type="button"
              onClick={this.resetBtn}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
