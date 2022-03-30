import {useState, useEffect} from 'react';
import moment from 'moment';
import { Button, Form, Select, Modal, Header, Icon} from 'semantic-ui-react';

const FeesManagement = ({selectedMember, setSelectedMember}) => {
    const [selectedFee, setSelectedFee] = useState('');

    const [feeType, setFeeType] = useState('');
    const [amountPaid, setAmountPaid] = useState('');
    const [dateOfPayment, setDateOfPayment] = useState('');

    // boolean value for the 'Confirmation Modal' //
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setAmountPaid(selectedMember && selectedFee ? selectedFee.amountPaid : '');
        setDateOfPayment(selectedMember && selectedFee ? moment(selectedFee.dateOfPayment).format('YYYY-MM-DD') : moment(new Date()).format('YYYY-MM-DD'));
        setSelectedFee(selectedMember ? selectedFee : '');
        setFeeType(selectedMember ? feeType : '');
    },[selectedFee, selectedMember]);

    //const feesList  = selectedMember ? selectedMember.fees.map(f => ({key: f.id, value: f.feeType, text: f.feeType})) : '';
    const feeTypes = [
        {key: 1, value: 'Member', text: 'Member'},
        {key: 2, value: 'Jersey', text: 'Jersey'}
      ];

      const addFees = () => {
        let toBeAddedFee = {
            feeType, amountPaid, dateOfPayment,memberId: selectedMember.id
        }
    
        fetch(`https://nslapi.azurewebsites.net/api/Fees/`, {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(toBeAddedFee)
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
    
    const updateFees = () => {  
        let toBeUpdatedFee = {
            feeType, amountPaid, dateOfPayment,memberId: selectedMember.id
        }
    
        fetch(`https://nslapi.azurewebsites.net/api/Fees/${selectedFee.id}`, {
          method: "PUT",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(toBeUpdatedFee)
        })
        .then(response => {
            //console.log(response);
            if(response.status === 201){
              setOpen(true);
              // Clear Form fields //
              setSelectedMember('')
            }
          });
      };

  return (
    <div id='feesManagement'>
        <label>Fee Type</label>
        <Select            
            clearable 
            disabled={selectedMember ? false : true}
            placeholder='Pick Fee Type' 
            value={feeType} 
            options={feeTypes} 
            onChange={(e, {value}) => {  
                setFeeType(value);            
                setSelectedFee(selectedMember ? selectedMember.fees.find(f => f.feeType === value) : '');                
            }}
        /> 
        <Form size='huge'>      
            <Form.Field>
            <label>Amount Paid</label>
            <input 
                required
                placeholder='Amount Paid'
                value={amountPaid} 
                onChange={(e) => setAmountPaid(e.target.value)}
            />
            </Form.Field>   
            <Form.Field>
                <label>Date of Payment</label>
                <input 
                    type="date" 
                    max={moment(new Date()).format('YYYY-MM-DD')}
                    value={dateOfPayment}
                    onChange={e => setDateOfPayment(e.target.value)}
                />
            </Form.Field>
            <Button 
                disabled={selectedMember && !selectedFee && feeType ? false : true}
                onClick={addFees}
            >Add Fees</Button>
            <Button 
                disabled={selectedMember && selectedFee ? false : true}
                onClick={updateFees}
            >Update Fees</Button>
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
              <Icon name='money bill alternate outline' size='big'/>
              Fees Details Added/Altered Successfully!
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

export default FeesManagement