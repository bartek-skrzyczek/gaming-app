import React from 'react';
import { Tab } from 'semantic-ui-react';
const pairing = 'noo';
const round = 2;

const getpanes = [
  { menuItem: `Round ${round}`, render: () => <Tab.Pane>{pairing}</Tab.Pane> },
  { menuItem: `Round ${round}`, render: () => <Tab.Pane>{pairing}</Tab.Pane> },
  { menuItem: `Round ${round}`, render: () => <Tab.Pane>{pairing}</Tab.Pane> },
]


const TabExampleSecondaryPointing = () => (
    <Tab menu={{ secondary: true, pointing: true }} panes={getpanes} />
  )
  
  export default TabExampleSecondaryPointing
