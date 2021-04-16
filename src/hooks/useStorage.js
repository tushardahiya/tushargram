import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //creating a reference i.e with what
    // name the file needs to be present in firebase storage
    // whenever created using this ref
    const storageRef = projectStorage.ref(file.name);

    // this will take the file and put it in the reference
    // on will make it listen for changes in state and run the function in the second arguement

    //second arguement will give us any error that occurs
    // third arguement will give us the url of the image uploaded to the firestorage successfully
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
