function solve2x2Cramer(a, b, c, d, e, f) {
    const determinant = a * d - b * c;

    if (determinant === 0) {
        return "Sistema sin solución o con soluciones infinitas";
    } else {
        const x = (e * d - b * f) / determinant;
        const y = (a * f - e * c) / determinant;
        return `Solución única: x = ${x}, y = ${y}`;
    }
}
