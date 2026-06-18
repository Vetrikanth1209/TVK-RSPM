import vijay from "../../assets/leaders/vijay.jpg";
import anand from "../../assets/leaders/anand.jpg";
import sukumar from "../../assets/leaders/sukumar.jpg";
import senthilnathan from "../../assets/leaders/senthilnathan.jpg";
import lokesh from "../../assets/leaders/lokesh.jpg"
import placeholder from "../../assets/leaders/placeholder.png";

const leadershipData = {
  topLeader: {
    name: "Vijay",
    role: "Founder & President",
    image: vijay,
    description:
      "A visionary leader committed to empowering citizens and building a transparent and people-centric future."
  },

  seniorLeaders: [
    {
      name: "N. Anand",
      role: "General Secretary",
      image: anand
    },
    {
      name: "D. Logesh Tamilselvan",
      role:
        "Party Administrator & Minister of Commercial Taxes, Registration and Stamp Law",
      image: lokesh
    }
  ],

  districtLeaders: [
    {
      name: "Mr. M. Sukumar",
      role: "District Secretary",
      district: "Namakkal East",
      image: sukumar
    },
    {
      name: "Mr. J.J. Senthilnadhan",
      role: "District Secretary",
      district: "Namakkal West",
      image: senthilnathan
    }
  ],

  rasipuramOfficials: [
    {
      name: "Official Name",
      role: "Town Secretary",
      image: placeholder
    },
    {
      name: "Official Name",
      role: "Union Secretary",
      image: placeholder
    },
    {
      name: "Official Name",
      role: "Ward Coordinator",
      image: placeholder
    },
    {
      name: "Official Name",
      role: "Youth Wing",
      image: placeholder
    },
    {
      name: "Official Name",
      role: "Women Wing",
      image: placeholder
    }
  ]
};

export default leadershipData;