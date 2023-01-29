import { ReactElement } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const App = (): ReactElement => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <header className="App-header">
            <Dashboard />
          </header>
        </div>
      </QueryClientProvider>
    </>
  );
};

export default App;
