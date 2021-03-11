
import { useEffect, useState } from 'react';
import './assets/main.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {

  let [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=20634360-1ecb5d61018956e7910f92b5d&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      data.hits.forEach(i => i.showBig = true)
      setImages(data.hits)
      setLoading(false)
    })
  }, [term])
let growImage = (id) => {
  let findIndex = images.findIndex(i => i.id === id)
  images = images.map(i => {
    i.showBig = true
    return i
  })
  images[findIndex].showBig = false
  setImages(images)
}
let shrinkImage = (e) => {

  if(e.target.nodeName === "DIV") {
    setImages(images.map(i => {
    i.showBig = true
    return i
  }))
  }
  
}


  return (
   <div className="container mx-auto"   onClick={(e) => shrinkImage(e)}>
     <ImageSearch searchText={text => setTerm(text)}></ImageSearch>
     {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto mt-20">...not find</h1>}
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-20">...Loading</h1> : <div className="grid md:grid-cols-3 gap-4 grid-cols-2">
          {images.map(i => (
            <ImageCard key={i.id} growImage={growImage}  image={i}>

            </ImageCard>
          ))}
      </div>}
   </div>
  );
}

export default App;
