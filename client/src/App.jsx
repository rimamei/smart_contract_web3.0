import { useContext } from "react";
import { TransactionContext } from "./context/TransactionContext";
import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
} from "./components/molecules";

const App = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      {transactions.length > 0 && <Transactions />}
      <Footer />
    </div>
  );
};

export default App;
