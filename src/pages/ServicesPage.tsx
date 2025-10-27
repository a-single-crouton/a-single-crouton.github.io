import ServicesTable from '../components/ServicesComponents/ServicesTable';
import ToastNotif from '../components/SiteComponents/ToastNotif';
import { wip } from '../utils/toastData.ts';

const ServicesPage = () => {
  return (
    <>
      <ToastNotif toastContent={wip} type={'warning'} />
      <ServicesTable />
    </>
  );
};

export default ServicesPage;
