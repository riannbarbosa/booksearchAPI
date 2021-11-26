import React from 'react';
import PropTypes from 'prop-types';
import books from "../img/books.png"

const Title = ({ title }) => {
    return(
        <div>
        <h1>{title}</h1>    
        <p class="Style1">Search for ebooks!</p>
        <p class="Style2">Built with the Google Books API</p>
        <img src={books} alt="Books" class="Style3"></img>
        </div>
    );
}   

Title.defaultProps = {
    title: 'The Book Search API',
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
}



export default Title