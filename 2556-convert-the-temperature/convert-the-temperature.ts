function convertTemperature(celsius: number): number[] {
    const kelvin = 273.15 + celsius;
    const fahrenheit = (celsius * 1.8) + 32;
    const ans = [kelvin, fahrenheit]
    return ans
};