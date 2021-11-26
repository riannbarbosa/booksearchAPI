import Title from './components/Title';
import axios from 'axios';
import React, {useState} from 'react';



function App() {

  const [book, setBook]= useState("");
  const [result, setResult] = useState([]);


  
  function handleChange(event){

    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event){

    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&download=epub&key=AIzaSyAjceEok0YJW5fOq1bmi6U5-eqiNl8U4Ys&maxResults=40")
        .then(data =>{ 
          setResult(data.data.items); 
          console.log(data.data.items);     
        })

  }



  return (
    <div className="container">
      <Title />   
      <form className="form-group" onSubmit={handleSubmit} class="Stylediv">
    
    <input type="text" class = "Styleinput" onChange={handleChange} placeholder="Search for a title, author or category of a book..."/>

    <button className="search-button" type="submit" id = 'buttonStyle' >Search!</button>

    </form>

    <hr/>

    {result.map(book => (
    
    <div style={testgrid}>
      <div style={testgrid2}>

      <a href={book.volumeInfo.previewLink} Target="_blank">
      <img width="128vw" height="auto"src={
      book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`} alt={book.title}/>
     </a>
      </div>
       </div>
    
    
     

    ))}



   <footer>
     <p>© 2021 by Rian Barbosa / Thank you for visiting my page hope y'all enjoy :D</p>
     <p >On <b><a Style="color: black;" href="https://github.com/riannbarbosa/booksearchAPI" Target="_blank">Github</a></b></p>
   </footer>

    </div>
  );
}



const testgrid2 = {
  border: '1px solid rgba(0, 0, 0, 0.8)',
  padding: '30px',
  fontSize: '30px',
  margin:'2vw ',
  backgroundColor: 'rgb(57, 11, 127)',

}

const testgrid = {
  display: 'inline-grid',
  gridTemplateColumns: 'auto auto auto',
  padding: '10px',

}

export default App
   
