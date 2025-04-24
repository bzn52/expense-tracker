import React from 'react';

function ExpenseList({ expenses, onDeleteExpense }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      food: 'bg-green-100 text-green-800',
      transportation: 'bg-blue-100 text-blue-800',
      entertainment: 'bg-purple-100 text-purple-800',
      utilities: 'bg-yellow-100 text-yellow-800',
      shopping: 'bg-pink-100 text-pink-800',
      other: 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors.other;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      food: '🍽️',
      transportation: '🚗',
      entertainment: '🎮',
      utilities: '💡',
      shopping: '🛍️',
      other: '📝'
    };
    return icons[category] || icons.other;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Expenses</h2>
      {expenses.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📝</div>
          <p className="text-gray-500">No expenses added yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {expenses.map(expense => (
            <div
              key={expense.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition duration-200 transform hover:scale-[1.01] border border-gray-100 overflow-hidden"
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full ${getCategoryColor(expense.category)} flex items-center justify-center text-xl`}>
                    {getCategoryIcon(expense.category)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{expense.description}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(expense.category)}`}>
                        {expense.category}
                      </span>
                      <span className="text-sm text-gray-500">{formatDate(expense.date)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-gray-800">${expense.amount.toFixed(2)}</span>
                  <button
                    onClick={() => onDeleteExpense(expense.id)}
                    className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 focus:outline-none transition duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList; 