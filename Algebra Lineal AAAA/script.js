function multiplyMatrices() {
    const a11 = parseFloat(document.getElementById("a11").value);
    const a12 = parseFloat(document.getElementById("a12").value);
    const a21 = parseFloat(document.getElementById("a21").value);
    const a22 = parseFloat(document.getElementById("a22").value);

    const b11 = parseFloat(document.getElementById("b11").value);
    const b12 = parseFloat(document.getElementById("b12").value);
    const b21 = parseFloat(document.getElementById("b21").value);
    const b22 = parseFloat(document.getElementById("b22").value);

    const resultA = a11 * b11 + a12 * b21;
    const resultB = a11 * b12 + a12 * b22;
    const resultC = a21 * b11 + a22 * b21;
    const resultD = a21 * b12 + a22 * b22;

    document.getElementById("result").textContent = `Resultado de la multiplicación:\n[${resultA}, ${resultB}]\n[${resultC}, ${resultD}]`;
}
