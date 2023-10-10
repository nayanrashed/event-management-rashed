import team from '../../assets/team.jpg'

const About = () => {
    return (
        <div className="w-full bg-gray-200 px-16">
            <h2 className="text-center font-semibold text-2xl py-4">About Us</h2>
        <img className='w-full' src={team} alt="" />
            <p className='py-4'> <span className='font-semibold'>Team blackDot</span> is a leading corporate event management company renowned for its unparalleled expertise in creating seamless and impactful corporate experiences. With a sharp focus on innovation and attention to detail, BlackDot Events specializes in organizing bespoke corporate events, conferences, product launches, and seminars tailored to meet the unique needs of businesses. Their team of skilled professionals combines creativity and strategic planning to deliver exceptional events that leave a lasting impression. From concept development to flawless execution, BlackDot Events is committed to transforming visions into extraordinary corporate events, ensuring every detail is a testament to perfection and professionalism.</p>
        </div>
    );
};

export default About;