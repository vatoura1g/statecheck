import React, { Component } from 'react'

export class Profile extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             memory:null
        }
    }
componentDidMount(){
   this.setState({ memory: setInterval(() => {
    this.increment()
}, 1000) });
}
componentWillUnmount(){

    clearInterval(this.state.memory)
}
    
    increment=()=>{this.setState({ count: this.state.count +1 });}
    render() {
        return (
            <div>
                <p>
                    {this.state.count}
                </p>
        <h2>Name: Sassi Monta</h2>
        <h3>Profession :Full Stack Developer</h3>
        <h3> Welcome</h3>
    <img src="/Me.jpg" alt="Me" width="450px" height="300"/>
            </div>
        )
    }
}

export default Profile
