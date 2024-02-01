import React from 'react'

const TableEtudiants = ({etudiants}) => {
    console.log(etudiants);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">CIN</th>
                    <th scope="col">CNE</th>
                    <th scope="col">NOM</th>
                    <th scope="col">PRENOM</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">TEL</th>
                    <th scope="col">ACTIONS</th>
                </tr>
            </thead>
            <tbody>


                
            </tbody>
        </table>
    )
}

export default TableEtudiants