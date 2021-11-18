const panels = document.querySelectorAll('.panel');
const h3 = document.querySelectorAll('.panel h3');

// to render multiple images from UNSPLASH dynamically
panels.forEach((panel, index) => {
   panel.style.backgroundImage = `url('https://source.unsplash.com/random/1920x${
      1080 + index
   }')`;
});


// For the CLICK EVENT
panels.forEach((panel) => {
   panel.addEventListener('click', () => {
      removeActiveClasses();
      panel.classList.add('active');
   })
});

function removeActiveClasses() {
   panels.forEach((panel) => {
      panel.classList.remove('active');
   });
}



// for mouseover and mouseleave EVENTS

// panels.forEach((panel) => {
//    panel.addEventListener('mouseover', () => {
//       panel.classList.add('active');
//       h3.classList.add('active');
//    });

//    // the below can also be put in a function like removeActiveClasses()
//    panel.addEventListener('mouseleave', () => {
//       panel.classList.remove('active');
//       h3.classList.remove('active');
//    })
// });


