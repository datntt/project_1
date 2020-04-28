  $(document).ready(() => {
      // khi di chuyển chuột tới menu thì hiện menu
      $(".menu").on("click", function() {
          $(".nav-menu").slideDown();
      });
      // khi chuột di chuyển qua nơi khác thì ẩn menu
      $(".menu").mouseleave(function() {
          $(".nav-menu").hide(1000);
      });
      // thêm class 'btn-hover' khi di chuyển chuột tới nút +
      $(".btn").mousedown(function(event) {
          $(event.currentTarget).addClass("btn-hover");
      });
      // khi chuột di chuyển qua nơi khác thì xóa bỏ class 'btn-hover' 
      $(".btn").mouseleave(function() {
          $(".btn").removeClass("btn-hover");
      });
      // khi load lại trang thì chuột sẽ  xuất hiện ở ô nhập ký tự
      $(".postText").focus();
      // khi người dùng gõ phím kiểm tra số ký tự và thay đổi màu sắc
      $(".postText").on("keydown", function(event) {
          var post = $(event.currentTarget).val();
          var remaining = 140 - post.length;
          $(".characters").html(remaining);
          if (remaining <= 0) {
              $(".wordcount").addClass("red");
          } else {
              $(".wordcount").removeClass("red");
          }
      });
  });