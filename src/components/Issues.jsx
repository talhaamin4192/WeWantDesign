
import React, {useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
const Issues = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up the canvas background or any drawing if needed
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Example: Fill canvas with a light gray background
    ctx.fillStyle = '#f9f9f9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  // Function to generate random positions within the canvas
  const randomTranslate = (element) => {
    const canvas = canvasRef.current;
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;

    const randomX = Math.random() * (canvasWidth - element.offsetWidth);
    const randomY = Math.random() * (canvasHeight - element.offsetHeight);

    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  return (
    <>
      <div className='z-20 w-full h-[120vh] px-4 pt-20 bg-white rounded-b-45 font-GTWalsheimPro overflow-hidden'>
        <div className='relative flex flex-col items-center gap-12 size-full' >
          <h1 className='text-6xl text-black'>Tired of these <span className=' bg-text bg-h'>issues</span></h1>
          <div className='grid grid-cols-3 text-center px-8 py-4 rounded-xl text-18 bg-white-2 [&>*]:px-10 [&>*]:py-3 [&>*]:rounded-xl ' >
            <Link to='/' className='focus:bg-purple-1 ' >Agency</Link>
            <Link to='/' className='focus:bg-purple-1' >In-house Designer</Link>
            <Link to='/' className='focus:bg-purple-1' >Freelancers</Link>
          </div>
          <div className="w-8/12 mt-96">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute z-0 w-8/12 left-16 -top-1/2"></canvas>

      {/* H2 Elements */}
      <div className="absolute top-0 left-0 w-8/12 mt-96 [&>*]:py-4 [&>*]:px-6 [&>*]:rounded-full text-18 [&>*]:inline-block z-10">
        {[
          { text: 'Lack of personality & attention', color: 'bg-customOrange text-white' },
          { text: 'Strict contracts and scopes', color: 'bg-black text-white' },
          { text: 'Slow decision-making', color: 'bg-black text-white' },
          { text: 'Lackluster delivery', color: 'bg-neon' },
          { text: 'Inconsistent team members', color: 'bg-neon' },
          { text: 'Limited transparency', color: 'bg-light-blue' },
          { text: 'Cookie-cutter solutions', color: 'bg-customOrange text-white' },
          { text: 'High overhead costs', color: 'bg-purple-1 text-white' },
          { text: 'Stiff workflow and processes', color: 'bg-light-blue' },
        ].map(({ text, color }, index) => (
          <h2
            key={index}
            className={`${color} transition-transform duration-500 ease-out`}
            onMouseEnter={(e) => randomTranslate(e.target)}
          >
            {text}
          </h2>
        ))}
      </div>
    </div>
        </div>
      </div>
    </>
  )
}

export default Issues