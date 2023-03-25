import React, { FC } from "react";
import { useGetPetById } from "../hooks/useGetPetById";

const Pet: FC = () => {
  const { data, error, isLoading } = useGetPetById(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <>
      <p>Id: {data?.id}</p>
      <p>Name: {data?.name}</p>
      <p>Tags:</p>
      <ul>
        {data?.tags &&
          Object.values(data.tags).map((tag) => (
            <li key={tag.id}>{tag.name}</li>
          ))}
      </ul>
      <p>Photo URLs:</p>
      <ul>
        {data?.photoUrls &&
          Object.values(data.photoUrls).map((url, index) => (
            <li key={index}>{url}</li>
          ))}
      </ul>
    </>
  );
};

export default Pet;
