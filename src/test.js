import "./index.css";
import { Input } from "./components/input";
import { SideBar } from "./components/sidebar";
// import house from "./Screenshot 2024-08-02 133810.png";
import { Button } from "./components/Button";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/saga-blue/theme.css"; // or other theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; // optional
import "primeflex/primeflex.css";
import { Property } from "./components/property";
function Test() {
  function Card({ title, value, percentage, reportLink, Icon }) {
    return (
      <div className="p-4 px-[300px] bg-white border border-gray-300 rounded-lg shadow-md mt-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="mr-2 text-2xl material-symbols-outlined">
              {Icon}
            </span>
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          <span className="text-xl material-symbols-outlined">more_horiz</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-sm text-gray-500">
              {percentage} vs last month
            </div>
          </div>
          <div className="w-48"></div>
        </div>
        <div className="flex items-center justify-between p-2 mt-1 bg-gray-50 rounded-xl">
          <span>View Report</span>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-[#ffffff]">
      {/* Sidebar */}
      <SideBar />

      <div className="flex-1 p-10">
        <div className="flex items-start mb-6">
          <Input
            id="SearchButton"
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
        </div>
        <hr />
        <div className="flex justify-between my-4">
          <div>
            <h1 className="text-2xl font-bold text-start">Dashboard</h1>
            <p className="text-xs text-start">
              Lunar / <span className="font-semibold">Overview</span>{" "}
            </p>
          </div>
          <div className="flex gap-3 text-center">
            <Button
              style={`p-3 text-grey-400  rounded-xl border border-grey-700 flex items-center px-[60px] `}
              buttonname="Filter By"
              name="filter_alt"
            />
            <Button
              style={`p-3 text-white bg-black rounded-xl border border-grey-700 flex items-center px-[60px] `}
              buttonname="Export"
              name="ios_share"
            />
          </div>
        </div>

        <div className="w-full ">
          <div className="flex gap-5">
            <div className="flex gap-5 ">
              <div>
                <Card
                  title="Income"
                  value="$119,234.01"
                  percentage="+3.1%"
                  reportLink="#"
                  Icon="paid"
                />
                <Card
                  title="Visitor"
                  value="$524.039"
                  percentage="-1.1%"
                  reportLink="#"
                />
              </div>
              <div className="">
                <Card
                  title="Outcome"
                  value="$234.200"
                  percentage="+2.3%"
                  reportLink="#"
                />
                <Card
                  title="Properties"
                  value="$1.200"
                  percentage="+0.5%"
                  reportLink="#"
                />
              </div>
            </div>
            <div className="h-full p-3 mt-3 border rounded-2xl border-grey-400">
              <Calendar value="02-08-2024" inline showWeek />
            </div>
          </div>
          <div className="flex">
            <div className="w-3/4 ">
              <div className="flex">
                <span className="text-md">property List</span>
                <span>
                  <span className="flex">
                    <Button
                      style="border border-grey-300 px-4 py-2"
                      buttonname="Prime"
                      name="location_on"
                    />
                    <Button
                      style="border border-grey-300 px-4 py-2"
                      buttonname="See All"
                    />
                  </span>
                </span>
              </div>

              <div className="flex overflow-y-auto">
                <div className="w-auto bg-white border-2 rounded-lg shadow-lg ">
                  <div>
                    <div>
                      <Property src="https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-6-1760-1000.jpg" />{" "}
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 rounded-lg shadow-lg ">
                  <div>
                    <div>
                      <Property src="https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-6-1760-1000.jpg" />{" "}
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 rounded-lg shadow-lg ">
                  <div>
                    <div>
                      <Property src="https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-6-1760-1000.jpg" />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h1 className="text-xl">Property Channel</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
