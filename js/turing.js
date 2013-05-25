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
}

Turing.prototype.Turn = function () 
{
	this.Print();
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

Turing.prototype.Print = function () 
{
	return 'state: ' + this.currentState + ' head: ' + this.head 
		+ ' value: ' + this.GetHeadValue();
}