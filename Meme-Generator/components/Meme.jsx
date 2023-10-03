import memesData from "../memeData";
import { useState } from "react";

export default function Meme() {

  
  const [meme, setMeme] = useState( 
    {
      topText: "The top text",
      bottomText: "The bottom text",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    }
  )

  const [allMemeImages, setAllMemeImages] = useState(memesData)

function getMemeImage() {
  
  const memesArray = allMemeImages.data.memes;
  const rand = (Math.floor(Math.random() * memesArray.length));
  const newUrl = memesArray[rand].url;
  setMeme( oldMeme => {
    return {
      ...oldMeme,
      randomImage: newUrl
    }
  })
  

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
      <img src={meme.randomImage} alt="a random meme image" className="memeImage"/>
    </div>
  );
}
