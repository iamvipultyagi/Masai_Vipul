
// Ensure firebase.js is loaded before this script if using module bundlers or combine them
function FeedbackForm({ onSubmit }) {
  const [form, setForm] = React.useState({ name: "", email: "", comment: "" });
  const [message, setMessage] = React.useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, comment } = form;

    if (!name || !email || !comment) {
      setMessage("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Invalid email format.");
      return;
    }

    await onSubmit(form);
    setMessage("Feedback submitted successfully!");
    setForm({ name: "", email: "", comment: "" });

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Submit Feedback</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" />
      <textarea name="comment" value={form.comment} onChange={handleChange} placeholder="Your comment..." />
      <button type="submit">Send</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
}

function FeedbackItem({ id, name, email, comment, onDelete }) {
  return (
    <div className="feedback-card">
      <h3>{name}</h3>
      <p>{comment}</p>
      <small>{email}</small>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

function FeedbackList({ feedbacks, onDelete }) {
  return (
    <div className="feedback-list">
      {Object.entries(feedbacks).map(([id, fb]) => (
        <FeedbackItem key={id} id={id} {...fb} onDelete={onDelete} />
      ))}
    </div>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");

  React.useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

function App() {
  const [feedbacks, setFeedbacks] = React.useState({});

  const fetchFeedbacks = async () => {
    const res = await fetch("https://feedback-board-83332-default-rtdb.firebaseio.com/feedbacks.json");
    const data = await res.json();
    setFeedbacks(data || {});
  };

  React.useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSubmit = async (form) => {
    await fetch("https://feedback-board-83332-default-rtdb.firebaseio.com/feedbacks.json", {
      method: "POST",
      body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
    });
    fetchFeedbacks();
  };

  const handleDelete = async (id) => {
    await fetch(\`https://feedback-board-83332-default-rtdb.firebaseio.com/feedbacks/\${id}.json\`, {
      method: "DELETE",
    });
    fetchFeedbacks();
  };

  return (
    <div className="app">
      <header>
        <h1>Feedback Board</h1>
        <ThemeToggle />
      </header>
      <main className="grid-layout">
        <FeedbackForm onSubmit={handleSubmit} />
        <FeedbackList feedbacks={feedbacks} onDelete={handleDelete} />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
