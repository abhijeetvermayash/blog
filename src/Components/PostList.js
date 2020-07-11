import React from 'react';
import { fetchDataAndUser } from '../Actions/Actions'
import { connect } from 'react-redux';
import User from './User';
class PostList extends React.Component {
    state = { ok: null };
    
    renderList() {
        console.log(11111);
        console.log(this.props);
        console.log(this.state.ok);
        if (this.props.posts) {
            return this.props.posts.map((post) => {
                return (
                    <div className="item" key={post.id} style={{ backgroundColor: 'black' }}>
                        <img src="download.png" style={{ borderRadius: '400px', height: '50px', width: '50px' }} />
                        <div className="content" >
                            <div className="discription">
                                <h2 onClick={() => this.show(post.id)} >{post.title}</h2>
                                <Details idclicked={this.state.ok} id={post.id} body={post.body}  />
                                {/*<p style={{ color: 'white' }}>{post.body}</p>*/}
                                <User userid={post.userId}/>
                                

                            </div>

                        </div><hr />

                    </div>
                    
                    );

            })
        }
        else {
            return<div>dasdas</div>
        }
    }
   
    show = (id) => {
        this.setState({ ok: id });
    
        
      

       
    }
    

  
    
    render() {
        console.log(this.props.posts);
        return (
            <div>{this.renderList()}
                
            </div>);
    }
    componentDidMount() {
        this.props.fetchdataanduser();
    }
    
}
const Details = (props) => {
    if (props.id === props.idclicked) {
        return <div>{props.body}</div>
    }
    else {
        return <div></div>
    }
}
const mapStateToProps = (state) => {
    return { posts: state.posts };
}
export default connect(mapStateToProps, { fetchdataanduser: fetchDataAndUser })(PostList);