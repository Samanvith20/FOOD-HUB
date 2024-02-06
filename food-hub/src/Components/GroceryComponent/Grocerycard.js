// Grocerycard.js
import React from 'react';
import { CARD_IMG_URL } from '../../utils/Constants';

const Grocerycard = (props) => {
  const { groceryData } = props;
  const { displayName, imageId } = groceryData;

  

  return (
    <div className="relative flex justify-center items-center flex-col flex-wrap w-[160px] p-2">
      <img
        className="w-[100%] h-[100%]  object-cover bg-transparent  rounded-md"
        src={CARD_IMG_URL+imageId}
        alt={displayName}
        
      />
      <div className="absolute bottom-0 left-0 top-full  w-full text-black opacity-80">
        <h2 className="text-xs font-medium sm:text-sm md:text-base lg:text-lg xl:text-xl font-Basis_Grotesque_Pro font-weight-500 text-rgba-2-6-12-75 line-height-16 overflow-hidden overflow-ellipsis whitespace-nowrap overflow-hidden overflow-ellipsis whitespace-nowrap sm:overflow-visible md:overflow-visible lg:overflow-visible xl:overflow-visible">
          {displayName}
        </h2>
      </div>
    </div>
  );
};

export default Grocerycard;
