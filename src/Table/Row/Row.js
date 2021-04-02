import React from 'react'

const Row = ({item}) => {
    return (
        <tr>
            <td>{item.id + 1}</td>
            <td>{item.name}</td>
            <td>{item.accuracy}</td>
            <td>{item.rate}</td>
        </tr>
    )
}

export default Row;