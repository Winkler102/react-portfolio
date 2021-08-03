import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [tabs] = useState([
    { name: 'about' },
    { name: 'projects' },
    { name: 'contact' },
    { name: 'resume' },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div>
      <Nav
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      ></Nav>
      <main>
      </main>
      <Footer />
    </div>
  );
}

export default App;
