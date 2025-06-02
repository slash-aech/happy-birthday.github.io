
const evilButton = document.getElementById('evil-button');
const OFFSET = 100;
const cryBaby = document.querySelector('.cry-baby');





console.error(`
  Oh you think you are very smart? You think you can just debug the website? Or did you use the hint that was so "obviously" hidden in the website itself. 
  Lmao it will be so funny if you are just not able to even reach here 😭🤣🤣🤣😭
  You are scripted to come here.
  There is nothing here, atleast not in the console dimwit, wear your specs and keep looking at the code, atleast you'll learn something I hope 👓
  `)



let hasChased = false;
let updateInterval;
let resetTimeout;
let cryData = [];
let currentIndex = 0;

// Load cry.json once
async function loadCryData() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/slash-aech/happy-birthday.github.io/refs/heads/main/cry.json');
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    cryData = await response.json();
  } catch (err) {
    console.error('Failed to load cry.json:', err);
  }
}
// Hey Khanker Chele, good to see you have some brain(like come on it wasn't that hard anyways(or was it?XDDDD)), why don't you scroll down a little bit to see your gift?











// Start updating content
function startUpdates() {
  if (!cryData.length) return;

  updateInterval = setInterval(() => {
    const item = cryData[currentIndex % cryData.length];
    cryBaby.innerText = item.text || 'No text';
    cryBaby.style.backgroundColor = item.color || 'white';
    currentIndex++;
  }, 2000);
}





















// Reset background after inactivity
function scheduleReset() {
  clearTimeout(resetTimeout);
  resetTimeout = setTimeout(() => {
    cryBaby.innerText = '';
    cryBaby.style.backgroundColor = 'transparent';
  }, 1000); // reset after 5 seconds of no movement
}






//                ______
//              /        \
//             /          \
//            |            |
//            |            |
//            |            |
//            |            |
//            |            |
//            |            |
//            |            |
//           /|            |\         
//         /  |            |  \       
//       /    |            |    \     
//     /      |            |      \   
//    |       |            |       \  
//    |       |            |        \  
//    |        \          /          \  
//    |         \________/            \ 
//  /                                  |
// |   .-'       `-.    .-'       `-.  |
// |  /             \  /             \ |
// | |               ||               ||
//  \ \             /  \             / /
//   '.`-._______.-'    '-._______.-'.' 
//     '---.....---'      '---.....---' 

// Mousemove handler
document.addEventListener('mousemove', (e) => {
  scheduleReset();

  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = evilButton.getBoundingClientRect();

  const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
  const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);
  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;

  if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
    setButtonPosition(
      buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
      buttonBox.y + verticalOffset / verticalDistanceFrom * 10
    );

    if (!hasChased) {
      hasChased = true;
      loadCryData().then(startUpdates);
    }
  }
});

// Button click alert
evilButton.addEventListener('click', () => {
  alert(`You think you are so smart don't you?\nwhy don't you visit this link dear?\n https://tinyurl.com/mvh7ztw8`);
});

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect();
  const buttonBox = evilButton.getBoundingClientRect();

  if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET;
  }
  if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET;
  }
  if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET;
  }
  if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET;
  }

  evilButton.style.left = `${left}px`;
  evilButton.style.top = `${top}px`;
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}



/* 
Here is your gift goddamn it, just have it and play with it, masturbate over it or whatever it may be, just don't eat it I guess
https://harshitaaa245.github.io/ApneWishes/
*/
