import { Switch, Route } from "wouter";
import ProposalPage from "./pages/ProposalPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={ProposalPage} />
      <Route path="/success" component={SuccessPage} />
    </Switch>
  );
}