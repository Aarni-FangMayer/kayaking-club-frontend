import React from 'react'
import StaticLayoutSingle from '../../components/layouts/staticLayoutSingle/StaticLayoutSingle'
import CardList from "../../components/lists/CardList";
import TextBlockWithHighlights from "../../components/shared/TextBlockWithHighlights";
import ProfileEditor from "../../components/shared/ProfileEditor";
import "./admin.css";
import AvatarImage from '../../assets/images/avatar.png'

const Admin = () => {
    const allRoutes = [
    {
      id: 1,
      title: "Tour adventure #1",
      data: "12 jan",
    },
    {
      id: 2,
      title: "Tour adventure #2",
      data: "1 okt",
    },
    {
      id: 3,
      title: "Tour adventure #3",
      data: "24 sep",
    },
    {
      id: 4,
      title: "Tour adventure #4",
      data: "3 mar",
    },
  ];

  return (
    <StaticLayoutSingle>
            <div className="account">
        <div className="account__user">
          <TextBlockWithHighlights
            title={"Hello, Name Name"}
            subtitle={"Welcome to admin page"}
            describtion={
              "Here you can change your personal information, see all upcoming expeditions, write new posts to blog and add extra routes to booking. As a registered River Pulse member, you can also comment on blog posts and interact with other users in the comments."
            }
            highlight={""}
            addRouteBtnText={"Add routes"}
            addPostBtnText={"Write a post"}
          />
          <ProfileEditor avatarImg={AvatarImage} />
        </div>
        <div className="account__bookings">
          <CardList
            header={"All Upcoming Expeditions"}
            arr={allRoutes}
            subtitle={"expedition"}
          />
        </div>
      </div>
    </StaticLayoutSingle>
  )
}

export default Admin

