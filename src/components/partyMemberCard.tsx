import { Button } from './ui/button';
import {
  Card, CardHeader, CardTitle, CardContent,
} from './ui/card';

import { PartyUser } from '@/types';
import { formatMoney } from '@/utils/formatMoney';

function PartyMemberCard(props: PartyUser) {
  const { userName, money, proportion } = props;

  const moneyToClipboard = async () => {
    await navigator.clipboard.writeText(money.toString());
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl font-semibold flex flex-row justify-between'>
          <h3>{userName}</h3>
          {/* 금액 복사 기능 TODO */}
          <Button onClick={moneyToClipboard} className='hidden sm:block'>금액 복사</Button>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <p>{`분배금 ${formatMoney(money)}`}</p>
        {proportion && (<p>{`분배 비율 ${proportion}%`}</p>)}
      </CardContent>
    </Card>
  );
}

export default PartyMemberCard;
