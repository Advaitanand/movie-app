import React from "react";

class Navbar extends React.Component {
    
    render (){
        return (
            <div className="App">
              <div className="nav">
                  <div className="search-container">
                    <input />
                    <button id="search-btn">search</button>
                  </div>
              </div>
            </div>
        )
    }
  
}

export default Navbar;
