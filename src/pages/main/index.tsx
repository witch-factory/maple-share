import ItemCard from '@/components/itemCard';
import PageTemplate from '@/components/pageTemplate';
import PartyCard from '@/components/partyCard';
import PartyMemberCard from '@/components/partyMemberCard';
import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card';
import {
  Tabs, TabsContent, TabsList, TabsTrigger,
} from '@/components/ui/tabs';
import { Party } from '@/types';
import { itemImageMap } from '@/utils/itemInfo';

const DUMMY_PARTY: Party[] = [
  {
    partyName: '서강',
    members: [{ userName: '마녀', money: 1234567890 }, { userName: '칸휘', money: 1000000000, proportion: 30 }, { userName: '강의', money: 10000000 }],
    ownerName: '마녀',
    commission: 3,
    items: [
      {
        name: '앱솔방어구', price: 10000000, count: 3, image: itemImageMap['앱솔방어구'],
      },
      {
        name: '앱솔무기', price: 10000000, count: 3, image: itemImageMap['앱솔무기'],
      },
      {
        name: '태정', price: 10000000, count: 3, image: itemImageMap['태정'],
      },
    ],
  },
  {
    partyName: '메이플',
    members: [{ userName: '원기', money: 1000000000 }, { userName: '창섭', money: 1000000000 }, { userName: '한별', money: 1000000000 }],
    ownerName: '창섭',
    commission: 5,
    items: [],
  },
];

function PartyPage({ party }: { party: Party }) {
  return (
    <Card className='shadow-lg w-full h-full mr-4 p-2 md:p-4 bg-zinc-800 text-white'>
      <CardHeader className='p-2'>
        <CardTitle className='text-3xl font-semibold'>
          {`${party.partyName} 파티 분배금 내역`}
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4 p-2'>
        <h2 className='text-2xl font-semibold'>파티원</h2>
        <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-4 my-0 '>
          {party.members.map(member => (
            <PartyMemberCard key={member.userName} {...member} />
          ))}
        </div>
        <h2 className='text-2xl font-semibold'>아이템</h2>
        <div className='flex flex-row gap-2'>
          {party.items.map(item => (
            <ItemCard key={item.name} {...item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function MainPage() {
  return (
    <PageTemplate>
      <Tabs defaultValue={DUMMY_PARTY[0].partyName} className='w-full h-full flex flex-row'>
        <TabsList className='flex flex-col justify-start h-full'>
          {DUMMY_PARTY.map(party => (
            <TabsTrigger key={party.partyName} value={party.partyName}>
              <PartyCard party={party} />
            </TabsTrigger>
          ))}
        </TabsList>
        {DUMMY_PARTY.map(party => (
          <TabsContent key={party.partyName} value={party.partyName} className='w-full m-0'>
            <PartyPage party={party} />
          </TabsContent>
        ))}
      </Tabs>
    </PageTemplate>
  );
}

export default MainPage;
