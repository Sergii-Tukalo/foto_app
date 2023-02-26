import React from 'react';
import { useContextData } from '../context/ContextPhotos';
import { Photo } from './Photo';
import { Search } from './Search';
import { Spinner } from './Spinner';

export const Photos = () => {
  const { loading, photos, inputValue } = useContextData();

  return (
    <>
      <Search />
      <div className="flex flex-wrap justify-around">
        {loading ? (
          <Spinner />
        ) : (
          photos.map((item) => {
            if (item.title.includes(inputValue)) {
              return (
                <Photo
                  key={item.id}
                  item={item}
                />
              );
            }
          })
        )}
      </div>
    </>
  );
};
