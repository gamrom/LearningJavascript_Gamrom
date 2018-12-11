function rand(m, n)
{
  return m + Math.floor((n-m+1)*Math.random());
}

function randFace()
{
  return ["crown", "anchor", "heart", "spade", "club", "diamond"]
    [rand(0,5)]
}

let result = [0, 0];
for(let number = 0; number < 200; number ++)
{
  console.log(`${result}날.`)
  let funds = 50;
  let round = 0;

  while(funds >= 1 && funds <= 100)
  {
    round ++;
    console.log(`\nround ${round}:`);
    console.log(`\tstarting funds: ${funds}원`);

    //round1
    //먼저 현재 자본 중 얼마만큼의 돈을 투자 할 지 결정합니다.
    betFunds = rand(0, funds);
    leftFunds = funds - betFunds;
    console.log(`투자하기로 결정한 금액은 ${betFunds}.`);
    let bettingCrown = rand(0, betFunds);
    betFunds -= bettingCrown;
    let bettingAnchor = rand(0, betFunds);
    betFunds -= bettingAnchor;
    let bettingHeart = rand(0, betFunds);
    betFunds -= bettingHeart;
    let bettingSpade = rand(0, betFunds);
    betFunds -= bettingSpade;
    let bettingClub = rand(0, betFunds);
    betFunds -= bettingClub;
    let bettingDiamond = rand(0, betFunds);
    betFunds -= bettingDiamond;
    console.log
    (
        `crown = ${bettingCrown}, anchor = ${bettingAnchor}, heart = ${bettingHeart}, spade = ${bettingSpade}, club = ${bettingClub}, diamond = ${bettingDiamond}`
    )

    let diceResult = [];
    for (diceNum = 0; diceNum <= 2; diceNum ++)
    {
      diceResult[diceNum] = randFace();
    }
    console.log(`주사위의 결과는 ${diceResult}`);

    let countManyItem = [0, 0, 0, 0, 0, 0];
    let face = ["crown", "anchor", "heart", "spade", "club", "diamond"];
    for(let b=0; b<=6; b++)
    {
      for(let a=0; a<=2; a++)
      {
        if(diceResult[a] == face[b])
        {
          countManyItem[b] += 1;
        }
      }
    }
    console.log(countManyItem);
    bettingCrown *= countManyItem[0];
    bettingAnchor *= countManyItem[1];
    bettingHeart *= countManyItem[2];
    bettingSpade *= countManyItem[3];
    bettingClub *= countManyItem[4];
    bettingDiamond *= countManyItem[5];
    funds = leftFunds + bettingCrown + bettingAnchor + bettingHeart + bettingSpade + bettingClub +bettingDiamond;
    console.log(`판돈 걸고 남은 돈은 ${leftFunds}`);
    console.log(`딴돈은 ${bettingCrown + bettingAnchor + bettingHeart + bettingSpade + bettingClub +bettingDiamond}`)
    console.log(`라운드가 끝나고 남은돈은 ${funds}`);
    if(funds <= 0)
    {
      result[1] += 1;
    }
    if(funds >=100)
    {
      result[0] += 1;
    }
  }
}
console.log(result);
console.log(`${result[0]}번 100넘게 따서 이기고 ${result[1]}번 0원 아래되서 진다 `);
