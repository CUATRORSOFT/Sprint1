import React from 'react'
import { Table } from 'react-bootstrap'
export const Home = () => {
    return (
        <div>
            &nbsp;
            <h1 style={{ textAlign: "center" }}>Usarios</h1>
            <Table className='table' striped>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Metrica
                        </th>
                        <th>
                            Username
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                    </tr>
                </tbody>
            </Table>

        </div >

    )
}

export default Home