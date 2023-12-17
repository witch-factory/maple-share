import PageTemplate from '@/components/pageTemplate';
import PartyCard from '@/components/partyCard';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Party } from '@/types';

const DUMMY_PARTY: Party[] = [
  {
    partyName: '서강',
    members: [{ userName: '마녀' }, { userName: '칸휘' }, { userName: '강의' }],
    ownerName: '마녀',
    commission: 3,
  },
  {
    partyName: '메이플',
    members: [{ userName: '원기' }, { userName: '창섭' }, { userName: '한별' }],
    ownerName: '창섭',
    commission: 5,
  },
];

function MainPage() {
  return (
    <PageTemplate>
      <h1 className='text-5xl font-bold text-white'>파티 관리 페이지</h1>
      <article className='flex flex-row items-center justify-center w-full h-full'>
        <div>
          {DUMMY_PARTY.map(party => (
            <PartyCard key={party.partyName} party={party} />
          ))}
        </div>
        <Card className='shadow-lg w-full h-full mr-4'>
          <CardHeader className='p-2'>
            <CardTitle className='text-xl font-semibold'>
              하이
            </CardTitle>
          </CardHeader>
        </Card>
      </article>

    </PageTemplate>
  );
}

export default MainPage;
