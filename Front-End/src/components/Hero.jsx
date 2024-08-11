import Slider from "./Slider";

function Hero() {
  return (
    <div className=" flex gap-4 flex-col md:flex-row">
      <div className="flex container md:w-[50%] flex-col gap-4 justify-center item center">
        <div className="text-header mt-10 text-4xl lg:text-5xl font-bold text-center">
          Hotel With Roogtop Pools Near me
        </div>
        <div className="text-center text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          impedit facere error porro molestiae aliquid perferendis cumque
          aspernatur, vel, consectetur, officiis ipsum quas fugiat autem
          temporibus. Ex fugiat eius velit enim impedit magnam rem sed facere
          id, ad libero laudantium esse dignissimos tempore expedita.
        </div>
      </div>
      <div className="w-full md:w-[50%]  flex justify-center items-start mt-9 mx-auto ">
        <Slider />
      </div>
    </div>
  );
}

export default Hero;
