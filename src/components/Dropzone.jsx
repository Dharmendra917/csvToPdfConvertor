import { Dropzone, FileMosaic } from "@files-ui/react";
import axios from "../utils/axios.js";
import "../App.css";
import React, { useRef } from "react";

const Dropzonee = (props) => {
  const { setcounter, counter } = props;
  const button = useRef(null);
  const [isdisabled, setisdisabled] = React.useState(true);
  const [files, setFiles] = React.useState([]);

  const updateFiles = (elm) => {
    const incommingFiles = elm;
    // console.log(incommingFiles[0].file);
    setFiles(incommingFiles);
    conditons(incommingFiles);
  };

  const conditons = (incommingFiles) => {
    console.log(incommingFiles);
    if (
      incommingFiles.length === 1 &&
      incommingFiles[0].file.type === "text/csv"
    ) {
      setisdisabled(false);
      button.current.style.backgroundColor = isdisabled ? "#6da5c0" : "#2997ce";
      button.current.style.cursor = isdisabled ? "default" : "pointer";
    } else {
      setisdisabled(true);
    }
  };

  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const file = files[0].file;
      const formdata = new FormData();
      formdata.append("csvFile", file);
      await axios.post("/create", formdata);
      setFiles([]);
      setcounter(counter + 1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="dropzone">
        <Dropzone
          className="inner"
          onChange={updateFiles}
          value={files}
          accept=".csv"
          maxFiles={1}
          label="Drag'n drop files here or click to browse"
        >
          {files.map((file) => (
            <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
          ))}
        </Dropzone>
        <button disabled={isdisabled} ref={button} onClick={submitHandler}>
          Upload File
        </button>
      </div>
    </>
  );
};

export default Dropzonee;
