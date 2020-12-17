import React, { Component } from 'react'
import './UploadForm.scss'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class UploadForm extends Component {
    constructor(props){
        super(props)

        this.state ={
            title:'', 
            longevity:'', 
            sillage:'',
            notes:'',
            description:'', 
            
        }
    }
    changeHandler =(e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    clickedHandler = (e)=>{
        //   e.preventDefault(); 
          console.log(this.state); 
          axios
            .post('http://localhost:8080/upload', {...this.state, imageUrl:this.props.imageUrl})
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)  
            })
    }

    render() {
        const {title,description, longevity,sillage,notes} = this.state
        console.log(this.props.imageUrl)
        return (
            <>
            
            <form className ="upload-forms" >
                <label >
                    
                    <input className="upload-forms__input"type ="text" name="title" value={title} onChange={this.changeHandler} placeholder ="Add a name to your cologne"  />
                </label>
                <label >
                    
                    <input className="upload-forms__input" type ="text" name="longevity" value={longevity} onChange={this.changeHandler} placeholder ="Longevity in hours"  />
                </label>
                <label >
                    
                    <input className="upload-forms__input" type ="text" name="sillage" value={sillage} onChange={this.changeHandler} placeholder ="Concentration (EDT, EDP, etc ) "  />
                </label>
                <label >
                    
                    <input className="upload-forms__input" type ="text" name="notes" value={notes} onChange={this.changeHandler} placeholder =" Prominent scents (Woody, Musky, etc)"   />
                </label>
                <label >
                    
                    <textarea className ="upload-forms__text" type ="text" name="description" value={description} onChange={this.changeHandler} placeholder ="Add a description of your cologne"  />
                </label>
            </form>
            <Link to = "/cologne-list" className = "upload__button" onClick = {this.clickedHandler} >
                <button className ="upload-button">Upload</button>                     
            </Link>
            </>
        )
    }
}


