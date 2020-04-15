import React from 'react'

const LanguageContext = React.createContext({
    language: {},
    words: [],
  });
  
  export default LanguageContext;

  export class LanguageProvider extends React.Component {
    state = {
        language: {},
        words: [],
        error: null,
        setLanguage: () => {},
        setWords: () => {},
        setError: () => {}

    }

    setLanguage = language => {
        this.setState({ language })
    }

    setWords = items => {
        this.setState({ words: items })
    }

    setError = error => {
        this.setState({ error })
    }


    render() {
        const value = {
            language: this.state.language,
            words: this.state.words,
            setLanguage: this.setLanguage,
            setWords: this.setWords,
            state: this.state,
            setError: this.setError
        }

        return (
            <LanguageContext.Provider value={value}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
};