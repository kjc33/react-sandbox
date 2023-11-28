import React from "react";
import List from "./component/List";
import "./App.css";

export default function App() {
  return (
    <main>
      <section>
        <div className="inner-container flex flex-justify-center flex-align-center ">
          <List />
        </div>
      </section>
    </main>
  );
}
