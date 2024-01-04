import { Badge } from "@/shared/components";
import { truncateText } from "@/shared/lib";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
  const { state } = useLocation();

  console.log(state);
  
  return (
    <div className='flex justify-center w-full pt-10'>
      <div className="grid grid-cols-3 grid-rows-1 gap-6">
        <div className="flex justify-center">
          {state.volumeInfo.imageLinks?.thumbnail ? (
            <img
              src={state.volumeInfo.imageLinks.thumbnail}
              alt={state.volumeInfo.title}
              className="object-contain max-w-full max-h-full rounded-lg shadow-md"
            />
          ) : (
            <div className="relative flex items-center justify-center w-1/2 overflow-hidden text-sm text-center text-gray-600 bg-gray-200 rounded-lg shadow-md h-4/5">
              <div>{truncateText(state.volumeInfo.title, 40)}</div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-500 underline">{state.volumeInfo.authors && (
            <p className="overflow-hidden text-sm text-gray-700 whitespace-nowrap overflow-ellipsis">
              Authors: {truncateText(state.volumeInfo.authors.join(', '), 40)}
            </p>
          )}</h2>
          <h1 className="font-bold">{state.volumeInfo.title}</h1>
          <button className="px-4 py-2 bg-blue-500 rounded w-fit hover:bg-blue-600">Read</button>
          <div className="leading-6">{state.volumeInfo.description}</div>
          <div>{state.volumeInfo.categories ? state.volumeInfo.categories.map((category: string) => <div className="p-2 text-sm bg-blue-400 rounded-lg cursor-pointer w-fit">{category}</div> ) : 'All'}</div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails