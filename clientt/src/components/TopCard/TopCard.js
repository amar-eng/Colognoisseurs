import React, { Component } from 'react'
import './TopCard.scss'

export default class TopCard extends Component {
    
    render() {
        const {name,type, pic, topnotes, heartnotes, basenotes, setSelected} = this.props
        const handleClick = (e) => {
           
            setSelected(false)
           
          }
       
        return (
            <div className="cardBackdrop">
                    
                    <div className= "top-card cardBackdrop__content" >
                    <span onClick={handleClick}>X</span>
                        <div className= "top-card__container">
                            <div className= "top-card__left">
                                <img src ={pic} className="top-card__pic" alt="cologne" />
                                <h2 className="top-card__type">{name} Concentration: {type} </h2>
                                
                            </div>
                            <div className="top-card__right">
                                <div className="top-card__top">
                                    <h2 className="top-card__name">Top Notes</h2>
                                    {topnotes.map(item =>{
                                        return (
                                        <div className="top-card__return">
                                            <h2 className="top-card__note">{item.note}</h2>
                                            <img className ="top-card__icon" src ={item.image} alt="cologne-icon" />
                                        </div>
                                            
                                    )})} 
                                </div>

                                <div className="top-card__heart">
                                    <h2 className="top-card__name">Heart Notes</h2>
                                    {heartnotes.map(item =>{
                                        return (
                                        <div className="top-card__return">
                                            <h2 className="top-card__note">{item.note}</h2>
                                            <img className ="top-card__icon" src ={item.image} alt="cologne-icon"/>
                                        </div>
                                            
                                    )})} 
                                </div>

                                <div className="top-card__base">
                                    <h2 className="top-card__name">Base Notes</h2>
                                    {basenotes.map(item =>{
                                        return (
                                        <div className="top-card__return">
                                            <h2 className="top-card__note">{item.note}</h2>
                                            <img className ="top-card__icon" src ={item.image} alt="cologne-icon"/>
                                        </div>
                                            
                                    )})} 
                                </div>
                                
                            </div>
                        </div>
                    
                    </div>
        </div>
        )
    }
}
