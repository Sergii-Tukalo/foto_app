import React, { useEffect, useState } from 'react';
import { useContextData } from '../context/ContextPhotos';
import { PhotoType } from '../types/PhotosType';
import { Photo } from './Photo';

export const Favorites = () => {
  const { photos } = useContextData();

  return (
    <div className="flex flex-wrap justify-around">
      {photos.map((item) => {
        if (item.like) {
          return (
            <Photo
              key={item.id}
              item={item}
            />
          );
        }
      })}
    </div>
  );
};
