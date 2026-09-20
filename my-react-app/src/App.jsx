import React, { useCallback, Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import Greeting from "./Greeting.jsx";
import Counter from "./Counter.jsx";
import ThemeProvider from "./ThemeProvider.jsx";
import { useContext } from "react";
import ThemeContext from "./ThemeContext.js";
import Timer from "./Timer.jsx";
import DataWithLoading from "./DataWithLoading.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import UserProvider from "./UserProvider.jsx";
import MemoChild from "./MemoChild.jsx";
import useWindowWidth from "./useWindowWidth.js";
import EventErrorDemo from "./EventErrorDemo.jsx";

const ExpensiveComponent = lazy(() => import("./ExpensiveComponent.jsx"));

const Dashboard = lazy(() => import("./Dashboard.jsx"));

function AppContent() {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const width = useWindowWidth();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className={theme}>
      <Greeting name="Somaia" />
      <h3>Window Width: {width}px</h3>

      <Suspense fallback={<p>Loading Dashboard...</p>}>
        <Dashboard />
      </Suspense>

      <h3>useCallback Demo</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increase count</button>
      <button onClick={reset}>Reset Count</button>

      <MemoChild onClick={increment} />

      <Counter />

      <Timer />

      <DataWithLoading isLoading={loading} />

      <Suspense fallback={<p>loading calculation</p>}>
        <ExpensiveComponent />
      </Suspense>

      <EventErrorDemo />

      <ErrorBoundary></ErrorBoundary>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
