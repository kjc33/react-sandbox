import React from "react";
import ShowHide from "./component/ShowHide";
import "./App.css";

export default function App() {
  return (
    <main>
      <section>
        <div className="inner-container flex flex-justify-center flex-align-center medium-gap">
          <ShowHide />
        </div>
      </section>
    </main>
  );
}
