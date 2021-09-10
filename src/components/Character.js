// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyleChar = styled.div`

color: white;
justify-content: center;
padding-top:1%;


`
const StyleName = styled.p`

padding-bottom:3.5%;
text-decoration:underline;
font-size:30px
`
const Character = props => {
    const {name} = props;
return (
    <StyleChar>

        <StyleName>{name}</StyleName>

    </StyleChar>


)
}





export default Character;