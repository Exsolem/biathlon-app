import React from 'react';
import Table from 'react-bootstrap/Table'

import Row from './Row/Row'

const MyTable = ({
                     sortedArray,
                     sortByAccuracy,
                     sortByName,
                     sortByPlace,
                     sortByRate
}) => {

    const table = () => {
        return sortedArray.map( item =>  <Row item={item}/>)
    }

   return  (
       <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th onClick={ sortByPlace }>
                    #
                </th>
                <th onClick={ sortByName }>
                    Name
                </th>
                <th onClick={ sortByAccuracy }>
                    Accuracy(%)
                </th>
                <th onClick={ sortByRate }>
                    Fire Rate(sec)
                </th>
            </tr>
        </thead>

        <tbody>

            { table() }

        </tbody>
    </Table>)
}

export default MyTable;