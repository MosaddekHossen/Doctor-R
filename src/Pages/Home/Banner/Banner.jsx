const Banner = () => {
  return (
    <>
      <div className="bg-[#07332F]">
        <div className="h-[calc(100vh-128px)] text-white max-w-custom mx-auto flex flex-col lg:flex-row items-center">
          <div className="">
            <h1>Your Best Medical Help Center</h1>
            <p>
              Lorem Ipsum is simply dummy text they are printing typesetting has
              been the industry`s standard.
            </p>
            <button>All Service</button>
          </div>
          <div className="">
            <img
              src="../../../../public/img/banner-image.png"
              alt="Banner Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
