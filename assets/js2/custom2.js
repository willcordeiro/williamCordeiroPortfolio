    // Configure your options
    // const options = {
    //     /* check next step for available options */
    //     controlsSelector: '.fltr-controls',
    //     gridItemsSelector: '.filtr-item',
    //     spinner: {
    //         enabled: true,
    //     },
    // };

    // Adjust the CSS selector to match the container where
    // you set up your image gallery
    // const filterizr = new Filterizr('.filter-container', options);
    var filterizr = $('.workContainer').filterizr({
        controlsSelector: '.workItem',
        gridItemsSelector: '.workCard',
        animationDuration:0.10,
    });

    var elems = document.querySelectorAll(".activeWork");

    function myFunction(e) {
        var elems = document.querySelector(".activeWork");
        if(elems !==null){
         elems.classList.remove('activeWork');
        }
      }
      elems.forEach((item) =>
      item.addEventListener('click', myFunction));


    var test = document.querySelectorAll('.workItem');
    function activeLink() {
        test.forEach((item) =>
        item.classList.remove('activeWork'));
      this.classList.add('activeWork');
    }
    test.forEach((item) =>
    item.addEventListener('click', activeLink));


    window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('activeReveal');
        }
      }
    }


    const chk = document.getElementById('chk');
    const social = document.querySelector('.all');

    chk.addEventListener('change', () => {

      if (social.classList.contains('dark')) {
        social.classList.remove('dark');
        //localStorage.setItem("theme", "light");
      } else {
        social.classList.add('dark');
        //localStorage.setItem("theme", "dark");
      }
    });


    const open1 = document.getElementById("open");
    const modalContainer = document.getElementById("modalContainer");
    const close1 = document.getElementById("close");
    const close2 = document.getElementById("close2");

    open1.addEventListener('click', () => {
      modalContainer.classList.add('show');
    });

    close1.addEventListener('click', () => {
      modalContainer.classList.remove('show');
    });

    close2.addEventListener('click', () => {
      modalContainer.classList.remove('show');
    });