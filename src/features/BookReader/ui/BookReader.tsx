import { FC, useState } from 'react'
import { ReactReader } from 'react-reader'

interface Props {
  url: string;
}

const BookReader: FC<Props> = ({ url }) => {
  const [location, setLocation] = useState<string | number>(0)
  
  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        // url="http://localhost:4000/Pax_%20War%20and%20Peace%20in%20Rome's%20Golden%20Age%20by%20Tom%20Holland.epub"
        url={url}
        location={location}
        locationChanged={(epubcfi: string) => setLocation(epubcfi)}
      />
    </div>
  )
}

export default BookReader