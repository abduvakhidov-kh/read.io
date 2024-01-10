import { truncateText } from '../lib';
import { Book } from '../types';


function BookCard(props: Book) {
  return (
    <div className="h-full transition-transform bg-white border-2 border-gray-300 rounded-lg shadow-md cursor-pointer hover:scale-102 hover:shadow-lg group hover:-translate-y-2">
      <div className="flex items-center justify-center h-60">
        {props.volumeInfo.imageLinks?.thumbnail ? (
          <img
            src={props.volumeInfo.imageLinks.thumbnail}
            alt={props.volumeInfo.title}
            className="object-contain max-w-full max-h-full transition-all rounded-lg shadow-md group-hover:scale-110"
            />
        ) : (
          <div className="relative flex items-center justify-center w-1/2 overflow-hidden text-sm text-center text-gray-600 bg-gray-200 rounded-lg shadow-md h-4/5">
            <div className='line-clamp-2'>{truncateText(props.volumeInfo.title, 40)}</div>
          </div>
        )}
      </div>
      <div className="p-4 text-start">
        <p className="mb-2 text-sm text-gray-600 underline">
          {props.volumeInfo.categories ? truncateText(props.volumeInfo.categories.join(', '), 40) : 'All'}
        </p>
        <h3 className="mb-2 text-lg font-semibold text-gray-900 capitalize text-start group-hover:text-blue-500">
          {truncateText(props.volumeInfo.title, 40)}
        </h3>
        {props.volumeInfo.authors && (
          <p className="overflow-hidden text-sm text-gray-700 whitespace-nowrap overflow-ellipsis">
            Авторы: {truncateText(props.volumeInfo.authors.join(', '), 40)}
          </p>
        )}
      </div>
    </div>
  );
}

export default BookCard;
