import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const About = () => {
  const [user, setUser] = useState('mario');

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <h2>About</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum modi
        optio minus obcaecati? Natus dolor provident maxime blanditiis
        excepturi, eius officia maiores magnam temporibus illo incidunt facere
        quisquam nemo sit!
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </>
  );
};

export default About;
