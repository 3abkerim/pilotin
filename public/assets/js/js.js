$(document).ready(function () {
  var newLogo = "assets/img/Logo.svg";
  var originalLogo = $(".logo").attr("src");

  $(".navbar-nav li").hover(
    function () {
      $(".navbar").addClass("navbar-hover");
      $(".logo").attr("src", newLogo);
      $(".navbar-nav li a").css("color", "black");
      $(this).find("a").addClass("tab-hover");
    },
    function () {
      // Mouse leaves the element
      $(".navbar").removeClass("navbar-hover");
      $(".logo").attr("src", originalLogo);
      $(".navbar-nav li a").css("color", "");
      $(this).find("a").removeClass("tab-hover");
    }
  );
});

$(document).ready(function () {
  $("#navbarExampleOnHover")
    .on("show.bs.collapse", function () {
      $(".navbar-toggler").hide();
    })
    .on("hide.bs.collapse", function () {
      $(".navbar-toggler").show();
    });

  $(document).click(function (event) {
    var clickover = $(event.target);
    var navbarOpened = $("#navbarExampleOnHover").hasClass("show");
    if (navbarOpened === true && !clickover.closest(".navbar").length) {
      $(".navbar-toggler").click();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var currentIndex = 0;
  var contents = document.querySelectorAll(".carousel-content");
  var images = document.querySelectorAll(".img-carousel");
  var indicators = document.querySelectorAll(".small-circle");

  function updateContent(index) {
    contents.forEach(function (content, idx) {
      content.classList.remove("active");
      images[idx].classList.remove("active");
      indicators[idx].classList.remove("active-small-circle");
    });

    contents[index].classList.add("active");
    images[index].classList.add("active");
    indicators[index].classList.add("active-small-circle");
  }

  document.querySelector(".right-arrow").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % contents.length;
    updateContent(currentIndex);
  });

  document.querySelector(".left-arrow").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + contents.length) % contents.length;
    updateContent(currentIndex);
  });
});
