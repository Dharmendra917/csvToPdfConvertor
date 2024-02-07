import "./App.css";
import { useState } from "react";
import Show from "./components/Show.jsx";
import Nav from "./components/Nav.jsx";
import Dropzone from "./components/Dropzone.jsx";
import PDFGenerator from "./components/PDFGenerator.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [studentInformation, setstudentInformation] = useState([]);
  const [counter, setcounter] = useState(0);
  return (
    <div>
      <Nav />
      <Dropzone setcounter={setcounter} counter={counter} />
      <PDFGenerator studentInformation={studentInformation} />
      <Show
        setstudentInformation={setstudentInformation}
        counter={counter}
      />{" "}
      {/*read data */}
      <Footer />
    </div>
  );
}

export default App;
