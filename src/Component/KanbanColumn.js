// KanbanColumn.js
import React from 'react';
import Card from './Card';



const KanbanColumn = ({ title, tickets }) => {
  return (
    <div >
      <div className='flexC'>
      <div className='imgC'>
     <img className='imageC' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" height={25}  alt="" />
      <h2 className='titleC'>{title}</h2>
      </div>
      <div className='plusC'>
        <h3>+</h3>
        <h3>...</h3>
      </div>
      </div>
      <div>
        {tickets.map(ticket => (
          <Card className="active" key={ticket.id} title={ticket.title} status={ticket.status} priority={ticket.priority} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
