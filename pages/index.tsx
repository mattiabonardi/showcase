import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header></Header>
      <Button variant="contained">Contained</Button>
    </div>
  );
};

export default Home;
