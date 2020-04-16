import React from 'react'
import LanguageContext from '../../contexts/LanguageContext'

export default class WordList extends React.Component{
    static contextType = LanguageContext;
        
    render(){
        console.log(this.context.words)
      return (
        <ul>
            {this.context.words.map(word =>
                 <li className='wordListItem' key={word.original}> 
                    <div className='word'>
                        {word.original}
                    </div> 
                    <div className='correct_count'>
                        {word.correct_count}
                    </div>
                    <div className='incorrect_count'>
                        {word.incorrect_count}
                    </div>
                 </li>)}
        </ul>
      )
    }
}
