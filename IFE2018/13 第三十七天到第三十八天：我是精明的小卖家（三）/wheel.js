function childrenSeletor(element, pro, value) {
    const el = element;
    const va = value;
    const elArr = [el];
    const result = [];
    while (elArr.length > 0) {
        const ele = elArr.shift();
        if (ele[pro] !== undefined && ele[pro] === va) {
            result.push(ele);
        }
        if (ele.children) {
            for (let i = 0; i < ele.children.length; i += 1) {
                elArr.push(ele.children[i]);
            }
        }
    }
    return result;
}
