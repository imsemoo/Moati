$(document).ready(function () {
  $(".filterIcon").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("open");
  });

  $(".stat-count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 2000, // Duration of the animation (in milliseconds)
          easing: "swing", // Type of easing. 'swing' is a default value
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  $(".menu-toggle").click(function () {
    $(".menu").toggleClass("active");
  });



  $('.tab').click(function(){
    var tabId = $(this).attr('data-category');
    
    // Highlight the active tab
    $('.tab').removeClass('active-tab');
    $(this).addClass('active-tab');
    
    // Show the content related to the clicked tab
    $('.tab-content').hide();
    $('#' + tabId).show();
});
// // Initially hide all items beyond the first three in each category
// $(".category").each(function() {
//   $(this).find(".stat-item:gt(2)").hide(); // Hide items greater than the index of 2 (i.e., hide starting from the fourth item)
// });

// // Toggle visibility when the button is clicked
// $(".toggleItems").click(function() {
//   // This finds the closest parent category and then toggles the visibility of items beyond the first three
//   $(this).closest(".category").find(".stat-item:gt(2)").toggleClass('visible');

//   // Toggle button text
//   var buttonText = $(this).text() == "عرض المزيد" ? "عرض أقل" : "عرض المزيد";
//   $(this).text(buttonText);
// });

  // jQuery for tab switching (if required)
  $(".tab").on("click", function () {
    $(".tab").removeClass("active");
    $(this).addClass("active");
    // You would also add code here to change the content based on the tab
  });

  $(".owl-martyrs").owlCarousel({
    loop: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        nav: true,
      },
    },
  });

  $(".owl-report").owlCarousel({
    loop: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".toggle-search").click(function () {
    // Show the search overlay
    $(".search-overlay").show();
  });

  $(".search-overlay .exit-icon").click(function () {
    // Hide the search overlay
    $(".search-overlay").hide();
  });
});
