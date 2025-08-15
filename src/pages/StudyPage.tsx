import { useQuery } from '@tanstack/react-query';
import Banner from '../components/@common/banner/Banner';
import ChapterCard from '../components/study-page/ChapterCard';
import fetchChapters from '../api/fetchChapters';
import { Link } from 'react-router-dom';

function StudyPage() {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['learning'],
        queryFn: fetchChapters,
    });

    if (isPending) {
        return <div>패칭중</div>;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div className="w-full h-full flex flex-col">
            <Banner />
            <div className="flex flex-col px-24 bg-[#f2f2f2]">
                <h2 className="font-semibold text-[32px] py-6">학습</h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
                    {data?.map((chapter) => (
                        <Link to={`${chapter.id}`} key={chapter.id}>
                            <ChapterCard chapter={chapter} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StudyPage;
