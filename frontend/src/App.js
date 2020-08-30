import React, { useState } from 'react';
import HomePage from './views/HomePage/HomePage';

function App(props) {
  const [version, setVersion] = useState(1)
  function hamxuli() {
    alert('đây là hàm xử lí')
  }
  return <div>
  <HomePage  >
    </HomePage>
  </div>
  
}

export default App;