"use client"
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from 'next/image';

export default function ImagePicker({label,name}){

   const ImageRef =  useRef();
   const [imageState,setImageState] = useState();

    function handlePickClick(){
        ImageRef.current.click();
    }

    function handleImageChange(event){
       const file =  event.target.files[0];
       if(!file)
       {
          setImageState(null);
       }
       const fileReader = new FileReader();
       fileReader.onload = () =>{
         setImageState(fileReader.result);
       }
       fileReader.readAsDataURL(file);
    }

    return(
        <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
            {!imageState && <p>No Image Selected</p>}
            {imageState && <Image
               src={imageState}
               alt="The image selected by the user."
               fill
            />}
            </div>
        <input
         className={classes.input}
         type = "file"
         id={name}
         accept="image/png,image/jpeg"
         name={name}
         ref={ImageRef}
         onChange={handleImageChange}
         required
        />
        </div>
        <button className={classes.button} type="button" onClick={()=>handlePickClick()}>Pick an Image</button>
    </div>
    )
}