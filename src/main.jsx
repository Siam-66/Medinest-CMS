import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout'
import Doctor from './Doctor/Doctor';
import Patient from './Patient/Patient';
import Department from './Department/Department';
import DepartmentList from './Department/DepartmentList';
import AddDepartment from './Department/AddDepartment';
import Patientlist from './Patient/Patientlist';
import Addpatient from './Patient/Addpatient';
import DoctorList from './Doctor/DoctorList';
import AddDoctor from './Doctor/AddDoctor';
import Nurse from './Nurse/Nurse';
import AddNurse from './Nurse/AddNurse';
import NurseList from './Nurse/NurseList';
import Pharmacist from './Pharmacist/Pharmacist';
import PharmacistList from './Pharmacist/PharmacistList';
import AddPharmacist from './Pharmacist/AddPharmacist';
import Laboratorist from './Laboratorist/Laboratorist';
import LaboratoristList from './Laboratorist/LaboratoristList';
import AddLaboratorist from './Laboratorist/AddLaboratorist';
import Accountant from './Accountant/Accountant';
import AccountantList from './Accountant/AccountantList';
import AddAccountant from './Accountant/AddAccountant';
import BloodDonor from './Blood Donor/BloodDonor';
import BloodDonorList from './Blood Donor/BloodDonorList';
import AddBloodDonor from './Blood Donor/AddBloodDonor';
import Appointment from './Appointment/Appointment';
import AppointmentList from './Appointment/AppointmentList';
import AddAppointment from './Appointment/AddAppointment';
import Prescription from './Prescription/Prescription';
import PrescriptionList from './Prescription/PrescriptionList';
import AddPrescription from './Prescription/AddPrescription';
import BedAllotment from './BedAllotment/BedAllotment';
import BedAllotmentList from './BedAllotment/BedAllotmentList';
import AddBedAllotment from './BedAllotment/AddBedAllotment';
import Bed from './Bed/Bed';
import BedList from './Bed/BedList';
import AddBed from './Bed/AddBed';
import Report from './Report/Report';
import ReportList from './Report/ReportList';
import AddReport from './Report/AddReport';
import Medicine from './Medicine/Medicine';
import MedicineList from './Medicine/MedicineList';
import AddMedicine from './Medicine/AddMedicine';
import DiagnosticReport from './Diagnostic Report/DiagnosticReport';
import DiagnosticReportList from './Diagnostic Report/DiagnosticReportList';
import AddDiagnosticReport from './Diagnostic Report/AddDiagnosticReport';
import Invoice from './Invoice/Invoice';
import InvoiceList from './Invoice/InvoiceList';
import AddInvoice from './Invoice/AddInvoice';
import Noticeboard from './Noticeboard/Noticeboard';
import NoticeboardList from './Noticeboard/NoticeboardList';
import AddNoticeboard from './Noticeboard/AddNoticeboard';
import Home from './Home/Home';
import ContactUs from './Home/Footer/Contact Us/ContactUs';
import AboutUs from './Home/Footer/About Us/AboutUs';
import PrivacyPolicy from './Home/Footer/Privacy Policy/PrivacyPolicy';
import TermsConditions from './Home/Footer/Term Condition/TermsConditions';
import NavDrawer from './Home/Nav Drawer/NavDrawer';




