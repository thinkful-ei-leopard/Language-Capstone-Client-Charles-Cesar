import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Dashboard.css'
import LanguageContext from '../../contexts/LanguageContext'
import LanguageApiService from '../../services/language-api-service'

export default class Dashboard extends React.Component{

static contextType = LanguageContext;

componentDidMount(){
    LanguageApiService.getLanguage()

    .then(res => {
        console.log(res)
      this.context.setLanguage(res.language)
      this.context.setWords(res.words)
    })
    .catch(res => {
      this.context.setError(res)
    })
  }
  
    render(){
        console.log(this.context.language.name);
        
    return(
<div>
    <h3>{this.context.language.name}</h3>
    

</div>
    )}
}