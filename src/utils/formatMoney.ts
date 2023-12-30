function divideMoney(money: number, divisor: number) {
  return Math.floor(money / divisor);
}

export function formatMoney(money: number) {
  if (money < 10000) {
    return `${money}원`;
  }
  if (money < 100000000) {
    return `${divideMoney(money, 10000)}만 ${money % 10000}원`;
  }
  return `${divideMoney(money, 100000000)}억 ${divideMoney(money % 100000000, 10000)}만 ${money % 10000}원`;
}
