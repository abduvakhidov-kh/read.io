import { BookCard } from "@/shared/components"

const BookList = ({ bookList, title }: { bookList: {title: string, src: string, author: string}[], title: string }) => {
  return (
    <div className="mx-4">
      <h3 className="font-bold capitalize">{title}</h3>
      <ul className="grid grid-row-1 grid-col-5">
        {bookList.map(book => <BookCard {...book}/> )}
      </ul>
    </div>
  )
}

export default BookList