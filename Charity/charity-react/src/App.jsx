import React from "react";
import Website from "./components/Website";

function App() {
  const causesData = [
    { title: "Help Feed Children", category: "Food", donator: "James Smith", amount: 329 },
    { title: "Medical Aid for Kids", category: "Health", donator: "Sarah Johnson", amount: 429 },
    { title: "Education for All", category: "Education", donator: "Michael Lee", amount: 529 },
  ];

  return (
    <div>
      <Website 
        title="Fundraising for a Cause" 
        description="Join us in making the world a better place." 
        causes={causesData}
      />
    </div>
  );
}

export default App;
