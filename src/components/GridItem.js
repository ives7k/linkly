import React from 'react';

const GridItem = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col bg-white items-center p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 group">
      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-xl font-bold mb-3 text-center text-gray-800">{title}</h2>
      <p className="text-center text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default GridItem;
