import BannerImage from '@/assets/images/banner.png';
import Logo from '@/assets/logo/white-logo.svg?react';

function Banner() {
    return (
        <section
            className="w-full h-[370px] bg-cover bg-no-repeat bg-center flex flex-col justify-center overflow-hidden "
            style={{ backgroundImage: `url(${BannerImage})` }}
        >
            <div className="w-full h-full relative pt-[76px]">
                <div className="absolute flex flex-col items-start justify-center z-10 text-white left-[147px] top-1/2 transform -translate-y-1/2 gap-4 pt-[76px]">
                    <Logo width={370} />
                    <p className="font-bold text-xl text-white">그래빗과 함께 CS 지식을 마스터해요!</p>
                </div>
            </div>
            {/* <img src={BannerImage} alt="그래빗 배너 이미지" className="w-full h-full object-cover" /> */}
        </section>
    );
}

export default Banner;
