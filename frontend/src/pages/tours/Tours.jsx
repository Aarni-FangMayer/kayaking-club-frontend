import React, { useState }  from 'react'
import StaticLayout from '../../components/layouts/staticLayout/StaticLayout'
import ScrollLayout from '../../components/layouts/scrollLayout/ScrollLayout'
import MobileScrollLayout from '../../components/layouts/mobileScrollLayout/MobileScrollLayout'
import useIsMobile from '../../hooks/useIsMobile'
import ChooseRouteSection from './page_sections/ChooseRouteSection'
import SingleDayRouteSection from './page_sections/SingleDayRouteSection'
import MultiDayRouteSection from './page_sections/MultiDayRouteSection'
import CustomRouteSection from './page_sections/CustomRouteSection'

const Tours = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useIsMobile(1024);

  return (
    <StaticLayout>
      {isMobile ? (
        <MobileScrollLayout
          sectionOne={<ChooseRouteSection />}
          sectionTwo={<SingleDayRouteSection />}
          sectionThree={<MultiDayRouteSection />}
          sectionFour={<CustomRouteSection />}
        />
      ) : (
        <ScrollLayout
          sectionOne={<ChooseRouteSection setModalOpen={setModalOpen} />}
          sectionTwo={<SingleDayRouteSection setModalOpen={setModalOpen} />}
          sectionThree={<MultiDayRouteSection setModalOpen={setModalOpen} />}
          sectionFour={<CustomRouteSection />}
          modalOpen={modalOpen}
        />
      )}
    </StaticLayout>
  )
}

export default Tours
