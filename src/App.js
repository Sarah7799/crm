import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Entry />
      <DefaultLayout>
        <Dashboard />
        <AddTicket />
        <TicketLists />
        <Ticket />
      </DefaultLayout>
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <DefaultLayout>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/add-ticket">
              <AddTicket />
            </Route>
            <Route path="/tickets">
              <TicketLists />
            </Route>
            <Route path="/ticket/:tid">
              <Ticket />
            </Route>
          </DefaultLayout>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
