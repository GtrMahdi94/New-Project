const API = {

  server:'https://blogging-api-8uoq.onrender.com/api/blogs',

  create: function (url, blog, successCB, errorCB = null) {
    $.ajax({
      url:url ,
      type: 'POST',
      data: JSON.stringify(blog),
      contentType: 'application/json',
      success:successCB,
      error: errorCB
    });
  },

  readAll: function(url, successCB, errorCB = null) {
    $.ajax({
      url:url ,
      type: 'GET',
      contentType: 'application/json',
      success:successCB,
      error: errorCB
    });
  },

  GetOne : function(url,user,successCB, errorCB = null){
    $.ajax({
      url:`${url}/${user}` ,
      type: 'GET',
      contentType: 'application/json',
      success:successCB,
      error: errorCB
    });
  }
}
export default API