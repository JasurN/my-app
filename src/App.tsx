import React from 'react';
import { Timeline } from 'react-twitter-widgets';

function App() {
    return (
        <div className="App">
            <Timeline
                dataSource={{
                    sourceType: 'list',
                    ownerScreenName: 'twitter',
                    id: '214727905'
                }}
                options={{
                    height: '400',
                    width: '400'
                }}
            />
        </div>
    );
}

export default App;
