import Button from '../components/Button';
import { dataIcons } from '../assets/icons/dataIcons';
import { Link } from 'react-router';
const Login = () => {
  return (
    <div className="flex justify-center items-center bg-[url('./assets/img/login.jpg')] bg-cover bg-no-repeat bg-center w-full min-h-screen">
      <section className="flex flex-col justify-center items-center gap-[37px] bg-dark-primary opacity-80 p-[40px] rounded-[16px] w-[529px] h-[663px] font-lato">
        <img src={dataIcons.logo} alt="Movie Logo" className="bg-cover w-[94px] md:w-[163px] h-[24px] md:h-[44px]" />

        <div className="flex flex-col justify-center items-center gap-[8px]">
          <h3 className="font-regular font-normal font-bold text-[32px] text-light-white">Masuk</h3>
          <p className="text-[16px] text-light-white">Selamat datang kembali!</p>
        </div>
        <form action="#" className="flex flex-col gap-[37px] w-full">
          <div className="flex flex-col justify-center items-start gap-[6px]">
            <label htmlFor="username" className="font-medium text-[18px] text-light-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Masukkan username"
              className="bg-transparent px-[20px] py-[14px] border border-[#E7E3FC] rounded-[24px] focus:outline-none focus:ring-2 focus:ring-primary-3 w-full h-[50px] text-light-white placeholder:text-light-secondary"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-[6px]">
            <label htmlFor="password" className="font-medium text-[18px] text-light-white">
              Kata Sandi
            </label>
            <div className="relative flex flex-row justify-between items-center w-full">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Masukkan kata sandi"
                className="bg-transparent px-[20px] py-[14px] border border-[#E7E3FC] rounded-[24px] focus:outline-none focus:ring-2 focus:ring-primary-3 w-full h-[50px] text-light-white placeholder:text-light-secondary"
              />
              <img src={dataIcons.eyeOffIcon} alt="eye icon" className="right-[20px] absolute w-[20px] h-[20px]" />
            </div>
            <div className="flex justify-between items-center mt-[12px] w-full">
              <p className="font-medium text-[16px] text-light-primary">
                Belum punya akun?{' '}
                <Link to="/register" className="font-medium text-[16px] text-light-white hover:underline pointer">
                  Daftar
                </Link>
              </p>
              <a href="#" target="_blank" className="font-medium text-[16px] text-light-white hover:underline pointer">
                Lupa kata sandi?
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[8px]">
            <Button label="Masuk" color="text-white" bg="bg-[#3D4142]" />
            <p className="font-medium text-[14px] text-dark-disabled">atau</p>
            <Button label="Masuk dengan Google" color="text-white" bg="bg-transparent" icon={dataIcons.googleIcon} border="border-[#E7E3FC]" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
