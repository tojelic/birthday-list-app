import React from 'react';

const Person = ({ name, image, age }) => {
  return (
    <article className="person">
      <img src={image} alt={`image ${name}`} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default Person;
