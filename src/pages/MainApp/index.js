import React, { useState } from 'react'
import Admin from './admin'
import Pelanggan from './Pelanggan';

const MainApp = () => {
    const [role] = useState(localStorage.getItem('role'));
    return (
        role === 'Admin' ?
            <Admin /> : <Pelanggan />
    )
}

export default MainApp
