// -----------Style/Cards-----------
const panels = document.querySelectorAll('.panel'); //puttlin all panels into nodelist

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses(); //function (below) removes all the active classes from other panels that are active
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

// -----------GLOBAL VARIABLES-----------

const displayContainer = document.querySelector('.display');

/////////////////////////////////////////////////////
// -----------Image of the Day Script-----------

//////////////////////////////////////////////////////
// -----------Highlights Script-----------
