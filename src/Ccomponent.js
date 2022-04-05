import React, { Component } from 'react'
let a = 'hello'
export default class Ccomponent extends Component {
constructor(props) {
  super(props)
debugger
  this.state = {
     title: this.props.item.title,
     body:this.props.item.body,
     itemsBody: this.props.item.body,
     itemsTitle: this.props.item.title
  }
this.Change = this.Change.bind(this)
this.SubmitTitle = this.SubmitTitle.bind(this)
this.SubmitBody = this.SubmitBody.bind(this)
}


Change(event){
this.setState({
    title: event.target.value,
    body : event.target.value
})
}

SubmitTitle(event){
    event.preventDefault();
     this.setState({

    // input: this.state.input,
     itemsTitle: this.state.title
    })
    }

    SubmitBody(event){
      event.preventDefault();
       this.setState({
  
      // input: this.state.input,
       itemsBody: this.state.body
      })
      }


  render() {
    debugger
    return (
      <div>
          <h1>{this.state.itemsTitle}</h1>
          <p>{this.state.itemsBody}</p>
         <form onSubmit={this.SubmitTitle}>
         <textarea   onChange={this.Change} style={{width: '700px'}}>{this.props.item.title}</textarea>
          <button type='submit'>submit</button>
         </form>
         <form onSubmit={this.SubmitBody}>
         <textarea onChange={this.Change} style={{width: '700px',height: '200px'}}>{this.props.item.body}</textarea>
          <button type='submit'>submit</button>
         </form>
         {/* <ul>
             {this.state.items.map((el,ind)=>(
                 <li> {ind} {el}</li>
             ))}
         </ul> */}
      </div>
    )
  }
}


