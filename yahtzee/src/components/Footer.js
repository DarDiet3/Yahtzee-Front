import React from "react";
import * as H from "../styles/GeneralStyles";

const Footer = () => {
    return (
        <H.Footer>
            <H.FootDiv>
                <H.FootImg src="/images/icons/ivory_monogram.png"/>
            </H.FootDiv>
            <H.FootDiv>
                <p> © 2020 Darci Dietrich</p>
            </H.FootDiv>
            <H.FootDiv>
                <p>Issues? <a href="https://github.com/DarDiet3/Yahtzee-Front">Let me know!</a></p>
            </H.FootDiv>
            
        </H.Footer>
    )
}

export default Footer;