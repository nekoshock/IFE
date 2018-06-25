function makeBar(e) {
    const heightMax = 400;
    const widthMax = 800;
    const heightAxis = 400;
    const widthAxis = 5;
    const space = 60;
    const widthBar = 20;
    const colorBar = "green";
    const colorAxis = "gray";
    let max = 0;
    for (let i = 0; i < e[0].sale.length; i += 1) {
        if (e[0].sale[i] > max) {
            max = e[0].sale[i];
        }
    }
    const radio = (heightMax * 0.7) / max;
    
}