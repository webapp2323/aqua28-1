
console.log("Script loaded");
$(document).ready(function () {
  console.log("Document ready");

  $.getJSON('/account', function (data) {
    $('#login').text(data.email);
    $('#avatar').attr("src", data.pictureUrl);
  });

  assignButtons();
  loadPages();
  loadData(0);
});

function calculatePrice() {
  var countL = $("#quantity").val();
  var price = countL * 2;
  var discount = 0;
  if (countL >= 50 && countL < 100) {
    discount = price * 5 / 100;
  } else if (countL >= 100 && countL < 150) {
    discount = price * 10 / 100;
  } else if (countL >= 150 && countL < 200) {
    discount = price * 15 / 100;
  } else if (countL >= 200) {
    discount = price * 20 / 100;
  }
  price = price - Math.round(discount);
  $("#price").val(price);
}

function assignButtons() {
  $("#submitButton").click(function (e) {
    if ($("#address").val() == "") {
      $("#addressSpan").text("Enter address");
    } else {
      $("#addressSpan").text("");
    }

    if ($("#deliveryDate").val() == "") {
      $("#dateSpan").text("Enter date");
    } else {
      $("#dateSpan").text("");
    }

    if ($("#quantity").val() == "") {
      $("#quantitySpan").text("Enter quantity");
    } else {
      $("#quantitySpan").text("");
    }

    if ($("#phone").val() == "") {
      $("#phoneSpan").text("Enter phone");
    } else {
      $("#phoneSpan").text("");
    }

    if ($("#deliveryDate").val() != "" && $("#address").val() != ""
        && $("#phone").val() != "" && $("#quantity").val() != "") {
      const task = {
        date: $("#deliveryDate").val(),
        address: $("#address").val(),
        quantity: $("#quantity").val(),
        price: $("#price").val(),
        phone: $("#phone").val()
      };

      console.log("Sending task:", task);

      $.ajax({
        type: "POST",
        url: "/api/tasks",
        contentType: "application/json",
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        data: JSON.stringify(task),
        success: function () {
          console.log("Task added successfully");
          $("#messageSpan").text("Added successfully");
          loadData(0);
        },
        error: function (xhr, status, error) {
          console.log('Error occurred while adding task:', error);
          $("#messageSpan").text("Error occurred!");
          $("#messageSpan").text("Result: " + status + " " + error + " " + xhr.status + " ");
        },
      });
    }
  });

  $('#deleteButton').click(function () {
    var idList = {'toDelete': []};

    $(":checked").each(function () {
      idList['toDelete'].push($(this).val());
    });

    console.log("Deleting tasks with ids:", idList);

    $.ajax({
      type: "POST",
      url: "/api/tasks/delete",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      data: JSON.stringify(idList),
      success: function () {
        console.log("Tasks deleted successfully");
        window.location = "/";
      },
      error: function (xhr, status, error) {
        console.log('Error occurred while deleting tasks:', error);
      }
    });
  });
}

function loadPages() {
  $("#pages").empty();

  console.log("Loading pages count");

  $.ajax({
    url: '/api/tasks/count',
    type: 'GET',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    success: function(data) {
      console.log("Pages count loaded:", data);
      var pageCount = Math.ceil(data.count / data.pageSize);
      for (var i = 1; i <= pageCount; i++) {
        $('#pages').append(
            $('<li>').attr('class', 'page-item').append(
                $('<a>').attr('class', 'page-link').attr('id', i - 1).text('Page ' + i)
            )
        );
      }
    },
    error: function (xhr, status, error) {
      console.log('Error occurred while loading pages count:', error);
    }
  });

  $("#pages").on("click", ".page-link", function(event) {
    loadData(event.target.id);
  });
}

function loadData(page) {
  $("#data > tbody").empty();

  console.log("Loading data for page:", page);

  $.ajax({
    url: '/api/tasks?page=' + page,
    type: 'GET',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    success: function(data) {
      console.log("Data loaded for page", page, ":", data);
      let i;

      for (i = 0; i < data.length; i++) {
        $('#data > tbody:last-child').append(
            $('<tr>')
                .append(
                    $('<td>').append(
                        $('<input>').attr('type', 'checkbox').attr('value',
                            data[i].id)
                    )
                )
                .append($('<td>').append(data[i].date.replace('T', '  ')))
                .append($('<td>').append(data[i].address))
                .append($('<td>').append(data[i].phone))
                .append($('<td>').append(data[i].quantity))
                .append($('<td>').append(data[i].price))
                .append($('<td>').append(data[i].taskOwner))
                .append($('<td>').append(data[i].status))
        );
      }
    },
    error: function(xhr, status, error) {
      console.log('Error occurred while loading data:', error);
    }
  });
}