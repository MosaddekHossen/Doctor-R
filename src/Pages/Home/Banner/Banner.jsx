const Banner = () => {
  return (
    <>
      <div className="bg-[#07332F]">
        <div className="h-[calc(100vh-160px)] text-white max-w-custom mx-auto flex flex-col lg:flex-row items-center">
          <div className="flex-1">
            <div className="relative">
              <h1 className="md:text-[75px] text-[30px] leading-[90px] text-center tracking-[-3px] md:text-left font-semibold text-[#F3F3F3]">
                Your Best Medical Help Center
              </h1>
              <div className="">
                <img
                  className="right-[-155px] -top-[65px] absolute"
                  src="../../../../public/img/up.png"
                  alt=""
                />
                <img
                  className="right-[-90px] top-0 absolute"
                  src="../../../../public/img/down.png"
                  alt=""
                />
              </div>
            </div>
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
          <div className="flex-1 relative">
            <div className="bg-[#F7A58233] opacity-90 absolute left-1/3 -top-8 w-[350px] h-[350px] rounded-full"></div>
            <img
              className="h-full w-full opacity-100 relative object-cover lg:p-9"
              src="../../../../public/img/banner-image.png"
              alt="Banner Image"
            />
            <div className="-ml-8 bottom-12 absolute w-36 h-16">
              <img
                className="object-cover"
                src="../../../../public/img/capsul.png"
                alt="SVG"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
