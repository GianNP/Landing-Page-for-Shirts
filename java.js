// Menambahkan efek scroll halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  function openPurchaseWindow() {
    window.open('purchase.html', '_blank', 'width=600,height=400');
}