import {
  Card, CardHeader, CardTitle, CardContent,
} from './ui/card';

import { PartyUser } from '@/types';
import { formatMoney } from '@/utils/formatMoney';

function PartyMemberCard(props: PartyUser) {
  const { userName, money, proportion } = props;
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl font-semibold'>
          {userName}
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
