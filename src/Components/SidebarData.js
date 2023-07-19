import React from 'react';
import admin_meds from "../Assets/admin_meds.png"
import Vector from "../Assets/Vector.png"
import quiz from "../Assets/quiz.png"
import note_alt from "../Assets/note_alt (2).png"
const SidebarData = [
  {
    title: "Dashboard",
    icon:Vector,
    link: "/Dashboard",
  },
  {
    title: "Assessment",
    icon:note_alt ,
    link: "/Assessment",
  },
  {
    title: "My Library",
    icon: quiz,
    link: "/MyLibrary",
  },
  {
    title: "Round Status",
    icon: admin_meds,
    link: "/RoundStatus",
  },
];

export default SidebarData;
