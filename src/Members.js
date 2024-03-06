import React from 'react';
import './css/members.css'

const Members = () => {
  const preSavedData = [
    {
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: 'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80',
      name: 'Sara',
      posi: "CEO"
    },
    {
      para: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: 'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80',
      name: 'Sara',
      posi: "Software Developer",
    },
    {
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: 'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80',
        name: 'Sara',
        posi: "Software Developer",
      },
      {
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod temporUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: 'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80',
        name: 'Sara',
        posi: "Software Developer",
      },
      {
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor',
        img: 'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80',
        name: 'Sara',
        posi: "Software Developer",
      },
      {
        para: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: 'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80',
        name: 'Sara',
        posi: "Software Developer",
      }
  ];

  return (
    <div className='mem-main'>
      {preSavedData.map((data, index) => (
        <div className="pre-saved-component" key={index}>
            <p>{data.para}</p>
          <div className="row">
            <img src={data.img} alt={data.name} />
            <div>
            <h4 className="name">{data.name}</h4>
            <p className="name">{data.posi}</p>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
  
};

export default Members;
