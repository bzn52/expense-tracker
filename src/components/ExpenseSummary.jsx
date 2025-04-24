import React from 'react';

function ExpenseSummary({ expenses }) {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

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
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Expense Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <h3 className="text-lg font-medium mb-2">Total Expenses</h3>
          <p className="text-3xl font-bold">${totalExpenses.toFixed(2)}</p>
          <p className="text-blue-100 mt-2">{expenses.length} transactions</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">By Category</h3>
          <div className="space-y-4">
            {Object.entries(categoryTotals).map(([category, amount]) => (
              <div key={category} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full ${getCategoryColor(category)} flex items-center justify-center`}>
                    {getCategoryIcon(category)}
                  </div>
                  <span className="font-medium text-gray-700 capitalize">{category}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800">${amount.toFixed(2)}</span>
                  <span className="text-sm text-gray-500">
                    ({((amount / totalExpenses) * 100).toFixed(1)}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseSummary; 