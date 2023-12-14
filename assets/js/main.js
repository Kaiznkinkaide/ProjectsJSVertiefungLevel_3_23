let trenne = () => {
    let input1 = document.querySelector("#input1").value
    let input2 = document.querySelector("#input2").value
    let radio1 = document.querySelector("#radio1").checked
    let radio2 = document.querySelector("#radio2").checked
    let output2 = document.querySelector("#output2")
    let output1 = document.querySelector("#output1")

    let atIndex = input1.indexOf(input2)

    let slice1 = input1.slice(0, atIndex)
    let slice2 = input1.slice(atIndex)
    let slice3 = input1.slice(0, atIndex +1)
    let slice4 = input1.slice(atIndex +1)

    switch(true){
        case radio1:
        output1.innerHTML = slice1
        output2.innerHTML = slice2
        break;
        case radio2:
        output1.innerHTML = slice3
        output2.innerHTML = slice4
        break;
        default:
            output1.innerHTML = "Davor? oder danach?"
            output2.innerHTML = "daemlicher BASTARD!"


    }



}