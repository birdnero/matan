let prev;
const getTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return hours * 60 + minutes;
}

const changeTime = () => {
    prev = getTime()
    const a = Math.floor(Math.random() * prev)
    const b = Math.floor(Math.pow((prev ** 2 - a ** 2), 0.5))
    const text1 = `${a}`
    const text2 = ` +${b}i`
    if(text1.includes("13") || text2.includes("13")){
        document.getElementById("toster").addEventListener("click", () => {
            alert("де гламурний тостер?\nв солярії )))")
        })
    }

    document.querySelector(".number").innerHTML = `<p>${text1}</p><p>${text2}</p>`;
}
changeTime()
setInterval(() => {
    if (getTime() != prev)
        changeTime()
}, 1000)
