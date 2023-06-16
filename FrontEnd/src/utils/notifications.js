import { toast, ToastContainer } from "react-toastify";

export function pushNotification(msg, type, position, duration) {
  if (type === "info") {
    return toast.info(msg, {
      position: "top-right",
      autoClose: 4000,
      pauseOnFocusLoss: true,
      pauseOnHover: false,
      newestOnTop: true,
    });
  } else if (type === "success") {
    return toast.success(msg, {
      position: "top-right",
      autoClose: 4000,
      pauseOnFocusLoss: true,
      pauseOnHover: false,
      newestOnTop: true,
    });
  } else if (type === "warning") {
    return toast.warn(msg, {
      position: "top-right",
      autoClose: 4000,
      pauseOnFocusLoss: true,
      pauseOnHover: false,
      newestOnTop: true,
    });
  } else if (type === "error") {
    return toast.error(msg, {
      position: "top-right",
      autoClose: 4000,
      pauseOnFocusLoss: true,
      pauseOnHover: false,
      newestOnTop: true,
    });
  } else {
    return toast.info(msg, {
      position: "top-right",
      autoClose: 4000,
      pauseOnFocusLoss: true,
      pauseOnHover: false,
      newestOnTop: true,
    });
  }
}
