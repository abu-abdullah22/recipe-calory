const Banner = () => {
    return (
        <div className="mt-12 bg-[url('../src/assets/images/banner.png')] bg-no-repeat h-[680px] bg-cover bg-center container mx-2 md:mx-auto rounded-[24px] flex items-center justify-center flex-col space-y-5">
            <h2 className="text-5xl text-center text-white md:w-[897px]">Discover an exceptional cooking class tailored for you!</h2>  
            <p className="text-white md:w-[897px] text-center">Discover diverse cuisines, easy-to-follow recipes, and culinary inspiration on our comprehensive recipe website. Cooking made delightful, every time.</p>  

            <div className="space-x-6">
                <button className="btn bg-[#0BE58A] text-xl font-semibold text-[#150B2B] border-none rounded-[50px]">Explore Now</button>
                <button className="btn btn-ghost text-xl font-semibold text-white border-2 border-white rounded-[50px]">Our Feedback</button>    
            </div>        
        </div>
    );
};

export default Banner;