// Set a useless-looking on click method for all solutions -
// so that iOS can respond to clicks and display the solutions
window.onload = function() {
        var solutions = document.getElementsByClassName('solution');
        for(var i = 0; i < solutions.length; i++) {
          sol = solutions[i];
          sol.onclick = function() { void(0) }
    }
}
