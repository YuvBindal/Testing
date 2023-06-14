import './App.css';
import './index.js';
import { Navbar2, Navbars } from './MyComponents/Navbars';
import React, {useState} from 'react';
function App() {

  const [navBarLoaded, setNavBarLoaded] = useState('');
  const [pageRender, setPageRender] = useState('');

  const clickRender = (className) => {
    //adding navbar 
    if (navBarLoaded == '') {
      switch(className) {
        case 'navbar1':
          setNavBarLoaded('navbar1');
          break;
        case 'navbar2':
          setNavBarLoaded('navbar2');
          break;
      }
    } else {
      setNavBarLoaded('');
    };
    

  }

  const optionRender = (className) => {
    // adding page
    
      switch (className) {
        case 'navSelector':
          setPageRender('navSelector');
          break;
        case 'bodySelector':
          setPageRender('bodySelector');
          break;
        case 'contentSelector':
          setPageRender('contentSelector');
          break;
        case 'footerSelector':
          setPageRender('footerSelector');
          break;
        default:
          break;
      
    }
  };
  


  return (
    <div className='flexBox'>
      <div className='menu'>
        <div className= 'heading'>
          <h1 className='menuHeading'>The Creation Menu</h1>
          <hr></hr>
        </div>
        <div className='selectionButtons'>
            <button onClick = {() => optionRender('navSelector')} className='buttonElem btn btn btn-secondary'>Navbars</button>
            <button  onClick = {() => optionRender('bodySelector')} className='buttonElem btn btn-secondary'>Body</button>
            <button onClick = {() => optionRender('contentSelector')} className='buttonElem btn btn btn-secondary'>Content</button>
            <button onClick = {() => optionRender('footerSelector')} className='buttonElem btn btn btn-secondary'>Footer</button>

        </div>

        {
          (pageRender=='navSelector') &&
            <div className='navSelector'>

              <p>Select your Navbar</p>
              <hr></hr>
            
              {!navBarLoaded ? <button onClick = {() => clickRender('navbar1')} className = 'navbar1 btn btn-primary btn-sm'>Add Navbar1</button>:
              <button onClick = {clickRender} className = 'selectNavbar btn btn-primary btn-sm'>Remove Navbar</button>}

                        
            {!navBarLoaded ? <button onClick = {() => clickRender('navbar2')} className = 'selectNavbar btn btn-primary btn-sm'>Add Navbar2</button>:
              <button onClick = {clickRender} className = 'selectNavbar btn btn-primary btn-sm'>Remove Navbar</button>}
            </div>


        }   
        {
          (pageRender=='bodySelector') &&
            <div className='bodySelector'>

              <p>Select your body</p>
              <hr></hr>
           
            </div>


        }
        
        {
          (pageRender=='contentSelector') &&
            <div className='contentSelector'>

              <p>Select your content</p>
              <hr></hr>
           
            </div>


        }

        {
          (pageRender=='footerSelector') &&
            <div className='footerSelector'>

              <p>Select your footer</p>
              <hr></hr>
           
            </div>


        }
   
  

      </div>

    
  

      <div className ='loadNavbar'>
        {
          (navBarLoaded=='navbar1') && <Navbars/>
        }
        {
          (navBarLoaded=='navbar2') && <Navbar2/>
        }
        

      </div>
    
     </div>
  
  );
}

export default App;
