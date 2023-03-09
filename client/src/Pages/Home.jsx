import { Paper } from "@material-ui/core";
import React from "react";
import FormCard from "../components/FormCard";
import Posts from "../components/Posts/Posts";
import useStyles from './styles';
const Home = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  return (
    <>
      <div className="wrapper">
        <div className="posts">
          <Posts currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        <div className="form">
          <FormCard currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </>
  );
};

export default Home;
