// Тупо взяв з відео Репети:)

const counterValue = function ({
	rootSelector,
	initialValue = 0,
	step = 1,
} = {}) {
	this._value = initialValue;
	this._step = step;

	this.refs = this._getRefs(rootSelector);
	this._bindEvents();
};

counterValue.prototype._getRefs = function (rootSelector) {
	console.log(rootSelector);

	const refs = {};
	refs.containet = document.querySelector(rootSelector);
	refs.decrementBtn = refs.containet.querySelector(`[data-action="decrement"]`);
	refs.incrementBtn = refs.containet.querySelector(`[data-action="increment"]`);
	refs.value = refs.containet.querySelector(`#value`);

	return refs;
};

counterValue.prototype._bindEvents = function () {
	this.refs.decrementBtn.addEventListener("click", () => {
		console.log("Зменшуємо", this);
		this.decrement();
		this.changeValue();
	});

	this.refs.incrementBtn.addEventListener("click", () => {
		console.log("Збільшуємо", this);
		this.increment();
		this.changeValue();
	});
};

counterValue.prototype.changeValue = function () {
	this.refs.value.textContent = this._value;
};

counterValue.prototype.increment = function () {
	this._value += this._step;
};

counterValue.prototype.decrement = function () {
	this._value -= this._step;
};

const counter = new counterValue({ rootSelector: `#counter`, step: 1 });


