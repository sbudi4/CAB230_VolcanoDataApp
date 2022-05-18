// This file contains the home and landing screen of the app.

// Importing dependencies
import NavBarHeader from "./components/NavBarHeader";
import "./styles.css";

export default function App() {
  return (
  <body>
    <div>
      <NavBarHeader />
      <h1>Welcome!</h1>
        This is an app that displays information about volcanoes around the
        world. To get started, either login with a registered account or simply
        click 'Volcano List' at the top of the page. Logging in with a
        registered account will allow you to view more data.
    </div>
    <img className="HeroImage"
      src={"https://th.bing.com/th/id/R.07702c8058fea26b9b22bda4b222f855?rik=I6K62TR%2fH1fy%2fg&riu=http%3a%2f%2fen.es-static.us%2fupl%2f2018%2f06%2fkilauea-volcano-fissure-8-6-12-2018-e1529229591565.jpg&ehk=Ofy35TcFFaVTrvFQ2%2fzSwAvFwEEu02v%2bfJzUb6%2f%2f3to%3d&risl=&pid=ImgRaw&r=0"} />
    </body>
  );
}
