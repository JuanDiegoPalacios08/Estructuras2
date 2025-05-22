import { graphData } from "../data/graphData";
import { useState } from "react";

export default function CityPeopleList() {
  const [selectedCity, setSelectedCity] = useState("Cali");

  const peopleInCity = graphData.nodes.filter(
    (node) => node.city === selectedCity
  );

  return (
    <div>
      <h3>Personas en {selectedCity}</h3>
      <ul>
        {peopleInCity.map((person) => (
          <li key={person.id}>
            {person.id} (Edad: {person.age})
          </li>
        ))}
      </ul>
      <select onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="Cali">Cali</option>
        <option value="Bogotá">Bogotá</option>
      </select>
    </div>
  );
}
