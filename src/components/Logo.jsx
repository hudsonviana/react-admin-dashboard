import { HiMenu } from 'react-icons/hi';
const Logo = () => {
  return (
    <div className="flex items-center justify-between h-10">
      <a href="#" className="flex items-center">
        <span className="hidden lg:block font-semibold text-lg text-blue-900">
          AdminDashboard
        </span>
      </a>
      <HiMenu className="mx-2.5 cursor-pointer" />
    </div>
  );
};

export default Logo;
