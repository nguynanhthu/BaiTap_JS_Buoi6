(() => {
	var n = 0;
	var _result = 0;
	do {
		n++;
		_result += n;
	} while (_result < 10000);
	document.getElementById("minNumber").innerHTML = n;
})();

document.getElementById("calculation").onclick = () => {
	var x = Number(document.getElementById("xNumber").value);
	var n = Number(document.getElementById("nNumber").value);

	var _result = 0;
	for (var i = 1; i <= n; i++) {
		_result += Math.pow(x, i);
	}
	document.getElementById("sum").innerHTML = `Kết quả là ${_result}`;
};

document.getElementById("btnGiaiThua").onclick = () => {
	var n = Number(document.getElementById("nGiaiThua").value);

	var giaiThua = (n) => {
		if (n > 0) return n * giaiThua(n - 1);
		else return 1;
	};

	document.getElementById("resultGiaiThua").innerHTML = `Kết quả là ${giaiThua(
		n
	)}`;
};

document.getElementById("btnTaoDiv").onclick = () => {
	var box = document.getElementById("box");
	for (let i = 0; i < 10; i++) {
		var div = document.createElement("div");
		div.textContent = `Div thứ ${i + 1}`;
		div.className = (i + 1) % 2 === 0 ? "red" : "blue";
		box.appendChild(div);
	}
};
