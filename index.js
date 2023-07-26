var container = document.getElementById("container");

window.addEventListener('mousemove', (e) => {
    console.log(e.clientY);


    var dataX = e.clientX;
    var dataY = e.clientY;

    if ((dataX > 0) && (dataX < 319) && (dataY < 570)) {

        container.style.backgroundImage = 'url("./media/product.jpg")';

    }
    else if ((dataX > 319) && (dataX < 638) && (dataY < 570)) {

        container.style.backgroundImage = 'url("./media/vr.jpg")';

    }
    else if ((dataX > 638) && (dataX < 960) && (dataY < 570)) {

        container.style.backgroundImage = 'url("./media/farm.jpg")';

    }
    else if ((dataX > 960) && (dataX < 1279) && (dataY < 570)) {

        container.style.backgroundImage = 'url("./media/welding.jpg")';

    }
})

function mouseOuts() {
    container.style.backgroundImage = 'url("./media/full image.jpg")';
}


var menuBtn = document.getElementById("menu");
var navBar = document.getElementById("navBar");
var closeBtn = document.getElementById("close");

menuBtn.addEventListener("click", () => {
    closeBtn.style.display = "block"
    closeBtn.style.transform = "rotate(180deg)";
    closeBtn.style.transition = "5s";
    menuBtn.style.display = "none";
    navBar.classList.add("slide");
})

closeBtn.addEventListener("click", () => {
    navBar.classList.remove("slide");
    closeBtn.style.display = "none"
    menuBtn.style.display = "block";
})