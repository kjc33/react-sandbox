import React from "react";
import Toggle from "./component/Toggle";
import "./App.css";

export default function App() {
  return (
    <main>
      <section>
        <div className="inner-container flex flex-justify-center flex-align-center small-gap">
          <Toggle />
        </div>
      </section>
    </main>
  );
}
