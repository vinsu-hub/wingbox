import { Route, Switch } from "wouter";
import HomePage from "./pages/HomePage";

/**
 * Placeholder shell. Routing to the full page set (About, Services, Our Team,
 * Our Clients & Partners, Contact) is built out per BRIEF.md.
 */
export default function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
}
