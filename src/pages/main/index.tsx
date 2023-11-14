import PageTemplate from '@/components/pageTemplate';
import PartyCard from '@/components/partyCard';
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
      {DUMMY_PARTY.map(party => (
        <PartyCard key={party.partyName} party={party} />
      ))}
    </PageTemplate>
  );
}

export default MainPage;
