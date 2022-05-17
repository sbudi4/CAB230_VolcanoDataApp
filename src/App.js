// This file contains the home and landing screen of the app.

// Importing dependencies
import NavBarHeader from "./components/NavBarHeader";
import "./styles.css";
import hero_image from "./components/images/hero_image.jpg";

export default function App() {
  return (
    <div>
      <NavBarHeader />
      <h1>Welcome!</h1>
      <body>
        This is an app that displays information about volcanoes around the
        world. To get started, either login with a registered account or simply
        click 'Volcano List' at the top of the page. Logging in with a
        registered account will allow you to view more data.
      </body>
      <img src={hero_image} alt="Kilauea volcano of Hawaii erupting" />
    </div>
  );
}
