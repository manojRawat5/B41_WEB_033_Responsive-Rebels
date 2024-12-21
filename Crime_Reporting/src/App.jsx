import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Complaints from "./components/Complaints";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Complaints />
      </main>
      <Footer />
    </div>
  );
}

export default App;
