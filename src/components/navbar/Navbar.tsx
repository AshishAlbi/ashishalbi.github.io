function Navbar() {
  return (
    <div className="bg-amber-300 w-full h-15 flex items-center">
      <p className="font-dancing text-4xl font-semibold ml-2! w-14 flex-none hover:cursor-pointer">Ashish.</p>
      <div className="w-64 flex-1">
        <ul className="flex items-center justify-center gap-4 mr-4 text-lg">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Projects</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar