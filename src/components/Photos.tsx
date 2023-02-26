import React from 'react';
import { useContextData } from '../context/ContextPhotos';
import { Photo } from './Photo';
import { Search } from './Search';
import { Spinner } from './Spinner';

export const Photos = () => {
  const { loading, photos, inputValue } = useContextData();

  return (
    <>
      {loading && <Spinner />}
      <Search />
      <div className="flex flex-wrap justify-around">
        {photos.map((item) => {
          if (item.title.includes(inputValue)) {
            return (
              <Photo
                key={item.id}
                item={item}
              />
            );
          }
        })}
      </div>
    </>
  );
};
