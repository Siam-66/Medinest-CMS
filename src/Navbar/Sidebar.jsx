
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
           
            <div className='flex flex-col gap-5 w-[150px] '>
                <Link to="/doctor">Doctor</Link>
                <Link to="/patient">Patient</Link>
                <Link to="/department">Department</Link>
                <Link to="/nurse">Nurse</Link>
                <Link to="/pharmacist">Pharmacist</Link>
                <Link to="/laboratorist">Laboratorist</Link>
                <Link to="/accountant">Accountant</Link>
                <Link to="/bloodDonor">Blood Donor</Link>
                <Link to="/appointment">Appointment</Link>
                <Link to="/prescription">Prescription</Link>
                <Link to="/bedAllotment">Bed Allotment</Link>
                <Link to="/bed">Bed</Link>
                <Link to="/report">Report</Link>
                <Link to="/medicine">Medicine</Link>
                <Link to="/diagnosticReport">Diagnostic Report</Link>
                <Link to="/invoice">Invoice</Link>
                <Link to="/noticeboard">Noticeboard</Link>
            </div>
        </div>
    );
};

export default Sidebar;
