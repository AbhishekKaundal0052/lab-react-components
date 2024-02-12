import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import GalleryHeader from './components/GalleryHeader';
import GalleryBody from './components/GalleryBody';

function App(props) {
  return (
    <div>
    <GalleryHeader/>
    <GalleryBody Data = {props.Data}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
