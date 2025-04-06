
const DATABASE_URL = "https://feedback-board-83332-default-rtdb.firebaseio.com/feedbacks";

export const postFeedback = async (feedback) => {
  const res = await fetch(`${DATABASE_URL}.json`, {
    method: "POST",
    body: JSON.stringify(feedback),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
};

export const getFeedbacks = async () => {
  const res = await fetch(`${DATABASE_URL}.json`);
  return res.json();
};

export const deleteFeedback = async (id) => {
  const res = await fetch(`${DATABASE_URL}/${id}.json`, { method: "DELETE" });
  return res;
};
