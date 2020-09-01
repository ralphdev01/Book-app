import React, {Component} from 'react';
import Layout from '../../layout/index';
import axios from 'axios';
import '../../layout/index.css';



const api = "https://reactnd-books-api.udacity.com"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)




class Read extends Component {

    constructor(){
        super()
        this.state = {
           books: [],
        //    img: [] 
        }
    }

    
    async componentDidMount(){
        const res = await axios(`${api}/books`, { headers });
        console.log(res.data.books)
        this.setState({books: res.data.books})      
    }

    

    getAll = () =>
        fetch(`${api}/books`, { headers })
          .then(res => res.json())
          .then(data => console.log(data.books))

    render(){
        return(
            <Layout>
                <div>
                    <h1>
                        READ
                    </h1>
                    {
                        this.state.books.map(book => (
                        
                        <div className='card'><p className='text'>{book.title}</p>
                            <img alt='pic' className='img2'src={book.imageLinks.smallThumbnail} />
                        </div>
                        ))
                    }

                
                
                </div>
                
            </Layout>
        )
    }
}

export default Read;