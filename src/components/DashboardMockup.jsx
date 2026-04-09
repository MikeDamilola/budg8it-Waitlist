const stats = [
  { label: 'Wallet Balance', value: '₦1,150,000' },
  { label: 'Incoming Transactions', value: '₦1,150,000' },
  { label: 'Outgoing Transactions', value: '₦1,150,000' },
  { label: 'Total Sales', value: '12' },
]

const tableRows = [
  { date: '09 Apr 2026', id: 'PMT-1982', sender: 'Antonio Roberto', amount: '₦3,500', status: 'Credit' },
  { date: '09 Apr 2026', id: 'PMT-1983', sender: 'Antonio Roberto', amount: '₦3,500', status: 'Debit' },
  { date: '09 Apr 2026', id: 'PMT-1984', sender: 'Antonio Roberto', amount: '₦3,500', status: 'Credit' },
]

function DashboardMockup() {
  return (
    <div className="mt-10 overflow-x-auto rounded-xl bg-white shadow-md ring-1 ring-slate-200">
      <div className="min-w-[980px]">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="h-6 w-6 rounded-md bg-[#0F172A]" />
            <span className="font-bold text-[#0F172A]">Budg8it</span>
          </div>
          <div className="w-72 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-500">Search transactions...</div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-slate-200" />
            <div className="h-8 w-8 rounded-full bg-slate-300" />
            <span className="text-sm font-medium text-slate-700">Moni Ray (Admin)</span>
          </div>
        </div>

        <div className="grid grid-cols-[220px_1fr]">
          <aside className="border-r border-slate-200 bg-slate-50 p-4">
            <ul className="space-y-3 text-sm font-medium text-slate-700">
              {['Dashboard', 'Products', 'Wallet', 'Receipts', 'Withdrawals', 'Settings'].map((item) => (
                <li key={item} className="rounded-lg px-3 py-2 hover:bg-white">
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <div className="p-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#0F172A]">Welcome Serah</h3>
              <div className="flex gap-3">
                <button className="rounded-full bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white">Create Payment Link</button>
                <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Schedule Funds</button>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
                  <p className="text-xs text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-lg font-bold text-[#0F172A]">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Payment ID</th>
                    <th className="px-4 py-3">Sender</th>
                    <th className="px-4 py-3">Amount</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {tableRows.map((row) => (
                    <tr key={row.id} className="bg-white">
                      <td className="px-4 py-3">{row.date}</td>
                      <td className="px-4 py-3">{row.id}</td>
                      <td className="px-4 py-3">{row.sender}</td>
                      <td className="px-4 py-3">{row.amount}</td>
                      <td className={`px-4 py-3 font-medium ${row.status === 'Credit' ? 'text-emerald-600' : 'text-orange-500'}`}>{row.status}</td>
                      <td className="px-4 py-3">
                        <button className="rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white">Download Receipt</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardMockup
