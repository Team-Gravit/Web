import React from 'react';
import BannerImage from '@/assets/images/banner.png';
import Logo from '@/assets/logo/white-logo.svg?react';

function Banner() {
    return (
        <section
            className="w-full h-[300px] bg-cover bg-center flex flex-col justify-center"
            style={{ backgroundImage: `url(${BannerImage})` }}
        >
            {/* <img src={BannerImage} alt="그래빗 배너 이미지" className="w-full h-full object-cover" /> */}
            <div className="flex flex-col items-start justify-center z-10 text-white pl-[147px] gap-4">
                <Logo w={370} />
                <p className="font-bold text-xl text-white">그래빗과 함께 CS 지식을 마스터해요!</p>
            </div>
        </section>
    );
}

export default Banner;
