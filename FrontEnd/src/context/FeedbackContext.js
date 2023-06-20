import React, { createContext } from "react";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children, data }) => {
  // const [feedback, setFeedback] = useState(data);
  const feedback=data;
  return (
    <FeedbackContext.Provider value={feedback}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
