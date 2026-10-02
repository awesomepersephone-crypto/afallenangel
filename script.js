const items = document.querySelectorAll(".draggable");

items.forEach(function(item) {

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    item.addEventListener("mousedown", function(event) {

        dragging = true;

        const rect = item.getBoundingClientRect();

        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;

        // Remember the box's current size
        item.style.width = rect.width + "px";
        item.style.height = rect.height + "px";

        // Take the box out of the grid while dragging
        item.style.position = "fixed";
        item.style.zIndex = "1000";
    });

    document.addEventListener("mousemove", function(event) {

        if (!dragging) return;

        item.style.left = (event.clientX - offsetX) + "px";
        item.style.top = (event.clientY - offsetY) + "px";

    });

    document.addEventListener("mouseup", function() {

        dragging = false;

    });

});