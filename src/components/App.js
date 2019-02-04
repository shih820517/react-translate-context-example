import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
import ColorConstext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    <ColorConstext.Provider value="red">
                        <UserCreate />
                    </ColorConstext.Provider> 
                </LanguageStore>
            </div>
        );
    }
}

export default App;