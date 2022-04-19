import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Navigate,
  Route,
} from "react-router-dom";

import "./App.css";
// import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
import { Dashboard } from "./page/dashboard/Dashboard.page";
import { Entry } from "./page/entry/entry.page";
import { DefaultLayout } from "./layout/DefaultLayout";
import { AddTicket } from "./page/new-ticket/AddTicket.page";
import { TicketLists } from "./page/ticket-list/TicketLists.page";
import { Ticket } from "./page/ticket/Ticket.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" element={<Entry />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addticket" element={<AddTicket />} />
          <Route path="/tickets" element={<TicketLists />} />
          <Route path="/ticket/:tid" element={<Ticket />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
