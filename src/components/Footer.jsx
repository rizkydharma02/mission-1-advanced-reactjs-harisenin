import { useState } from 'react';
import { dataFooter } from '../constant/dataFooter';
import { dataIcons } from './../assets/icons/dataIcons';

const Footer = () => {
  const [activeFooterId, setActiveFooterId] = useState(null);
  const handleToggleFooter = (id) => {
    setActiveFooterId((prevId) => (prevId === id ? null : id));
  };

  return (
    <footer className="bg-dark-primary">
      {/* Footer Desktop */}
      <section className="hidden md:flex justify-between items-start gap-[20px] px-[80px] py-[60px] border-[#E7E3FC] border-t w-full h-[284px] overflow-hidden">
        <div className="flex flex-col justify-center items-start gap-[26px] shrink-0">
          <img src={dataIcons.logo} className="w-[163px] h-[44px] object-contain" alt="Chill Logo" />
          <p className="font-lato font-normal text-[16px] text-light-secondary leading-[2px]">&copy; 2025 Chill. All Rights Reserved</p>
        </div>

        <div className="flex flex-wrap justify-evenly items-center w-full">
          {dataFooter.map((item) => (
            <div key={item.id} className="flex flex-col justify-start items-start gap-[16px]">
              <p className="font-lato font-bold text-[16px] text-light-white">{item.title}</p>

              <ul className="gap-x-[70px] gap-y-[13px] grid grid-rows-4 grid-flow-col h-[126px] overflow-hidden">
                {item.subTitle.map((subtitle, index) => (
                  <li key={index} className="font-lato font-medium text-[16px] text-light-secondary">
                    <a href={`${item.subTitle[index]}`} className="hover:underline">
                      {subtitle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Mobile */}
      <section className="md:hidden flex flex-col justify-center items-start gap-[40px] p-[20px] border-[#E7E3FC] border-t w-full h-auto">
        <div className="flex flex-col justify-center items-start gap-[16px]">
          <img src={dataIcons.logo} className="w-[84px] h-[24px]" alt="Chill Logo" />
          <p className="font-lato font-normal text-[12px] text-light-secondary">&copy; 2025 Chill. All Rights Reserved</p>
        </div>

        {/* Mobile Footer Accordion */}
        <div className="flex flex-col justify-center items-center gap-[16px] w-full h-auto">
          {dataFooter.map((item) => (
            <div key={item.id} className="w-full">
              <button onClick={() => handleToggleFooter(item.id)} className="flex justify-between items-center bg-transparent w-full cursor-pointer">
                <p className="font-lato font-medium text-[16px] text-light-white text-left">{item.title}</p>
                <img src={dataIcons.arrowRightFooter} className={`w-[24px] h-[24px] object-cover transition-transform duration-200 ${activeFooterId === item.id ? 'rotate-90' : ''}`} alt="Arrow Right Icon" />
              </button>

              {/* Active Accordion */}
              {activeFooterId === item.id && (
                <ul className="flex flex-col gap-[10px] mt-3 pl-2 w-full">
                  {item.subTitle.map((subtitle, index) => (
                    <li key={index} className="font-lato font-medium text-[14px] text-light-secondary">
                      <a href={`${item.subTitle[index]}`} className="hover:underline">
                        {subtitle}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
