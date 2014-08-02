Array.forEach(
    document.querySelectorAll("div")
    ,function(el) {
        if (window.getComputedStyle(el).position === 'fixed') {
            el.style.position = 'static';
        }
    }
);
