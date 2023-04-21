const elem = document.getElementById("cookie");
elem.onclick = () => {
    const coun = document.getElementById("clicker__counter");
    coun.textContent++;
    if (elem.width == '300') {
        elem.width = '200';
    } else if (elem.width == '200') {
        elem.width = '300';
    }
}