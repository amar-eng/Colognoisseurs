import React, { Component } from 'react'
import './Home.scss'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import {BASE_URL} from '../../utils/utils'
import ImageGrid from '../ImageGrid/ImageGrid'
import Hero from '../Hero/Hero'
export default class Home extends Component {
    state={
        toplist:null
    }
    fetchList=()=>{
        axios.get(`${BASE_URL}/top`)
            .then(res=>{
                console.log("data", res.data)
                this.setState({
                    toplist:res.data
                })
            })
            .catch(err=>{
                console.log('error', err)
            })
    }
    componentDidMount(){
        this.fetchList();
    }
    render() {
        return (
            <div>
                <Navbar/>
                <Hero/>
                <div className="home-card">
                {this.state.toplist && this.state.toplist.map(item =>{
                   return  <ImageGrid key ={item.id}
                    id ={item.id}
                    name = {item.name}
                    type = {item.type}
                    pic ={item.pic}
                    topnotes = {item.topnotes}
                    heartnotes={item.heartnotes}
                    basenotes = {item.basenotes}
                    
                    />})}
                </div>
                
            </div>
        )
    }
}


