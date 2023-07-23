import './Imag.css';
function Imag() {
  return (
    <div className="Imagecake">
      <img src={require("./cake.jpg")} alt="Cake" />
    </div>
  )
}

export default Imag;