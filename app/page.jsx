import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className ="w-fill flex-center flex-col">
        <h1 className='head_text text-center'>
            Discover & Share
            <br className='max-md:hidden' /> 
            <span className='orange_gradient'>AI-Powered Prompts</span>
            {/* To break the line on mobile, but not on desktop. max-md:hidden means that it will be hidden for all screen sizes upto "medium" size and for others it would be visible */}
        </h1>
        <p className='desc text-center'>
        Promptopia is an open-source AI prompting 
        tool for modern world to discover, create 
        share creative prompts
        </p>

        <Feed />
    </section>
  )
}

export default Home
