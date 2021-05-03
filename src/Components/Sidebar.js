import React from 'react';
import styled from 'styled-components';
import colors from '../Styles/designConstants';

const StyledSidebar = styled.div`
    background-color:${colors.accentMain};
`;

const Sidebar = props => {
    return(
        <StyledSidebar>
            <p>Sidebar goes here</p>
        </StyledSidebar>
    );
}

export default Sidebar;