$("#play").on("click", ()=>{
    
    setTimeout(() => {
        $.ajax({
          url: "https://swapi.dev/api/vehicles/",
          type: "get",
          success: function(data) {
            createTableVehicles(data)
          },
          error: function (error) {
            console.error(error);
            alert("Error in the request");
          },
        });
    }, 1000);
    
})

function createTableVehicles(list) {
    let items = list.results
    console.log(items)
    $("td").remove()
    items.forEach(item => {
        $("tbody").append(
            $("<tr>").append(
                $("<td>", {text: item.name}),
                $("<td>", {text: item.model}),
                $("<td>", {text: item.vehicle_class}),
                $("<td>", {text: item.cargo_capacity})
            )
        )
    });
}