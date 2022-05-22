import DataTable from "./components/FetchVolcanoData";
import NavBarHeader from "./components/NavBarHeader";

import "./styles.css";

export default function VolcanoData() {
  return (
    <div>
      <NavBarHeader />
      <div className="volcano-data-grid">
        <h1>Volcano Data</h1>
          <div className="country-select">
            <DataTable />
          </div>
      </div>
    </div>
  );
}
