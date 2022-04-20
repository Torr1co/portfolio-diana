export default function scroll(id: string, e: React.MouseEvent) {
  e.preventDefault(); // Stop Page Reloading
  const el = document.getElementById(`${id}`);
  el && el.scrollIntoView({ behavior: "smooth" });
}
