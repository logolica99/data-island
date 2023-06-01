import React from "react";

export default function ContactUs() {
  return (
    <div
      className=" bg-cover bg-no-repeat"
      style={{
        background: `url("/assets/julian-hochgesang-psGV5KhidlY-unsplash 1.png")`,
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(89.98deg, rgba(27, 27, 27, 0.76) 25.32%, #0F587B 145.13%)",
        }}
      >
        <div className="m-auto w-[90%] py-10 md:w-[80%]">
          <h3 className="text-xl font-normal text-white md:text-4xl">
            CONTACT US
          </h3>

          <h3 className="my-3 text-2xl font-extrabold text-white md:my-4 md:text-5xl">
            NEED SOMETHING DONE ?<br /> WE ARE HERE
            <br /> TO HELP !
          </h3>
          <div className="rounded-xl bg-white px-6 py-4">
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <input className="w-full rounded-xl border border-[#7CBCDB] p-3 outline-none" />
              <input className="w-full rounded-xl border border-[#7CBCDB] p-3 outline-none" />
            </div>
            <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row">
              <input className="w-full rounded-xl border border-[#7CBCDB] p-3 outline-none" />
              <input className="w-full rounded-xl border border-[#7CBCDB] p-3 outline-none" />
            </div>
            <textarea className="mt-4 h-44 w-full resize-none rounded-xl border border-[#7CBCDB] p-4 outline-none" />
            <div className="mt-4 flex justify-end">
              <button className="rounded-xl bg-primaryBlue px-16 py-2 text-xl font-semibold text-white transition duration-150 ease-in-out hover:opacity-80">
                SUBMIT{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
