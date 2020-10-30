var loadType = 'pointLoad'
let fixedEnd1 = document.getElementById("FE1")
let fixedEnd2 = document.getElementById("FE2")
let loadTypeImg = document.getElementById("loadTypeImg")

// Calculate fixed end moment for UDL
function calculateUdlFem(event) {
    event.preventDefault()
    console.log('calculating fem for UDL')
    var load = document.getElementById("loadInput").value
    var length = document.getElementById("lengthInput").value
    var fem = (load * length^2)/12

    document.getElementById("result").value = fem

    console.log("The fixed end moment is: " + fem)
}


function calculatePointLoadFem(event) {
    event.preventDefault()
    console.log('calculating fem for point load')
    var load = document.getElementById("loadInput").value
    var length = document.getElementById("lengthInput").value
    var a = document.getElementById("distFixedEndInput1").value
    var b = document.getElementById("distFixedEndInput2").value
    var femAB = (load * b^2 * a)/length^2
    var femBA = (load * b * a^2)/length^2
    var result = String("femAB: " + femAB + ";    " + "femBA: " + femBA)

    document.getElementById("result").value = result

    console.log('femAB: ' + femAB)
    console.log('femBA: ' + femBA)
    console.log("The fixed end moment is: " + result)
}

function calculateFem(event) {
    console.log('load type is: ' + loadType)
    if (loadType == 'udl') {
        calculateUdlFem(event)
    } else {
        calculatePointLoadFem(event)
    }
}

function setTypeUDL(event) {
    event.preventDefault()
    loadTypeImg.src = "assets/udl.png"
    fixedEnd1.style.display = "none"
    fixedEnd2.style.display = "none"
    loadType = "udl"
}

function setTypePointLoad(event) {
    event.preventDefault()
    loadTypeImg.src = "assets/pointLoad.png"
    fixedEnd1.style.display = "block"
    fixedEnd2.style.display = "block"
    loadType = "pointLoad"
}