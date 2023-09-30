import memeData from "../../memeData";
import { useState } from "react";

export default function Meme() {

  const [memeImage, setMemeImage] = useState("");

function getMemeImage() {
  
  const memesArray = memeData.data.memes;
  const rand = (Math.floor(Math.random() * memesArray.length));
  const newUrl = memesArray[rand].url;
  setMemeImage(newUrl) 
  

  console.log(memesArray[rand].url)
}


  return (
    <div className="meme">
      <input
        type="text"
        className="text-box"
        id="box1"
        name="box1"
        placeholder="Top text"
      />
      <input
        type="text"
        className="text-box"
        id="box2"
        name="box2"
        placeholder="Bottom text"
      />
      <button onClick={getMemeImage}  className="button">Get a New meme image <span id="meme-icon">🔥</span></button>
      <img src={memeImage} alt="a random meme image" />
    </div>
  );
}
