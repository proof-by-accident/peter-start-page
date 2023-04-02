const defaultConfig = {
	username: "peter",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#DBBC7F",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#4B565C",
		red: "#E67E80",
		green: "#A7C080",
		yellow: "#fcec7d",
		blue: "#7FBBB3",
		cyan: "#83C092",
		magenta: "#D699B6",
		violet: "#83C092",
		orange: "#D3C6AA"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: false,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "yellow",
		atColor: "gray",
		hostColor: "yellow",
		promptColor: "yellow",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "yellow"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			},
			{
				alias: "a",
				name: "ArchWiki Search",
				url: "https://wiki.archlinux.org/index.php?search={}"
			},
			{
				alias: "aps",
				name: "Arch Pack Search",
				url: "https://archlinux.org/packages/?sort=&q="
			},
			{
				alias: "aur",
				name: "AUR Search",
				url: "https://aur.archlinux.org/packages?K={}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				align: "left",
				links: [
					{
						name: "Blog",
						url: "https://www.petershaffery.net",
						icon: "mdi:web"
					},
					{
						name: "Email",
						url: "https://mail.protonmail.com",
						icon: "mdi:email-outline"
					},
					{
						name: "Calendar",
						url: "https://calendar.protonmail.com",
						icon: "mdi:calendar"
					},
					{
						name: "Lichess",
						url: "https://lichess.org",
						icon: "fa6-regular:chess-knight"
					}
				]
			},
			{
				title: "Music",
				color: "blue",
				align: "left",
				links: [
					{
						name: "Soundcloud",
						url: "https://www.soundcloud.com",
						icon: "mdi:soundcloud"
					},
					{
						name: "Bandcamp",
						url: "https://www.bandcamp.com",
						icon: "simple-icons:bandcamp"
					},
					{
						name: "Spotify",
						url: "https://www.spotify.com",
						icon: "simple-icons:spotify"
					},
					{
						name: "Resident Advisor",
						url: "https://ra.co",
						icon: "fa6-solid:record-vinyl"
					}
				]
			},
			{
				title: "News",
				color: "red",
				align: "left",
				links: [
					{
						name: "Denverite",
						url: "https://denverite.com",
						icon: "mdi:twitter"
					},
					{
						name: "Colorado Sun",
						url: "https://coloradosun.com",
						icon: "fa6-regular:sun"
					},
					{
						name: "NYTimes",
						url: "https://nytimes.com",
						icon: "simple-icons:newyorktimes"
					}
				]
			},
			{
				title: "Home",
				color: "green",
				align: "left",
				links: [
					{
						name: "Router",
						url: "100.100.0.1",
						icon: "fa6-regular:wifi"
					},
					{
						name: "Bjork",
						url: "100.100.0.204",
						icon: "fa6-regular:speaker"
					},
					{
						name: "Opti",
						url: "100.100.0.2",
						icon: "fa6-regular:brain-circuit"
					}
				]
			},
			{
				title: "Apps",
				color: "blue",
				align: "left",
				links: [
					{
						name: "YouTube",
						url: "youtube.com",
						icon: "simple-icons:youtube"
					},
					{
						name: "Maps",
						url: "maps.google.com",
						icon: "simple-icons:googlemaps"
					},
					{
						name: "ChatGPT",
						url: "chat.openai.com",
						icon: "simple-icons:openai"
					}
				]
			},
			{
				title: "Tech",
				color: "red",
				align: "left",
				links: [
					{
						name: "HackerNews",
						url: "news.ycombinator.com",
						icon: "simple-icons:ycombinator"
					},
					{
						name: "ArsTechnica",
						url: "arstechnica.com",
						icon: "fa6-regular:circle"
					},
					{
						name: "Verge",
						url: "theverge.com",
						icon: "arcticons:verge"
					}
				]
			}
		]
	}
}

export default defaultConfig
