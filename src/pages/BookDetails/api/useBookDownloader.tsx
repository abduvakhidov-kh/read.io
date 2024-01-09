import { useState, useEffect } from 'react';
import axios from 'axios';

interface BookDownloader {
  downloadStatus: string;
  error: string | null;
}

const useBookDownloader = (author: string, title: string): BookDownloader => {
  const [downloadStatus, setDownloadStatus] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const downloadBook = async () => {
      try {
        const response = await axios.get<string>(`http://localhost:4000/download?title=${title}${author || `&author=${author}`}`, {
          params: {
            author,
            title,
          },
        });

        setDownloadStatus(response.data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    if (author && title) {
      downloadBook();
    }
  }, [author, title]);

  return { downloadStatus, error };
};

export default useBookDownloader;
