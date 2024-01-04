import { BookList } from "@/entities"
import { Header, SearchInput } from "@/shared/components"
import { useEffect, useState } from "react"
import { fetchBooks } from "./api/fetchBooks"
import { Book } from "@/shared/types"

const navigationList = ['books', 'audiobooks']

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooksData = async () => { 
      if(searchTerm == "") return
      
      const booksData = await fetchBooks(searchTerm)
      setBooks(booksData)
    }

    fetchBooksData()
  }, [])
  

  const handleSearch = async () => {
    if(searchTerm == "") return
    const booksData = await fetchBooks(searchTerm)
    setBooks(booksData)
  }
  
  
  return (
    <div className="flex flex-col space-between">
      <Header navigationList={navigationList} />
      <div className="flex flex-col my-4">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
        <h1 className="px-4 mx-auto my-2 text-2xl font-bold">Books</h1>
        <BookList bookList={books} title={""} />
      </div>
    </div>
  )
} 

export default HomePage