import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Vandetail() {
  const param = useParams();
  console.log(param);

  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Van details go here</div>;
}

export default Vandetail;
