const Button = ({ label, color, bg, icon, border }) => {
  return (
    <button type="button" className={` h-[50px] px-[20px] py-[14px] rounded-[24px] w-full pointer ${color} ${bg} flex justify-center items-center gap-[8px] border ${border}  hover:opacity-80`}>
      {icon && <img src={icon} alt="icon" className="w-[18px] h-[18px]" />}
      {label}
    </button>
  );
};

export default Button;
