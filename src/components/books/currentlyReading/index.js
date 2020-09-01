import React, {Component} from 'react';


class Currently extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        { console.log(this.props.match.params.id)}
        return(
            <h1>
                Currently Reading
            </h1>
        )
    }
}

export default Currently;