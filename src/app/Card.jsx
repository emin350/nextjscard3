import numToStars from './numToStars';
import { BsCameraVideo } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';

const Card = ({ list }) => {
  return (
    <div> 
      <div className="shadow-lg rounded-lg grid justify-items-center ">
        {/* image */}
     
    
        <img
          className=" rounded-full  w-36 h-36 object-cover"
          src={list.img}
          alt=""
        /> 
        <button className=" bg-gray text-black py-1 px-4 border border-gray rounded-full shadow text-xs">
          Çevrim içi
        </button>
    
     
         <div className="p-3">
          {/* Stars */}
          <div className="flex justify-center text-2xl font-bold text-gray-dark">
            {numToStars(list.stars)}
          </div>

          {/* Name */}
          <p className="text-l font-bold text-slate-700 flex justify-center m-2">
            {list.name}
          </p>

          {/* Description */}
          <div className="text-xs text-slate-700 mb-3 flex justify-center">
            {list.desc}
          </div>

          {/* icons */}
          <div className="flex justify-center mx-3 ">
            <div className="flex text-s text-gray-dark mb-3 mx-1">
              {' '}
              <BsCameraVideo className="m-1" /> {list.camera}
            </div>
            <div className="flex text-s  text-gray-dark mb-3 mx-1">
              {' '}
              <BsTelephone className="m-1" /> {list.tel}
            </div>
            <div className="flex text-s text-gray-dark mb-3 mx-1">
              {' '}
              <GrLanguage className="m-1" /> {list.lang}
            </div>
          </div>

          {/* Skills */}
          <div>
            <button className=" bg-gray  hover:bg-white text-gray-dark py-1rem px-3 border border-gray rounded-full shadow m-1">
              {list.skill1}
            </button>
            <button className=" bg-gray hover:bg-white text-gray-dark py-1rem px-4 border border-gray rounded-full shadow m-1">
              {list.skill2}
            </button>
            <button className=" bg-gray hover:bg-white text-gray-dark py-1rem px-4 border border-gray rounded-full shadow m-1">
              {list.skill3}
            </button>
            <button className=" bg-gray hover:bg-white text-gray-dark py-1rem px-4 border border-gray rounded-full shadow m-1">
              {list.skill4}
            </button>
            <button className=" bg-gray hover:bg-white text-gray-dark py-1rem px-4 border border-gray rounded-full shadow m-1">
              {list.skill5}
            </button>
          </div>
        </div>

        {/* Eğitim sertifikaları */}
        <h3 className="text-l font-bold text-slate-500 mb-3 flex justify-center">
          Eğitim ve Sertifikaları Gör{' '}
        </h3>

        <br />
        <hr className="text-l font-bold" />

        {/* Price */}
        <h3 className="flex justify-center">
          <b className='text-gray-dark '>{list.price} </b>
          <span className="text-s text-slate-700 mb-3 flex justify-center px-3">
            (Minumum Tutar)
          </span>
        </h3>

        <button className="bg-green hover:bg-gray hover:text-black text-white py-2 px-7 border border-gray rounded-full shadow m-3 w-full ">
          Hemen Başla
        </button>
      </div>
    </div>
  );
};

export default Card;
