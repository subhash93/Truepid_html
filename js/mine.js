
// MENU

(function($) { 
    $(function() { 
  
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 


// OWL CAROUSEL


$(document).ready(function(){

  var one = $("#one");
  var two = $("#two");
  
one.owlCarousel({
loop: true,
margin: 25,
nav:true,
dots:false,
responsive: {
  0: {
    items: 2,
  },
  600: {
    items: 2,
  },
  768: {
    items: 3,
  },
  1000: {
    items: 6,
  },
},
});


two.owlCarousel({
loop: true,
margin: 10,
nav: true,
dots:false,
responsive: {
  0: {
    items: 1,
  },
  600: {
    items: 2,
  },
  1000: {
    items: 3,
  },
},
});


  })


// Animation on scroll
AOS.init();

// Progress

$('.mycontainer > div').each(function(){
  var width=$(this).data('width');
  $(this).animate({ width: width }, 2500);
  $(this).after( '<span class="perc">' + width + '</span>');
  $('.perc').delay(3000).fadeIn(1000);
}); 



// COUNTER

$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});


// SWITCH PRICING

$(".switcher input[type='checkbox']").click(function () {
  if ($(this).is(":checked")) {
    $("#equity").addClass("show");
    $("#cash").removeClass("show");
  } else if ($(this).is(":not(:checked)")) {
    $("#cash").addClass("show");
    $("#equity").removeClass("show");
  }
});


// TAB


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();



// BLOG PAGINATION

document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".page");
  const pageNumbers = document.querySelectorAll(".page-number");
  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");
  let currentPage = 0;

  function showPage(pageNumber) {
      pages.forEach((page, index) => {
          if (index === pageNumber) {
              page.style.display = "block";
          } else {
              page.style.display = "none";
          }
      });
  }

  function updateButtons() {
      prevButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage === pages.length - 1;
  }

  function setActive() {
      pageNumbers.forEach((page, index) => {
          if(currentPage === index) {
              page.classList.add("active");
          } else {
              page.classList.remove("active");
          }
      });
  }

  pageNumbers.forEach((page, index) => {
      page.addEventListener("click", function () {
          showPage(index);
          currentPage = index;
          updateButtons();
          setActive();
      });
  });

  prevButton.addEventListener("click", function () {
      if (currentPage > 0) {
          currentPage--;
          showPage(currentPage);
          updateButtons();
          setActive();
      }
  });

  nextButton.addEventListener("click", function () {
      if (currentPage < pages.length - 1) {
          currentPage++;
          showPage(currentPage);
          updateButtons();
          setActive();
      }
  });

  showPage(currentPage);
  updateButtons();
});


