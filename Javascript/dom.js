//DOM

var data = document.getElementById("para").innerHTML

console.log(data)


// By tag name


document.getElementById("para").innerHTML = "Welcome Every one" 

var items = document.getElementsByTagName('h1')

console.log(items)

for(item in items){
    console.log(items[item].innerHTML)
}

// By class name

var done_items = document.getElementsByClassName("done")

for(item in done_items){
    console.log(done_items[item].innerHTML)
}

// Events

// Onclick

function get_done(){
    var done_items = document.getElementsByClassName("done")

    for(item in done_items){
        console.log(done_items[item].innerHTML = "Done")
    }
}

function get_pending(){
    var pending_items = document.getElementsByClassName("pending")

    for(item in pending_items){
        pending_items[item].innerHTML = "pending"
    }
}

function get_value(){
    var val = document.getElementById("search_input").value
    console.log(val)
}
