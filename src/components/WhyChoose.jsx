function WhyChoose() {

  const reasons = [
    {
      title:"Creative Design",
      description:
      "Unique premium designs that make your brand different from competitors.",
    },

    {
      title:"Fast Delivery",
      description:
      "Quality projects delivered quickly without compromising performance.",
    },

    {
      title:"Responsive Design",
      description:
      "Websites that look perfect on mobile, tablet and desktop.",
    },

    {
      title:"Premium Support",
      description:
      "Long-term support and assistance even after project completion.",
    },
  ];


  return (

    <section

      style={{
        background:"#0B0B0B",
        color:"white",
        padding:"100px 40px",
      }}

    >


      <h2

        style={{
          textAlign:"center",
          color:"#FFD700",
          fontSize:"48px",
          marginBottom:"20px",
        }}

      >
        Why Choose Vertex Studio?
      </h2>



      <p

        style={{
          textAlign:"center",
          color:"#aaa",
          fontSize:"18px",
          marginBottom:"60px",
        }}

      >
        We create digital experiences that help brands stand out.
      </p>




      <div

        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(260px,1fr))",
          gap:"35px",
          maxWidth:"1200px",
          margin:"auto",
        }}

      >



      {reasons.map((item,index)=>(


        <div

          key={index}

          style={{
            background:"rgba(255,255,255,0.05)",
            padding:"35px",
            borderRadius:"25px",
            border:
            "1px solid rgba(255,215,0,0.2)",
            transition:"0.4s",
            cursor:"pointer",
          }}


          onMouseEnter={(e)=>{

            e.currentTarget.style.transform=
            "translateY(-12px)";

            e.currentTarget.style.boxShadow=
            "0 0 40px rgba(255,215,0,0.3)";

          }}


          onMouseLeave={(e)=>{

            e.currentTarget.style.transform=
            "translateY(0)";

            e.currentTarget.style.boxShadow=
            "none";

          }}

        >


          <h3

            style={{
              color:"#FFD700",
              fontSize:"24px",
              marginBottom:"15px",
            }}

          >
            {item.title}
          </h3>



          <p

            style={{
              color:"#ccc",
              lineHeight:"1.8",
            }}

          >
            {item.description}
          </p>



        </div>


      ))}


      </div>


    </section>

  );

}


export default WhyChoose;