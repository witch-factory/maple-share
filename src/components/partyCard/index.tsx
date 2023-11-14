import { Badge } from '../ui/badge';
import {
  Card, CardHeader, CardTitle, CardContent,
} from '../ui/card';

import { Party } from '@/types';

function PartyCard({ party }: { party: Party }) {
  return (
    <Card className='shadow-lg'>
      <CardHeader>
        <CardTitle className='text-xl font-semibold'>
          {party.partyName}
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {party.members.map(member => (
          <Badge key={member.userName}>{member.userName}</Badge>
        ))}
      </CardContent>
    </Card>
  );
}

export default PartyCard;
