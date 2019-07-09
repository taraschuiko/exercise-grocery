const API_URL = `https://gr1.compellingsoftware.com`;
const USERNAME = "john@groshapp.com";
const PASSWORD = "Jd1234";

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
};

$(document).ready(function() {
  let id = getUrlParameter("id");
  $.ajax({
    url: API_URL + `/households/${id}/current`,
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa(`${USERNAME}:${PASSWORD}`));
    },
    success: function(data) {
      data.map(item => {
        let html = "<li>"
        item.groceries.map(grocery => {
          html += `${grocery.name}, `;
        })
        html += "</li>";
        $("#list").append(html);
      })
    }
  })
})