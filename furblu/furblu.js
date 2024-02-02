document.addEventListener('DOMContentLoaded', function () {
    const offerBoxes = document.querySelectorAll('.offer-box');
  
    offerBoxes.forEach(box => {
      box.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.3)';
      });
  
      box.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
      });
    });
  });
  