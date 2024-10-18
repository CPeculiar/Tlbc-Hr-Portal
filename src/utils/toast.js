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
      progressStyle: { background: '#4CAF50' },
      hideProgressBar: false 
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
  },
  // custom: (message, options = {}) => toast(message, { ...defaultOptions, ...options }),
 
  // Custom styling
  custom: (message) => {
    toast.custom(message, {
      ...defaultConfig,
  className: 'custom-toast',
  progressClassName: 'custom-progress-bar',
});
  }}