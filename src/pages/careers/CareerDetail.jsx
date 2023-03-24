import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CareerDetail = () => {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          tempore eius dolor perspiciatis placeat, asperiores necessitatibus nam
          magnam? Perspiciatis deserunt consectetur eos facere exercitationem a
          aliquid saepe ipsa nulla modi.
        </p>
      </div>
    </div>
  );
};

export default CareerDetail;

// loader function

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch('http://localhost:4000/careers/' + id);

  if (!res.ok) {
    throw Error('Could not find that career');
  }

  return res.json();
};
