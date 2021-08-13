import React from 'react';
import { Table, Image } from 'semantic-ui-react';

const MemberProfile = ({loggedInMember}) => {

    const MemberProfileComponentProperties = {
        tableColor : 'orange'
    }

    return (            
            <div className="member-profile-container"> 
                <div className="member-photo">
                    <Image src={loggedInMember.photoUrl} alt="Player Profile Photo" />   
                </div>
                <div className="player-score-container">
                    <Table  color={MemberProfileComponentProperties.tableColor} 
                            key={MemberProfileComponentProperties.tableColor}>
                        <Table.Header fullWidth>
                        <Table.Row>
                            <Table.HeaderCell>Food</Table.HeaderCell>
                            <Table.HeaderCell>Calories</Table.HeaderCell>
                            <Table.HeaderCell>Protein</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>Apples</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>"fddfddf"</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Orange</Table.Cell>
                            <Table.Cell>310</Table.Cell>
                            <Table.Cell>"fdfddfdffdf</Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
    )
}

export default MemberProfile
