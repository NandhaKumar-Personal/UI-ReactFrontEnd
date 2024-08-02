import { Button } from "./Button";

export const SideBar = () => {
  const isActive = true;
  const NotActive = false;

  return (
    <div>
      <div className="w-64 bg-[#ffffff] h-screen  text-white border-r-2 border-[#555555] outline-2 ">
        <div className="p-2 mt-3">
          <img
            className="w-full h-12  object-obtain"
            src="https://gwcdata.ai/assets/Logo-ZfpyJ_J5.svg"
          />
        </div>
        <nav className="mt-5">
          <div className="p-3 mt-3 text-start">
            <h1 className="text-gray-400 uppercase text-start ">Menu</h1>
            <Button
              name="overview_key"
              className="material-symbols-outlined"
              buttonname="Overview"
              style={`my-4 mx-1 font-semibold flex items-center w-full py-2.5 px-4 rounded transition duration-200 ${
                isActive ? "bg-[#e0e0e0] text-[#000000]" : "hover:bg-[#f3f3f3]"
              } text-[#8f8e8e] hover:text-[#000000]`}
            />
            <Button
              name="person_apron"
              className="material-symbols-outlined"
              buttonname="Person"
              style={`my-4 mx-1 font-semibold flex items-center w-full py-2.5 px-4 rounded transition duration-200 ${
                NotActive ? "bg-[#e0e0e0] text-[#000000]" : "hover:bg-[#f3f3f3]"
              } text-[#8f8e8e] hover:text-[#000000]`}
            />
            <Button
              name="analytics"
              className="material-symbols-outlined"
              buttonname="Analytics"
              style={`my-4 mx-1 font-semibold flex items-center w-full py-2.5 px-4 rounded transition duration-200 ${
                NotActive ? "bg-[#e0e0e0] text-[#000000]" : "hover:bg-[#f3f3f3]"
              } text-[#8f8e8e] hover:text-[#000000]`}
            />
            <Button
              name="real_estate_agent"
              className="material-symbols-outlined"
              buttonname="Properties"
              style={`my-4 mx-1 font-semibold flex items-center w-full py-2.5 px-4 rounded transition duration-200 ${
                NotActive ? "bg-[#e0e0e0] text-[#000000]" : "hover:bg-[#f3f3f3]"
              } text-[#8f8e8e] hover:text-[#000000]`}
            />
            <hr className="mt-9" />
            <h1 className="text-gray-400 uppercase mt-7 text-start">Others</h1>

            <Button
              name="settings"
              className="material-symbols-outlined"
              buttonname="Settings"
              style={`my-4 mx-1 font-semibold flex items-center w-full py-2.5 px-4 rounded transition duration-200 ${
                NotActive ? "bg-[#e0e0e0] text-[#000000]" : "hover:bg-[#f3f3f3]"
              } text-[#8f8e8e] hover:text-[#000000]`}
            />
            <Button
              name="flag"
              className="material-symbols-outlined"
              buttonname="Help Center"
              style={`my-4 mx-1 font-semibold flex items-center w-full py-2.5 px-4 rounded transition duration-200 ${
                NotActive ? "bg-[#e0e0e0] text-[#000000]" : "hover:bg-[#f3f3f3]"
              } text-[#8f8e8e] hover:text-[#000000]`}
            />
            <Button
              name="flag"
              className="material-symbols-outlined"
              buttonname="Report"
              style={`my-4 mx-1 font-semibold flex items-center w-full py-2.5 px-4 rounded transition duration-200 ${
                NotActive ? "bg-[#e0e0e0] text-[#000000]" : "hover:bg-[#f3f3f3]"
              } text-[#8f8e8e] hover:text-[#000000]`}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};
