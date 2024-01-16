import { useState } from "react";
import "./App.css";

const ListItem = ({ Update }) => {
  return (
    <>
      <h1>Conditional Rendering In React {Update}</h1>
    </>
  );
};

const Render = () => {
  return (
    <div>
      <ListItem Update="Akshay" />
    </div>
  );
};

export default Render;
