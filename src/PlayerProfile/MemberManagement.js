import { useState, useEffect} from 'react';
import moment from 'moment';
import './PlayerProfile.css';
import { Button, Checkbox, Form, Select, Modal, Header, Icon} from 'semantic-ui-react';

const MemberManagement = ({selectedMember, setSelectedMember}) => {
  
    const [fName, setFName] = useState('');
    const [mName, setMName] = useState(selectedMember ? selectedMember.mName : '');
    const [lName, setLName] = useState(selectedMember ? selectedMember.lName : '');
    const [dob, setDob] = useState(selectedMember ? selectedMember.dob : '');
    const [street, setStreet] = useState(selectedMember ? selectedMember.street : '');
    const [city, setCity] = useState(selectedMember ? selectedMember.city : '');
    const [state, setState] = useState(selectedMember ? selectedMember.state : '');
    const [postcode, setPostcode] = useState(selectedMember ? selectedMember.postcode : '');
    const [mobile, setMoblie] = useState(selectedMember ? selectedMember.mobile : '');
    // const [homePhone, setHomePhone] = useState(selectedMember ? selectedMember.homePhone : '');
    const [email, setEmail] = useState(selectedMember ? selectedMember.email : '');
    const [nok, setNok] = useState(selectedMember ? selectedMember.nextOfKin : '');
    const [relship, setRelship] = useState(selectedMember ? selectedMember.relationship : '');
    const [nokPhone, setNokPhone] = useState(selectedMember ? selectedMember.nokPhone : '');
    const [isActive, setIsActive] = useState(selectedMember ? selectedMember.isActive : 1);

    // boolean values for phoneNumber validations //
    const [isPhoneWrong, setIsPhoneWrong] = useState(false);
    const [isNokPhoneWrong, setIsNokPhoneWrong] = useState(false);

    // boolean value to check if the Form is ready to submit
    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

    // boolean value for the 'Confirmation Modal' //
    const [open, setOpen] = useState(false);

    // Regular Expressions for mobile/home Phones
    const phoneRegEx = /^[0][4-5][0-9]{8}$/;
    const nokPhoneRegEx = /^[0][2,3,4,7,8][0-9]{8}$/;
  
    useEffect(() => {
        setFName(selectedMember ? selectedMember.fName : '');
        setMName(selectedMember ? selectedMember.mName : '');
        setLName(selectedMember ? selectedMember.lName : '');        
        // If no Member is selected - Set the default date to today's date
        setDob(selectedMember ? moment(selectedMember.dob).format('YYYY-MM-DD') : ''/*moment(new Date()).subtract(16, 'years').format('YYYY-MM-DD')*/);
        setStreet(selectedMember ? selectedMember.street : '');
        setCity(selectedMember ? selectedMember.city : '');
        setState(selectedMember ? selectedMember.state : '');
        setPostcode(selectedMember ? selectedMember.postcode : '');
        setMoblie(selectedMember ? selectedMember.mobile : '');
        // setHomePhone(selectedMember ? selectedMember.homePhone : '');
        setEmail(selectedMember ? selectedMember.email : '');
        setNok(selectedMember ? selectedMember.nextOfKin : '');
        setRelship(selectedMember ? selectedMember.relationship : '');
        setNokPhone(selectedMember ? selectedMember.nokPhone : '');
        setIsActive(selectedMember ? selectedMember.isActive : 1);

        setIsPhoneWrong(selectedMember ? isPhoneWrong : false);
        setIsNokPhoneWrong(selectedMember ? isNokPhoneWrong : false);
    },[selectedMember])

    // Member Active States
    const activeStatus = [
      {key: 1, value: 1, text: 'Active'},
      {key: 0, value: 0, text: 'Inactive'}
    ];

    const validatePhoneNumbers = () => {
      // Validate phone number
      !phoneRegEx.test(mobile) ? setIsPhoneWrong(true) : setIsPhoneWrong(false);

      // Validate nokPhone number
      !nokPhoneRegEx.test(nokPhone) ? setIsNokPhoneWrong(true) : setIsNokPhoneWrong(false);
    }

    // set 'isReadyToSubmit' to 'true' if validations are true
    const setReadyToSubmit = () => {
      fName && lName && dob && street && city && state && postcode && mobile && email && nok && nokPhone && isActive 
      &&
      (phoneRegEx.test(mobile) && nokPhoneRegEx.test(nokPhone))
      ? setIsReadyToSubmit(true)
      : setIsReadyToSubmit(false)
    }
  
    // Add new Member
    const addMember = () => {
      let toBeAddedMember = {
        fName, mName, lName, dob, profilePicture: '', street, city, state, postcode, mobile, homePhone: '', email,
        nextOfKin: nok, relationship: relship, nokPhone, isActive
      }

      validatePhoneNumbers();
      setReadyToSubmit();

      if(isReadyToSubmit){
        fetch(`https://nslapi.azurewebsites.net/api/Member/`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(toBeAddedMember)
        })
        .then(response => {
          console.log(response)
          if(response.status === 201){
            setOpen(true);
            // Clear Form fields //
            setSelectedMember('');
            
            setIsReadyToSubmit(false);
          }
        });
      }
    }
   
    // Update Existing Member
    const updateMember = () => {  
      let toBeUpdateMember = {
        fName, mName, lName, dob, profilePicture: '', street, city, state, postcode, mobile, homePhone: '', email,
        nextOfKin: nok, relationship: relship, nokPhone, isActive
      }         

      validatePhoneNumbers();
      setReadyToSubmit();

      if(isReadyToSubmit){
          fetch(`https://nslapi.azurewebsites.net/api/Member/${selectedMember.id}`, {
          method: "PUT",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(toBeUpdateMember)
        })
        .then(response => {
          console.log(response)
          if(response.status === 201){
            setOpen(true);
            // Clear Form fields //
            setSelectedMember('');

            setIsReadyToSubmit(false);
          }
        });
      } 
    }  
  
    return (
      <div id='memberManagement'>
          <Form size='huge'>
            <Form.Group widths='equal'>
              <Form.Field required>
                <label>First Name</label>
                <input 
                  required                  
                  size='huge'
                  placeholder='First Name'
                  value={fName} 
                  onChange={(e) => setFName(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Middle Name</label>
                <input 
                  placeholder='Middle Name'
                  value={mName} 
                  onChange={(e) => setMName(e.target.value)}
                />
              </Form.Field>
              <Form.Field required>
                <label>Last Name</label>
                <input 
                  required
                  placeholder='Last Name'
                  value={lName} 
                  onChange={(e) => setLName(e.target.value)}
                />
              </Form.Field>
            </Form.Group>
              <Form.Field required>
                <label>Date of Birth</label>
                <input
                    required
                    type="date"
                    max={moment(new Date()).subtract(16, 'years').format('YYYY-MM-DD')}
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                />
            </Form.Field>
            <Form.Group widths='equal'> 
              <Form.Field required>
                <label>Street</label>
                <input 
                  required
                  placeholder='Street'
                  value={street} 
                  onChange={(e) => setStreet(e.target.value)}
                />
              </Form.Field>
              <Form.Field required>
                <label>City</label>
                <input 
                  required
                  placeholder='City'
                  value={city} 
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Field>
              <Form.Field required>
                <label>State</label>
                <input 
                  required
                  placeholder='State'
                  value={state} 
                  onChange={(e) => setState(e.target.value)}
                />
              </Form.Field>
              <Form.Field required>
                <label>Postcode</label>
                <input 
                  type="number"
                  required
                  placeholder='Postcode'
                  value={postcode ? postcode : ''} 
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'> 
              <Form.Field required>
                <label>Mobile</label>
                <Form.Input 
                  required         
                  maxLength={10}
                  placeholder='Your Mobile Number'
                  value={mobile} 
                  onChange={(e) => {
                    setMoblie(e.target.value)
                  }}
                  error={ isPhoneWrong ? {                  
                    content: 'Must be 10 digits and starts with 02/03/04/07/08, (ie-03XXXXXXXX)'
                  } : false}
                />
              </Form.Field>            
              <Form.Field required>
                <label>Email</label>
                <input 
                  type="email"
                  required
                  placeholder='Your Email Address'
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Field>
              </Form.Group>
            <Form.Group widths='equal'> 
              <Form.Field required>
                <label>Next of Kin</label>
                <input 
                  required
                  placeholder='Name - Next of Kin'
                  value={nok} 
                  onChange={(e) => setNok(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Relationship</label>
                <input 
                  placeholder='Relationship, ie: Spouce, Brother...'
                  value={relship} 
                  onChange={(e) => setRelship(e.target.value)}
                />
              </Form.Field>
              <Form.Field required>
                <label>Phone - Next of Kin</label>
                <Form.Input 
                  required         
                  maxLength={10}
                  placeholder='Phone Number - Next of Kin'
                  value={nokPhone} 
                  onChange={(e) => setNokPhone(e.target.value)}
                  error={ isNokPhoneWrong ? {                  
                    content: 'Must be 10 digits and starts with 02/03/04/07/08, (ie-03XXXXXXXX)'
                  } : false}
                />
              </Form.Field>
            </Form.Group>
              <Form.Field required>
                <label>Is Active</label>
                {/* <input 
                  placeholder='Is Member Active'
                  value={isActive ? isActive : ''} 
                  onChange={(e) => setIsActive(e.target.value)}
                /> */}
                <Select
                  placeholder='Is Member Active?' 
                  value={isActive} 
                  options={activeStatus} 
                  onChange={(e, {value}) => {
                    setIsActive(value);
                  }}
                />
              </Form.Field>
  
              <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button 
                disabled={selectedMember ? true : false}
                onClick={addMember}
              >Add Member</Button>
              <Button 
                disabled={selectedMember ? false : true}
                onClick={updateMember}
              >Update Member</Button>
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
              <Icon name='id card' size='big'/>
              Member Details Added/Altered Successfully!
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

export default MemberManagement