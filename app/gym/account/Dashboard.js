import ClassesSection from './ClassesSection';
import Header from './Header';
import NotificationsSection from './NotificationsSection';
import PaymentSection from './PaymentSection';
import PersonalDataSection from './PersonalDataSection';
import QRCodeSection from './QRCodeSection';
import VisitHistory from './VisitHistory';

const Dashboard = ({ memberData, onLogout }) => (
  <div className="flex min-h-screen flex-col bg-gray-100">
    <Header memberData={memberData} onLogout={onLogout} />
    <main className="mx-auto max-w-7xl flex-1 p-4 sm:p-6 lg:p-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <QRCodeSection memberData={memberData} />
        <PaymentSection memberData={memberData} />
        <PersonalDataSection memberData={memberData} />
        <ClassesSection memberData={memberData} />
        <NotificationsSection memberData={memberData} />
        <VisitHistory />
      </div>
    </main>
  </div>
);

export default Dashboard;
