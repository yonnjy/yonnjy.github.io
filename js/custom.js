$(function () {
    $('#main').fullpage({
        anchors: ['intro', 'p01', 'p02', 'p03', 'p04', 'p05', 'p06', 'tranning', 'profile'],
        navigation: false,
        css3: false,
        scrollOverflow: false,
        scrollingSpeed: 1200,
        parallax: true,

        afterRender: function () {
            $('#main .section').eq(0).addClass('on');
        },

        afterLoad: function (lnk, idx) {
            $('#main .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },

        onLeave: function (idx, nidx) {
            $('.btn_link li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
        }
    });

    // mouse pointer
    const cursor = document.querySelector("#cursor");

        let mouse = { x: -100, y: -100 }
        let pos = { x: 0, y: 0 }
        const speed = 0.1

        const updateCoordinates = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }
        window.addEventListener("mousemove", updateCoordinates);

        const updatePosition = () => {
            pos.x += (mouse.x - pos.x) * speed
            pos.y += (mouse.y - pos.y) * speed
            cursor.style.transform =
                "translate3d(" + pos.x + "px ," + pos.y + "px, 0)"
        }

        const loop = () => {
            updatePosition();
            requestAnimationFrame(loop);
        }

        requestAnimationFrame(loop);

        const cursorModifiers = document.querySelectorAll("[cursor-class]");

        cursorModifiers.forEach((cursorModifier) => {
            cursorModifier.addEventListener("mouseenter", function () {
                let attribute = this.getAttribute("cursor-class");
                cursor.classList.add(attribute);
            });

            cursorModifier.addEventListener("mouseleave", function () {
                let attribute = this.getAttribute("cursor-class");
                cursor.classList.remove(attribute);
            });
        });
});