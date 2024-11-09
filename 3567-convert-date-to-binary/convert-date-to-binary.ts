function convertDateToBinary(date: string): string {
return date.split("-").map((item) => (Number(item).toString(2))).join("-");
};