import React from 'react';
import {IHomeDto} from "../types/home.types";

interface IHomePageProps {
  homes: IHomeDto[]
}

const HomesPage = ({homes}: IHomePageProps) => {
  return (
      <div>
        <table className="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Price</th>
            <th scope="col">PropertyType</th>
            <th scope="col">Image</th>
            <th scope="col">Bedrooms</th>
            <th scope="col">Bathrooms</th>
          </tr>
          </thead>
          <tbody className="table-group-divider">
          {homes.map((home, index) => (
              <tr key={home.id}>
                <th scope="row">{index + 1}</th>
                <td>{home.id}</td>
                <td>{home.address}</td>
                <td>{home.city}</td>
                <td>{home.price}</td>
                <td>{home.propertyType}</td>
                <td>{home.image}</td>
                <td>{home.numberOfBedrooms}</td>
                <td>{home.numberOfBathrooms}</td>
              </tr>
          ))}


          </tbody>
        </table>
      </div>
  );
};

export default HomesPage;