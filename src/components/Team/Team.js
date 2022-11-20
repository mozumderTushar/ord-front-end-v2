import React from 'react';
import Navbar from '../Shared/NavBar/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';
import Table from 'react-bootstrap/Table';


const Team = () => {

  return (
    <div className='team'>
      <Navbar />
      <div className="team_section">
      <Table striped bordered hover className="text table_team">
      <thead>
        <tr>
          <th><h4>No</h4></th>
          <th><h4>Image</h4></th>
          <th><h4>Name</h4></th>
          <th><h4>Designation</h4></th>
        </tr>
      </thead> 
      <tbody>
        <tr>
          <td>1</td>
          <td ><img className="team_img" src="https://i.ibb.co/qmVL0ft/Whats-App-Image-2022-11-20-at-2-05-46-PM.jpg" alt="" /></td>
          <td><h5>Mohammad Delowar Hossain</h5></td>
          <td><h5>Managing Director</h5></td>
        </tr>
        <tr>
          <td>2</td>
          <td ><img className="team_img" src="https://i.ibb.co/qmVL0ft/Whats-App-Image-2022-11-20-at-2-05-46-PM.jpg" alt="" /></td>
          <td><h5>Mohammad Delowar Hossain</h5></td>
          <td><h5>Managing Director</h5></td>
        </tr>
        <tr>
          <td>3</td>
          {/* <td colSpan={2}>Larry the Bird</td> */}
          <td ><img className="team_img" src="https://i.ibb.co/qmVL0ft/Whats-App-Image-2022-11-20-at-2-05-46-PM.jpg" alt="" /></td>
          <td><h5>Mohammad Delowar Hossain</h5></td>
          <td><h5>Managing Director</h5></td>
        </tr>
      </tbody>
    </Table>
      </div>
      <Footer />
    </div>
  );
};

export default Team;