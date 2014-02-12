// Smooth Scroll taken from "http://css-tricks.com/snippets/jquery/smooth-scrolling/"
var socket = io.connect('/')

$(document).ready(function () {
	setTimeout(function () {
		$('.icons').css('opacity', 1);
		setTimeout(function () {
			$('.icon_desc').css('opacity','0')
			setTimeout(function () {
				$('.icon_desc').css('transition','opacity 0.25s')
			},1200)
		}, 3000)
	}, 500)

	$('.icon img').on('mouseover', function (e) {
		var currIcon = $(e.currentTarget),
			desc = $(currIcon).next('.icon_desc'),
			descDiv = $(desc)
		descDiv.css('top', '25px')
		descDiv.css('opacity', '1')
	}).on('mouseout', function (e) {
		var currIcon = $(e.currentTarget),
			desc = $(currIcon).next('.icon_desc'),
			descDiv = $(desc)
		descDiv.css('top', '15px')
		descDiv.css('opacity', '0')
	})
})