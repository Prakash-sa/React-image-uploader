import React, {useEffect, useState} from 'react';
import Dropzone, {useDropzone} from 'react-dropzone';
import ShowImage from './ShowImage';
import DropBox from './Dropbox';

function Dropzone_test(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div key={file.name}>
      <div >
        <img
          src={file.preview}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <></>

    // <div className="App">
    //   <DropBox onDrop={onDrop} />
    //   <ShowImage images={images} />
    // </div>
    // <section className="container">
    //   <div {...getRootProps({className: 'dropzone'})}>
    //     <input {...getInputProps()} />
    //     <p>Drag 'n' drop some files here, or click to select files</p>
    //   </div>
    //   <aside >
    //     {thumbs}
    //   </aside>
    // </section>
  );
}

export default Dropzone_test