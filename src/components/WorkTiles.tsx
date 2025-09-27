interface WorkTilesProps {
  companyName: string;
  role: string;
  timePeriod: string;
  link: string;
  logo: string;
}
function WorkTiles({
  companyName,
  role,
  timePeriod,
  link,
  logo,
}: WorkTilesProps) {
  return (
    <div className="flex-1 flex items-start border-b border-dashed border-gray-500 !p-5">
      <div className="flex items-center gap-6 flex-1">
        <img src={logo} className="w-20 h-20 rounded-full object-cover border-1 border-solid dark:border-white" />
        <div className="relative !pl-[10px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-500">
          <div className="text-xl font-semibold">{companyName}</div>
          <div>{role}</div>
          <div>{link}</div>
        </div>
      </div>
      <span className="text-gray-400">{timePeriod}</span>
    </div>
  );
}

export default WorkTiles;
