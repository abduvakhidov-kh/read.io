interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

function SearchInput({ searchTerm, setSearchTerm, handleSearch }: SearchInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex items-center p-2 mx-auto rounded shadow-sm '>
      <input
        className='flex-1 p-2'
        type="text"
        placeholder="Введите запрос"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className='px-4 py-2 ml-2 transition-all bg-blue-700 rounded cursor-pointer hover:bg-blue-500' onClick={handleSearch}>Поиск</button>
    </div>
  );
}

export default SearchInput;
