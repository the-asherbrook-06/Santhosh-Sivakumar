rightCollapsed = document.querySelector("#navigation .rightCollapsed span");
rightFoldedContext = document.querySelector("#navigation .rightFoldedContext");
rightFoldedContextLink = document.querySelectorAll("#navigation .rightFoldedContext a");
isCollapsed = true;

function toggleCollapse() {
    if(!isCollapsed) {
        rightCollapsed.innerHTML = "menu";
        rightFoldedContext.style.height = "0";
        rightFoldedContext.style.padding = "0";
    }
    else {
        rightCollapsed.innerHTML = "menu_open";
        rightFoldedContext.style.height = "90vh";
        rightFoldedContext.style.padding = "1vh 1vw";
    }
    isCollapsed = !isCollapsed;
}

rightCollapsed.addEventListener("click", toggleCollapse);
rightFoldedContextLink.forEach(link => { link.addEventListener("click", toggleCollapse); });