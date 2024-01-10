import { Card } from '@/components/ui/card';
import { Item } from '@/types';
import { formatMoney } from '@/utils/formatMoney';
import { itemNameMap } from '@/utils/itemInfo';

function ItemCard(props: Item) {
  const {
    name, price, count, image,
  } = props;
  return (
    <Card className='group p-4 flex flex-col items-center'>
      <div className='w-10 h-10'>
        <img src={image} alt={name} />
      </div>
      <h2 className='text-lg font-bold block group-hover:hidden'>{name}</h2>
      <h2 className='text-lg font-bold hidden group-hover:block'>{itemNameMap[name]}</h2>
      <p>{`${formatMoney(price)}`}</p>
      <p>{`${count}개`}</p>
    </Card>
  );
}

export default ItemCard;
