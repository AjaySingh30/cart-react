import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const[mode,newMode]=useState('light');

  const[alert,newAlert]=useState(null);

  const searchAlert=(message,type)=>{
    newAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{newAlert(null)},1500)
  }

  const Ajay=()=>{
  if(mode==='light')
  {
    newMode("dark");
    document.body.style.background='#6610f2';
    searchAlert("Hey Ajay how are you ","success");
  }
  else
  {
    newMode("light");
    document.body.style.background='white';
    searchAlert("Hey Jyoti how are you ","success");
  }
}
return (
    <>
<Navbar title="Teramera" Link="maikyu" mode={mode} Ajay={Ajay}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm searchAlert={searchAlert} mode={mode} />
</div>
</>
);
}

export default App;
