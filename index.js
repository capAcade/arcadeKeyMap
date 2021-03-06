export default () => {
  let capacadeKeys = JSON.parse(localStorage.getItem('capacadeKeys'));
  if (!capacadeKeys) {
    capacadeKeys = {
      p1Up: 'W',
      p1Down: 'S',
      p1Left: 'A',
      p1Right: 'D',
      p1Y: 'R',
      p1X: 'T',
      p1B: 'F',
      p1A: 'G',
      p1RB: 'Y',
      p1LB: 'H',
      p2Up: 'I',
      p2Down: 'K',
      p2Left: 'J',
      p2Right: 'L',
      p2Y: 'P',
      p2X: 'C',
      p2B: 'V',
      p2A: 'B',
      p2RB: 'N',
      p2LB: 'M',
      pinBallL: 'Z',
      pinBallR: 'X',
      onePlayer: 'Q',
      twoPlayers: 'U',
    };
    localStorage.setItem('capacadeKeys', JSON.stringify(capacadeKeys));
  }
  return capacadeKeys;
};