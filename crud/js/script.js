$("#update").hide()

let items = []
let update = null

$("form").on("submit", (event) => {
    event.preventDefault()
    let data = getData()

    if($("#add").is(":visible")) {
        items.push(data)
    } else {
        items[items.indexOf(update)] = data
    }
    createTable()
    $("#clean").click()
 })

 $("#clean").on("click", ()=> {
    $("#add").show()
    $("#update").hide()

 })


function getData() {
    let item = $("#item").val()
    let amount = $("#amount").val()
    let unity = $("#unity").val()

    return {
        item: item,
        amount: amount,
        unity: unity
    }
 }

 function createTable() {
    $("tbody").empty()
    
    items.forEach(item => {
        $("tbody").append(
            $("<tr>").append(
                $("<td>", {text:item.item}),
                $("<td>", {text:item.amount}),
                $("<td>", {text:item.unity}),
                $("<td>", { class: "d-flex gap-1 justify-content-center"}).append(
                    $("<button>", {
                        class: "btn btn-success d-flex align-items-center justify-content-center",
                        id:"editItem",
                        click: function() {
                            update = item
                            $("#item").val(item.item)
                            $("#amount").val(item.amount)
                            $("#unity").val(item.unity)
                            $("#add").hide()
                            $("#update").show()
                        }
                    }).append(
                        $("<span>", {class: "material-icons-sharp", text: "edit"})
                    ),
                    $("<button>", {
                        class: "btn btn-danger d-flex align-items-center justify-content-center",
                        id:"editItem",
                        click: function() {
                            items.splice(items.indexOf(update),1)
                            createTable()
                        }
                    }).append(
                        $("<span>", {class: "material-icons-sharp", text: "delete"})
                    ),
                ),
            )
        )
    });
}