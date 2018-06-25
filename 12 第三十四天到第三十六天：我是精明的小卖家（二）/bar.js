const svg = document.querySelector("#svg");
const xml = "http://www.w3.org/2000/svg";

function line(x1, y1, x2, y2, color, width) {
    const aline = document.createElementNS(xml, "line");
    aline.setAttribute("x1", x1);
    aline.setAttribute("y1", y1);
    aline.setAttribute("x2", x2);
    aline.setAttribute("y2", y2);
    aline.setAttribute("stroke", color);
    aline.setAttribute("stroke-width", width);
    return aline;
}

function makeBar(e) {
    const heightMax = 420;
    const widthMax = 800;
    const heightAxis = 400;
    const widthAxis = 5;
    const space = 60;
    const widthBar = 20;
    const colorBar = "green";
    const colorAxis = "gray";
    let max = 0;
    for (let i = 0; i < e.length; i += 1) {
        if (e[i] > max) {
            max = e[i];
        }
    }
    const radio = (heightMax * 0.7) / max;
    const Xaxis = line(0, heightAxis, widthMax, heightAxis, "black", 2);
    svg.appendChild(Xaxis);
    const Yaxis = line(0, heightAxis, 0, 0, "black", 2);
    svg.appendChild(Yaxis);
    for (let i = 0; i < e.length; i += 1) {
        const bar = line(space * (i + 1), heightAxis, space * (i + 1), heightAxis - (e[i] * radio), "black", 10);
        svg.appendChild(bar);
    }
}