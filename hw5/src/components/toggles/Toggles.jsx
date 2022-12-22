import React, { Component } from 'react'

export default class Toggles extends Component {
    constructor(props){
        super(props)
        this.state ={
            showText:true
        }
        this.selected = 'maybe'
        
    }


  render() {
    return (
      <div>
         <div >
            <button onClick={()=>this.setState({showText:!this.state.showText})}>Скрыть текст</button>
            {
                this.state.showText? <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus minima ipsam magnam consequatur! Dolorum quas laboriosam, inventore optio voluptas eos.</p>:null
            }

            <div >
                <span>Вы уверены что хотите закончить курсы?</span>
                <input
                    type="radio"
                    id="yes"
                    name="choose"
                    value="yes"
                    checked={this.selected === 'yes'}
                />
                <label htmlFor="yes">Yes</label>

                <input
                    type="radio"
                    id="no"
                    name="choose"
                    value="no"
                    checked={this.selected === 'no'}
                />
                <label htmlFor="no">No</label>

                <input
                    type="radio"
                    id="maybe"
                    name="choose"
                    value="maybe"
                    checked={this.selected === 'maybe'}
                />
                <label htmlFor="maybe">Maybe</label>
            </div>
        </div>
      </div>
    )
  }
}
