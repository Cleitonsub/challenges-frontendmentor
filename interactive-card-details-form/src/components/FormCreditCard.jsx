import React from "react";
import iconComplete from "../images/icon_complete.svg";


export default function FormCreditCard() {
    return (
        <section className="card-details">
            <form action="/action_page.php" id="credit-card-form" name="credit-card-form">
                <label htmlFor="cardholder-name">Cardholder Name <br /></label>
                <input
                    type="text"
                    id="cardholder-name"
                    className="cardholder-name"
                    name="cardholder-name"
                    placeholder="e.g. Jane Appleseed" />
                <p id="errorCardName"></p>

                <label htmlFor="card-number">Card Number <br /></label>
                <input
                    type="text"
                    id="card-number"
                    className="card-number"
                    name="card-number"
                    placeholder="e.g. 1234 5678 9123 0000" />
                <p id="errorCardNumber"></p>

                <div className="flex">
                    <label htmlFor="expiry-date" className="expiry-date">
                        Exp. Date (MM/YY) <br />
                        <input
                            type="text"
                            className="expiry-date"
                            name="expiry-date"
                            placeholder="MM" />
                            <input
                            type="text"
                            className="expiry-date"
                            name="expiry-date"
                            placeholder="YY" />
                        <p id="errorCardExpiry"></p>
                    </label>
                    <label htmlFor="cvc" className="cvc">
                        CVC <br />
                        <input
                            type="text"
                            className="cvc"
                            id="cvc"
                            name="cvc"
                            placeholder="e.g. 123" />
                        <p id="errorCardCvc"></p>
                    </label>
                </div>
                <button id="submit">Confirm</button>
            </form>
            <div id="thank-you" className="thank-you hidden">
                <img src={ iconComplete } alt="icon_complete" />
                <h2 className="thank-you-header">Thank you!</h2>
                <p>We've added your card details</p>
                <button className="continue">Continue</button>
            </div>
        </section>
    );
}
