// import ToastNotif from '../components/SiteComponents/ToastNotif';
// import { wip } from '../utils/toastData.ts';
import ServicesTable from '../components/ServicesComponents/ServicesTable';
import SiteForm from '../components/SiteComponents/SiteForm.tsx';
import FormBlurb from '../components/SiteComponents/FormBlurb.tsx';

const ServicesPage = () => {
  return (
    <>
      {/* <ToastNotif toastContent={wip} type={'warning'} /> */}
      <ServicesTable />
      <div className='form-section'>
        <FormBlurb />
        <SiteForm />
      </div>
    </>
  );
};

export default ServicesPage;
