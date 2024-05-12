import React, { useState } from 'react'
import { v4 } from 'uuid';
import { imgDB, courseDB } from '../firebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection, getDocs } from 'firebase/firestore';
const Testing = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [participants,setParticipants]=useState("");
  const [imgtoUpload, setImg] = useState("");

  const uploadImage = async () => {
    try {
      const imgs = ref(imgDB, `Imgs/${v4()}`);
      const data = await uploadBytes(imgs, imgtoUpload)
      const url = await getDownloadURL(data.ref)
      console.log("image uploaded successfully", url);
      return url;
    } catch (error) {
      console.log(error);
    }

  }

  const saveData = async () => {
    try {
      if (!imgtoUpload) {
        alert("Please select an image to upload");
        return;
      }
      const imgUrl = await uploadImage();

      if (imgUrl) {
        const valRef = collection(courseDB, "Courses");
        await addDoc(valRef,  {category, title, participants,imgUrl });
        alert("Data Saved successfully");
      } else {
        alert("Error uploading image");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const getData=async()=>{
    try {
      const valRef = collection(courseDB, "Courses");
      const dataDb= await getDocs(valRef);
      // const dataArray = dataDb.docs.map((doc) => doc.data());
      const dataArray = dataDb.docs.map((doc) => ({...doc.data(),id:doc.id}));
      console.log(dataArray);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div >
      <h1>Testing Firebase</h1>
      <hr />
      <input placeholder='Category' style={{ border: "2px solid red" }} onChange={(e) => setCategory(e.target.value)} />
      <br />
      <input placeholder='Title' style={{ border: "2px solid red" }} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <input placeholder='Participants' type='number' style={{ border: "2px solid red" }} onChange={(e) => setParticipants(e.target.value)} />
      <br />
      <br />
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button onClick={saveData}>Save</button>
      <button onClick={getData}>Show Data</button>
    </div>
  )
}

export default Testing