import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Portfolio from './components//Portfolio';

function setPage({ name }) {
  switch (name) {
    case 'resume':
      return <Resume />;
    case 'contact':
      return <ContactForm />;
    case 'projects':
      return <Portfolio />;
    default:
      return <About />;
  }
}

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
        {setPage(currentTab)}
      </main>
      <Footer />
    </div>
  );
}

export default App;