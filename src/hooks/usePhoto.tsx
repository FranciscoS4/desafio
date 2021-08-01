import { useState } from "react";
import { api } from "../services/api";

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

type getPhotosProps = {
  limit: number;
  page: number;
}

function usePhotos() {

  const [loading, setLoading] = useState<boolean>(false)

  const [photos, setPhotos] = useState<Photo[]>([]);

  const getCurrentPage = ({ limit, page }: getPhotosProps) => {
    const currentPage = ((page - 1) * limit) <= 0
      ? 0 : ((page - 1) * limit);
    return currentPage;
  }

  const getPhotos = async ({ limit, page }: getPhotosProps) => {
    setLoading(true)
    const currentPage = getCurrentPage({ limit, page });

    const { data } = await api.get(`albums/1/photos?_start=${currentPage}&_limit=${limit}`);
    setPhotos(data as Photo[]);
    setLoading(false)
  }

  return {
    getPhotos,
    photos,
    loading
  }
}

export default usePhotos;
