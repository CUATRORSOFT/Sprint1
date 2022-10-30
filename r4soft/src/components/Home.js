import React, { Fragment, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'


export const Home = () => {
    const [user, setUser] = useState({})

    

    useEffect(()=>{
        axios.get('http://localhost:8080/api/data/1').then((res)=>{

        setUser(res.data)
        });
    }, [setUser])

   
    const {users} = user

    console.log(user);

    if (user == {}) {
        return 'cargando...'
    } else {
        
       
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
                        {
                            
                            users.map( usuario => (
                                <Fragment>
                                <tr>
                                    <th scope="row">
                                        {usuario.id}
                                    </th>
                                    <td>
                                        {usuario.name}
                                    </td>
                                    <td>
                                        Otto
                                    </td>
                                    <td>
                                        @mdo
                                    </td>
                                </tr>
                                </Fragment>
                            ))
                    
                        }   
                    </tbody>
                </Table>

            </div >

        )
    }
}

export default Home