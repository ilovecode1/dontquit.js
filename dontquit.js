var dontquit = {
    defaultText: "You sure you want to leave?",
    Version: 1.0,
    Author: "Cosmic Web Services",
	do: function(e){
        if(!e) e = window.event;
        e.cancelBubble = true;
        e.returnValue = dontquit.defaultText; 
        if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
};
