import React from 'react';
import styled from 'styled-components';
import colors from '../Styles/designConstants';

import Portrait from './Portrait';

const StyledSidebar = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    width:18rem;
    padding:2rem 1rem;
    text-align:left;
    background-color:${colors.accentMain};
    color:${colors.accentMainText};
`;

const Sidebar = props => {
    return(
        <StyledSidebar>
            <Portrait />
            <h1>Suzanne Cabral</h1>
        </StyledSidebar>
    );
}

export default Sidebar;