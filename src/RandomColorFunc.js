export default function RandomColorFunc() {
  return `#${String(Math.floor(Math.random() * 100000000)).slice(0, 6)}`;
}
