import React from 'react';
import styled from 'styled-components';
import colors from '../Styles/designConstants';

const StyledSidebar = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    width:16rem;
    padding:2rem 1rem;
    text-align:left;
    background-color:${colors.accentMain};
    color:${colors.accentMainText};
`;

const Sidebar = props => {
    return(
        <StyledSidebar>
            <p>Sidebar goes here</p>
        </StyledSidebar>
    );
}

export default Sidebar;