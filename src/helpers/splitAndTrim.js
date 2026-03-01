export default function splitAndTrim(string, simbolForSplit = "", simbolForTrim = " ") {
    return string.split(simbolForSplit).map((el) => el.trim(simbolForTrim));
}