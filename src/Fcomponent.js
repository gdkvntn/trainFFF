import React, { Component } from 'react'
import Card from './Card'
import Ccomponent from './Ccomponent'

export default class Fcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        debugger
        if (error) {
            return <p>error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <div>
                    <ul>
                        {items.map(item => (
                            <li style={{listStyleType: "none"}}>
                                <Card item={item}/>
                                
                            </li>
                        ))}

                    </ul>
                </div>
            )
        }

    }
}
