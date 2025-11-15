
import Banner from "../Banner/Banner";
import Books from "../../pages/Books/Books";
import { useLoaderData } from "react-router";


const Home = () => {
 
    const data= useLoaderData();
    
  return (
    <div>
      <Banner></Banner>
      <Books data={data}></Books>
    </div>
  );
};

export default Home;
