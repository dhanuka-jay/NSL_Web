import React from 'react';
import { Table, Image } from 'semantic-ui-react';

const MemberProfile = ({loggedInMember}) => {

    const MemberProfileComponentProperties = {
        tableColor : 'orange'
    }

    return (            
            <div className="member-profile-container"> 
                <div className="member-personal-details">
                    <div className="member-photo">
                        <Image src={loggedInMember.photoUrl} alt="Player Profile Photo" />   
                    </div>
                    <div className="member-details">
                        <h3>{loggedInMember.fbName}</h3>
                        <h3>{loggedInMember.email}</h3>
                    </div>
                </div>
                <div className="member-score-container">
                    <h2>Last 5 games</h2>
                    <Table  color={MemberProfileComponentProperties.tableColor} 
                            key={MemberProfileComponentProperties.tableColor}
                            unstackable>
                        <Table.Header fullWidth>
                        <Table.Row>
                            <Table.HeaderCell>Runs</Table.HeaderCell>
                            <Table.HeaderCell>Overs</Table.HeaderCell>
                            <Table.HeaderCell>Wickets</Table.HeaderCell>
                            <Table.HeaderCell>Batting Avg.</Table.HeaderCell>
                            <Table.HeaderCell>Bowling Avg.</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>25</Table.Cell>
                                <Table.Cell>4</Table.Cell>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>56.4</Table.Cell>
                                <Table.Cell>10.5</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>41</Table.Cell>
                                <Table.Cell>3</Table.Cell>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>48.4</Table.Cell>
                                <Table.Cell>20.4</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>25</Table.Cell>
                                <Table.Cell>4</Table.Cell>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>26.9</Table.Cell>
                                <Table.Cell>6.8</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>65</Table.Cell>
                                <Table.Cell>4</Table.Cell>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>88.0</Table.Cell>
                                <Table.Cell>14.9</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>32</Table.Cell>
                                <Table.Cell>4</Table.Cell>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>72.6</Table.Cell>
                                <Table.Cell>11.0</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
    )
}

export default MemberProfile
