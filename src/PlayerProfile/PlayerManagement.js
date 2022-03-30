import {useState, useEffect} from 'react';
import { Button, Form, Select, Modal, Header, Icon} from 'semantic-ui-react';

const PlayerManagement = ({selectedMember, setSelectedMember}) => {

    const [selectedPlayer, setSelectedPlayer] = useState('');

    const [jerseyName, setJerseyName] = useState('');
    const [jerseyNumber, setJerseyNumber] = useState('');
    const [jerseySize, setJerseySize] = useState('');
    const [battingStyle, setBattingStyle] = useState('');
    const [bowlingStyle, setBowlingStyle] = useState('');
    const [playingRole, setPlayingRole] = useState('');
    const [playerList, setPlayerList] = useState([]);

    // boolean value to check if the Form is ready to submit
    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

    // boolean value for the 'Confirmation Modal' //
    const [open, setOpen] = useState(false);

    
    const battingStyles = [
        {key: 1, value: 'Left', text: 'Left-Handed'},
        {key: 2, value: 'Right', text: 'Right-Handed'}
      ];
    const bowlingStyles = [
        {key: 1, value: 'Left-Pace', text: 'Left arm Pace'},
        {key: 2, value: 'Right-Pace', text: 'Right arm Pace'},
        {key: 3, value: 'Left-LegSpin', text: 'Left arm Leg Spin'},
        {key: 4, value: 'Left-OffSpin', text: 'Left arm Off Spin'},
        {key: 5, value: 'Right-LegSpin', text: 'Right arm Leg Spin'},
        {key: 6, value: 'Right-OffSpin', text: 'Right arm Off Spin'}
      ];
    const playingRoles = [
        {key: 1, value: 'Captain', text: 'Captain'},
        {key: 2, value: 'Vice-Captain', text: 'Vice Captain'},
        {key: 3, value: 'Bowler', text: 'Bowler'},
        {key: 4, value: 'Batsman', text: 'Batsman'},
        {key: 5, value: 'Keeper', text: 'Keeper'},
        {key: 6, value: 'All-Rounder', text: 'All-Rounder'}
      ];
    const jerseySizes = [
        {key: 1, value: 'XS', text: 'XS'},
        {key: 2, value: 'S', text: 'S'},
        {key: 3, value: 'M', text: 'M'},
        {key: 4, value: 'L', text: 'L'},
        {key: 5, value: 'XL', text: 'XL'},
        {key: 6, value: 'XXL', text: 'XXL'},
        {key: 7, value: 'XXXL', text: 'XXXL'}
      ];
    

    useEffect(() => {
        setJerseyName(selectedMember && selectedPlayer ? selectedPlayer.jerseyName : '');
        setJerseyNumber(selectedMember && selectedPlayer ? selectedPlayer.jerseyNumber : '');
        setJerseySize(selectedMember && selectedPlayer ? selectedPlayer.jerseySize : '');
        setBattingStyle(selectedMember && selectedPlayer ? selectedPlayer.battingStyle : '');
        setBowlingStyle(selectedMember && selectedPlayer ? selectedPlayer.bowlingStyle : '');
        setPlayingRole(selectedMember && selectedPlayer ? selectedPlayer.playingRole : '');

        // Re-set Array according to selected Member
        setPlayerList(selectedMember ? selectedMember.players.map(p => ({key: p.id, value: p.id, text: p.jerseyName})) : []);

        //Clear Fileds and 'selectedPlayer' if No 'selectedMembeer'
        setSelectedPlayer(selectedMember ? selectedPlayer : '');
    },[selectedPlayer, selectedMember]);

    // set 'isReadyToSubmit' to 'true' if validations are true
    const setReadyToSubmit = () => {
      jerseyName && jerseyNumber && jerseySize && battingStyle && bowlingStyle && playingRole
        ?
        setIsReadyToSubmit(true)
        : 
        setIsReadyToSubmit(false);
    }
    

    const addPlayer = () => {
      let toBeAddedPlayer = {
          jerseyName, jerseyNumber, 
          jerseySize, battingStyle, bowlingStyle, playingRole,
          memberId: selectedMember.id
      }

      setReadyToSubmit();

      if(isReadyToSubmit){
        fetch(`https://nslapi.azurewebsites.net/api/Player/`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(toBeAddedPlayer)
        })
        .then(response => {
          //console.log(response);
          if(response.status === 201){
            setOpen(true);
            // Clear Form fields //
            setSelectedMember('')
          }
        });
      }        
    }
    
    const updatePlayer = () => {  
      let toBeUpdatePlayer = {
        jerseyName, jerseyNumber, 
        jerseySize, battingStyle, bowlingStyle, playingRole,
        memberId: selectedMember.id
      }

      setReadyToSubmit();

      if(isReadyToSubmit){
        fetch(`https://nslapi.azurewebsites.net/api/Player/${selectedPlayer.id}`, {
          method: "PUT",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(toBeUpdatePlayer)
        })
        .then(response => {
          if(response.status === 201){
            setOpen(true);
            // Clear Form fields //
            setSelectedMember('')
          }
        });
      }
    };

    return (
        <div id='playerManagement'>
            <label>Select Player</label>
            <Select
                clearable 
                disabled={playerList.length<1}
                placeholder='Select Player' 
                value={selectedMember ? selectedMember.players.id : ''} 
                options={playerList} 
                onChange={(e, {value}) => {                 
                    setSelectedPlayer(selectedMember ? selectedMember.players.find(p => p.id === value) : '');
                }}
            />  
            <Form size='huge'>
              <Form.Field required>
                <label>Jersey Name</label>
                <input 
                  required
                  placeholder='Jersey Name'
                  value={jerseyName} 
                  onChange={(e) => setJerseyName(e.target.value)}
                />
              </Form.Field>   
              <Form.Field required>
                <label>Jersey Number</label>
                <input 
                  required
                  maxLength={3}
                  placeholder='Jersey Number'
                  value={jerseyNumber} 
                  onChange={(e) => setJerseyNumber(e.target.value)}
                />
              </Form.Field>    
              <Form.Field required>
                <label>Jersey Size</label>
                <Select
                  required
                  placeholder='Select Jersey Size' 
                  value={jerseySize} 
                  options={jerseySizes} 
                  onChange={(e, {value}) => {
                    setJerseySize(value);
                  }}
                />
              </Form.Field>        
              <Form.Field required>
                <label>Batting Style</label>
                <Select
                  required
                  placeholder='Batting Style' 
                  value={battingStyle} 
                  options={battingStyles} 
                  onChange={(e, {value}) => {
                    setBattingStyle(value);
                  }}
                />
              </Form.Field>
              <Form.Field required>
                <label>Bowling Style</label>
                <Select
                  required
                  placeholder='Select Bowling Style' 
                  value={bowlingStyle} 
                  options={bowlingStyles} 
                  onChange={(e, {value}) => {
                    setBowlingStyle(value);
                  }}
                />
              </Form.Field>
              <Form.Field required>
                <label>Playing Role</label>
                <Select
                  required
                  placeholder='Select Playing Role' 
                  value={playingRole} 
                  options={playingRoles} 
                  onChange={(e, {value}) => {
                    setPlayingRole(value);
                  }}
                />
              </Form.Field>
              <Button 
                disabled={selectedMember && !selectedPlayer ? false : true}
                onClick={addPlayer}
              >Add Player</Button>
              <Button 
                disabled={selectedMember && selectedPlayer ? false : true}
                onClick={updatePlayer}
              >Update Player</Button>
          </Form> 

          {/* Confirmation Modal */}
          <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
          >
            <Header icon>
              <Icon name='user' size='big'/>
              Player Details Added/Altered Successfully!
            </Header>
            <Modal.Actions>
              <Button color='brown' inverted onClick={() => setOpen(false)}>
                <Icon name='checkmark' /> Ok
              </Button>
            </Modal.Actions>
          </Modal>          
        </div>
    )
}

export default PlayerManagement