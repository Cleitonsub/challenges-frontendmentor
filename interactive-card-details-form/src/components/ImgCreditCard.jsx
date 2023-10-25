import React from "react";
import bgCardFront from "../images/bg_card_front.png";
import bgCardBack from "../images/bg_card-back.png";
import cardLogo from "../images/card_logo.svg";

export default function ImgCreditCard() {
    return (
        <section className="card-display">
            <div className="card-front">
                <img src={ bgCardFront } alt="bg-card-front" />
                <img src={ cardLogo } alt="card-logo" />
                <p className="card-number-display">0000 0000 0000 0000</p>
                <p className="cardholder-display">Jane Appleseed</p>
                <p className="expiry-month-display">00/00</p>
                <p className="expiry-year-display">000</p>
            </div>
            <div className="card-back">
                <img src={ bgCardBack } alt="bg_card-back" />
                <p className="cvc-display">000</p>
            </div>
        </section>
    );
}
