import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
const url = "https://swapi.dev/api/people";
const CharInfo = () => {
  const [person, setPerson] = useState({});

  const { uid } = useParams();

  useEffect(() => {
    async function getPerson() {
      let response = await axios.get(`${url}/${uid}`);
      setPerson(response.data);

      console.log(person);
    }

    getPerson();
  }, []);

  return (
    <div>
      {person ? (
        <div>
          <div>Name: {person.name}</div>
          <div>Gender: {person.gender}</div>
          <div>Hair color: {person.hair_color}</div>
          <div>Height: {person.height}</div>
          <div>Mass: {person.mass}</div>
          <div>Skin color: {person.skin_color}</div>
        </div>
      ) : (
        "loading"
      )}{" "}
    </div>
  );
};

export default CharInfo;
