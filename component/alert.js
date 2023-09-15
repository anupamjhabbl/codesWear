import React from 'react';

const alert = (props) => {
  return (
    <div>
      {props.alert && <div className="w-[100%] bg-indigo-400 text-white py-2 px-5 rounded-md fixed bottom-0 left-0">Some Error Occured. Please refresh the page.</div>}
    </div>
  );
}

export default alert;
