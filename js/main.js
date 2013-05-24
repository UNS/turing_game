var machine = null;

function HelloWorld()
{
	var test = document.getElementById('fpscontainer');
	machine = new Turing();
	test.innerHTML = machine.Print();
}

