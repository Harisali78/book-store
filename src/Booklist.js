import React from 'react'
import "./index.css"
import {myBooks} from './data'
import Books from './Books'
const Booklist = () => {
    return (
        <div className='bookList'>
            {/* <Books myImage={firstBook.myImage} bookTitle={firstBook.title} bookAuthor={firstBook.author}  />
        <Books myImage={secondBook.myImage} bookTitle={secondBook.title} bookAuthor={secondBook.author} >
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque earum sapiente aspernatur voluptate voluptas facilis animi nesciunt fuga tenetur officia.</p>
        </Books>
        <Books myImage={thirdBook.myImage} bookTitle={thirdBook.title} bookAuthor={thirdBook.author} randomVar={randomVar}/>
        <Books myImage={fourthBook.myImage} bookTitle={fourthBook.title} bookAuthor={fourthBook.author} randomVar={randomVar}/> */}
            {myBooks.map((book) => {
                return <Books key={book.id} random={book} />
            })}

        </div>
    )
}


export default Booklist 