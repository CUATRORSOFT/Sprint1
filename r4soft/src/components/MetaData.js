import React from 'react'
import { Helmet } from 'react-helmet'
import { useAuth0 } from "@auth0/auth0-react";

const MetaData = ({ title }) => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <Helmet>
            <title>{`${title} - Konecta`}</title>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </Helmet>
        )
    )

}
export default MetaData