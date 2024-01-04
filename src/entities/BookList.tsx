import { BookCard } from "@/shared/components"
import { Book } from "@/shared/types"
import { Link } from "react-router-dom"

const BookList = ({ bookList, title }: { bookList: Book[], title: string }) => {
  return (
    <div className="mx-4">
      <h3 className="font-bold capitalize">{title}</h3>
      <ul className="grid grid-cols-5 grid-rows-1 gap-4">
        {bookList.map(book => <Link to={"/" + book.id} state={book} >
            <BookCard {...book}/>
          </Link>)}
      </ul>
    </div>
  )
}

export default BookList