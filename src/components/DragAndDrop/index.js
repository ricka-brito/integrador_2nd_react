import React from 'react';
import "./draganddrop.css";

export default function FilesDragAndDrop({fileState, className}) {
    const onUpload = (files) => {
        file.current.files = files
        // console.log(files)
        setDragging(false)
        fileState(file.current.files)
      };
    const drop = React.useRef(null);
    const file = React.useRef(null);

    const [dragging, setDragging] = React.useState(false);

    React.useEffect(() => {
        drop.current.addEventListener('dragover', handleDragOver);
        drop.current.addEventListener('drop', handleDrop);
        drop.current.addEventListener('dragenter', handleDragEnter);
        drop.current.addEventListener('dragleave', handleDragLeave);
        
      }, []);
      
      const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
      };
      
      const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
      
        const files = [...e.dataTransfer.files];

        // check if the provided count prop is less than uploaded count of files
        if (1 && 1 < files.length) {
            console.log(`Only ${1} file${1 !== 1 ? 's' : ''} can be uploaded at a time`);
            return;
        }
        let formats = ["png", "jpg", "jpeg"]
        // check if some uploaded file is not in one of the allowed formats
        if (formats && files.some((file) => !formats.some((format) => file.name.toLowerCase().endsWith(format.toLowerCase())))) {
            console.log(`Only following file formats are acceptable: ${formats.join(', ')}`);
            return;
        }

        if (files && files.length) {
            onUpload(e.dataTransfer.files);
        }
      };

      const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        setDragging(true);
      };

      const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        setDragging(false);
      };
    return (
        <div ref={drop} style={{backgroundColor: dragging ? "#333": "unset"}} className={`FilesDragAndDrop__area ${className}`}>
        Drop your photo here
            <div  style={{marginBottom: "10%", backgroundColor: dragging ? "#333": "unset"}} className="separator">
                <div  style={{backgroundColor: "#666"}} className="linea"/>
                <p  style={{fontSize: "1rem"}} >OR</p>
                <div style={{backgroundColor: "#666"}} className="linea"/>
            </div>
            <input onChange={() => fileState(file.current.files)} ref={file} style={{backgroundColor: dragging ? "#333": "unset"}} type='file'/>            
        </div>
    );
}


