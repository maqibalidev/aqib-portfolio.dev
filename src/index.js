import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects_page from './pages/Projects_page';
import Projects_detai_page from './pages/Projects_detai_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound_page from './pages/NotFound_page';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(window.screen.height);
root.render(
 
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        
        </Route>
        <Route path="/home" element={<Home />}>
        
        </Route>
        <Route  path="/projects" element={<Projects_page />} />
        <Route  path="/experience" element={<Experience />} />
          <Route path="/project_details" element={<Projects_detai_page />} />
          <Route path="*" element={<NotFound_page/>} />
      </Routes>
    </BrowserRouter>

    // <Home/>
    // <Experience/>
 //<Projects_page/>
//<Projects_detai_page/> 
);

reportWebVitals();
