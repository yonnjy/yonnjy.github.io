$('#main').fullpage({
    anchors: ['intro', 'p01', 'p02', 'p03', 'p04', 'p05', 'p06', 'tranning', 'profile'],
    navigation: false,
    css3: false,
    scrollOverflow: false,

    afterRender: function () {
        $('#main .section').eq(0).addClass('on');
        // $('.btn_link li').eq(0).addClass('on').siblings().removeClass('on');
    },

    afterLoad: function (lnk, idx) {
        $('#main .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        $('.btn_link li').eq(idx - 1).addClass('on').siblings().removeClass('on');

    },
});