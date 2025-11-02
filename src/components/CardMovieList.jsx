import { useEffect, useState } from 'react';
import { dataIcons } from '../assets/icons/dataIcons';
import { dataFilms } from '../constant/dataFilms';
import { fetchFilm } from '../store/slices/filmSlice';
import { useDispatch, useSelector } from 'react-redux';

const CardMovieList = (props) => {
  const dispatch = useDispatch();
  const { items: currentFilm, isLoading, isError } = useSelector((state) => state.films);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverId, setHoverId] = useState(null);

  useEffect(() => {
    dispatch(fetchFilm());
  }, [dispatch]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < dataFilms.length - 3 ? prev + 1 : prev));
  };

  const { title, display } = props;

  const mergedFilms = dataFilms.map((filmItem, index) => {
    const apiFilms = currentFilm[index] || {};
    return {
      ...apiFilms,
      id: filmItem.id,
      img: filmItem.img,
    };
  });

  if (isLoading) {
    return (
      <section className="px-[20px] md:px-[80px] py-[20px] md:py-[40px] w-full">
        <h2 className="mb-[20px] md:mb-[32px] font-lato font-bold text-[20px] text-light-white md:text-[32px]">{title}</h2>
        <div className="flex justify-center items-center h-[365px]">
          <div className="border-light-white border-b-2 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="px-[20px] md:px-[80px] py-[20px] md:py-[40px] w-full">
        <h2 className="mb-[20px] md:mb-[32px] font-lato font-bold text-[20px] text-light-white md:text-[32px]">{title}</h2>
        <div className="flex justify-center items-center h-[365px]">
          <p className="text-red-500">Error: {isError}</p>
        </div>
      </section>
    );
  }

  if (currentFilm.length === 0) {
    return (
      <section className="px-[20px] md:px-[80px] py-[20px] md:py-[40px] w-full">
        <h2 className="mb-[20px] md:mb-[32px] font-lato font-bold text-[20px] text-light-white md:text-[32px]">{title}</h2>
        <div className="flex justify-center items-center h-[365px]">
          <p className="text-light-secondary">Tidak ada film tersedia</p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-[20px] md:px-[80px] py-[20px] md:py-[40px] w-full">
      <h2 className="mb-[20px] md:mb-[32px] font-lato font-bold text-[20px] text-light-white md:text-[32px]">{title}</h2>

      <div className="relative">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="hidden md:block top-1/2 left-[-10px] z-10 absolute bg-[#2F3334] hover:bg-gray-700 disabled:opacity-50 rounded-full w-12 h-12 transition-all -translate-x-4 -translate-y-1/2 disabled:cursor-not-allowed"
          aria-label="Previous"
        >
          <img src={dataIcons.arrowLeftIcon} className="hidden md:block bg-contain md:w-[44px] md:h-[44px]" alt="Arrow Icon" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= dataFilms.length - 3}
          className="hidden md:block top-1/2 right-[-20px] z-10 absolute bg-[#2F3334] hover:bg-gray-700 disabled:opacity-50 rounded-full w-12 h-12 transition-all -translate-y-1/2 translate-x-4 disabled:cursor-not-allowed"
          aria-label="Next"
        >
          <img src={dataIcons.arrowRightIcon} className="hidden md:block bg-cover md:w-[44px] md:h-[44px] overflow-auto" alt="Arrow Icon" />
        </button>
        <div className="overflow-hidden">
          <div className="flex gap-[16px] md:gap-[28px] transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * (234 + 28)}px)` }}>
            {mergedFilms.map((item) => (
              <div key={item.id} className="group relative flex-shrink-0 rounded-[8px] w-auto h-auto overflow-hidden cursor-pointer" onMouseEnter={() => setHoverId(item.id)} onMouseLeave={() => setHoverId(null)}>
                <img src={item.img} className="w-[95px] md:w-[234px] h-[145px] md:h-[365px] object-cover group-hover:scale-105 transition-transform duration-300" alt={item.title} />

                {item.onGoing === true && (
                  <div
                    className="top-[8px] md:top-[16px] left-[8px] md:left-[16px] absolute flex justify-between items-start gap-[10px] bg-[#0F1E93] px-[5px] md:px-[10px] py-[2px] md:py-[4px] rounded-[12px]"
                    style={{ display: `${display}` }}
                  >
                    <h3 className="font-lato font-bold text-[6px] text-light-white md:text-[14px] truncate">Episode Baru</h3>
                  </div>
                )}

                {/* hover overlay */}
                {hoverId === item.id && (
                  <div className="hidden z-20 absolute inset-0 md:flex flex-col justify-end items-start bg-gradient-to-t bg-from-black/80 from-black to-transparent p-[26px]">
                    <div className="flex justify-between items-center gap-[16px] mb-[12px] w-full">
                      <div className="flex items-center gap-[8px]">
                        <button className="flex justify-center items-center bg-white hover:bg-gray-200 rounded-full w-[40px] h-[40px]">
                          <img src={dataIcons.play} className="w-[20px] h-[20px]" alt="Play Icon" />
                        </button>
                        <button className="flex justify-center items-center bg-dark-primary hover:bg-gray-600 rounded-full w-[40px] h-[40px]">
                          <img src={dataIcons.checklist} className="w-[20px] h-[20px]" alt="Add to Watchlist Icon" />
                        </button>
                      </div>
                      <button className="flex justify-center items-center bg-dark-primary hover:bg-gray-600 rounded-full w-[40px] h-[40px]">
                        <img src={dataIcons.arrowDownIcon} className="w-[20px] h-[20px]" alt="Arrow Down Icon" />
                      </button>
                    </div>
                    <div className="flex items-center gap-[16px] mb-[8px]">
                      <span className="bg-[#E1F0FF] px-[10px] py-[2px] rounded-[20px]">
                        <h3 className="font-lato font-bold text-[#C1C2C4] text-[12px]">18+</h3>
                      </span>
                      <p className="font-lato font-bold text-[18px] text-light-white">{item.subTitle}</p>
                    </div>
                    <div key={item.id} className="flex justify-start items-center w-full">
                      <h4 className="font-lato font-bold text-[#C1C2C4] text-[14px]">{Array.isArray(item.genre) ? item.genre.join(' • ') : item.genre}</h4>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardMovieList;
