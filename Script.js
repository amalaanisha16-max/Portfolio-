<script>
// Change the website title dynamically
document.title = "Welcome to Amala Anisha - Technology & ML";

// Example: rotate titles every 3 seconds
let titles = [
  "Amala Anisha - Home",
  "Exploring Technology",
  "Machine Learning Insights"
];
let i = 0;
setInterval(() => {
  document.title = titles[i];
  i = (i + 1) % titles.length;
}, 3000);
</script>
