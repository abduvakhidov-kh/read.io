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
    <label className='flex items-center p-2 mx-auto border-2 border-gray-300 rounded shadow-sm outline-none'>
      <input
        className='flex-1 p-2 focus:outline-none focus:border-1'
        type="text"
        placeholder="Input book name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className='px-4 py-2 ml-2 text-white transition-all bg-blue-700 rounded cursor-pointer hover:bg-blue-500' onClick={handleSearch}>Search</button>
    </label>
  );
}

export default SearchInput;
