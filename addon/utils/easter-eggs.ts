const KONAMI_CODE_SEQUENCE = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
const ALLOWED_KEYS: { [key: number]: string } = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

type EasterEggCallback = () => void;

export const registerEasterEgg = (callback: EasterEggCallback) => {
  let konamiCodePosition = 0;

  document.addEventListener('keydown', function (e) {
    const key = ALLOWED_KEYS[e.keyCode];
    const requiredKey = KONAMI_CODE_SEQUENCE[konamiCodePosition];

    if (key === requiredKey) {
      konamiCodePosition++;

      if (konamiCodePosition === KONAMI_CODE_SEQUENCE.length) {
        callback();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });
};
