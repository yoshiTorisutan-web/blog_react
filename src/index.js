import React from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


createRoot(document.getElementById("root")).render(<Routes />);
