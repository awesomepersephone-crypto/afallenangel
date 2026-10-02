const items = document.querySelectorAll(".draggable");

items.forEach(function(item) {

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    item.addEventListener("mousedown", function(event) {

        dragging = true;

        const rect = item.getBoundingClientRect();

        // Account for the page's scroll position
        offsetX = event.pageX - (rect.left + window.scrollX);
        offsetY = event.pageY - (rect.top + window.scrollY);

        // Remember the box's current size
        item.style.width = rect.width + "px";
        item.style.height = rect.height + "px";

        // Keep the box attached to the PAGE, not the screen
        item.style.position = "absolute";
        item.style.zIndex = "1000";

        // Prevent selecting text while dragging
        event.preventDefault();
    });

    document.addEventListener("mousemove", function(event) {

        if (!dragging) return;

        // pageX/pageY include scrolling
        item.style.left = (event.pageX - offsetX) + "px";
        item.style.top = (event.pageY - offsetY) + "px";

    });

    document.addEventListener("mouseup", function() {

        dragging = false;

    });

});