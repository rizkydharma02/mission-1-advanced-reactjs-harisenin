import { dataIcons } from '../assets/icons/dataIcons';

const Hero = () => {
  return (
    <section className="relative flex items-end bg-[url(./assets/img/hero-1.png)] bg-cover bg-no-repeat bg-center px-[22px] md:px-[80px] pb-[60px] md:pb-[100px] w-full h-[225px] md:h-[587px]">
      {/* Gradient overlay untuk readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <div className="z-10 relative w-full max-w-screen">
        {/* Title */}
        <h1 className="mb-[12px] md:mb-[16px] font-lato font-bold text-[32px] text-white md:text-[48px]">Duty After School</h1>

        {/* Description */}
        <p className="mb-[20px] md:mb-[28px] max-w-[700px] h-[40px] md:h-auto overflow-hidden md:overflow-visible font-lato font-medium text-[12px] text-white md:text-[18px] text-ellipsis leading-relaxed">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
        </p>

        {/* Buttons Row */}
        <div className="flex justify-between items-center">
          {/* Left buttons group */}
          <div className="flex items-center gap-[10px] md:gap-[16px]">
            {/* Mulai button */}
            <button className="flex justify-center items-center bg-[#0F1E93] hover:bg-[#0d1a7a] px-[12px] md:px-[26px] py-[4px] md:py-[10px] rounded-[48px] font-lato font-semibold text-[12px] text-white md:text-[16px] transition-colors">
              Mulai
            </button>

            {/* Selengkapnya button */}
            <button className="flex justify-center items-center gap-[6px] md:gap-[8px] bg-[#22282A] hover:bg-[#22282A] px-[12] md:px-[26px] py-[4px] md:py-[10px] rounded-[48px] font-lato font-bold text-[12px] text-white md:text-[16px] transition-colors">
              <img src={dataIcons.informationIcon} className="w-[14px] md:w-[20px] h-[14px] md:h-[20px] object-cover" alt="Information Icon" />
              Selengkapnya
            </button>

            {/* 18+ badge */}
            <span className="flex justify-center items-center bg-transparent border border-[#C1C2C4] rounded-[24px] w-[30px] md:w-[52px] h-[25px] md:h-[45px] font-lato font-bold text-[12px] text-light-secondary text-white md:text-[18px]">
              18+
            </span>
          </div>

          {/* Sound button */}

          <img className="bg-transparent border-[#C1C2C4] rounded-[19px] w-[24px] md:w-[44px] h-[24px] md:h-[44px] object-cover" src={dataIcons.soundIcon} alt="Sound Icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
