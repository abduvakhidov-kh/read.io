import { BookList } from "@/entities"
import { Header, SearchInput } from "@/shared/components"
import { useState } from "react"

const navigationList = ['books', 'audiobooks']

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    // code
  }
  
  return (
    <div className="flex flex-col space-between">
      <Header navigationList={navigationList} />
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <h1 className="px-4 my-4 text-2xl font-bold">Books</h1>
      <BookList bookList={[ { src: '/', author: "author", title:"title" } ]} title={""} />
    </div>
  )
} 

export default HomePage