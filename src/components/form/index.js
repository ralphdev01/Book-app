import React, {Component} from 'react';


const Users = [
    {
    username: 'casper11',
    password: 'sholaja'
    },
    {
    username: 'ralph32',
    password: '12345'
    },
    {
    username: 'hack123',
    password: '781227'
    }
    
]

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.username, this.state.password)
        // for(let i = 0; i < Users.length; i++){
        //     if(Users[i].username === this.state.username){
        //         if(Users[i].password === this.state.password){
        //             alert('login successfull')
        //             this.props.history.push('/dashboard');
        //             return;
        //         } else {
        //             alert('wrong password')
        //         }
        //     } else {
        //         alert('wrong username')
        //     }
        // }

        const isFind = Users.filter(item => item.username === this.state.username)
        if(isFind.length){
            if(isFind[0].password === this.state.password){
                alert('login successful')
                this.props.history.push('/dashboard');
                return;
            } else {
                alert('wrong password')
                return
            }
        } else {
            alert('wrong username')
            return
        }
    }

    render(){
        {console.log(this.props)}
        return(
            <div>
                <h3>CASPER ENTERPRISES</h3>
                <form>
                    <label for="username">Username:</label><br/>
                    <input id="name" type="text" onChange={e => this.setState({username: e.target.value})} /><br/>
                    <label for="password">password:</label><br/>
                    <input id="pass" type="password" name='password' onChange={this.handleChange} /><br/>
                    <button id="submitBtn" onClick={this.handleSubmit} > Submit </button>
                </form>
        </div>
        )
    }
}

export default Form;




        


