import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="h-24  flex justify-between bg-black  items-center md:px-36">
        <div className="text-white text-xl hover:text-green hover:scale-125 font-bold">
          Dhruvraj Solanki
        </div>
        <div className="flex justify-evenly flex-col md:hidden">
          <div className="w-10 rounded-md h-1 bg-white "></div>
          <div className="w-10 rounded-md h-1 my-2 bg-white "></div>
          <div className="w-10 rounded-md h-1 bg-white "></div>
        </div>
        <div className="hidden md:flex ">
          <ul className="flex justify-around gap-5 items-center">
            <li className="text-white hover:text-green text-md font-bold">
              <Link href="solana%3Ahttps%3A%2F%2Fapi.candypay.fun%2Fapi%2Fv1%2Fmint%3Fid%3DFqBSOLj5W-dZjR9pitSbs%3Flabel%3DAlgo%2BTest%26message%3Dtesting%2Bout%2Balgo%2Bfor%2Bdonut%2Bchart">About me</Link>
            </li>
            <li className="text-white hover:text-green text-md font-bold">
              <Link href="/">Projects</Link>
            </li>
            <li className="text-white hover:text-green text-md font-bold">
              <Link href="solana%3Ahttps%3A%2F%2Fapi.candypay.fun%2Fapi%2Fv1%2Fmint%3Fid%3DFqBSOLj5W-dZjR9pitSbs%3Flabel%3DAlgo%2BTest%26message%3Dtesting%2Bout%2Balgo%2Bfor%2Bdonut%2Bchart">Work</Link>
            </li>
            <li className="text-white border-2 hover:border-green p-1 rounded-md hover:text-green text-md  font-bold">
              <Link href="/">Contact me</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
