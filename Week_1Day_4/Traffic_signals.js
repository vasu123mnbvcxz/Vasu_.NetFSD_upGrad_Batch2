function signals(lights){
    var lights=lights.toLowerCase();
    switch(lights){
        case "red":
            console.log('Stop');
            break;
        case "green":
            console.log('Go');
            break;
        case "orange":
            console.log('Get Ready');
            break;
        default:
            console.log('Invalid inputs');
            break;
    }
}
signals("Red");
