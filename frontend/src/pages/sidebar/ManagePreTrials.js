import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './UserComponents/Layout';
import { useNavigate } from 'react-router-dom';

const ManagePreTrial = () => {
  const [cases, setCases] = useState([]);
  const navigate = useNavigate();
  const roomID = 123//will be changed later on
  useEffect(() => {
    axios.get('/api/user/GetPTA')
      .then((response) => {
        if (response.data.status === 'Success') {
          setCases(response.data.trialList);
        } else {
          console.log(response)
        }
      })
      .catch((error) => {
        console.error('Error fetching cases:', error);
      });
  }, []);

  const handleViewClick = (caseId) => {
    navigate(`/room/${roomID}`)

    // Send a GET request to fetch details of the selected case
    // axios.get(`/api/user/GetTrialDetails/${caseId}`)
    //   .then((response) => {
    //     // Handle the response as needed (e.g., display case details in a modal)
    //     if (response.data.status === 'Success') {
    //       console.log(response.data.caseDetails);
    //       // You can display the case details in a modal or another component here
    //     } else {
    //       console.log(response);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching case details:', error);
    //   });
  };

  return (
    <Layout>
      <div>
        <h1>Manage Pre-Trials</h1>
        <table>
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Individual Filed Against</th>
              <th>Actions</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((caseItem) => (
              <tr key={caseItem._id}>
                <td>{caseItem.caseReferenceID}</td>
                <td>{caseItem.againstIndividual}</td>
                <td>
                  <button onClick={() => handleViewClick(caseItem._id)}>
                    View
                  </button>
                </td>
                <p>1234 </p>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ManagePreTrial;
