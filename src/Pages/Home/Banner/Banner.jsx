const Banner = () => {
  return (
    <>
      <div className="bg-[#07332F]">
        <div className="h-[calc(100vh-128px)] text-white max-w-custom mx-auto flex flex-col lg:flex-row items-center">
          <div className="flex-1">
            <h1 className="md:text-[75px] text-[30px] text-center tracking-[-3px] md:text-left font-semibold text-[#F3F3F3]">
              Your Best Medical Help Center
            </h1>
            <p className="text-[#F3F3F3] text-center md:text-left py-4">
              Lorem Ipsum is simply dummy text they are printing typesetting has
              been the industry`s standard.
            </p>
            <div className="text-[#F3F3F3] text-center md:text-left">
              <button className="bg-[#F7A582] py-3 px-8 font-bold font-source mt-7 rounded-lg">
                All Service
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="../../../../public/img/banner-image.png"
              alt="Banner Image"
            />
            <img
              className="-ml-8 -mt-12"
              src="../../../../public/img/capsul.png"
              alt="SVG"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
