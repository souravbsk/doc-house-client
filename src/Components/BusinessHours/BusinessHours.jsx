import React from 'react';

const BusinessHours = ({businessHours}) => {
  
    return (
        <div>
            <ul className='space-y-2 font-semibold'>
                {
                    Object.keys(businessHours).map(day => {
                       return <li key={day}>
                            {day} : {businessHours[day]}
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default BusinessHours;