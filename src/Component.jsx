import DataComponent from "./DataComponent";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const Component = () => {
  const {id} = useParams();
  useEffect(() => {
    // Fetch data from the localhost:3000/getAddress?id={params.id}
    fetch(`http://localhost:3000/getAddress?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setConfirmedAddress(data.address);
      });
  }, [id]);
  const [confrimedAddress, setConfirmedAddress] = useState("");

  if (confrimedAddress == "") {
    return (
        <>
        Fetching Address...
    </>
    );
  }



  // Render your component using the data returned by the query
  return <DataComponent confrimedAddress={confrimedAddress} />;
};

export default Component;