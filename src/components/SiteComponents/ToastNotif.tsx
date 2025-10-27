type ToastType = 'success' | 'error' | 'warning' | 'info';

type Props = {
  toastContent: string;
  type: ToastType;
};

const ToastNotif = ({ toastContent, type }: Props) => {
  return <div className={`toast-notif toast-${type}`}> {toastContent} </div>;
};

export default ToastNotif;
