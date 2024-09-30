import React from "react";

function QuoteForm() {
  return (
    <div className="w-full h-full z-50 relative ">
      {/* <div  className="w-full h-full bg-gray-50 blur-2xl -z-20 absolute"></div> */}
      <div className="bg-[#091242] shadow-xl shadow-slate-100/80 sm:w-[800px] m-auto my-8 py-16 rounded-lg ">
        <h2 className="text-4xl font-bold	text-white	py-2 text-center m-auto">
          Get in Touch with us
        </h2>
        <p className="text-base	text-white	py-2 text-center m-auto px-5 w-3/4">
          Whether you need assistance with air, sea, or land freight, our
          dedicated team is here to ensure your goods reach their destination
          efficiently and safely.
        </p>
        {/*  <div className="flex content-center justify-evenly py-4 items-center">
          <div>
          <img src={Icon_call} alt="" className="m-auto" />
          <p className=" text-center">+91-11-48316700</p>
          </div>
          <div className="">
          <img src={Icon_sms} alt="" className="m-auto" />
          <p className=" text-center">cc@omtrans.in</p>
          </div>
          <div className="text-center">
          <img src={Icon_location} alt="" className="m-auto" />
          <p className=" text-center">
            159, Transport Center,Punjabi <br />
            Bagh, New Delhi-110035
          </p>
          </div>
        </div> */}

        <div className="flex sm:flex-row flex-col py-2 justify-center gap-10 bg-[#091242]  px-4 sm:px-0 ">
          <div className="sm:pt-2 pt-0">
            <div className="flex flex-col sm:flex-row gap-2 items-center text-white">
              <div>
                <label htmlFor="username"></label>
                <input
                  className=" sm:w-64 w-80 my-2 ring-1 focus:ring-1  placeholder:text-gray-400 placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent"
                  type="text"
                  name="username"
                  placeholder="Name"
                />
              </div>
              <div className="sm:pl-3">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="sm:w-64 w-80 my-2 ring-1 focus:ring-1 placeholder:text-gray-400  placeholder:px-2   placeholder:py-1 py-2 px-2 bg-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center text-white">
              <div>
                <label htmlFor="phoneno"></label>
                <input
                  className="sm:w-64 w-80 my-2 ring-1 focus:ring-1 placeholder:text-gray-400  placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent"
                  type="text"
                  name="phoneno"
                  placeholder="Phone No."
                />
              </div>
              <div className="sm:pl-3">
                <label htmlFor="city"></label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className=" sm:w-64 w-80 ring-1 focus:ring-1 placeholder:text-gray-400  placeholder:px-2 placeholder:py-1 py-2 px-2 my-2 bg-transparent"
                />
              </div>
            </div>
            <div className="py-2 text-center text-white ">
              <label htmlFor="city"></label>
              <textarea
                rows={3}
                type="text"
                name="message"
                placeholder="Your Message"
                className="sm:w-full w-80 my-2 ring-1 focus:ring-0  placeholder:text-gray-400  placeholder:px-2 placeholder:py-1 h-24 bg-transparent"
              />
            </div>

            <div className="m-auto text-center py-4">
              <button className=" bg-gray-200 py-3 px-5 hover:scale-110 duration-300 rounded-md text-black">
                Submit Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
