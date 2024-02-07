import React from "react";
import ReactToPrint from "react-to-print";
import PrintComponent from "./PDFViewer";
import "../App.css";

const PDFGenerator = ({ studentInformation }) => {
  // console.log(studentInformation);
  const printComponentRef = React.createRef();

  return (
    <div>
      <PrintComponent
        ref={printComponentRef}
        studentInformation={studentInformation}
      />
      <div
        style={{
          width: "80%",
          display: "grid",
          placeItems: "end",
        }}
      >
        <ReactToPrint
          trigger={() => (
            <button className="button">
              {" "}
              {studentInformation.length >= 1 ? (
                "Download PDF"
              ) : (
                <img
                  style={{ width: "60px", height: "50px", objectFit: "cover" }}
                  src="https://i.gifer.com/XOsX.gif"
                  alt="nothing"
                ></img>
              )}
            </button>
          )}
          content={() => printComponentRef.current}
        />
      </div>
    </div>
  );
};

export default PDFGenerator;
