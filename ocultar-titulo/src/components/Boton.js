import "../style/Boton.css"
import { useState } from "react";

function Boton() {
    const [show, setShow] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setShow((show) => !show)}> Show / Hide</button>
      {show ? <h1>Welcome to React Challenges</h1> : null}
    </div>
  );
}
 
export default Boton;