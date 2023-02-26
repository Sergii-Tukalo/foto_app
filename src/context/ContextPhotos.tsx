import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { PhotoType } from '../types/PhotosType';

type ContextProps = {
  loading: boolean;
  photos: PhotoType[];
  inputValue: string;
  likeHandler: (id: number) => void;
  inputHandler: () => void;
};

export const ContextPhotos = createContext<ContextProps>({} as ContextProps);

export const ContextPhotosProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  let [photos, setPhotos] = useState<PhotoType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  let [inputValue, setInputValue] = useState<string>('');

  const getPhotos = async () => {
    setLoading(true);
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/photos?albumId=1'
    );
    const data = await res.json();
    data.map((item: PhotoType) => {
      item.like = false;
      return setPhotos(data);
    });

    setLoading(false);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  photos = localStorage.getItem('allPhotos')
    ? JSON.parse(localStorage.getItem('allPhotos') || '')
    : photos;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    localStorage.setItem('search', JSON.stringify(e.target.value));
  };

  inputValue = localStorage.getItem('search')
    ? JSON.parse(localStorage.getItem('search') || '')
    : inputValue;

  const likeHandler = (id: number) => {
    let index = photos.findIndex((item) => item.id === id);

    let newItem = photos[index];
    newItem.like = !newItem.like;

    setPhotos([...photos.slice(0, index), newItem, ...photos.slice(index + 1)]);

    localStorage.setItem('allPhotos', JSON.stringify(photos));
  };

  const value = { loading, photos, inputValue, likeHandler, inputHandler };

  return (
    <ContextPhotos.Provider value={value}>{children}</ContextPhotos.Provider>
  );
};

export const useContextData = () => useContext(ContextPhotos);
