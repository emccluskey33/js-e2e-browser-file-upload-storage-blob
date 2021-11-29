// ./src/App.tsx

import React from 'react';
// import Path from 'path';
// import uploadFileToBlob, { isStorageConfigured } from './azure-storage-blob';

// const storageConfigured = isStorageConfigured();

const App = (): JSX.Element => {
  // // all blobs in container
  // const [blobList, setBlobList] = useState<string[]>([]);

  // // current file to upload into container
  // const [fileSelected, setFileSelected] = useState(null);

  // // UI/form management
  // const [uploading, setUploading] = useState(false);
  // const [inputKey, setInputKey] = useState(Math.random().toString(36));

  // const onFileChange = (event: any) => {
  //   // capture file into state
  //   setFileSelected(event.target.files[0]);
  // };

  // const onFileUpload = async () => {
  //   // prepare UI
  //   setUploading(true);

  //   // *** UPLOAD TO AZURE STORAGE ***
  //   const blobsInContainer: string[] = await uploadFileToBlob(fileSelected);

  //   // prepare UI for results
  //   setBlobList(blobsInContainer);

  //   // reset state/form
  //   setFileSelected(null);
  //   setUploading(false);
  //   setInputKey(Math.random().toString(36));
  // };

  // // display form
  // const DisplayForm = () => (
  //   <div>
  //     <input type="file" onChange={onFileChange} key={inputKey || ''} />
  //     <button type="submit" onClick={onFileUpload}>
  //       Upload!
  //         </button>
  //   </div>
  // )

  // // display file name and image
  // const DisplayImagesFromContainer = () => (
  //   <div>
  //     <h2>Uploaded files:</h2>
  //     <ul>
  //       {blobList.map((item) => {
  //         return (
  //           <li key={item}>
  //             <div>
  //               {Path.basename(item)}
  //               <br />
  //               <img src={item} alt={item} height="200" />
  //             </div>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );

  return (
    <div>
      <h1>Welcome to My Cloud Coursework!</h1>
      <h2>This is a test</h2>
      <button><a href="staticwebpagefromworkingrepo">Upload Images</a></button>
    </div>
  );
};

export default App;

