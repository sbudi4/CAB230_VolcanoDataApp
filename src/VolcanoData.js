import FetchVolcanoData from "./components/API/FetchVolcanoData";
import DataTable from "./components/DataTable";
import NavBarHeader from "./components/NavBarHeader";
import "./styles.css";

export default function VolcanoData() {
  return (
    <div>
      <NavBarHeader />
      <div className="container">
        <h1>Volcano Data</h1>
      </div>
      <FetchVolcanoData />
      <DataTable />

    </div>
  );
}
