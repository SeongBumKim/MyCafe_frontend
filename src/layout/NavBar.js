import React, { useState} from 'react'
import { withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

function NavBar(props) {
  const [activeItem, setActiveItem] = useState("Home");
//   const [session, setSession] = useState("false");

  const handleItemClick = (e, { name }) =>{
 
    setActiveItem({ activeItem: name });
        props.history.push(name);
  }
  
  
  const username = sessionStorage.getItem('username');
   return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Reorder'
            active={activeItem === 'Reorder'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
           { 
             (username !== undefined && username !=="") ?
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
            />
            :
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleItemClick}
            />
           }
          </Menu.Menu>
         </Menu>    
      </div>
    )
}

export default withRouter(NavBar);
