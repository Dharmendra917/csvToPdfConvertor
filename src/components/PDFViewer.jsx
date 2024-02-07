import React, { forwardRef } from "react";
import "../App.css";

const PrintComponent = forwardRef(({ studentInformation }, ref) => {
  console.log(studentInformation);
  const value = 1;
  return (
    <>
      <div className="outer">
        <div className="PDFViewer">
          {studentInformation.length >= 1 ? (
            <div ref={ref} className="PDFFile">
              <h1>________________________________</h1>

              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Class</th>
                    <th>Address_city</th>
                    <th>Address_State</th>
                    <th>Address_Street</th>
                    <th>Address_Zipcode</th>
                    <th>Hobby1</th>
                    <th>Hobby2</th>
                  </tr>
                </thead>
                {studentInformation.map((obj, index) => (
                  <tbody key={obj._id}>
                    <tr>
                      <td>{index + value}</td>
                      <td>{obj.name}</td>
                      <td>{obj.age}</td>
                      <td>{obj.class}</td>
                      <td>{obj.address.address_city}</td>
                      <td>{obj.address.address_state}</td>
                      <td>{obj.address.address_street}</td>
                      <td>{obj.address.address_zipcode}</td>
                      <td>{obj.hobby.hobby1}</td>
                      <td>{obj.hobby.hobby2}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          ) : (
            (
              <img
                style={{ width: "2%" }}
                src="https://i.gifer.com/VZvw.gif"
                alt=""
              />
            ) || "Please Upload File"
          )}
        </div>
      </div>
    </>
  );
});

export default PrintComponent;
