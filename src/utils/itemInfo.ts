import accessory from '@/assets/icons/consume/accessory.png';
import addCube from '@/assets/icons/consume/add_cube.png';
import bossMedal from '@/assets/icons/consume/boss_medal.png';
import dazzlingBlue from '@/assets/icons/consume/dazzling_blue.png';
import dazzlingRed from '@/assets/icons/consume/dazzling_red.png';
import expCoupon from '@/assets/icons/consume/exp_coupon.png';
import expPotion from '@/assets/icons/consume/exp_potion.png';
import expRecipe from '@/assets/icons/consume/exp_recipe.png';
import lifeStone from '@/assets/icons/consume/life_stone.png';
import magical from '@/assets/icons/consume/magical.png';
import positive from '@/assets/icons/consume/positive.png';
import preAccessory from '@/assets/icons/consume/pre_accessory.png';
import prePet from '@/assets/icons/consume/pre_pet.png';
import reincarFlame1 from '@/assets/icons/consume/reincar_flame1.png';
import reincarFlame2 from '@/assets/icons/consume/reincar_flame2.png';
import reincarFlame3 from '@/assets/icons/consume/reincar_flame3.png';
import angerOfMitra from '@/assets/icons/darkness/anger_of_mitra.png';
import badge from '@/assets/icons/darkness/badge.png';
import beltOfDreams from '@/assets/icons/darkness/belt_of_dreams.png';
import blackHeart from '@/assets/icons/darkness/black_heart.png';
import commander from '@/assets/icons/darkness/commander.png';
import eyePatch from '@/assets/icons/darkness/eye_patch.png';
import greatFear from '@/assets/icons/darkness/great_fear.png';
import looseControl from '@/assets/icons/darkness/loose_control.png';
import rootOfPain from '@/assets/icons/darkness/root_of_pain.png';
import spellbook from '@/assets/icons/darkness/spellbook.png';
import daybreak from '@/assets/icons/daybreak/daybreak.png';
import estella from '@/assets/icons/daybreak/estella.png';
import guardian from '@/assets/icons/daybreak/guardian.png';
import twilight from '@/assets/icons/daybreak/twilight.png';
import absolArmor from '@/assets/icons/equipment/absol_armor.png';
import absolWeapon from '@/assets/icons/equipment/absol_weapon.png';
import blackRing from '@/assets/icons/equipment/black_ring.png';
import forceShield from '@/assets/icons/equipment/force_shield.png';
import greenRing from '@/assets/icons/equipment/green_ring.png';
import redRing from '@/assets/icons/equipment/red_ring.png';
import whiteRing from '@/assets/icons/equipment/white_ring.png';
import gravity from '@/assets/icons/exceptional/gravity.png';
import loyal from '@/assets/icons/exceptional/loyal.png';
import nightmare from '@/assets/icons/exceptional/nightmare.png';
import ruin from '@/assets/icons/exceptional/ruin.png';
import beginningStone from '@/assets/icons/misc/beginning_stone.png';
import eternalFlame1 from '@/assets/icons/misc/eternal_flame1.png';
import eternalFlame2 from '@/assets/icons/misc/eternal_flame2.png';
import eternalFlame3 from '@/assets/icons/misc/eternal_flame3.png';
import stone from '@/assets/icons/misc/stone.webp';

export const itemNameMap = {
  // 익셉셔널
  악조: '악몽의 조각',
  모듈: '그라비티 모듈',
  징표: '파멸의 징표',
  충정: '충정의 투구',

  // 칠흑
  루컨마: '루즈 컨트롤 머신 마크',
  마깃안: '마력이 깃든 안대',
  블랙하트: '블랙 하트',
  몽벨: '몽환의 벨트',
  고근: '고통의 근원',
  창뱃: '창세의 뱃지',
  커포링: '커맨더 포스 이어링',
  거공: '거대한 공포',
  마도서: '저주받은 마도서 선택 상자',
  미트라: '미트라의 분노 선택 상자',

  // 여명
  데브펜: '데이브레이크 펜던트',
  가엔링: '가디언 엔젤 링',
  에스텔라: '에스텔라 이어링',
  트왈마: '트와일라이트 마크',

  // 장비
  아케인무기: '아케인 무기 상자',
  아케인방어구: '아케인 방어구 상자',
  앱솔무기: '앱솔랩스 무기 상자',
  앱솔방어구: '앱솔랩스 방어구 상자',
  백옥반지: '백옥의 보스 반지 상자',
  흑옥반지: '흑옥의 보스 반지 상자',
  홍옥반지: '홍옥의 보스 반지 상자',
  녹옥반지: '녹옥의 보스 반지 상자',
  포스실드: '루인 포스실드',

  // 소비
  연마석: '생명의 연마석',
  매지컬: '매지컬 무기 주문서 교환권',
  프펫: '프리미엄 펫장비 스크롤 교환권',
  프악: '프리미엄 악세서리 스크롤 교환권',
  놀긍혼: '놀라운 긍정의 혼돈 주문서',
  반빨별: '반짝이는 빨간 별 물약',
  반파별: '반짝이는 파란 별 물약',
  검환불: '검은 환생의 불꽃',
  영환불: '영원한 환생의 불꽃',
  강환불: '강력한 환생의 불꽃',
  명훈: '대형 보스 명예의 훈장',
  경쿠: '추가 경험치 50% 쿠폰',
  경축비: '소형 경험 축적의 비약',
  경축레시피: '소형 고농축 경험 축적의 비약 제작 레시피',
  수에큐: '수상한 에디셔널 큐브',
  악세서리: '악세서리 스크롤 교환권',
  태정: '태초의 정수',
  꺼불: '꺼지지 않는 불꽃',
  영꺼불: '영원히 꺼지지 않는 불꽃',
  검꺼불: '검은 꺼지지 않는 불꽃',
  결정석: '보스 결정석',
} as const;

export type ItemName= keyof typeof itemNameMap;

export const itemImageMap: Record<ItemName, string> = {
  // 익셉셔널
  악조: nightmare,
  모듈: gravity,
  징표: ruin,
  충정: loyal,

  // 칠흑
  루컨마: looseControl,
  마깃안: eyePatch,
  블랙하트: blackHeart,
  몽벨: beltOfDreams,
  고근: rootOfPain,
  창뱃: badge,
  커포링: commander,
  거공: greatFear,
  마도서: spellbook,
  미트라: angerOfMitra,

  // 여명
  데브펜: daybreak,
  가엔링: guardian,
  에스텔라: estella,
  트왈마: twilight,

  // 장비
  아케인무기: absolWeapon,
  아케인방어구: absolArmor,
  앱솔무기: absolWeapon,
  앱솔방어구: absolArmor,
  백옥반지: whiteRing,
  흑옥반지: blackRing,
  홍옥반지: redRing,
  녹옥반지: greenRing,
  포스실드: forceShield,

  // 소비
  연마석: lifeStone,
  매지컬: magical,
  프펫: prePet,
  프악: preAccessory,
  놀긍혼: positive,
  반빨별: dazzlingRed,
  반파별: dazzlingBlue,
  검환불: reincarFlame3,
  영환불: reincarFlame2,
  강환불: reincarFlame1,
  명훈: bossMedal,
  경쿠: expCoupon,
  경축비: expPotion,
  경축레시피: expRecipe,
  수에큐: addCube,
  태정: beginningStone,
  악세서리: accessory,
  꺼불: eternalFlame1,
  영꺼불: eternalFlame2,
  검꺼불: eternalFlame3,
  결정석: stone,
};
