import { Badge } from './ui/badge';
import {
  Card, CardHeader, CardTitle, CardContent,
} from './ui/card';

import { Party } from '@/types';

function PartyCard({ party }: { party: Party }) {
  return (
    <Card className='shadow-lg'>
      <CardHeader className='p-2'>
        <CardTitle className='text-xl font-semibold'>
          {party.partyName}
        </CardTitle>
      </CardHeader>
      <CardContent className='p-2'>
        {party.members.map(member => (
          <Badge key={member.userName}>{member.userName}</Badge>
        ))}
      </CardContent>
    </Card>
  );
}

export default PartyCard;
