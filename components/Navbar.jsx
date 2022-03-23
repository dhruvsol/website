const Navbar = () => {
  return (
    <>
      <div className="h-20  flex justify-between bg-[#101010] px-5 items-center">
        <div className="text-[#5EC074] text-2xl ">Dhruv</div>
        <div className="flex justify-evenly flex-col ">
          <div className="w-10 rounded-md h-1 bg-[#5EC074]"></div>
          <div className="w-10 rounded-md h-1 my-2 bg-[#5EC074] "></div>
          <div className="w-10 rounded-md h-1 bg-[#5EC074]"></div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
