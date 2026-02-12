import ProductCard from "../components/ProductCard"


const OurProducts = () => {
  return (
    <div className='mt-10'>
      <ProductCard
        title="Relywa"
        tagline="Smarter Attendance. Smoother Workdays."

        img1="/public/ErpDashbord.png"
        desc1="Get a complete overview of your workforce at a glance. The Relywa admin dashboard gives managers instant access to employee data, attendance insights, and quick actions - all from one powerful control center designed to simplify daily operations."
        view1="Admin View"

        img2="/public/ErpDashbordPhone.jpeg"
        desc2="Start and track workdays in a single tap. With Relywa's mobile punch-in system, employees can log their shifts instantly while managers get real-time attendance updates - making workforce tracking seamless and accurate."
        view2="User View"

        img3="/public/ErpLeaveReport.png"
        desc3="Track, filter, and manage employee leave requests with ease. Relywa's leave management system keeps everything organized - from request reasons to approval status - helping HR teams make faster, more informed decisions without paperwork chaos"
        view3="Admin View"

        img4="/public/ErpPhoneRecord2.jpeg"
        desc4="Employees can view their daily attendance records anytime, anywhere. Relywa's mobile interface shows punch-in times, punch-out times, and total hours worked in a clean, easy-to-read format - keeping everyone informed and accountable."
        view4="User View"
      />



      <ProductCard
        title="Merutix"
        tagline="Hospitality at Your Fingertips."
        reverse

        img1="/public/BmaFrontSs.png"
        desc1="A centralized hotel operations dashboard that gives staff a real-time snapshot of check-ins, room occupancy, and room status. From upcoming arrivals to housekeeping alerts, everything is organized in one clean interface to help teams manage daily operations smoothly and efficiently."
        view1="User View"

        img2="/public/BmaBookingDetails.png"
        desc2="A detailed guest booking screen that provides complete reservation information, including stay duration, payment status, booking source, and room details. This view helps staff deliver personalized service while keeping all guest and stay data easily accessible in one place."
        view2="Staff View"

        img3="/public/BmaIncomingDetails.png"
        desc3="An arrivals management screen that allows front desk staff to track upcoming reservations, view guest details, and perform quick check-ins. With booking sources, payment status, and stay dates clearly displayed, managing guest arrivals becomes fast and error-free."
        view3="User View"

        img4="/public/BmaMyTask.png"
        desc4="A task management interface designed for hotel staff to handle service requests, housekeeping duties, and guest needs in real time. Staff can track task progress, view locations, and mark jobs as completed, ensuring faster response times and better guest satisfaction."
        view4="Staff View"
        />
    </div>
  )
}

export default OurProducts














