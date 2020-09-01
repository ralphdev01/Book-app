import React, {Component} from 'react';
import Header from './header';
import CurrentlyReading from './currentlyReading';
import WantToRead from './wantToRead';
import Read from './Read';

class Book extends Component {
    render(){
        return(
            <div>
                {/* <Header />
                <CurrentlyReading />
                <WantToRead /> */}
                <Read />

                
            </div>
        )
    }
}

export default Book;