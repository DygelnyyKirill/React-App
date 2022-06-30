import React, { useState } from 'react';

import UserNameInput from './components/UserNameInput';


import './App.css'
import UserNameList from './components/UserNameList';


const App = () => {
  const [userName, setUserName] = useState([
    {user: 'Kirill Dugelniy', id: '1'},
  ]);


  let content = (
    <p style={{ textAlign: 'center' }}>No User name found. Maybe add?</p>
  );
  
  if (userName.length > 0) {
    content = (
      <UserNameList items={userName} />
    );
  };

  return (
    <div>
      <section id="goal-form">
        <UserNameInput />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
