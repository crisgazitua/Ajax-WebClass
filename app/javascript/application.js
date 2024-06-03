// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

document.addEventListener("turbolinks:load", function() {
    $('#reload_users').on('click', function() {
      $.ajax({
        url: '/users',
        type: 'get',
        dataType: 'script'
      });
    });
});