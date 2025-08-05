import Banner from "../components/@common/banner/Banner";
import StudyBg from '@/assets/images/study-bg.jpg';
import 자료구조 from '@/assets/images/자료구조.svg';
import 알고리즘 from '@/assets/images/알고리즘.svg';
import 네트워크 from '@/assets/images/네트워크.svg';
import 운영체제 from '@/assets/images/운영체제.svg';
import 데이터베이스 from '@/assets/images/데이터베이스.svg';
import 보안 from '@/assets/images/보안.svg';
import 컴퓨터아키텍처 from '@/assets/images/컴퓨터아키텍처.svg';
import 소프트웨어엔지니어링 from '@/assets/images/소프트웨어엔지니어링.svg';
import SubjectProgress from '../components/@common/subject-progress/SubjectProgress';
import InfoCircle from '@/assets/icons/info-circle.svg?react';

const subjects = [
  { id: 1, name: '자료구조', icon: 자료구조, current: 3, total: 10 },
  { id: 2, name: '알고리즘', icon: 알고리즘, current: 3, total: 10 },
  { id: 3, name: '네트워크', icon: 네트워크, current: 3, total: 10 },
  { id: 4, name: '운영체제', icon: 운영체제, current: 3, total: 10 },
  { id: 5, name: '데이터베이스', icon: 데이터베이스, current: 3, total: 10 },
  { id: 6, name: '보안', icon: 보안, current: 3, total: 10 },
  { id: 7, name: '컴퓨터 아키텍처', icon: 컴퓨터아키텍처, current: 3, total: 10 },
  { id: 8, name: '소프트웨어 엔지니어링', icon: 소프트웨어엔지니어링, current: 3, total: 10 },
];

function StudyPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <Banner />
      <div className="flex flex-col px-24 bg-[#f2f2f2]">
        <h2 className="font-semibold text-[32px] py-6">학습</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="relative flex flex-col justify-between w-full h-64 lg:max-w-[300px] lg:h-72 bg-cover bg-center rounded-sm overflow-hidden p-4"
              style={{ backgroundImage: `url(${StudyBg})` }}
            >
              <div className="flex flex-col relative z-10">
                <div className="flex flex-row">
                   <span className="text-3xl xl:text-4xl font-extrabold text-white">
                      {subject.name === '소프트웨어 엔지니어링'
                        ? (
                          <>
                            <span className="hidden lg:inline">소프트웨어<br />엔지니어링</span>
                            <span className="inline lg:hidden">소프트웨어 엔지니어링</span>
                          </>
                        )
                        : subject.name}
                    </span>
                   <InfoCircle className="ml-auto mt-0.5 w-7 h-7 lg:mb-0 mb-32" />
                </div>
                <SubjectProgress current={subject.current} total={subject.total} />
              </div>

              <img
                src={subject.icon}
                alt={subject.name}
                className={`absolute lg:right-[-30px] z-0 
                  ${subject.name === '데이터베이스'
                  ? 'w-[580px] h-[580px] lg:w-52 lg:h-52 lg:right-[-30px] lg:top-[128px] right-[-84px] top-[-22px]'
                  : subject.name ===  '컴퓨터 아키텍처' 
                  ? 'w-[450px] h-[450px] lg:w-56 lg:h-56 lg:top-[118px] right-[-52px] top-[-30px]' 
                  : 'w-[550px] h-[550px] lg:w-48 lg:h-48 right-[-80px] lg:right-[-30px] lg:bottom-[-48px]'}
                `}
              />
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
}

export default StudyPage;
