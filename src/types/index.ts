import { ItemName } from '@/utils/itemInfo';

export type LoginInfo = {
  userName: string;
  password: string;
};

export type RegisterInfo = {
  userName: string;
  password: string;
  passwordConfirm: string;
  email: string;
};

// 비밀번호는 클라이언트 정보가 아니다
export type User = {
  userName: string;
};

export type PartyUser = {
  // 사용자 ID
  userName: string;
  // 해당 사용자의 분배금
  money: number;
  // 해당 사용자의 분배 비율
  proportion?: number;
};

export type Item = {
  name: ItemName;
  image: string;
  price: number;
  count: number;
};

export type Party = {
  // 파티명
  partyName: string;
  // 소속된 사용자들
  members: PartyUser[];
  // 그룹장 ID
  ownerName: string;
  // 파티가 습득한 아이템 정보
  items: Item[];
  // 수수료
  commission: 3 | 5;
};
