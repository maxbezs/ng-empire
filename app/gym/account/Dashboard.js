const Dashboard = ({ children }) => (
  <main className="mx-auto max-w-7xl flex-1 p-4 sm:p-6 lg:p-8">
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{children}</div>
  </main>
);

export default Dashboard;