const router = createBrowserRouter([
  {
    path: "/",
    // for go to home path just change 'Home' with 'Layout'
    element: <Home/>, 
    errorElement:<div className='flex justify-center items-center font-bold h-screen'>this is error page</div>,
    children:[
      
      
      {
        path:"/",
        element:<Home/>
      },

      {
        path:"contactUs",
        element:<ContactUs></ContactUs>
      },

      {
        path:"aboutUs",
        element:<AboutUs></AboutUs>
      },

      {
        path:"privacyPolicy",
        element:<PrivacyPolicy></PrivacyPolicy>
      },


      {
        path:"termsConditions",
        element:<TermsConditions></TermsConditions>
      },

      {
        path:"navDrawer",
        element:<NavDrawer></NavDrawer>
      },


    {
      path:"/doctor",
      element: <div className=' p-5 w-full h-full' > <Doctor></Doctor></div>, 
      children:[
        {
          path:"",
          element:<DoctorList></DoctorList>
        },
        {
            path:"doctorList",
            element:<DoctorList></DoctorList>
        }
        ,
        {
          path:"addDoctor",
          element:<AddDoctor></AddDoctor>
        }
      ]
    },

    {
      path:"/nurse",
      element: <div className=' p-5 w-full h-full' > <Nurse></Nurse> </div>, 
      children:[
        {
          path:"",
          element:<NurseList></NurseList>
        },
        {
            path:"nurseList",
            element:<NurseList></NurseList>
        },
        {
          path:"addNurse",
          element:<AddNurse></AddNurse>
        }
      ]
    },

    {
      path:"/pharmacist",
      element: <div className=' p-5 w-full h-full' > <Pharmacist></Pharmacist> </div>, 
      children:[
        {
          path:"",
          element:<PharmacistList></PharmacistList>
        },
        {
            path:"pharmacistList",
            element:<PharmacistList></PharmacistList>
        },
        {
          path:"addPharmacist",
          element:<AddPharmacist></AddPharmacist>
        }
      ]
    },

    {
      path:"/appointment",
      element: <div className=' p-5 w-full h-full' > <Appointment></Appointment> </div>, 
      children:[
        {
          path:"",
          element:<AppointmentList></AppointmentList>
        },
        {
            path:"appointmentList",
            element:<AppointmentList></AppointmentList>
        },
        {
          path:"addAppointment",
          element:<AddAppointment></AddAppointment>
        }
      ]
    },

    {
      path:"/bloodDonor",
      element: <div className=' p-5 w-full h-full' > <BloodDonor></BloodDonor> </div>, 
      children:[
        {
          path:"",
          element:<BloodDonorList></BloodDonorList>
        },
        {
            path:"bloodDonorList",
            element:<BloodDonorList></BloodDonorList>
        },
        {
          path:"addBloodDonor",
          element:<AddBloodDonor></AddBloodDonor>
        }
      ]
    },

    {
      path:"/bedAllotment",
      element: <div className=' p-5 w-full h-full' > <BedAllotment></BedAllotment> </div>, 
      children:[
        {
          path:"",
          element:<BedAllotmentList></BedAllotmentList>
        },
        {
            path:"bedAllotmentList",
            element:<BedAllotmentList></BedAllotmentList>
        },
        {
          path:"addBedAllotment",
          element:<AddBedAllotment></AddBedAllotment>
        }
      ]
    },

    {
      path:"/bed",
      element: <div className=' p-5 w-full h-full' > <Bed></Bed> </div>, 
      children:[
        {
          path:"",
          element:<BedList></BedList>
        },
        {
            path:"bedList",
            element:<BedList></BedList>
        },
        {
          path:"addBed",
          element:<AddBed></AddBed>
        }
      ]
    },

    {
      path:"/medicine",
      element: <div className=' p-5 w-full h-full' > <Medicine></Medicine> </div>, 
      children:[
        {
          path:"",
          element:<MedicineList></MedicineList>
        },
        {
            path:"medicineList",
            element:<MedicineList></MedicineList>
        },
        {
          path:"addMedicine",
          element:<AddMedicine></AddMedicine>
        }
      ]
    },

    {
      path:"/diagnosticReport",
      element: <div className=' p-5 w-full h-full' > <DiagnosticReport></DiagnosticReport> </div>, 
      children:[
        {
          path:"",
          element:<DiagnosticReportList></DiagnosticReportList>
        },
        {
            path:"diagnosticReportList",
            element:<DiagnosticReportList></DiagnosticReportList>
        },
        {
          path:"addDiagnosticReport",
          element:<AddDiagnosticReport></AddDiagnosticReport>
        }
      ]
    },

    {
      path:"/invoice",
      element: <div className=' p-5 w-full h-full' > <Invoice></Invoice> </div>, 
      children:[
        {
          path:"",
          element:<InvoiceList></InvoiceList>
        },
        {
            path:"invoiceList",
            element:<InvoiceList></InvoiceList>
        },
        {
          path:"addInvoice",
          element:<AddInvoice></AddInvoice>
        }
      ]
    },

    {
      path:"/noticeboard",
      element: <div className=' p-5 w-full h-full' > <Noticeboard></Noticeboard> </div>, 
      children:[
        {
          path:"",
          element:<NoticeboardList></NoticeboardList>
        },
        {
            path:"noticeboardList",
            element:<NoticeboardList></NoticeboardList>
        },
        {
          path:"addNoticeboard",
          element:<AddNoticeboard></AddNoticeboard>
        }
      ]
    },


    {
      path:"/report",
      element: <div className=' p-5 w-full h-full' > <Report></Report> </div>, 
      children:[
        {
          path:"",
          element:<ReportList></ReportList>
        },
        {
            path:"reportList",
            element:<ReportList></ReportList>
        },
        {
          path:"addReport",
          element:<AddReport></AddReport>
        }
      ]
    },

    {
      path:"/prescription",
      element: <div className=' p-5 w-full h-full' > <Prescription></Prescription> </div>, 
      children:[
        {
          path:"",
          element:<PrescriptionList></PrescriptionList>
        },
        {
            path:"prescriptionList",
            element:<PrescriptionList></PrescriptionList>
        },
        {
          path:"addPrescription",
          element:<AddPrescription></AddPrescription>
        }
      ]
    },

    {
      path:"/accountant",
      element: <div className=' p-5 w-full h-full' > <Accountant></Accountant> </div>, 
      children:[
        {
          path:"",
          element:<AccountantList></AccountantList>
        },
        {
            path:"accountantList",
            element:<AccountantList></AccountantList>
        },
        {
          path:"addAccountant",
          element:<AddAccountant></AddAccountant>
        }
      ]
    },

    {
      path:"/laboratorist",
      element: <div className=' p-5 w-full h-full' > <Laboratorist></Laboratorist> </div>, 
      children:[
        {
          path:"",
          element:<LaboratoristList></LaboratoristList> 
        },
        {
            path:"laboratoristList",
            element:<LaboratoristList></LaboratoristList>
        },
        {
          path:"addLaboratorist",
          element:<AddLaboratorist></AddLaboratorist>
        }
      ]
    },


    
    {
      path:"/patient",
      element: <div className=' p-5 w-full h-full'><Patient></Patient></div>,
      children:[
        {
          path:"",
          element:<Patientlist></Patientlist>
        },
        {
            path:"patientList",
            element:<Patientlist></Patientlist>
        }
        ,
        {
          path:"AddPatient",
          element:<Addpatient></Addpatient>
        }
      ]
    },
    
    {
      path:"/department",
      element: <div className=' p-5 w-full h-full' ><Department></Department></div>,
      children:[
        {
          path:"",
          element:<DepartmentList></DepartmentList>
        },
        {
          path:"departmentList",
          element:<DepartmentList></DepartmentList>
        },
        {
          path:"addDepartment",
          element:<AddDepartment></AddDepartment>
        }
      ]
    }
    
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}>
  
</RouterProvider>

  </StrictMode>,
)
