$(function () {
    $('a.main-nav-toggle').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('active-menu')) {
            $(this).removeClass('active-menu');
        } else {
            $(this).addClass('active-menu');
        }
    });
});

$(function () {
    $('.ja-btn-primary, .ja-btn-outline-primary')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span.ja-btn-bg-shape').css({ top: relY, left: relX })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span.ja-btn-bg-shape').css({ top: relY, left: relX })
        });
});

$(function () {
    $('.ja-story-tree-btn').hover(
        function () {
            $(this).css({
                "filter": "drop-shadow(rgba(255, 255, 255, 100%) 0px -1px 1px) drop-shadow(rgba(255, 255, 255, 100%) 0px 2px 1px)"
            })
            $(".story-tree svg").css({
                "filter": "drop-shadow(rgba(255, 255, 255, 100%) 0px -1px 1px) drop-shadow(rgba(255, 255, 255, 100%) 0px 2px 1px)"
            })
        },
        function () {
            $(this).css({
                "filter": "drop-shadow(rgba(255, 255, 255, 30%) 0px -1px 1px) drop-shadow(rgba(255, 255, 255, 30%) 0px 2px 1px)"
            })
            $(".story-tree svg").css({
                "filter": "drop-shadow(rgba(255, 255, 255, 30%) 0px -1px 1px) drop-shadow(rgba(255, 255, 255, 30%) 0px 2px 1px)"
            })
        },
    )

    $('.story-tree svg path').hover(
        function () {
            $(this).css({ "cursor": "pointer" });
            $(".story-tree svg").css({
                "filter": "drop-shadow(rgba(255, 255, 255, 100%) 0px -1px 1px) drop-shadow(rgba(255, 255, 255, 100%) 0px 2px 1px)"
            })
            $(".ja-story-tree-btn").css({
                "filter": "drop-shadow(rgba(255, 255, 255, 100%) 0px -1px 1px) drop-shadow(rgba(255, 255, 255, 100%) 0px 2px 1px)"
            })
        },
        function () {
            $(this).css({ "cursor": "default" });
            $(".story-tree svg").css({
                "filter": "drop-shadow(rgba(255, 255, 255, 30%) 0px -1px 1px) drop-shadow(rgba(255, 255, 255, 30%) 0px 2px 1px)"
            })
            $(".ja-story-tree-btn").css({
                "filter": "drop-shadow(rgba(255, 255, 255, 30%) 0px -1px 1px) drop-shadow(rgba(255, 255, 255, 30%) 0px 2px 1px)"
            })
        },
    )

    $('.story-tree svg path').click(
        function () {
            window.location.href = '/about';
            return false;
        });
});
