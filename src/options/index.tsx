import React from "react";
import { createRoot } from "react-dom/client";
import Options from "./Options";

const container = document.getElementById("options");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
);
