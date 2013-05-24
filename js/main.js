var machine = null;

function HelloWorld()
{
	var test = document.getElementById('fpscontainer');
	machine = new Turing();
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
			document.getElementById("fpscontainer").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", "json/simple.json", true);
	xmlhttp.send();
}

