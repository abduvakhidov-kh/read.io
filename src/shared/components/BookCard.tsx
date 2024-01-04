const BookCard = ({ title, author, src }: { title: string, author: string, src: string }) => {
  return (
    <div className='flex flex-col py-4 capitalize cursor-pointer w-fit group'>
      <img src={src} className="mb-3 bg-white" alt="cover" width={157} height={247}/>
      <h4>{author}</h4>
      <h3 className="mt-1 font-bold group-hover:text-blue-500">{title}</h3>
    </div>
  )
}

export default BookCard