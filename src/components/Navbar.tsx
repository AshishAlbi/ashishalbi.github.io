import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <div className="bg-white dark:bg-gray-800 w-full h-15 flex items-center sticky">
      <p className="dark:text-white font-dancing text-4xl font-semibold !ml-2 w-14 flex-none hover:cursor-pointer">Ashish.</p>
      <div className="w-64 flex-1 dark:text-white">
        <ul className="flex items-center justify-center gap-4 mr-4 text-lg">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Projects</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
        </ul>
      </div>
      <div className="w-14 flex-none bg-amber-200 !mr-2">
        <ThemeToggle/>

      </div>
    </div>
  );
}

export default Navbar