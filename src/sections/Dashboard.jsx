import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CardWatchList from '../components/CardWatchList';
import CardMovieList from '../components/CardMovieList';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <>
      <header className="bg-dark-primary px-[20px] md:px-[80px] py-[6px] md:py-[25px] w-full h-[56px] md:h-[94px]">
        <Navbar />
      </header>
      <main className="bg-dark-primary">
        <Hero />
        <CardWatchList />
        <CardMovieList title="Top Rating Film dan Series Hari ini" display="none" />
        <CardMovieList title="Film Trending" display="none" />
        <CardMovieList title="Rilis Baru" display="block" />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
