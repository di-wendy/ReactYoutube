import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    constructor(props){
        super(props);
    }
    
    renderList(){
        return this.props.books.map((book) => {
            return <li key={book.title}>{book.title}</li>;
        })
    }

    render(){
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

//Connect state to global state
function mapStateToProps(state){
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);