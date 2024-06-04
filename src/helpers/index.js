export function capitalizeSentence(string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join(" ");
}
