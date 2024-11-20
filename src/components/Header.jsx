import Logo from './Logo';
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <header className="bg-white flex items-center w-screen fixed top-0 drop-shadow-md h-11 ps-5">
      <Logo />
      <Searchbar />
    </header>
  );
};

export default Header;
