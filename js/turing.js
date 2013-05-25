Turing = function () 
{
}

Turing.prototype.Load = function () 
{
	this.instructions = [ 
	{state:0,value:-1,nextState:1,nextValue:-1,move:1},
	{state:1,value:-1,nextState:0,nextValue:-1,move:-1}
	];
	this.head = 0;
	this.currentState = 0;
	this.tape = [-1,-1];
	this.reversTape = [-1,-1];
	this.isFinished = false;
}

Turing.prototype.GetHeadValue = function ()
{
	if (this.head >=0)
	{
		if (this.head < this.tape.length) return this.tape[this.head];
		else return -1;
	}
	else
	{
		if (-this.head < this.reversTape.length) return this.reversTape[-this.head];
		else return -1;
	}
}

Turing.prototype.SetHeadValue = function (newValue)
{
	if (this.head >=0)
	{
		while (this.head >= this.tape.length) this.tape.push(-1);
		this.tape[this.head]=newValue;
	}
	else
	{
		while (-this.head >= this.reversTape.length) this.reversTape.push(-1);
		this.reversTape[-this.head]=newValue;
	}
}

Turing.prototype.Turn = function () 
{
	var actualCommand = null;
	var currentValue = this.GetHeadValue();
	var that = this;
	
	this.instructions.forEach(function(element)
		{
			if (null==actualCommand && 
			that.currentState==element.state &&
			currentValue==element.value) 
			actualCommand = element; 
		});
		
	if (null==actualCommand) 
	{
		this.isFinished=true;
		return 'finished!';
	}
	
	this.SetHeadValue(actualCommand.nextValue);
	this.currentState = actualCommand.nextState;
	this.head += actualCommand.shift;
	
	return ' state: ' + actualCommand.state + ' value: ' + actualCommand.value
			+ ' nextState: ' + actualCommand.nextState + ' nextValue: ' + actualCommand.nextValue
			+ ' shift: ' + actualCommand.move;
}

Turing.prototype.Print = function () 
{
	return 'state: ' + this.currentState + ' head: ' + this.head 
		+ ' value: ' + this.GetHeadValue() + ' finished: ' + this.isFinished;
}