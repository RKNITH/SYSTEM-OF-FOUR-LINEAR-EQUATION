document.getElementById('linearForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Coefficients for the equations
    let a1 = parseFloat(document.getElementById('a1').value);
    let b1 = parseFloat(document.getElementById('b1').value);
    let c1 = parseFloat(document.getElementById('c1').value);
    let d1 = parseFloat(document.getElementById('d1').value);
    let e1 = parseFloat(document.getElementById('e1').value);

    let a2 = parseFloat(document.getElementById('a2').value);
    let b2 = parseFloat(document.getElementById('b2').value);
    let c2 = parseFloat(document.getElementById('c2').value);
    let d2 = parseFloat(document.getElementById('d2').value);
    let e2 = parseFloat(document.getElementById('e2').value);

    let a3 = parseFloat(document.getElementById('a3').value);
    let b3 = parseFloat(document.getElementById('b3').value);
    let c3 = parseFloat(document.getElementById('c3').value);
    let d3 = parseFloat(document.getElementById('d3').value);
    let e3 = parseFloat(document.getElementById('e3').value);

    let a4 = parseFloat(document.getElementById('a4').value);
    let b4 = parseFloat(document.getElementById('b4').value);
    let c4 = parseFloat(document.getElementById('c4').value);
    let d4 = parseFloat(document.getElementById('d4').value);
    let e4 = parseFloat(document.getElementById('e4').value);

    // Coefficient matrix
    let A = [
        [a1, b1, c1, d1],
        [a2, b2, c2, d2],
        [a3, b3, c3, d3],
        [a4, b4, c4, d4]
    ];

    // Constant matrix
    let B = [e1, e2, e3, e4];

    // Solve the system of equations
    let solutions = solveLinearSystem(A, B);
    displayResult(solutions);
});

function solveLinearSystem(A, B) {
    // Use math.js to solve the linear system A * X = B
    try {
        let X = math.lusolve(A, B);
        return X.map(x => x[0].toFixed(5));
    } catch (error) {
        return ['No unique solution'];
    }
}

function displayResult(solutions) {
    let resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = 'Solutions: <br>' + solutions.join('<br>');
}
