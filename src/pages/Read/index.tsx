import { BookReader } from "@/features/BookReader"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

const Read = () => {
  const { id } = useParams();
  const [path, setPath] = useState('')

  useEffect(() => {

    const getTitlePath = async () => {
      try {
        const response = await axios.get<string>(`http://localhost:4000/book?title=${id}`)
        setPath(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    getTitlePath()
  }, [])
  
  // useEffect(() => {
  //   const downloadBook = async () => {
  //     try {
  //       const response = await axios.get<string>(`http://localhost:4000/download?title=${state.volumeInfo.title}${state.volumeInfo.author == undefined ? "" : "&author=" + state.volumeInfo.author}`);

  //       setDownloadStatus(response.data);
  //     } catch (error: any) {
  //       setError(error.message);
  //     }
  //   };

  //   if (state.volumeInfo.author || state.volumeInfo.title) {
  //     downloadBook();
  //   }
  // }, []);

  return (
    <BookReader url={"http://localhost:4000/" + path} />
  )
}

export default Read