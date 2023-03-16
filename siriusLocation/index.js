
$table = $('<table class="table">');

$.getJSON('assets/locations.json', function (location) {

    location.forEach(element => {
        $row = $('<tr class="row">');
        $column = $(`<td><img src="./assets/images/united-states.png"/></td>"+"<td>${element.state}</td>"+"<td>${element.city}</td>"+"<td>${element.contact}</td>`);
        $row.append($column);
        $table.append($row);
    });
});
$("#tabs-3").append($table);