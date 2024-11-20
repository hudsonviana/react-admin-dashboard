import { HiOutlineSearch } from 'react-icons/hi';

const Searchbar = () => {
  return (
    <div className="min-w-60">
      <form action="#" className="relative flex items-center w-full">
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-full pl-8 pr-4 py-1 border rounded text-neutral-500 focus:outline-none"
        />
        <button
          type="button"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 outline-none"
        >
          <HiOutlineSearch className="text-neutral-400" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
