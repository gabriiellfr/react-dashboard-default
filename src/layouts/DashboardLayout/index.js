import React from 'react';
import PropTypes from 'prop-types';

import { Sidebar, Header, Footer } from "../../components/Dashboard"

const DashboardLayout = ({ children }) => {
    console.log("DashboardLayout")

    return (
        <>
            <Sidebar />
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
};

DashboardLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default DashboardLayout;
