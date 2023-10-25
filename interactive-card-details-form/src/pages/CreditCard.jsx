import React from 'react';
import bgMainDesktop from '../images/bg_main_desktop.png';
import bgMainMobile from '../images/bg_main_mobile.png';
import ImgCreditCard from '../components/ImgCreditCard';
import FormCreditCard from '../components/FormCreditCard';


export default function CreditCard() {
    return (
        <>
            <img src={ bgMainDesktop } alt="bg_main_desktop" />
            <img src={ bgMainMobile } alt="bg_main_mobile" />
            <div className="container">
                <ImgCreditCard />
                <FormCreditCard />
            </div>
        </>
    )
}
