
import React from 'react';

const Api = () => {
  return (
    <div>
      <h2>How to use My Api Component</h2>
      <p>
        This component demonstrates fetching data from an API endpoint.
        To use this component:
      </p>
       
      <p>API Endpoints:</p>

      <div>
        <p>Fetch all countries:</p>
        <a href="https://atlas-hub-three.vercel.app/api/countries" target="_blank" rel="noopener noreferrer">
          https://atlas-hub-chinu.vercel.app/api/countries
        </a>
      </div>

      <div>
        <p>Fetch single country by name:</p>
        <a href="https://atlas-hub-three.vercel.app/api/countries/search/india" target="_blank" rel="noopener noreferrer">
          https://atlas-hub-chinu.vercel.app/api/countries/search/india
        </a>
      </div>

      <div>
        <p>Fetch country by ID:</p>
        <a href="https://atlas-hub-three.vercel.app/countries/1" target="_blank" rel="noopener noreferrer">
          https://atlas-hub-chinu.vercel.app/api/countries/1
        </a>
      </div>
    </div>
  );
};

export default Api;

// import React from 'react';
// import axios from 'axios';

// const Api = () => {
//   // Example usage: Fetching data from '/api/countries' endpoint
  
//   return (
//     <div>
//       <h2>How to use My Api Component</h2>
//       <p>
//         This component demonstrates fetching data from an API endpoint.
//         To use this component:
//       </p>
       
//       <p>API Endpoint:</p>
//       <div>
//       <p>fetech all country</p>
//       <a href="http://localhost:3000/api/countries" target="_blank" rel="noopener noreferrer">
//         http://localhost:3000/api/countries
//       </a></div>

// <div>
// <p>fetch single countryuntry</p>

// <a href="http://localhost:3000/api/countries/search/india" target="_blank" rel="noopener noreferrer">
// http://localhost:3000/api/countries/search/countryname
//       </a>

// </div>
// <div>
//   <p>fetch by id</p>
//   <a href="http://localhost:3000/api/countries/1" target="_blank" rel="noopener noreferrer">
//   http://localhost:3000/api/countries/id
//       </a>
// </div>
//     </div>
//   );
// };
// export default Api;