
  /// menu de navegação desktop ////

  document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('#nav-desk li');
  
    menuItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.stopPropagation(); 
        const isOpen = this.classList.contains('open');
        menuItems.forEach(item => {
          if (item !== this) {
            setTimeout(() => {
              item.classList.remove('open');
              const icon = item.querySelector('i');
              icon.classList.remove('fa-chevron-up');
              icon.classList.add('fa-chevron-down');
            }, 100)
          }
        });
        this.classList.toggle('open');
        const icon = this.querySelector('i');
        if (isOpen) {
          setTimeout(() => {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
          }, 100);
        } else {
          setTimeout(() => {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
          }, 100);
        }
      });
    });
  
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = document.querySelector('#nav-desk').contains(event.target);
      if (!isClickInsideMenu) {
        menuItems.forEach(item => {
          item.classList.remove('open');
          const icon = item.querySelector('i');
          icon.classList.remove('fa-chevron-up');
          icon.classList.add('fa-chevron-down');
        });
      }
    });
  });


    /// menu de navegação mobile ////


    function toggleMenu() {
        var navMobile = document.getElementById("nav-mobile");
        var menuButton = document.querySelector("#menu-burguer img");
    
        if (navMobile.style.display === "block") {
            navMobile.style.display = "none";
            menuButton.src = "images/icon-hamburger.svg";
        } else {
            navMobile.style.display = "block";
            menuButton.src = "images/icon-close.svg";
        }
    }
    
    function toggleSubMenu(element) {
        var submenu = element.nextElementSibling;
        var arrowIcon = element.querySelector('i');
    
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
            arrowIcon.classList.remove('fa-chevron-up');
            arrowIcon.classList.add('fa-chevron-down');
        } else {
            submenu.style.display = "block";
            arrowIcon.classList.remove('fa-chevron-down');
            arrowIcon.classList.add('fa-chevron-up');
        }
    }
    
    
    
    