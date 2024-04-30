import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';
const About = () => {
    return (
        <div className="hero bg-[rgb(255, 255, 255)] py-12">
            <div className="hero-content flex-col lg:flex-row h-full">
                <div className='w-1/2 relative'>
                    <img src={person} className="rounded-lg shadow-2xl w-3/4" />
                    <img src={parts} className="max-w-sm rounded-lg shadow-2xl w-2/4 right-5 top-1/2 border-white border-8 absolute" />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-orange-500 font-bold text-xl'>About Us</h1>
                    <h1 className='text-5xl font-semibold'>We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;