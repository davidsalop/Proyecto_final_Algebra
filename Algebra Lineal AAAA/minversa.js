function calculateInverse() {
    const a11 = parseFloat(document.getElementById("a11").value);
    const a12 = parseFloat(document.getElementById("a12").value);
    const a21 = parseFloat(document.getElementById("a21").value);
    const a22 = parseFloat(document.getElementById("a22").value);

    const determinant = a11 * a22 - a12 * a21;

    if (determinant === 0) {
        document.getElementById("result").textContent = "La matriz no es invertible (determinante = 0).";
    } else {
        const inverseA11 = a22 / determinant;
        const inverseA12 = -a12 / determinant;
        const inverseA21 = -a21 / determinant;
        const inverseA22 = a11 / determinant;

        document.getElementById("result").textContent = `Inversa de la matriz:\n[${inverseA11}, ${inverseA12}]\n[${inverseA21}, ${inverseA22}]`;
    }
}
