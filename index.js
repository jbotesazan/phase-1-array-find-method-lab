const superbowlWin = function(item) {

    let win = item.find( function(element) {
        return element.result === "W"       
     });

    if (win === undefined) {
        return;
    }

    return win.year
}