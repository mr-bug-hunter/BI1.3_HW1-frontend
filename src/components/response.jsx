import { useState } from "react"
import useFetch from "../useFetch"

const addBooks = ()=>{
    const [successMessage, setSuccessMessage] = useState("")
    const {data, loading, error}= useFetch("https://be-4-assignment1-bi13hw1.vercel.app/books")

    console.log(data)

    const handleDelete = async (bookId)=>{
        try{
            const response = await fetch(`https://be-4-assignment1-bi13hw1.vercel.app/${bookId}`, 
                {method : "DELETE"},
            )
            if(!response.ok){
                throw "Failed to delete Movie."
            }
            const data = await response.json()
            if(data){
                setSuccessMessage("Book Delted Successfully")
                window.location.reload() // this will reload page when delete the Movie.
            }
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div> <br /><hr />
            <h2>The Title of Book List </h2>
            <hr />
            {data?.book?.map((book)=>(
                <h2 key={book._id}>{book.title}{" "} <button onClick={()=> handleDelete(book._id)}>Delete</button> </h2>
            ))}
            <hr /><br />
        </div>
    )
}

export default addBooks