import "../styles/Stats.css";
import {
  FiAward,
  FiZap,
  FiSmartphone,
  FiHeadphones,
} from "react-icons/fi";

function Stats() {

  const stats = [

    {
      icon:<FiAward />,
      number:"Premium",
      title:"Quality Design",
    },

    {
      icon:<FiZap />,
      number:"Fast",
      title:"Delivery",
    },

    {
      icon:<FiSmartphone />,
      number:"100%",
      title:"Responsive",
    },

    {
      icon:<FiHeadphones />,
      number:"24/7",
      title:"Support",
    },

  ];

  return (

<section className="stats">

<div className="red-grid"></div>

<div className="red-blur blur-one"></div>
<div className="red-blur blur-two"></div>

<div className="stats-wrapper">

<div className="stats-grid">

{

stats.map((item,index)=>(

<div
className="stats-card"
key={index}
>

<div className="stats-icon">

{item.icon}

</div>

<h2>

{item.number}

</h2>

<p>

{item.title}

</p>

<div className="stats-line"></div>

</div>

))

}

</div>

</div>

</section>

  );

}

export default Stats;