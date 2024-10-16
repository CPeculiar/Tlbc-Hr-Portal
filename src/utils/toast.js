// src/utils/toast.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultConfig = {
  position: "top-right",
  autoClose: 2300,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const showToast = {
  success: (message) => {
    toast.success(message, {
      ...defaultConfig,
      className: 'toast-success',
    });
  },
  error: (message) => {
    toast.error(message, {
      ...defaultConfig,
      className: 'toast-error',
    });
  },
  info: (message) => {
    toast.info(message, {
      ...defaultConfig,
      className: 'toast-info',
    });
  },
  warning: (message) => {
    toast.warning(message, {
      ...defaultConfig,
      className: 'toast-warning',
    });
  }
};