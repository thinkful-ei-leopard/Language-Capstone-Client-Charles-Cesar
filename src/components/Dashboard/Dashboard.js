import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Dashboard.css'
import LanguageContext from '../../contexts/LanguageContext'
import LanguageApiService from '../../services/language-api-service'
import WordList from './../WordList/WordList'

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
        
    return(
        <div>
            <h2>{this.context.language.name} words to practice</h2>
            <h3>Total correct answers: {this.context.language.total_score}</h3>
            <div className='wordBox'>
            <ul>
            <WordList />
            </ul>
            </div>
            
            <Link to=''>Start Practicing</Link>
        </div>
    )}
}