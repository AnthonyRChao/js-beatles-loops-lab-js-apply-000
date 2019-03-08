// add solution here

function theBeatlesPlay (musicians, instruments) {
  let res = [];
  for (var i = 0; i < musicians.length; i++) {
    let str = musicians[i] + " plays " + instruments[i];
    res.push(str);
  }
  return res;
}

function johnLennonFacts (facts) {
  let res = [];
  while (facts.length >= 0) {
    let str = facts.pop() + "!!!";
    res.push(str);
  }
  return res;
}
