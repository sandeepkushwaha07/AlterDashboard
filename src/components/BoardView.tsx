import React from 'react';

interface Column {
  title: string;
  bgColor: string;
  emptyText: string;
}

const BoardView: React.FC = () => {
  const columns: Column[] = [
    {
      title: 'TO-DO',
      bgColor: '#fac3ff',
      emptyText: 'No Tasks in To-Do'
    },
    {
      title: 'IN-PROGRESS',
      bgColor: '#85d9f1',
      emptyText: 'No Tasks In Progress'
    },
    {
      title: 'COMPLETED',
      bgColor: '#a2d6a0',
      emptyText: 'No Completed Tasks'
    }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '25px',
      padding: '20px',
      width: '100%',
      minWidth: '1080px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
      {columns.map((column, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '336px',
            maxWidth: '100%',
            height: '566px',
            backgroundColor: '#f1f1f1',
            borderRadius: '12px',
            border: '1px solid #58575112',
            padding: '12px',
            boxSizing: 'border-box'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                backgroundColor: column.bgColor,
                borderRadius: '4px',
                padding: '4px 10px'
              }}
            >
              <span
                style={{
                  fontFamily: 'Mulish',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '140%',
                  color: '#000000'
                }}
              >
                {column.title}
              </span>
            </div>
          </div>
          
          <div
            style={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <span
              style={{
                fontFamily: 'Mulish',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '140%',
                color: '#2f2f2f',
                textAlign: 'center'
              }}
            >
              {column.emptyText}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoardView;

