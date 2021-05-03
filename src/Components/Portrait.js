import React from 'react';
import styled from 'styled-components';
import colors from '../Styles/designConstants';
import portraitImg from '../img/Suzanne-Cabral.png';

const StyledPortrait = styled.img`
    border-radius:50%;
    background-color:${colors.accentDark};
    width:70%;
`;

const Portrait = props => {
    return(
        <>
            <StyledPortrait
                src = {portraitImg}
            />
        </>
    );
}

export default Portrait;