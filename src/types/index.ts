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
  money?: number;
  // 해당 사용자의 분배 비율
  proportion?: number;
};

type Item<NAME> = {
  name: NAME;
  price: number;
  count: number;
};

type BossItem = {
  앱솔랩스상자?: Item<'앱솔랩스상자'>;
  수에큐?: Item<'수에큐'>;
  아케인상자?: Item<'아케인상자'>;
  태정?: Item<'태정'>;
  결정석?: Item<'결정석'>;
  명훈?: Item<'명훈'>;
  반빨별?: Item<'반빨별'>;
  반파별?: Item<'반파별'>;
  꺼불?: Item<'꺼불'>;
  영꺼불?: Item<'영꺼불'>;
  검꺼불?: Item<'검꺼불'>;
  경쿠?: Item<'경쿠'>;
  혼줌?: Item<'혼줌'>;
  강환불?: Item<'강환불'>;
  영환불?: Item<'영환불'>;
  검환불?: Item<'검환불'>;
  시드링?: Item<'시드링'>;

  // 보장
  아쿠아틱?: Item<'아쿠아틱'>;
  블빈마?: Item<'블빈마'>;
  파풀마?: Item<'파풀마'>;
  응축?: Item<'응축'>;
  골클벨?: Item<'골클벨'>;
  분자벨?: Item<'분자벨'>;
  혼목?: Item<'혼목'>;
  카혼목?: Item<'카혼목'>;
  매커?: Item<'매커'>;
  도미?: Item<'도미'>;
  데아?: Item<'데아'>;
  지불?: Item<'지불'>;
  실블링?: Item<'실블링'>;
  가엔링?: Item<'가엔링'>;
  웬투스뱃지?: Item<'웬투스뱃지'>;
  블랙메탈숄더?: Item<'블랙메탈숄더'>;
  성배?: Item<'성배'>;

  // 여명셋
  트왈마?: Item<'트왈마'>;
  에스텔라?: Item<'에스텔라'>;
  데브펜?: Item<'데브펜'>;

  // 칠흑셋
  블랙하트?: Item<'블랙하트'>;
  몽벨?: Item<'몽벨'>;
  루컨마?: Item<'루컨마'>;
  마깃안?: Item<'마깃안'>;
  마도서?: Item<'마도서'>;
  고근?: Item<'고근'>;
  창뱃?: Item<'창뱃'>;
  거공?: Item<'거공'>;
  커포링?: Item<'커포링'>;
  미트라?: Item<'미트라'>;
};

export type Party = {
  // 파티명
  partyName: string;
  // 소속된 사용자들
  members: PartyUser[];
  // 그룹장 ID
  ownerName: string;
  // 파티가 습득한 아이템 정보
  items?: BossItem;
  // 수수료
  commission: 3 | 5;
};

export type PartyDetail={
  // 파티명
  partyName: string;
  // 소속된 사용자들
  members: PartyUser[];
  // 그룹장 ID
  ownerName: string;
  // 파티가 습득한 아이템 정보
  items?: BossItem;
  // 수수료
  commission: 3 | 5;
};
