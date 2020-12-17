import React, { Component } from 'react'
import axios from 'axios'
import './Data.scss'
// import Card from '../Card/Card'
export default class Data extends Component {
    state ={
        items:[]
    }
    componentDidMount(){
        axios.get(`http://localhost:8080/upload`)
        .then(res=>{
            console.log('items fetched', res.data);
            this.setState({
                items: res.data
                
            })
            console.log ('fixed data', this.state.items)
        })
        .catch(err=>console.log(err))
    }

    
    render() {
        const {selectedImg} = this.props
        const {items} = this.state
        // if (selectedImg === items.imageUrl){
        const filtered = items.filter(item=>{
            return selectedImg === item.imageUrl
        }

        

        )
        return (
            <div>
                {this.state.items && filtered.map( item => (
                    <div className="data">
                        <h2 className ="data__name"> Name: {item.title}</h2>
                        <h2 className ="data__name">Longevity: {item.longevity}</h2>
                        <h2 className ="data__name"> Type: {item.sillage}</h2>
                        <h2 className ="data__name">Scent: {item.notes}</h2>
                        <h2 className ="data__desc">{item.description}</h2>
                        
                    </div>
                    
                    
                )
                   )}
            </div>
            )
        // }
    }
}
