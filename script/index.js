const API_URL = `https://gr1.compellingsoftware.com`;
const USERNAME = "john@groshapp.com";
const PASSWORD = "Jd1234";

$(document).ready(function() {
  $.ajax({
    url: API_URL + "/users/me/households",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa(`${USERNAME}:${PASSWORD}`));
    },
    success: function(data) {
      data.map(list => {
        $("#lists").append(`<li><a href="./list.html?id=${list.id}">${list.name}</a></li>`);
      })
    }
  })
})