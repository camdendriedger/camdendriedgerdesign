+$(document).ready(function() {
+  $(window).scroll(function() {
+    if ($(this).scrollTop() > 0) {
+      $('.arrow').css('opacity', 0);
+    } else {
+      $('.arrow').css('opacity', 1);
+    }
+  });
+});