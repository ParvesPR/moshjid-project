import banner1 from '../../../assests/images/banner1.jpg';
import banner2 from '../../../assests/images/banner2.jpg';
import banner3 from '../../../assests/images/banner3.jpg';
import banner4 from '../../../assests/images/banner4.jpg';
import kalema from '../../../assests/images/kalema.png';
import NavBar from '../../Shared/NavBar/NavBar';
import Loading from '../../Shared/Loading';
import { useQuery } from 'react-query';
import SingleBanner from './SingleBanner';

const Banner = () => {
  const { data: sliderData, isLoading } = useQuery('slider', () =>
    fetch(' http://localhost:5000/slider', {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then(res => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>
  };
  return (
    <>
      <div className='w-full absolute z-10 mt-10 md:mt-14 lg:mt-24'>
        <NavBar></NavBar>
      </div>

      <div>
        {
          sliderData.map(result => <SingleBanner
            key={result._id}
            result={result}
          ></SingleBanner>)
        }
      </div>

    </>
  );
};

export default Banner;