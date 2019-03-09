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
  let i = 0
  while (i < facts.length) {
    facts[i].concat("!!!")
  }
  return facts
}
