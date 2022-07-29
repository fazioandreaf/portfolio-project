import React from 'react';
import Parent from './props/Parent';
import GuestList from './state/GuestlList';
import UserSearch from './refs/UserSearch';

import EventComponent from './events/EventComponents';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit  and save to reload.
        </p>
      </header>
        {/* <Parent /> */}
        <GuestList />
        <UserSearch />
        <EventComponent />
    </div>
  );
}

export default App;
