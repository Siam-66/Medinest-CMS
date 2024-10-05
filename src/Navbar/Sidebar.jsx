
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
           
            <div className='flex flex-col gap-5 w-[200px] overflow-y-scroll h-[800px] ...'>
                
                <Link to="/">Home</Link>
                <Link to="navDrawer">Nav Drawer</Link>
                <Link to="contactUs">Contact Us</Link>
                <Link to="aboutUs">About Us</Link>
                <Link to="privacyPolicy">Privacy Policy</Link>
                <Link to="termsConditions">Terms Condition</Link>
                
                <div className='divider'></div>
                <div className='text-2xl text-amber-300'>Main Navigation:</div>
                <Link to="/admin">Admin</Link>
                <Link to="/department">Department</Link>
                <Link to="/doctor">Doctor</Link>
                <Link to="/patient">Patient</Link>
                <Link to="/nurse">Nurse</Link>
                <Link to="/pharmacist">Pharmacist</Link>
                <Link to="/laboratorist">Laboratorist</Link>
                <Link to="/bloodDonor">Blood Donor</Link>
                <div className='divider'></div>
                <div className='text-2xl text-amber-300'>Management & Logistics:</div>
                <Link to="/appointment">Appointment</Link>
                <Link to="/prescription">Prescription</Link>
                <Link to="/medicine">Medicine</Link>
                <Link to="/bedAllotment">Bed Allotment</Link>
                <Link to="/bed">Bed</Link>
                <Link to="/report">Report</Link>
                <Link to="/diagnosticReport">Diagnostic Report</Link>
                <Link to="/noticeboard">Noticeboard</Link>
                <div className='divider'></div>
                <div className='text-2xl text-amber-300'>Administrative & Billing:</div>
                <Link to="/accountant">Accountant</Link>
                <Link to="/invoice">Invoice</Link>
                

            </div>
        </div>
    );
};

export default Sidebar;
