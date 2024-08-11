import Blogs from "../components/Blogs";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="container bg-white   text-gray-800 mx-auto  mt-8  p-8 ">
      <Hero />

      <Blogs />
    </div>
  );
}

export default Home;
