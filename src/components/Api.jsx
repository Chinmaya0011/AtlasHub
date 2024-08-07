import React from 'react';

// Determine the API URL based on the environment
const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://atlas-hub-omega.vercel.app/';

const Api = () => {
  return (
    <div>
      <h2>How to use My Api Component</h2>
      <p>
        This component demonstrates fetching data from an API endpoint.
        To use this component:
      </p>
       
      <p>API Endpoint:</p>
      <div>
        <p>Fetch all countries</p>
        <a href={`${apiUrl}/api/countries`} target="_blank" rel="noopener noreferrer">
          {`${apiUrl}/api/countries`}
        </a>
      </div>


      <div>
        <p>Fetch by ID</p>
        <a href={`${apiUrl}/api/countries/1`} target="_blank" rel="noopener noreferrer">
          {`${apiUrl}/api/countries/id`}
        </a>
      </div>
    </div>
  );
};

export default Api;
