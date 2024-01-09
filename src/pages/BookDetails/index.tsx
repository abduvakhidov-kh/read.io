import { truncateText } from "@/shared/lib";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BookDetails = () => {
  const { state } = useLocation();

  const [downloadStatus, setDownloadStatus] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const downloadBook = async () => {
      try {
        const response = await axios.get<string>(`http://localhost:4000/download?title=${state.volumeInfo.title}${state.volumeInfo.author == undefined ? "" : "&author=" + state.volumeInfo.author}`);

        setDownloadStatus(response.data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    if (state.volumeInfo.author || state.volumeInfo.title) {
      downloadBook();
    }
  }, []);

  console.log(downloadStatus, error);
  
  return (
    <div className='flex justify-center w-full pt-10'>
      <div className="flex justify-center gap-4 px-4 mx-auto">
        <div className="">
          {state.volumeInfo.imageLinks?.thumbnail ? (
            <img
              src={state.volumeInfo.imageLinks.thumbnail}
              alt={state.volumeInfo.title}
              className="object-contain rounded-lg shadow-md min-w-[200px]"
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
          <Link to={"/books/" + state.volumeInfo.title}className="text-white hover:text-white w-fit" >
            <button className="px-4 py-2 bg-blue-500 rounded w-fit hover:bg-blue-600">Read</button>
          </Link>
          <div className="leading-6 line-clamp-[10]">{state.volumeInfo.description}</div>
          <div>{state.volumeInfo.categories ? state.volumeInfo.categories.map((category: string) => <div className="p-2 text-sm text-white bg-blue-500 rounded-lg cursor-pointer w-fit">{category}</div> ) : 'All'}</div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails