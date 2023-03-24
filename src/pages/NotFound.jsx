import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, officiis
        voluptate explicabo veniam labore soluta tenetur ut debitis doloribus,
        neque non aperiam illo ad velit iste deleniti ipsa, quos tempora.
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
