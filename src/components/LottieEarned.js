import React from 'react'
import Lottie from 'react-lottie';

import moneyLottie from '../assets/money_lottie.json'

export default function LottieEarned() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: moneyLottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={200}
                width={200}
            />
        </div>
    )
}
