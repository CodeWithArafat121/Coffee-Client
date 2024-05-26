import logo from "../../../src/assets/images/more/logo1.png";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-[url(../../../src/assets/images/more/15.jpg)] flex justify-center items-center py-3 gap-4">
        <img className="w-18 h-20" src={logo} alt="" />
        <h1 className="text-5xl text-white font-normal">Espresso Emporium</h1>
      </div>
    </nav>
  );
};

export default Navbar;
