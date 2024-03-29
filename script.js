document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.querySelector(".sidebar");
    var closeBtn = document.querySelector('.close-sidebar');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    var overlay = document.querySelector(".overlay");

    if (closeBtn && navbarCollapse) {
        navbarCollapse.addEventListener('show.bs.collapse', function() {
            sidebar.classList.remove('d-none');
            overlay.classList.remove('d-none');
        });
        

        navbarCollapse.addEventListener('hide.bs.collapse', function() {
            sidebar.classList.add('d-none');
        });

        closeBtn.addEventListener('click', function() {
            navbarCollapse.classList.remove('show');
            overlay.classList.add('d-none');
        });
    }
  });   