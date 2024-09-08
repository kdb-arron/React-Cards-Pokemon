import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

export function useFlip() {
  const [isFlipped, setIsFlipped] = useState(true);

  const flip = () => {
    setIsFlipped(isFlipped => !isFlipped);
  };

  return [isFlipped, flip];
}

export function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  const addData = async (endpoint = "") => {
    try{    const response = await axios.get(`${baseUrl}${endpoint}`);
    setData(data => [...data, { ...response.data, id: uuid() }]);}catch(e){ console.error(e); }

  };

  return [data, addData];
}
