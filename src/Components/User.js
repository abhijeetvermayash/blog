import React from 'react';
import { fetchData, fetchUser } from '../Actions/Actions'
import { connect } from 'react-redux';

class User extends React.Component {
//    componentDidMount() {

    //    this.props.fetchuser( this.props.userid );
  //  }

    render() {
        //const user = this.props.users.find((user) => user.id === this.props.userid);
        console.log(this.props.user);
        if(this.props.user)
        return <div>{this.props.user.name}</div>
        else
           return <div></div>
    }
}
const MapStateToProps = (state,ownProps) => {
    console.log(state);
    return { user: state.user.find((user) => user.id === ownProps.userid) };
}
export default connect(MapStateToProps, /*{ fetchuser: fetchUser }*/)(User);