import Button from "../shared/Button";

const Navbar = () => {
  return (
    <nav className="bg-primary h-56">
      <div className="flex flex-wrap flex-row justify-between px-32 pt-20 max-md:flex-col max-md:items-center max-md:justify-between max-md:pt-6 max-md:px-14">
        <h1 className="text-4xl font-semibold text-white max-md:mb-8">
          F<span className="text-red-500">oo</span>dy Z
          <span className="text-red-500">o</span>ne
        </h1>
        <input
          type="text"
          placeholder="Search Food..."
          className="outline-none border-2 border-red-500 rounded-md bg-primary text-white h-10 w-72 px-4"
        />
      </div>
      <div className="flex flex-wrap flex-row justify-center items-center pt-5">
        <div>
          <Button text="All" />
          <Button text="Breakfast" />
          <Button text="Lunch" />
          <Button text="Dinner" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
