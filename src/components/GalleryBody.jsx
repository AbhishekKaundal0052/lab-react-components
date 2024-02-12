import imageData from "./Data";

function GalleryBody (props){
  return(
props.Data.map(image=>{
    return(
      <div key={image.id} className="column">
        <img src={image.img} alt=""></img>
      </div>
    )
  })
  )}
  export default GalleryBody