import React, { Component } from 'react'
import './App.css'
import Player from './components/players'
import Stamina from './components/stamina'
import AttackButton from './components/attack'
import Restart from './components/restart'
import Title from './components/title'

class App extends Component {
  constructor () {
    super()
    this.state = {
      playerOne: {
        name: 'John Doe',
        stamina: 100
      },
      playerTwo: {
        name: 'Jane Doe',
        stamina: 100
      }
    }
  }


  restoreStamina () {
    'use strict'
    return () => {
      this.setState({
        playerTwo: {
          stamina: 100,
          name: this.state.playerTwo.name
        },
        playerOne: {
          stamina: 100,
          name: this.state.playerOne.name
        }
      })
    }
  }

  handleAttackPlayerOne () {
    'use strict'
    return () => {
      if (this.state.playerTwo.stamina === 0) { return alert('John Doe Ganhou! Pressione Restart...') }
      this.setState({
        playerTwo: {
          stamina: this.state.playerTwo.stamina - 20,
          name: this.state.playerTwo.name
        }
      })
    }
  }

  handleAttackPlayerTwo () {
    'use strict'
    return () => {
      if (this.state.playerOne.stamina === 0) { return alert('Jane Doe Ganhou! Pressione Restart...') }
      this.setState({
        playerOne: {
          stamina: this.state.playerOne.stamina - 20,
          name: this.state.playerOne.name
        }
      })
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Title />
        <div className='players'>
          <div className='p1'>
            <Player playerName={this.state.playerOne.name} />
            <Stamina stamina={this.state.playerOne.stamina} />
            <AttackButton attack={this.handleAttackPlayerOne()} />
          </div>
          <div className='p2'>
            <Player playerName={this.state.playerTwo.name} />
            <Stamina stamina={this.state.playerTwo.stamina} />
            <AttackButton attack={this.handleAttackPlayerTwo()} />
          </div>
        </div>
        <div className='restart'>
          <Restart restart={this.restoreStamina()} />
        </div>
      </div> 
    )
  }
}

export default App
