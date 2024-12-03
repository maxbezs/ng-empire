import ClassesSection from '../components/account/ClassesSection';
import Header from '../components/account/Header';
import NotificationsSection from '../components/account/NotificationsSection';
import PaymentSection from '../components/account/PaymentSection';
import PersonalDataSection from '../components/account/PersonalDataSection';
import PersonalTrainingSessionSection from '../components/account/PersonalTrainingSessionSection';
import QRCodeSection from '../components/account/QRCodeSection';
import VisitHistory from '../components/account/VisitHistory';

const Dashboard = ({ memberData, onLogout }) => (
  <div className="flex min-h-screen flex-col bg-gray-100">
    <Header memberData={memberData} onLogout={onLogout} />
    <main className="mx-auto max-w-7xl flex-1 p-4 sm:p-6 lg:p-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <QRCodeSection data={memberData} />
        <PaymentSection memberData={memberData} />
        <NotificationsSection memberData={memberData} />
        <PersonalTrainingSessionSection />
        <PersonalDataSection memberData={memberData} />
        <ClassesSection memberData={memberData} />
        <VisitHistory />
      </div>
    </main>
  </div>
);

export default Dashboard;
