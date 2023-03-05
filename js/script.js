var myNav = document.getElementById('mynav');
      var my_Nav = document.getElementById('my-nav');
        window.onscroll = function () { 
          if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
          myNav.classList.add("nav-colored");
          myNav.classList.remove("nav-transparent");
          my_Nav.classList.add("nav-colored");
          my_Nav.classList.remove("nav-transparent");
          } 
          else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");
            my_Nav.classList.add("nav-transparent");
            my_Nav.classList.remove("nav-colored");
          }
      };