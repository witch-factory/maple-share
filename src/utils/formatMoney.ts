function divideMoney(money: number, divisor: number) {
  return Math.floor(money / divisor);
}

const ONE_HUNDRED_MILLION = 100000000;
const TEN_THOUSAND = 10000;

export function formatMoney(money: number) {
  const billion = divideMoney(money, ONE_HUNDRED_MILLION);
  const restAfterBillion = money % ONE_HUNDRED_MILLION;

  const tenThousand = divideMoney(restAfterBillion, TEN_THOUSAND);
  const restAfterTenThousand = restAfterBillion % TEN_THOUSAND;

  // 결과 문자열 생성
  let result = '';
  if (billion > 0) result += `${billion}억 `;
  if (tenThousand > 0) result += `${tenThousand}만 `;
  if (restAfterTenThousand > 0) result += restAfterTenThousand; // 1단위 추가

  return result.trim();
}
