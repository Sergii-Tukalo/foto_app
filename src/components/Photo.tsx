import React, { useState } from 'react';
import { useContextData } from '../context/ContextPhotos';
import { PhotoType } from '../types/PhotosType';

type PhotoProps = {
  item: PhotoType;
};

export const Photo = ({ item: { title, url, like, id } }: PhotoProps) => {
  const { likeHandler } = useContextData();
  return (
    <div className="my-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={url}
          alt={title}
        />
      </a>
      <div className="flex flex-col p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title[0].toUpperCase() + title.slice(1)}
          </h5>
        </a>
        <button
          onClick={() => likeHandler(id)}
          className="self-end bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          <i className="fas fa-heart"></i> {like ? 'liked' : 'like'}
        </button>
      </div>
    </div>
  );
};
