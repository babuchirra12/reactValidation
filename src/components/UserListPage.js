import React, { useEffect, useState } from "react";
import Banner from "../common/imgComponent";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
function UserListPage() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="flex-container">
      <div className="box">
        <Banner />
      </div>
      <div className="box">
        <h3 className="text-center">User list Page</h3>
        <div style={{padding:'20px'}}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>s no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Dob</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {userData
                  ? Object.values(userData).map((item, i) => {
                      return <td key={i}>{item}</td>;
                    })
                  : null}
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="text-center"><Link to="/CountryListpage">Go to CountryListpage</Link></div>
      </div>
      
    </div>
  );
}

export default UserListPage;
