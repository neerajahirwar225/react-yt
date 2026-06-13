
import Section1 from './components/section1/Section1'
import Section2 from './Section2'

const App = () => {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      intro: "Frontend Developer with 3 years of React experience.",
      tag: "Satisfied",
      color:"orange",
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      intro: "UI/UX Designer focused on creating modern interfaces.",
      tag: "Underserved",
      color:"lightseagreen",
    },
    {
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      intro: "Backend Engineer specializing in Node.js and databases.",
      tag: "Underbanked",
      color:"black",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "Frontend Engineer specializing in React.js and tailwind css.",
      tag: "Average",
      color:"royalblue",
    },
  ];
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App