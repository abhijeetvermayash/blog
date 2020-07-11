import React from 'react';
import PostList from './PostList';

class App extends React.Component {
    render() {
        return (
            <div className="ui container" style={{
                color:'white' }}><h1>POSTS!!</h1><br/><br/>
                <PostList />
            </div>
            );
    }
}
export default App;