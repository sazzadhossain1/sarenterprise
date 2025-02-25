import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import OurServices from "./components/OurServices/OurServices";
import CompanyOverview from "./components/CompanyOverview/CompanyOverview";
import Mission from "./components/Mission/Mission";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Team from "./components/Team/Team";
import EarthFilling from "./components/EarthFilling/EarthFilling";
import SandFilling from "./components/SandFilling/SandFilling";
import SupplyOfConstruction from "./components/SupplyOfConstruction/SupplyOfConstruction";
import BuildingConstruction from "./components/BuildingConstruction/BuildingConstruction";
import InfrastructureDevelopment from "./components/InfrastructureDevelopment/InfrastructureDevelopment";
import DredgingServices from "./components/DredgingServices/DredgingServices";
import DrumTruck from "./components/DrumTruck/DrumTruck";
import RequestAQuote from "./components/RequestAQuote/RequestAQuote";
import Ongoing from "./components/Ongoing/Ongoing";
import ClientList from "./components/ClientList/ClientList";
import WorkOrders from "./components/WorkOrders/WorkOrders";
import CorporateSocial from "./components/CorporateSocial/CorporateSocial";
import Environmental from "./components/Environmental/Environmental";
import CommunityContributions from "./components/CommunityContributions/CommunityContributions";
import ImagesOfProjects from "./components/ImagesOfProjects/ImagesOfProjects";
import WorkInProgress from "./components/WorkInProgress/WorkInProgress";
import TeamAndEquipment from "./components/TeamAndEquipment/TeamAndEquipment";
import Projects from "./components/Projects/Projects";
import Gallery from "./components/Gallery/Gallery";
import BusinessDescription from "./components/BusinessDescription/BusinessDescription";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/ourServices",
          element: <OurServices></OurServices>,
        },
        {
          path: "/aboutUs",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "/companyOverview",
          element: <CompanyOverview></CompanyOverview>,
        },
        {
          path: "/mission",
          element: <Mission></Mission>,
        },
        {
          path: "/whyChooseUs",
          element: <WhyChooseUs></WhyChooseUs>,
        },
        {
          path: "/team",
          element: <Team></Team>,
        },
        {
          path: "/earthFilling",
          element: <EarthFilling></EarthFilling>,
        },
        {
          path: "/sandFilling",
          element: <SandFilling></SandFilling>,
        },
        {
          path: "/supplyOfConstruction",
          element: <SupplyOfConstruction></SupplyOfConstruction>,
        },
        {
          path: "/buildingConstruction",
          element: <BuildingConstruction></BuildingConstruction>,
        },
        {
          path: "/infrastructureDevelopment",
          element: <InfrastructureDevelopment></InfrastructureDevelopment>,
        },
        {
          path: "/dredgingServices",
          element: <DredgingServices></DredgingServices>,
        },
        {
          path: "/drumTruck",
          element: <DrumTruck></DrumTruck>,
        },
        {
          path: "/requestAQuote",
          element: <RequestAQuote></RequestAQuote>,
        },
        {
          path: "/ongoing",
          element: <Ongoing></Ongoing>,
        },
        {
          path: "/clientList",
          element: <ClientList></ClientList>,
        },
        {
          path: "/workOrders",
          element: <WorkOrders></WorkOrders>,
        },
        {
          path: "/corporateSocial",
          element: <CorporateSocial></CorporateSocial>,
        },
        {
          path: "/environmental",
          element: <Environmental></Environmental>,
        },
        {
          path: "/communityContributions",
          element: <CommunityContributions></CommunityContributions>,
        },
        {
          path: "/imagesOfProjects",
          element: <ImagesOfProjects></ImagesOfProjects>,
        },
        {
          path: "/workInProgress",
          element: <WorkInProgress></WorkInProgress>,
        },
        {
          path: "/teamAndEquipment",
          element: <TeamAndEquipment></TeamAndEquipment>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        {
          path: "/gallery",
          element: <Gallery></Gallery>,
        },
        {
          path: "/businessDescription",
          element: <BusinessDescription></BusinessDescription>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
