import AbsolArmor from '@/assets/icons/equipment/absol_armor.png';
import PageTemplate from '@/components/pageTemplate';
import PartyCard from '@/components/partyCard';
import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/card';
import {
  Tabs, TabsContent, TabsList, TabsTrigger,
} from '@/components/ui/tabs';
import { Item, Party } from '@/types';
import { formatMoney } from '@/utils/formatMoney';

const DUMMY_PARTY: Party[] = [
  {
    partyName: '서강',
    members: [{ userName: '마녀', money: 1234567890 }, { userName: '칸휘', money: 1000000000, proportion: 30 }, { userName: '강의', money: 10000000 }],
    ownerName: '마녀',
    commission: 3,
    items: [{
      name: '앱솔방어구', price: 10000000, count: 3, image: AbsolArmor,
    }],
  },
  {
    partyName: '메이플',
    members: [{ userName: '원기', money: 1000000000 }, { userName: '창섭', money: 1000000000 }, { userName: '한별', money: 1000000000 }],
    ownerName: '창섭',
    commission: 5,
    items: [],
  },
];

function ItemCard(props: Item) {
  const {
    name, price, count, image,
  } = props;
  return (
    <section>
      <div className='w-10 h-10'>
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{`${count}개`}</p>
    </section>
  );
}

function PartyPage({ party }: { party: Party }) {
  return (
    <Card className='shadow-lg w-full h-full mr-4'>
      <CardHeader className='p-2'>
        <CardTitle className='text-xl font-semibold'>
          {`${party.partyName} 파티 분배금 내역`}
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4 p-2'>
        <h2>파티원</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-0 '>
          {party.members.map(member => (
            <Card>
              <CardHeader>
                <CardTitle className='text-xl font-semibold'>
                  {member.userName}
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <p>
                  분배금
                  {' '}
                  {formatMoney(member.money)}
                </p>
                {member.proportion && (
                  <p>
                    {`분배 비율 ${member.proportion}%`}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className='flex flex-col gap-2'>
          <ItemCard name='앱솔방어구' price={10000000} count={3} image={AbsolArmor} />
        </div>
      </CardContent>
    </Card>
  );
}

function MainPage() {
  return (
    <PageTemplate>
      <h1 className='text-5xl font-bold text-white'>파티 관리 페이지</h1>
      <Tabs defaultValue={DUMMY_PARTY[0].partyName} className='w-full h-full flex flex-row'>
        <TabsList className='flex flex-col justify-start h-full'>
          {DUMMY_PARTY.map(party => (
            <TabsTrigger value={party.partyName}>
              <PartyCard party={party} />
            </TabsTrigger>
          ))}
        </TabsList>
        {DUMMY_PARTY.map(party => (
          <TabsContent value={party.partyName} className='w-full m-0'>
            <PartyPage party={party} />
          </TabsContent>
        ))}
      </Tabs>
    </PageTemplate>
  );
}

export default MainPage;
