import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Background from './components/Background';
import NumberGrid from './components/NumberGrid';
import React from 'react';
import './components/Background.css';
function App() {
    return (
        <div className="App">
            <Background />
            <NumberGrid />
        </div>
    );
}

export default App;
