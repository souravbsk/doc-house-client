import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../Pages/Shared/Headers/Headers';
import Footers from '../Pages/Shared/Footers/Footers';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;