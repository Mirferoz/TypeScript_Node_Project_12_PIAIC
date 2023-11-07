import chalk from 'chalk';
var ColorType;
(function (ColorType) {
    ColorType["BROWN"] = "brown";
    ColorType["YELLOW"] = "yellow";
    ColorType["GREEN"] = "green";
    ColorType["ORANGE"] = "orange";
    ColorType["RED"] = "red";
})(ColorType || (ColorType = {}));
const colorText = (color, text) => {
    if (color === ColorType.BROWN)
        return chalk.rgb(205, 127, 50)(text);
    else if (color === ColorType.YELLOW)
        return chalk.rgb(181, 166, 66)(text);
    else if (color === ColorType.GREEN)
        return chalk.rgb(158, 253, 56)(text);
    else if (color === ColorType.ORANGE)
        return chalk.rgb(160, 82, 45)(text);
    else if (color === ColorType.RED)
        return chalk.rgb(168, 28, 7)(text);
    return text;
};
const sleep = () => new Promise((res) => setTimeout(res, 2000));
const validateNumber = (input) => {
    if (typeof input !== 'number' || isNaN(input))
        return colorText(ColorType.RED, `☠️☠️ Please enter a valid number!`);
    else
        return true;
};
export { colorText, sleep, validateNumber, ColorType };
