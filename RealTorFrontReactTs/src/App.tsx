import React, {useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import HomesPage from "./pages/homes.page";
import {IHomeDto} from "./types/home.types";

const App = () => {
  const baseURL = process.env.REACT_APP_BASE_URL || ""

  const [homes, setHomes] = useState<IHomeDto[]>([]);

  interface GetHomesResponse {
    data: IHomeDto[];
  }

  useEffect(() => {
    axios.get(`${baseURL}/home`)
        .then((res: GetHomesResponse) => setHomes(res.data))
  }, [])

  return (
      <div className="container">
        <h3 className="p-3 text-white bg-info">Welcome To RealTor App</h3>
        {homes.length > 0 && <HomesPage homes={homes}/>}
      </div>
  );
};

export default App;