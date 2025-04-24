import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Expense Tracker</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all hover:scale-[1.02] duration-300">
              <ExpenseForm onAddExpense={addExpense} />
            </div>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all hover:scale-[1.02] duration-300">
              <ExpenseSummary expenses={expenses} />
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all hover:scale-[1.02] duration-300">
              <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
