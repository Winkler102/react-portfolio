import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'about' },
    { name: 'projects' },
    { name: 'contact' },
    { name: 'resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      </main>
      <Footer />
    </div>
  );
}

export default App;
