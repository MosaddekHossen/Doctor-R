const Banner = () => {
  return (
    <>
      <div className="bg-[#07332F]">
        <div className="lg:h-[calc(100vh-160px)] h-[calc(100vh-128px)] text-white max-w-custom md:px-14 xl:px-0 mx-auto flex flex-col lg:flex-row items-center">
          <div className="flex-1">
            <div className="relative px-7 md:px-0">
              <h1 className="lg:text-[75px]  md:text-5xl text-[30px] lg:leading-[90px] text-center lg:tracking-[-3px] lg:text-left font-semibold text-[#F3F3F3]">
                Your Best Medical Help Center
              </h1>
              <div className="hidden lg:block">
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
            <p className="text-[#F3F3F3] md:text-base px-7 md:px-0 text-sm text-center lg:text-left py-4">
              Lorem Ipsum is simply dummy text they are printing typesetting has
              been the industry`s standard.
            </p>
            <div className="text-[#F3F3F3] text-center lg:text-left">
              <button className="bg-[#F7A582] py-3 px-8 font-bold font-source rounded-lg">
                All Service
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-[#F7A58233] hidden lg:block  opacity-90 absolute left-1/3 -top-8 w-[350px] h-[350px] rounded-full"></div>
            <img
              className="h-full w-full opacity-100 relative object-cover md:px-40 pt-2 px-8 lg:p-9"
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
