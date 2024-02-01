function Navbar() {
  return (
    <div className="flex justify-between items-center top-16 relative pl-24">
      <a href="#" className="ml-">
        <img src="/src/assets/shared/logo.svg" alt="" />
      </a>
      <div className="absolute left-96 w-[30rem] h-[0.0625rem] bg-white bg-opacity-15 z-10"></div>
      <div className="relative backdrop-blur-lg bg-white bg-opacity-[0.04] backdrop pt-12 pr-64 pb-12 pl-44">
        <ul className="flex items-center">
          <li className="pr-5">
            <a href="#" className="font-barlow text-white text-[16px] tracking-widest px-8">
              00 HOME
            </a>
          </li>
          <li className="pr-5">
            <a href="#" className="font-barlow text-white text-[16px] tracking-widest px-8">
              01 DESTINATION
            </a>
          </li>
          <li className="pr-5">
            <a href="#" className="font-barlow text-white text-[16px] tracking-widest px-8">
              02 CREW
            </a>
          </li>
          <li className="pr-5">
            <a href="#" className="font-barlow text-white text-[16px] tracking-widest px-8">
              03 TECHNOLOGY
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
