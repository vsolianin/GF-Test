
import { useState } from "react";

const App = () => {

  const [formData, setFormData] = useState('');
  const [frase, setFrase] = useState('');

  const handleChange = (e) => {
    console.log(e);
    const value  = e.target;
    setFormData(value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nombre:  ${formData.value}`);

    setFrase(gestFormComparasion(formData.value));
  };
  
    const gestFormComparasion = (n) => {

      if (n < -1000 || n > 1000) {
        console.log('Entrez un nombre entre 1000 et 1000');
        const text = 'Entrez un nombre entre 1000 et 1000'
        return text;
      }

      if (n % 3 !== 0 && n % 5 !== 0) {
        console.log();
        const text = `${n} ne peut pas être complètement divisé`;
        return text;
      } 

      if (n % 3 === 0 && n % 5 === 0) {
        console.log('GestForm');
        const text = 'GestForm';
        return text;
      } 

      if (n % 3 === 0) {
        console.log('Geste');
        const text = 'Geste';
        return text;
      }

      if (n % 5 === 0) {
        console.log('Forme');
        const text = 'Forme'
        return text;
      } 
    };

  return (
    <form className="form" onSubmit={handleSubmit}>
      
      <label className="form-label" htmlFor="number"> Number: </label><br />
      <input className="form-input" type="text" id="number" name="number" value={formData.number} onChange={handleChange} />
    
      <button className="btn" type="submit">Submit</button>
      <p>{frase}</p>
    </form>

  );
};
export default App;
