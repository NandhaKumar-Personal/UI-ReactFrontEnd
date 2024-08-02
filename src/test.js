import "./index.css";
import { Input } from "./components/input";
import { SideBar } from "./components/sidebar";
import { Button } from "./components/Button";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/saga-blue/theme.css"; // or other theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; // optional
import "primeflex/primeflex.css";
import { Property } from "./components/property";
import CreateDoughnutData from "./components/doughnet";
import { Card } from "./components/card";
import ProfileTemplate from "./components/Profile";
function Test() {
  return (
    <div className="flex h-screen bg-[#ffffff]">
      {/* Sidebar */}
      <SideBar />

      <div className="flex-1 p-10 overflow-auto">
        <div className="">
          <div className="flex justify-between mb-3">
            <Input
              id="SearchButton"
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
            <ProfileTemplate />
          </div>
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

        <div className="w-full">
          <div className="flex gap-5">
            <div className="flex gap-5 ">
              <div className="w-full">
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
                  Icon="supervised_user_circle"
                />
              </div>
              <div className="w-full">
                <Card
                  title="Outcome"
                  value="$234.200"
                  percentage="+2.3%"
                  reportLink="#"
                  Icon="check_circle"
                />
                <Card
                  title="Properties"
                  value="$1.200"
                  percentage="+0.5%"
                  reportLink="#"
                  Icon="real_estate_agent"
                />
              </div>
            </div>
            <div className="h-full p-3 mt-3 border rounded-2xl border-grey-50">
              <Calendar value="02-08-2024" inline showWeek />
            </div>
          </div>
          <div className="flex mt-3 gap-2">
            <div className="w-3/4  border border-gray-200 p-3 rounded-[20px]">
              <div className="flex justify-between p-2">
                <span className="text-xl">Property List</span>
                <span>
                  <span className="flex gap-2">
                    <Button
                      style="border border-grey-300 px-4 py-2 flex items-center rounded-[10px]"
                      buttonname="Prime"
                      name="location_on"
                    />
                    <Button
                      name="location_on"
                      style="border border-grey-300 px-4 py-2 flex items-center text-white bg-black rounded-[10px]"
                      buttonname="See All"
                    />
                  </span>
                </span>
              </div>

              <div className="flex overflow-y-auto  space-x-4 scrollbar-hide ">
                <div className="w-full  bg-white  rounded-lg shadow-lg ">
                  <div>
                    <div>
                      <Property src="https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-6-1760-1000.jpg" />{" "}
                    </div>
                  </div>
                </div>
                <div className="w-full  bg-white border-2 rounded-lg shadow-lg ">
                  <div>
                    <div>
                      <Property src="https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-6-1760-1000.jpg" />{" "}
                    </div>
                  </div>
                </div>
                <div className="w-full  bg-white border-2 rounded-lg shadow-lg ">
                  <div>
                    <div>
                      <Property src="https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-6-1760-1000.jpg" />{" "}
                    </div>
                  </div>
                </div>
                <div className="w-full bg-white border-2 rounded-lg shadow-lg ">
                  <div>
                    <div>
                      <Property src="https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-6-1760-1000.jpg" />{" "}
                    </div>
                  </div>
                </div>
                <div className="w-full bg-white border-2 rounded-lg shadow-lg ">
                  <div>
                    <div>
                      <Property src="https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-6-1760-1000.jpg" />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-[20px] border border-grey-200 w-1/4">
              <div className="flex  ">
                <span className="mr-2">
                  <h1 className="text-lg ">Property Channel</h1>
                </span>
                <span className="">
                  <Button
                    style={`px-2 py-1 text-grey-400  rounded-xl border border-grey-700 flex items-center px-[60px] `}
                    buttonname="All Time"
                    name="keyboard_arrow_down"
                  />
                </span>
              </div>
              <CreateDoughnutData />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
