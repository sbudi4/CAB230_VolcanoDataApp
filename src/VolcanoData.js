import DataTable from "./components/FetchVolcanoData";
import NavBarHeader from "./components/NavBarHeader";

import "./styles.css";

export default function VolcanoData() {
  return (
    <div>
      <NavBarHeader />
      <div className="volcano-data-grid">
        <h1>Volcano Data</h1>
        <p>Select a country from the dropdown menu to view volcanoes in proximity.
           Select a range in the "Within Range" dropdown menu to limit your search to nearby volcanoes.
           Logging in with a registered account will allow you to view population data.</p>
          <div className="country-select">
            <DataTable />
          </div>
      </div>
    </div>
  );
}
