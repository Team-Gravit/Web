import React from 'react';
import Modal from '../@common/modal/Modal';
import RabbitIcon from '@/assets/mascot/mascot-sad.svg?react';

function LessonQuitModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const handleContinue = () => {
        onClose();
    };
    function handleQuit() {
        onClose();
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <RabbitIcon width={210} />
            <div className="text-2xl font-semibold text-center space-y-1">
                <p>지금까지 푼 내역이</p>
                <p>모두 사라져요!</p>
            </div>

            <div className="text-xl font-normal text-center space-y-1 text-gray-600">
                <p>자료구조 학습 출제가 중단됩니다.</p>
                <p>정말 학습을 그만두시나요?</p>
            </div>
            <button
                onClick={handleContinue}
                className="p-4 bg-main-2 rounded-full text-white text-lg font-semibold w-76"
            >
                계속하기
            </button>
            <button onClick={handleQuit} className="text-gray-600 text-xl font-semibold">
                그만두기
            </button>
        </Modal>
    );
}

export default LessonQuitModal;
