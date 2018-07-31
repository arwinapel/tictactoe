// JavaScript Document
$(document).ready(function() {
	var player = 'o';
	var o_win = 0, x_win = 0, count = 0;
	var flagWin = false
	$('#game li').click(function() {
		let $this = $(this)
		if(!flagWin) {
			if(count == 9) {
				alert('Its a tie. It will restart.')
				reset()
			} else {
				if(!getFlag($this)) {
					count++
					changeState($this);
					if(checkIfPlayerWon()) {
						alert(player + ' has won the game. Start a new game')
						if(player == "x") {
							x_win++
							$("#x_win").text(x_win)
						} else {
							o_win++
							$("#o_win").text(o_win)
						}
						flagWin = true
					} else {
						setNextPlayer();
					}
				} else {
					alert('This box is already checked.');
				}
			}
		} else {
			alert(player + ' has won the game. Start a new game')
			flagWin = false
			reset()
		}
	});
	
	function setNextPlayer() {
		if(player == "x") {
			player = "o"
		} else {
			player = "x"
		}
	}
	
	function getFlag(flag) {
		if(flag.hasClass('o') || flag.hasClass('x')) {
			return true
		} else {
			return false
		}
	}

	function changeState(flag) {
		flag.text(player)
		flag.addClass('disable btn-primary ' + player)
	}
	
	function checkIfPlayerWon() {
		let won = false
		if($("#one").hasClass(player) && $("#two").hasClass(player) && $("#three").hasClass(player) || 
			$("#four").hasClass(player) && $("#five").hasClass(player) && $("#six").hasClass(player) || 
			$("#seven").hasClass(player) && $("#eight").hasClass(player) && $("#nine").hasClass(player) || 
			$("#one").hasClass(player) && $("#four").hasClass(player) && $("#seven").hasClass(player) || 
			$("#two").hasClass(player) && $("#five").hasClass(player) && $("#eight").hasClass(player) || 
			$("#three").hasClass(player) && $("#six").hasClass(player) && $("#nine").hasClass(player) || 
			$("#one").hasClass(player) && $("#five").hasClass(player) && $("#nine").hasClass(player) || 
			$("#three").hasClass(player) && $("#five").hasClass(player) && $("#seven").hasClass(player)) {
			won = true
		}
		return won;
	}
	
	function reset() {
		$("#game li").text("+");
		$("#game li").removeClass('disable')
		$("#game li").removeClass('o')
		$("#game li").removeClass('x')
		$("#game li").removeClass('btn-primary')
		$("#game li").removeClass('btn-info')
		count = 0
	}
	
	$("#reset").click(function () {
		reset()
		$("#x_win").text(0)
		$("#o_win").text(0)
  });
});
