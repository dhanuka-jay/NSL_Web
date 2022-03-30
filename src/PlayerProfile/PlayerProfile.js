import { useState} from 'react';
import MemberManagement from './MemberManagement';
import PlayerManagement from './PlayerManagement';
import FeesManagement from './FeesManagement';
import { Tab, Select, Form } from 'semantic-ui-react';
import './PlayerProfile.css';

const PlayerProfile = ({members}) => {
  const [selectedMember, setSelectedMember] = useState();

  const memberNames = members ? members.map(m => ({key: m.id, value: m.id, text: `${m.fName} ${m.lName}`})) : [];

  const setMemberToBeUpdated = (id) => {
    setSelectedMember(members.find(m => m.id === id));
  }

  const panes = [
    { menuItem: 'Member', render: () => <Tab.Pane>
      <MemberManagement 
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      /> 
    </Tab.Pane> },
    { menuItem: 'Player', render: () => <Tab.Pane>
      <PlayerManagement 
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
    </Tab.Pane> },
    { menuItem: 'Fees', render: () => <Tab.Pane>
      <FeesManagement 
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
    </Tab.Pane> },
  ]
  
  

  return (
    <div id="playerProfile">
      <Form size='huge'>
        <Form.Field>
          <label>Select Member Here</label>
          <Select
            clearable 
            placeholder='Pick Member' 
            value={selectedMember ? selectedMember.id : ''} 
            options={memberNames} 
            onChange={(e, {value}) => {                 
              setMemberToBeUpdated(value);
            }}
          />  
        </Form.Field>  
      </Form>   
      <Tab panes={panes} />
    </div>
    
    
  )
}

export default PlayerProfile