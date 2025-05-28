// theme toggle
function toggleTheme() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "/styles/light.css") {
        theme.setAttribute("href", "/styles/dark.css");
    } else {
        theme.setAttribute("href", "/styles/light.css");
    }
}

// cookie will NOT work with vscode live preview.
document.addEventListener("DOMContentLoaded", () => {
	const isDark = window.matchMedia("(prefers-color-scheme: dark)");
    let theme = document.getElementById("theme");

	// set cookie for one year
	function setFirstTimeCookie(name,value,days) {
		const date = new Date();
		date.setFullYear(date.getFullYear() + 1); // Cookie valid for 1 year
		document.cookie = `firstTimeVisitor=true; expires=${date.toUTCString()}; path=/`;
	}

	// check if cookie exists
	function getCookie(name) {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith(name + '='));
        return cookieValue ? cookieValue.split('=')[1] : null;
    }

	// if cookie exists, do nothing. if cookie does not exist, make one and check if dark mode is on. is dark mode is on, set to dark mode.
	if (getCookie("firstTimeVisitor") === "true") {
		return;
	} else {
		setFirstTimeCookie();
		if (isDark.matches) {
			theme.setAttribute("href", "/styles/dark.css");
		}
	}

});

// dark mode cookie functions
function darkmode_init()
{
	let darkmodeCookie = {
		set:function(key,value,time,path,secure=false)
		{
			let expires = new Date();
			expires.setTime(expires.getTime() + time);
			var path   = (typeof path !== 'undefined') ? pathValue = 'path=' + path + ';' : '';
			var secure = (secure) ? ';secure' : '';
			
			document.cookie = key + '=' + value + ';' + path + 'expires=' + expires.toUTCString() + secure;
		},
		get:function()
		{
			let keyValue = document.cookie.match('(^|;) ?darkmode=([^;]*)(;|$)');
			return keyValue ? keyValue[2] : null;
		},
		remove:function()
		{
			document.cookie = 'darkmode=; Max-Age=0; path=/';
		}
	};
	
// 	turn on dark css if darkmode cookie is true
	if(darkmodeCookie.get() == 'true')
	{
		theme.setAttribute("href", "/styles/dark.css");
	}
    
// add event listener that sets darkmode cookie to true if dark css is used. delete if false.
    window.addEventListener('click', () => {
        if (theme.getAttribute("href") == "/styles/dark.css") {
            darkmodeCookie.set('darkmode','true',2628000000,'/',false);
        } else {
            darkmodeCookie.remove();
        }
    });
}