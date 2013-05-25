var machine = null;

function HelloWorld()
{
	var test = document.getElementById('fpscontainer');
	machine = new Turing();
	machine.Load();
	test.innerHTML = machine.Print();
}

function LoadJSON()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
		{
			raw = xmlhttp.responseText;
			var result = JSON.parse(raw);
			document.getElementById("fpscontainer").innerHTML = result.states;
		}
	xmlhttp.open("GET", "json/simple.json", true);
	xmlhttp.send();
	};
}

