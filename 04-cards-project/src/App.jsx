import Card from './components/Card';

const App = () => {

  const jobs = [
    {
      brandLogo: "https://cdn.simpleicons.org/google",
      company: "Google",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/meta",
      company: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
      company: "Amazon",
      datePosted: "3 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/apple",
      company: "Apple",
      datePosted: "5 days ago",
      post: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/netflix",
      company: "Netflix",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Los Angeles, USA"
    },
    {
      brandLogo: "https://imgs.search.brave.com/hFiXXfJD_twoqyiJAg5v21TQINvKLM_GCgGQVlqwypw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDkvTWljcm9zb2Z0/LVN5bWJvbC03MDB4/Mzk0LnBuZw",
      company: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Seattle, USA"
    },
    {
      brandLogo: "https://imgs.search.brave.com/YsgdqBWuJKTJi2mFz2oZ3JZJi6C8Z2ZpMwYpIjfG18g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTU4LzgxMS9zbWFs/bC9vcGVuYWktY2hh/dGdwdC1sb2dvLWlj/b24tZnJlZS1wbmcu/cG5n",
      company: "OpenAI",
      datePosted: "6 days ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/uber",
      company: "Uber",
      datePosted: "10 days ago",
      post: "Backend Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/airbnb",
      company: "Airbnb",
      datePosted: "3 weeks ago",
      post: "Frontend Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/nvidia",
      company: "NVIDIA",
      datePosted: "1 day ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$70/hr",
      location: "Pune, India"
    }
  ];

  return (
    <div className='parent' >
      {jobs.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.company} post={elem.post} tag1={elem.tag1} 
          tag2={elem.tag2} datePosted={elem.datePosted} 
          brandLogo={elem.brandLogo} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App
