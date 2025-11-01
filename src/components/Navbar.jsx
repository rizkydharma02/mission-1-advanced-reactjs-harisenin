import { dataIcons } from '../assets/icons/dataIcons';
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-full">
      <div className="flex flex-start items-center gap-[12px] md:gap-[80px]">
        <div className="flex items-center gap-[4px]">
          <img src={dataIcons.logoMovieIcon} className="w-auto h-[20px] md:h-[44px] object-cover" alt="Logo Movie" />
          <img src={dataIcons.logoChillIcon} className="hidden md:block w-auto md:h-[44px] object-cover" alt="Logo Chill" />
        </div>

        <ul className="flex items-center gap-[12px] md:gap-[80px]">
          <li className="font-lato font-medium text-[10px] text-light-white md:text-[18px]">Series</li>
          <li className="font-lato font-medium text-[10px] text-light-white md:text-[18px]">Film</li>
          <li className="font-lato font-medium text-[10px] text-light-white md:text-[18px]">Daftar Saya</li>
        </ul>
      </div>

      <div className="flex items-center md:gap-[8px] gap[4px]">
        <img src={dataIcons.avatar} className="w-[20px] md:w-[40px] h-[20px] md:h-[40px] object-cover" alt="Logo Avatar" />
        <img src={dataIcons.arrowDownIcon} className="w-[16px] md:w-[28px] md:h-[28px] object-cover h[16px]" alt="Arrow Down Image" />
      </div>
    </nav>
  );
};

export default Navbar;
