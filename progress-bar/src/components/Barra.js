import React, { useState } from "react";
import "../style/Barra.css";
import ProgreBar from "../components/ProgreBar";

function Barra() {
  const [val, setVal] = useState(10);
  const setValuer = (e) => setVal(Number(e.target.value));

  return (
    <>
      <div>
        <h1>Barra de progreso</h1>
        <ProgreBar width={val} />
        <form>
          <label for="html"> Porcentaje:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );
}

export default Barra;
